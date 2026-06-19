/**
 * Human Improvement Systems - Google Apps Script Foundation
 *
 * Purpose:
 * - Create Drive folders
 * - Create HIS Command Center spreadsheet tabs
 * - Create Gmail draft templates
 * - Process Human Improvement Scorecard form responses
 *
 * Setup:
 * 1. Go to script.google.com
 * 2. Create a new Apps Script project
 * 3. Paste this file into Code.gs
 * 4. Update CONFIG values
 * 5. Run setupHISWorkspace()
 */

const CONFIG = {
  rootFolderName: 'HIS',
  spreadsheetName: 'HIS Command Center',
  senderName: 'Captain Wes',
  leadMagnetSubject: 'Your Human Improvement Scorecard',
  bookingLink: 'ADD_BOOKING_LINK_HERE',
};

const DRIVE_FOLDERS = [
  '01_Brand_Bible',
  '02_Content_Ideas',
  '03_Scripts',
  '04_Carousels',
  '05_Reels',
  '06_Posting_Calendar',
  '07_Leads',
  '08_Offers',
  '09_Client_Deliverables',
  '10_Analytics',
];

const SHEET_TABS = {
  'Content Pipeline': [
    'Date', 'Platform', 'Content Type', 'Pillar', 'Hook', 'Script', 'Caption', 'CTA', 'Status', 'Asset Link', 'Posted Link', 'Notes'
  ],
  'Lead Tracker': [
    'Timestamp', 'Name', 'Email', 'Instagram Handle', 'Scorecard Answers', 'AI Summary', 'Lead Score', 'Recommended Offer', 'Follow-Up Status', 'Notes'
  ],
  'Offer Tracker': [
    'Offer Name', 'Price', 'Promise', 'Audience', 'CTA', 'Delivery Method', 'Status'
  ],
  'Prompt Library': [
    'Prompt Name', 'Use Case', 'Prompt', 'Output Format', 'Notes'
  ],
  'Analytics Dashboard': [
    'Metric', 'Value', 'Notes'
  ],
  'Customer Journey': [
    'Stage', 'Goal', 'Touchpoint', 'Automation', 'Owner', 'Status'
  ],
};

function setupHISWorkspace() {
  const root = getOrCreateFolder_(CONFIG.rootFolderName);
  DRIVE_FOLDERS.forEach(name => getOrCreateSubfolder_(root, name));

  const spreadsheet = getOrCreateSpreadsheet_(CONFIG.spreadsheetName);
  createTabs_(spreadsheet);
  seedCustomerJourney_(spreadsheet);
  seedOfferTracker_(spreadsheet);
  createGmailDrafts_();

  Logger.log('HIS workspace setup complete. Spreadsheet: ' + spreadsheet.getUrl());
}

function getOrCreateFolder_(name) {
  const folders = DriveApp.getFoldersByName(name);
  return folders.hasNext() ? folders.next() : DriveApp.createFolder(name);
}

function getOrCreateSubfolder_(parent, name) {
  const folders = parent.getFoldersByName(name);
  return folders.hasNext() ? folders.next() : parent.createFolder(name);
}

function getOrCreateSpreadsheet_(name) {
  const files = DriveApp.getFilesByName(name);
  if (files.hasNext()) {
    return SpreadsheetApp.open(files.next());
  }
  return SpreadsheetApp.create(name);
}

