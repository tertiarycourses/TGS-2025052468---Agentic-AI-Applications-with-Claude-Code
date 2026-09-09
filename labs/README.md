# Labs — Agentic AI Applications with Claude Code (TGS-2025052468)

Hands-on labs for the WSQ course **Agentic AI Applications with Claude Code**.

**Register for the course:** [tertiarycourses.com.sg](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-claude-code.html)

---

## The four labs

Each lab is a self-contained folder. They build on one another — Lab 1 creates
the website that Labs 1b, 2 and 3 then extend.

| Lab | Topic | What you do | Folder |
|---|---|---|---|
| **1** | Topic 1 — Fundamentals | Build & deploy a site with the **7-step workflow** | [`lab1-seven-steps/`](lab1-seven-steps/) |
| **1b** | Topic 2 — Tools & Commands | A `/publish` **custom command** + **Playwright MCP** screenshots | [`lab1b-commands-mcp/`](lab1b-commands-mcp/) |
| **2** | Topic 3 — Skills | Install 3 **skills** and revamp the site | [`lab2-skills/`](lab2-skills/) |
| **3** | Topic 3 — Agents & Hooks | **Hooks**, **sub agents** and **`/loop`** | [`lab3-hooks/`](lab3-hooks/) |

---

## The thread running through all four

Every lab demonstrates a different **trigger** — the thing that causes Claude to
load or run something. That is the idea the whole course is organised around:

| Mechanism | Trigger | Lab |
|---|---|---|
| `CLAUDE.md` | Every session | 1 (Step 4) |
| Skills | On demand | 2 |
| Tools / MCP | On demand | 1b |
| Slash commands | Manually | 1b |
| Hooks | By event | 3 |
| Sub agents | By delegation | 3 |
| `/loop` | On a schedule | 3 |

---

## Before you start

- **Claude Code** installed and signed in — terminal or the VS Code extension
- **Node.js** (LTS) — [nodejs.org](https://nodejs.org)
- A **GitHub account**
- A browser

```bash
claude --version
node --version
```

---

## How to work through them

Start at [`lab1-seven-steps/README.md`](lab1-seven-steps/README.md) and follow
the steps in order. Every step file gives you:

- the **exact prompt** to paste
- what you should see happen
- a **checkpoint** to confirm before moving on

Do not skip the checkpoints — later labs assume the earlier ones actually
worked.

---

## Sample sites

Finished builds you can read for reference live in
[`lab1-seven-steps/sample-sites/`](lab1-seven-steps/sample-sites/) — a bridal
booking page, an interior-design studio site, and a lead-generation app. The
lab's own reference deliverable is in
[`lab1-seven-steps/reference-site/`](lab1-seven-steps/reference-site/).

---

## Legacy activity guide

The earlier single-file walkthrough is kept at
[`course-activities.md`](course-activities.md) for reference. The four lab
folders above supersede it.

---

© Tertiary Infotech Academy Pte Ltd · UEN 201200696W
