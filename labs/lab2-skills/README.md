# Lab 2 — Agent Skills

**Topic 3 · Skills, Agents & Hooks — maps to Activity 4 (slides 50–53)**

Skills are reusable folders of instructions (`SKILL.md`) that teach Claude a
specialised capability. The important property is the **trigger**: a skill is
loaded **on demand**. Claude reads only each skill's name and description, and
pulls in the full instructions when the task matches — so you can keep many
installed without spending context on any of them.

In this lab you install three community skills and use them to revamp the
website you built in **Lab 1**.

> **Prerequisite:** Lab 1 finished. Work in that same project folder.

---

## The three skills

| Skill | What it does | You will use it to |
|---|---|---|
| `cybersecurity-analyst` | Reviews code for security weaknesses | Harden the site and the enquiry form |
| `agent-kanban` | Structures work as a kanban board | Track the revamp as a visible task board |
| `ui-ux-pro-max` | Deep UI/UX critique and redesign | Move the site to a green visual identity |

---

## Parts

| Part | What you do | File |
|---|---|---|
| A | Install the three skills | [`PART-A-install-skills.md`](PART-A-install-skills.md) |
| B | Security hardening pass | [`PART-B-security.md`](PART-B-security.md) |
| C | Kanban-tracked revamp | [`PART-C-kanban.md`](PART-C-kanban.md) |
| D | Green UX redesign | [`PART-D-green-ux.md`](PART-D-green-ux.md) |

---

## Why this lab matters

By the end you will have seen the on-demand trigger work three times: you never
type "load the cybersecurity skill". You describe a security goal, and Claude
matches your request to the skill's description and loads it itself.

**Checkpoint for the whole lab:** the Lab 1 site is hardened, visually
redesigned in green, and the work was tracked on a kanban board — with all three
skills installed under `.claude/skills/`.
