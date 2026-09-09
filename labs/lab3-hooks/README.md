# Lab 3 — Hooks, Sub Agents & `/loop`

**Topic 3 · Skills, Agents & Hooks — maps to Activity 5 + Activity 6 (slides 54–63)**

This lab covers the last three trigger types, and the contrast between them is
the whole lesson:

| Mechanism | Trigger | In this lab |
|---|---|---|
| **Hooks** | **By event** — fires deterministically at a lifecycle point | A congratulations dialog when a task completes |
| **Sub agents** | **By delegation** — the main agent spawns it for a focused job | An add-task agent and a security-scan agent |
| **`/loop`** | **On a schedule you set** | Re-run the security scan every 5 minutes |

The key distinction: a **hook always runs** — it does not depend on the model
deciding to. A **sub agent runs when delegated**, and works in its own context
window so its output never floods your main conversation.

> **Prerequisite:** Labs 1 and 2 finished. Work in that same project folder.

---

## Parts

| Part | What you build | File |
|---|---|---|
| A | A completion hook that pops a congratulations dialog | [`PART-A-hooks.md`](PART-A-hooks.md) |
| B | A floating WhatsApp chat widget, auto-opened by a hook | [`PART-B-whatsapp-widget.md`](PART-B-whatsapp-widget.md) |
| C | An add-task sub agent | [`PART-C-add-task-agent.md`](PART-C-add-task-agent.md) |
| D | A security-scan sub agent writing JSON | [`PART-D-security-agent.md`](PART-D-security-agent.md) |
| E | `/loop` the security agent every 5 minutes | [`PART-E-loop.md`](PART-E-loop.md) |

---

**Checkpoint for the whole lab:** a hook fires on its own at the end of a task,
two sub agents do focused jobs on request, and `/loop` keeps the security agent
re-scanning on a schedule.
