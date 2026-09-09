# Step 5 — Commit to GitHub

**Objective:** Get the project under version control and pushed to a GitHub
repository.

---

## Let Claude do it

You can drive git yourself, but the point of the course is to delegate it.

**Prompt:**

```
Initialise a git repository for this project, create a sensible .gitignore,
commit everything with a clear message, then create a public GitHub repo
called softwaredev-site and push to it.
```

Claude will use the `gh` CLI if it is installed and you are authenticated.

---

## If you prefer to do it by hand

```bash
git init
git add .
git commit -m "Software development marketing site — built with Claude Code"

# create the repo on github.com first, then:
git remote add origin https://github.com/<your-username>/softwaredev-site.git
git branch -M main
git push -u origin main
```

---

## First time using `gh`?

```bash
gh auth login
```

Choose **GitHub.com** → **HTTPS** → authenticate in the browser.

---

## Check before you push

Never push secrets. For this lab there are none, but build the habit:

**Prompt:**

```
Before pushing, check the repository for any API keys, tokens, passwords or
.env files that should not be committed.
```

---

**Checkpoint:** `git log` shows your commit, and the code is visible in your
repository on github.com.

⬅️ Back: [Step 4](STEP-4-context.md) · ➡️ Next: [Step 6 — Deployment](STEP-6-deployment.md)
