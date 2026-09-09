# Part A — Install the Skills

**Objective:** Install three community skills at **project level**, so they live
in the repo and travel with it.

---

## Step 1 — Install

Run these in your terminal, inside the Lab 1 project folder:

```bash
npx skills add https://github.com/rysweet/amplihack --skill cybersecurity-analyst
npx skills add https://github.com/saltbo/agent-kanban --skill agent-kanban
npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max
```

Each installs into `.claude/skills/<name>/`.

> If prompted for an install scope, choose **project** (not user), so the skills
> are committed with the repository.

---

## Step 2 — Look at what you installed

```bash
ls .claude/skills/
cat .claude/skills/cybersecurity-analyst/SKILL.md | head -20
```

Note the frontmatter — `name` and `description`. **That is the trigger.** Claude
matches your request against the description to decide whether to load the rest
of the file.

---

## Step 3 — Restart Claude Code

Skills are discovered at startup. Close and reopen VS Code, or `/exit` and run
`claude` again.

---

## Step 4 — Confirm they loaded

**Prompt:**

```
What skills do you have available, and when would each one trigger?
```

You should see all three listed, each with the conditions that would cause it to
load.

---

**Checkpoint:** Three folders under `.claude/skills/`, all three visible to
Claude after a restart.

➡️ Next: [Part B — Security](PART-B-security.md)