function createTabs_(spreadsheet) {
  Object.keys(SHEET_TABS).forEach(tabName => {
    let sheet = spreadsheet.getSheetByName(tabName);
    if (!sheet) sheet = spreadsheet.insertSheet(tabName);
    sheet.clear();
    sheet.getRange(1, 1, 1, SHEET_TABS[tabName].length).setValues([SHEET_TABS[tabName]]);
    sheet.getRange(1, 1, 1, SHEET_TABS[tabName].length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  });

  const defaultSheet = spreadsheet.getSheetByName('Sheet1');
  if (defaultSheet && spreadsheet.getSheets().length > 1) {
    spreadsheet.deleteSheet(defaultSheet);
  }
}

function seedCustomerJourney_(spreadsheet) {
  const sheet = spreadsheet.getSheetByName('Customer Journey');
  const rows = [
    ['Awareness', 'Attract aligned followers', 'Instagram Reel / Carousel', 'Content Pipeline', 'Wes', 'Active'],
    ['Interest', 'Capture lead', 'Scorecard CTA', 'Google Form', 'Wes', 'Build'],
    ['Insight', 'Deliver personalized report', 'Gmail', 'Apps Script', 'Automation', 'Build'],
    ['Trust', 'Nurture and educate', 'Email sequence', 'Gmail drafts', 'Wes', 'Draft'],
    ['Conversion', 'Book call or sell product', 'Booking link / payment link', 'Manual first', 'Wes', 'Draft'],
    ['Ascension', 'Move buyer to higher offer', 'Follow-up email', 'Lead Tracker', 'Wes', 'Draft'],
  ];
  sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
}

function seedOfferTracker_(spreadsheet) {
  const sheet = spreadsheet.getSheetByName('Offer Tracker');
  const rows = [
    ['Human Improvement Scorecard', 'Free', 'Reveal current bottlenecks and next upgrade path', 'IG followers and cold leads', 'Complete scorecard', 'Google Form + Gmail', 'Active'],
    ['HIS Reset Protocol', '$27-$97', 'A fast reset for discipline, clarity, and energy', 'Low-ticket buyers', 'Buy now', 'PDF/email/course', 'Draft'],
    ['AI Accountability System', '$197-$497', 'Build a personal AI-supported accountability system', 'Action-takers', 'Apply/book', 'Templates + walkthrough', 'Draft'],
    ['8-Week Human Upgrade Protocol', '$997-$3000', 'Personalized transformation with systems and coaching', 'High-intent leads', 'Book call', 'Coaching + AI dashboard', 'Draft'],
  ];
  sheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
}

function createGmailDrafts_() {
  const templates = [
    {
      to: '',
      subject: 'Your Human Improvement Scorecard',
      body: 'Hey {{FirstName}},\n\nYour Human Improvement Scorecard is ready.\n\nYour biggest upgrade opportunity appears to be: {{PrimaryBottleneck}}.\n\nThe next move is not more motivation. It is a better system.\n\nStart here: {{RecommendedNextStep}}\n\n- Captain Wes',
    },
    {
      to: '',
      subject: 'The system behind the score',
      body: 'Hey {{FirstName}},\n\nMost people try to fix themselves with willpower. That fails because willpower is not a system.\n\nHuman Improvement Systems focuses on environment, discipline, energy, clarity, and accountability.\n\nYour next step: {{RecommendedOffer}}\n\n- Captain Wes',
    },
    {
      to: '',
      subject: 'Want help building your upgrade system?',
      body: 'Hey {{FirstName}},\n\nIf you want help turning your scorecard into an actual plan, book a quick call here:\n\n' + CONFIG.bookingLink + '\n\n- Captain Wes',
    },
  ];

  templates.forEach(template => {
    GmailApp.createDraft(template.to, template.subject, template.body, { name: CONFIG.senderName });
  });
}

function onScorecardFormSubmit(e) {
  const spreadsheet = getOrCreateSpreadsheet_(CONFIG.spreadsheetName);
  const leadSheet = spreadsheet.getSheetByName('Lead Tracker');
  const values = e && e.namedValues ? e.namedValues : {};

  const name = getFirstValue_(values, ['Name', 'Full Name', 'First Name']);
  const email = getFirstValue_(values, ['Email', 'Email Address']);
  const instagram = getFirstValue_(values, ['Instagram Handle', 'Instagram']);
  const answers = JSON.stringify(values);
  const summary = generateBasicSummary_(values);
  const leadScore = scoreLead_(values);
  const offer = recommendOffer_(leadScore);

  leadSheet.appendRow([
    new Date(),
    name,
    email,
    instagram,
    answers,
    summary,
    leadScore,
    offer,
    'New',
    ''
  ]);

  if (email) {
    sendLeadMagnetEmail_(email, name, summary, offer);
  }
}

function getFirstValue_(values, keys) {
  for (const key of keys) {
    if (values[key] && values[key][0]) return values[key][0];
  }
  return '';
}

function generateBasicSummary_(values) {
  return 'Initial scorecard received. Review bottlenecks across energy, discipline, focus, stress, and accountability.';
}

function scoreLead_(values) {
  const text = JSON.stringify(values).toLowerCase();
  let score = 50;
  if (text.includes('burnout')) score += 10;
  if (text.includes('discipline')) score += 10;
  if (text.includes('accountability')) score += 10;
  if (text.includes('coaching')) score += 15;
  if (text.includes('ready')) score += 15;
  return Math.min(score, 100);
}

function recommendOffer_(score) {
  if (score >= 85) return '8-Week Human Upgrade Protocol';
  if (score >= 70) return 'AI Accountability System';
  if (score >= 55) return 'HIS Reset Protocol';
  return 'Free nurture sequence';
}

function sendLeadMagnetEmail_(email, name, summary, offer) {
  const firstName = name ? name.split(' ')[0] : 'there';
  const body = `Hey ${firstName},\n\nYour Human Improvement Scorecard has been received.\n\nInitial read:\n${summary}\n\nRecommended next step:\n${offer}\n\nThe next move is not more motivation. It is a better system.\n\n- Captain Wes`;
  GmailApp.sendEmail(email, CONFIG.leadMagnetSubject, body, { name: CONFIG.senderName });
}
