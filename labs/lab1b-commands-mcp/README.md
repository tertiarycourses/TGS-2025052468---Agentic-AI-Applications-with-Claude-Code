# Lab 1b — Custom Commands & Playwright MCP

**Topic 2 · Tools and Commands — maps to Activity 2 + Activity 3 (slides 40–49)**

Lab 1 got your site built and deployed. Doing all of that again by hand, every
time, is exactly the kind of repetition worth automating.

In this lab you:

1. Build a **custom slash command** that publishes to GitHub in one step
2. Install the **Playwright MCP** server so Claude can drive a real browser
3. Use Playwright to **screenshot your live site** and put the image in the README
4. **Fold that screenshot step back into the command**, so every future publish
   refreshes it automatically

> **Prerequisite:** Lab 1 finished — a deployed site with a GitHub repo.
> Work in that same project folder.

---

## Two triggers, side by side

This lab is where the difference between trigger types becomes concrete:

| | Slash command | MCP tool |
|---|---|---|
| **Trigger** | **Manually** — only when you type `/publish` | **On demand** — Claude calls it when the task needs a browser |
| **Lives in** | `.claude/commands/publish.md` | `.mcp.json` (project) |
| **It is** | A saved prompt | An external server exposing tools |

---

## Parts

| Part | What you build | File |
|---|---|---|
| A | The `/publish` custom command | [`PART-A-custom-command.md`](PART-A-custom-command.md) |
| B | Playwright MCP + screenshot → README | [`PART-B-playwright-mcp.md`](PART-B-playwright-mcp.md) |
| C | Merge the screenshot step into `/publish` | [`PART-C-combine.md`](PART-C-combine.md) |

---

**Checkpoint for the whole lab:** typing `/publish` alone commits your work,
refreshes the README screenshot from the live site, pushes, and leaves the repo
About section pointing at the GitHub Pages URL.
