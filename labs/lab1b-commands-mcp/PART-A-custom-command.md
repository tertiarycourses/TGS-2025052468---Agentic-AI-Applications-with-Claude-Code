# Part A — Build a `/publish` Custom Command

**Objective:** Turn the whole "ship it to GitHub" routine into a single slash
command you can run forever after.

A custom command is just a Markdown file holding a reusable prompt. It is
triggered **manually** — nothing happens until you type `/publish`.

---

## Step 1 — Create the command

Paste this into Claude Code. It is deliberately detailed: the more precisely you
specify the steps, the more reliably the command behaves.

**Prompt:**

```
Create a project-level custom slash command at .claude/commands/publish.md
that automates publishing this project to GitHub.

The command must perform these steps IN ORDER, and stop with a clear error if
any step fails:

1. SECURITY SCAN (do this FIRST, and block everything else if it fails)
   - Scan all files that would be committed for sensitive data: API keys,
     access tokens, passwords, private keys, .env files, connection strings,
     and anything matching common key formats (AKIA..., sk-..., ghp_...).
   - If anything suspicious is found: STOP, report the file and line, and do
     not commit or push. Suggest adding it to .gitignore instead.
   - Never print the secret value itself in the output.

2. UPLOAD THE CODE TO GITHUB
   - If no git repo exists, initialise one and create a sensible .gitignore.
   - Ask me for the GitHub repository URL if there is no remote configured;
     if I supply one as an argument, use that.
   - Stage, commit with a clear descriptive message summarising what changed,
     and push to the main branch.

3. GITHUB PAGES VIA GITHUB ACTIONS
   - Create or update .github/workflows/deploy.yml so the site deploys to
     GitHub Pages on every push to main, using actions/configure-pages,
     actions/upload-pages-artifact and actions/deploy-pages with the correct
     permissions (contents: read, pages: write, id-token: write) and a
     concurrency group.
   - Tell me if I still need to set Settings > Pages > Source to
     "GitHub Actions".

4. README
   - Create or update README.md with: project title, a one-line description,
     a Features list, the tech stack, how to run it locally, and the live
     GitHub Pages URL.
   - Keep it accurate to what the code actually does — do not invent features.

5. REPO ABOUT SECTION
   - Using the gh CLI, set the repository description and the homepage URL to
     the live GitHub Pages link, and add relevant topics.

Finally, print a summary: the commit pushed, the live URL, and the result of
the security scan.
```

---

## Step 2 — Restart to load it

Claude Code discovers commands at startup.

- **VS Code:** close the window and reopen it
- **Terminal:** `/exit`, then run `claude` again

---

## Step 3 — Confirm it registered

```
/help
```

`/publish` should now appear in the command list.

---

## Step 4 — Run it

```
/publish
```

Watch it work through the five steps. It should report the security scan
result, the commit and the live URL.

> **Tip:** if the command does something you did not intend, do not fix the
> result by hand — edit `.claude/commands/publish.md` and run it again. The
> command is the artifact you are building in this lab.

---

**Checkpoint:** `/publish` appears in `/help`, runs end to end, and your repo now
has a README, a deploy workflow and a filled-in About section.

➡️ Next: [Part B — Playwright MCP](PART-B-playwright-mcp.md)
