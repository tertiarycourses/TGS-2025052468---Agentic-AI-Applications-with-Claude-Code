# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

The hands-on labs for the WSQ course **Agentic AI Applications with Claude Code**
(TGS-2025052468). This repo is *courseware*, not an application: its primary
product is the lab instructions learners follow.

## Structure

```
lab1-seven-steps/     Lab 1 (Topic 1) — the 7-step build workflow
  README.md             lab overview + the 7-step checklist
  steps/                STEP-1..STEP-7, one file per step
  reference-site/       finished deliverable (NorthPoint Systems)
  sample-sites/         bride-booking, interior-design, lead-generation
lab1b-commands-mcp/   Lab 1b (Topic 2) — /publish command + Playwright MCP
lab2-skills/          Lab 2 (Topic 3) — cybersecurity / kanban / ui-ux skills
lab3-hooks/           Lab 3 (Topic 3) — hooks, sub agents, /loop
course-activities.md  legacy single-file walkthrough (superseded)
```

## Conventions for lab documents

- Every lab folder has a `README.md` that indexes its parts and states the
  checkpoint for the lab as a whole.
- Each part/step file follows the same shape: **Objective** → numbered steps
  with the **exact prompt in a fenced block** → **Checkpoint** → prev/next links.
- Prompts are written to be pasted verbatim. Keep them specific and complete —
  they are the teaching material, not a sketch.
- Cross-reference with relative links so they work on github.com.
- British spelling, matching the slide deck and Learner Guide.

## Sample sites

All static — no build step. Open `index.html` directly in a browser.

`sample-sites/lead-generation` calls the Apify API; its token is entered in the
browser and kept in `localStorage`. Its local `.env` is gitignored and must
never be committed.

## Alignment

The labs mirror the course deck and Learner Guide. Lab 1 = Activity 1A/1B,
Lab 1b = Activities 2/3, Lab 2 = Activity 4, Lab 3 = Activities 5/6. If a lab
changes, the corresponding activity slide and LG section must change with it.

## Do not

- Commit secrets, API keys or `.env` files.
- Add build tooling — the samples must stay runnable by opening a file.
