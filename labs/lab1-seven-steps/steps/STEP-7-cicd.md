# Step 7 — CI/CD

**Objective:** Automate deployment, so every push to `main` republishes the site
without you touching a setting.

---

## Add the workflow

**Prompt:**

```
Create a GitHub Actions workflow at .github/workflows/deploy.yml that deploys
this static site to GitHub Pages on every push to main. Use the official
actions/configure-pages, actions/upload-pages-artifact and
actions/deploy-pages actions, with the correct permissions and concurrency
settings. Then commit and push it.
```

---

## What it should produce

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
  group: pages
  cancel-in-progress: true

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
          path: '.'
      - id: deployment
        uses: actions/deploy-pages@v4
```

> After adding a workflow, set **Settings → Pages → Source** to **GitHub
> Actions** (instead of "Deploy from a branch"), or the workflow and the branch
> deploy will fight over the same site.

---

## Prove the pipeline works

1. Make a small visible change:

   **Prompt:**
   ```
   Change the hero headline to "We Build Software That Scales — Fast" and push
   the change.
   ```

2. On github.com open the **Actions** tab and watch the run go green.

3. Reload your live URL. The new headline should be there within a minute.

---

**Checkpoint:** A push to `main` triggers the workflow, the run succeeds, and
the live site updates on its own.

---

## 🎉 Lab 1 complete

Go back to the [lab README](../README.md) and tick off all seven boxes in the
*"Does the application follow the 7 steps?"* checklist.

⬅️ Back: [Step 6](STEP-6-deployment.md)
