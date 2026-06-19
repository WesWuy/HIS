# Codex Review Prompt

Use this prompt after Claude Code generates or modifies implementation files.

```text
You are reviewing the Human Improvement Systems Google Workspace automation project.

Review the code for:

1. Apps Script syntax errors.
2. Missing permissions/scopes.
3. Broken trigger logic.
4. Hardcoded values that should be config variables.
5. Risky automation patterns.
6. Gmail sending risks.
7. Sheet column mismatch errors.
8. Beginner setup clarity.
9. Security and privacy concerns.
10. Any places where Instagram automation could violate platform rules.

Return:

- Critical issues
- Recommended fixes
- Safer alternatives
- Final corrected code snippets
- Deployment checklist
```

## Review Standard

The system should be reliable before it is clever.

Do not optimize for flashy AI features until the boring workflow works:

- folder creation
- spreadsheet creation
- form capture
- email delivery
- lead tracking
- content tracking
