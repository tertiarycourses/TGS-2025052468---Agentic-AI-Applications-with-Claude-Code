# Part C — Fold the Screenshot into `/publish`

**Objective:** Make the screenshot refresh automatic, so the README never shows
a stale picture of the site.

Right now Part A's command publishes, and Part B's screenshot was a manual
one-off. Combine them.

---

## Step 1 — Extend the command

**Prompt:**

```
Update .claude/commands/publish.md to add a screenshot step.

Insert it AFTER the GitHub Pages deployment step and BEFORE the README step,
because the screenshot must reflect the newly deployed site:

NEW STEP — REFRESH SCREENSHOTS
- Wait for the GitHub Actions deployment to finish (poll the run status with
  the gh CLI; give up after about 3 minutes and warn me).
- Use the Playwright MCP tool to open the live GitHub Pages URL.
- Capture a desktop screenshot at 1280x800 to screenshots/homepage.png.
- Capture a mobile screenshot at 390x844 to screenshots/homepage-mobile.png.
- If the page fails to load, warn me and continue with the existing images
  rather than failing the whole command.

Then update the README step so it always embeds the current screenshots under
a "## Screenshots" heading.

Finally, make sure the refreshed screenshots are themselves committed and
pushed — so the images in the README match the deployed site.
```

---

## Step 2 — Restart and re-run

Restart Claude Code, then:

```
/publish
```

---

## Step 3 — Prove it end to end

Make a visible change and let the command carry it all the way through:

**Prompt:**

```
Change the hero headline to "We Build Software That Scales — Fast", then run
the full publish workflow.
```

Then:

```
/publish
```

Now check on github.com:

- The commit is there
- The Actions run went green
- The live site shows the new headline
- **The README screenshot shows the new headline too**

That last one is the point of this lab — the documentation updated itself.

---

## What you have built

```
your-project/
├── .claude/
│   └── commands/
│       └── publish.md          # manual trigger — /publish
├── .mcp.json                   # on-demand trigger — Playwright MCP
├── .github/workflows/
│   └── deploy.yml              # event trigger — push to main
├── screenshots/
│   ├── homepage.png
│   └── homepage-mobile.png
└── README.md                   # embeds the screenshots
```

Three different trigger types, cooperating in one workflow.

---

**Checkpoint:** A single `/publish` scans for secrets, commits, pushes, deploys,
waits for the deploy, re-screenshots the live site, updates the README and
pushes the refreshed images.

⬅️ Back: [Part B](PART-B-playwright-mcp.md)
