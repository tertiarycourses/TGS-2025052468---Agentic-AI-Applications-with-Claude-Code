# Step 4 — Context (`/init`)

**Objective:** Capture what Claude has learned about this project into a
`CLAUDE.md`, so the next session starts informed instead of starting over.

Each session begins with a blank context window. `CLAUDE.md` is the file Claude
reads **automatically at the start of every session** — it is your project's
long-term memory.

---

## Generate it

**Prompt:**

```
/init
```

Claude scans the project and writes a `CLAUDE.md` describing what it found.

---

## Review and tighten it

`/init` gives you a draft, not a finished file. Open `CLAUDE.md` and check it
actually describes *this* project. A good one for this lab looks roughly like:

```markdown
# CLAUDE.md

## Project Overview
Single-page marketing site for a software development company.
Vanilla HTML/CSS/JS — no framework, no build step.

## Running
Open index.html directly in a browser. No server required.

## Architecture
index.html   — Hero, testimonials, enquiry form
styles.css   — CSS custom properties for palette; mobile-first media queries
script.js    — Form validation, smooth scroll, console.log of submitted data

## Conventions
- No frameworks, no build tooling. Keep it copy-paste runnable.
- Every input needs a matching <label> (accessibility).
- Form submission is intercepted with preventDefault() — never a real POST.
```

**Keep it tight.** `CLAUDE.md` is loaded on *every* turn, so it spends context
continuously. Project overview, conventions and commands — not an essay. Aim
for well under 200 lines.

---

## Prove it works

1. End the session (`/exit`, or close the panel).
2. Start Claude Code again in the same folder.
3. Ask:
   ```
   What is this project and how do I run it?
   ```

It should answer correctly **without** reading any files first — because
`CLAUDE.md` was already in context.

---

## Related context commands

| Command | What it does |
|---|---|
| `/init` | Generate `CLAUDE.md` from the current project |
| `/memory` | View and edit memory files |
| `/context` | Show what is currently filling the context window |
| `/compact` | Summarise the conversation to reclaim space |
| `/clear` | Wipe the conversation and start fresh |

---

**Checkpoint:** `CLAUDE.md` exists, describes this project accurately, and a
brand-new session can answer questions about the project without exploring.

⬅️ Back: [Step 3](STEP-3-execute.md) · ➡️ Next: [Step 5 — Commit to GitHub](STEP-5-commit-to-github.md)
