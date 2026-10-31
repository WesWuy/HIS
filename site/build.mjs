// Zero-dependency static build for humanimprovementsystems.com.
// Pages live in src/pages/*.mjs; each exports { path, title, description, ogImage, body(ui) }.
// Output: dist/ (Netlify publishes this). Run: node build.mjs
import { readdir, rm, mkdir, cp, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { site, layout, ui } from "./src/layout.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(join(root, "public"), dist, { recursive: true });

const pageDir = join(root, "src", "pages");
const files = (await readdir(pageDir)).filter((f) => f.endsWith(".mjs")).sort();
const sitemap = [];

for (const file of files) {
  const page = (await import(pathToFileURL(join(pageDir, file)))).default;
  const html = layout(page, page.body(ui));
  const out = page.path === "/" ? "index.html" : `${page.path.replace(/^\//, "")}.html`;
  await writeFile(join(dist, out), html);
  if (!page.noindex) sitemap.push(page.path);
  console.log(`built ${out}`);
}

const today = new Date().toISOString().slice(0, 10);
await writeFile(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap
    .map((p) => `  <url><loc>${site.url}${p === "/" ? "/" : p}</loc><lastmod>${today}</lastmod></url>`)
    .join("\n")}\n</urlset>\n`
);
// Old sitemap URLs that search engines already know about.
await writeFile(
  join(dist, "sitemap-index.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${site.url}/sitemap.xml</loc></sitemap>\n</sitemapindex>\n`
);
console.log(`sitemap: ${sitemap.length} pages`);
