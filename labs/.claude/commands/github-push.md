---
description: Generate README via /readme, set up GitHub Pages via Actions, then commit, push, and update repo metadata.
---

# /github-push

Ship the project to GitHub end-to-end. Run these steps in order.

## 1. Pre-flight safety checks

- Confirm we're inside a git repo (`git rev-parse --show-toplevel`).
- Verify `.gitignore` contains at least `.env`, `node_modules/`, `.DS_Store`, `.mcp.json`. Add any missing entries.
- Scan tracked files for committed secrets (`API_KEY=`, `SECRET=`, `TOKEN=`, AWS `AKIA[0-9A-Z]{16}`, OpenAI `sk-[A-Za-z0-9]{20,}`). **STOP** and report if any are found.

## 2. Generate the README

Invoke the project `/readme` slash command to produce `README.md` (tech badges, live demo link, Playwright screenshots, file structure, project description, how to start). Wait for it to finish before continuing.

## 3. Add the GitHub Pages workflow

If `.github/workflows/deploy.yml` does not exist, create it:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: "."
      - id: deployment
        uses: actions/deploy-pages@v4
```

If the deployable site lives in a subfolder (e.g. `bride-booking/`), set the `path:` accordingly.

## 4. Configure / verify the GitHub remote

- `git remote -v`
- If no `origin`: ask for repo name (default = folder name) and visibility, then `gh repo create <name> --source=. --remote=origin --<visibility> --push`.

## 5. Commit and push

- Show `git status` and `git diff --stat`.
- Commit with a HEREDOC message including the standard `Co-Authored-By` trailer.
- Never use `--no-verify` or `--amend` unless asked.
- Push: `git push -u origin <current-branch>`.

## 6. Enable GitHub Pages (workflow source)

```bash
gh api -X POST repos/{owner}/{repo}/pages -f build_type=workflow 2>/dev/null || \
gh api -X PUT  repos/{owner}/{repo}/pages -f build_type=workflow
```

(POST first, fall back to PUT if Pages is already configured.)

## 7. Update repo metadata

Use `gh repo edit` to set:

- **Description** — one-line summary (≤ 100 chars) from the README tagline.
- **Homepage** — the GitHub Pages URL from step 6 (`gh api repos/{owner}/{repo}/pages` → `html_url`).
- **Topics** — 3–8 relevant topics from the tech stack and domain.

## 8. Final report

Print:

- Repo URL
- Live GitHub Pages URL
- Branch + commit hash
- Topics applied
- Note: the first Pages deploy can take ~1 minute to go live.
