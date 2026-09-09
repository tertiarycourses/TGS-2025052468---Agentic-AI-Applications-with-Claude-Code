# Part B — Playwright MCP: Screenshot the Live Site

**Objective:** Give Claude a real browser, then use it to capture your deployed
site and put the screenshot in the README.

**MCP** (Model Context Protocol) is the open standard that lets Claude Code talk
to external tools. Playwright MCP exposes browser actions — navigate, click,
fill, screenshot — as tools Claude can call **on demand**.

---

## Step 1 — Install Playwright MCP at project level

In your terminal, inside the project folder:

```bash
claude mcp add --scope project playwright npx @playwright/mcp@latest
```

This writes a `.mcp.json` in the project, so the server travels with the repo.

Verify:

```bash
claude mcp list
```

You should see `playwright` listed.

---

## Step 2 — Restart and approve

Restart Claude Code. On first use it will ask permission to run the MCP server —
approve it. The browser may also need a one-time download:

```bash
npx playwright install chromium
```

---

## Step 3 — Check Claude can see the tools

**Prompt:**

```
What Playwright MCP tools do you have available?
```

You should get back browser tools — navigate, snapshot, click, type,
take_screenshot and similar.

---

## Step 4 — Capture the live site

**Prompt:**

```
Use the Playwright MCP tool to do the following:

1. Open my live GitHub Pages site (ask me for the URL if you do not already
   know it from the README).
2. Set the browser viewport to 1280x800 so the capture is a clean desktop view.
3. Wait until the hero section has fully rendered.
4. Take a full-page screenshot and save it to the project as
   screenshots/homepage.png.
5. Also capture a mobile view at 390x844 and save it as
   screenshots/homepage-mobile.png.

Tell me the file sizes when you are done.
```

---

## Step 5 — Put the screenshots in the README

**Prompt:**

```
Add the screenshots to README.md:

- Create a "## Screenshots" section directly after the project description.
- Embed screenshots/homepage.png with the alt text "Homepage — desktop".
- Embed screenshots/homepage-mobile.png with the alt text "Homepage — mobile".
- Use relative paths so the images render on github.com.
```

---

## Step 6 — While the browser is open, test the form

The same MCP tools can exercise your enquiry form end to end:

**Prompt:**

```
Use Playwright to test the enquiry form on the live site:

1. Submit it completely empty and confirm inline validation errors appear
   for Name, Email and Message.
2. Enter "notanemail" in the Email field and confirm the email validation
   error appears.
3. Fill it in properly (Name "Test User", Email "test@example.com", a short
   message), submit, and confirm the success message
   "Thanks! We'll be in touch shortly." is displayed.
4. Take a screenshot of the success state.

Report which checks passed and which failed.
```

---

**Checkpoint:** `screenshots/homepage.png` exists, the README displays it, and
Playwright has confirmed your form validates bad input and accepts good input.

⬅️ Back: [Part A](PART-A-custom-command.md) · ➡️ Next: [Part C — Combine](PART-C-combine.md)
