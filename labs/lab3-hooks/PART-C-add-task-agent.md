# Part C — An Add-Task Sub Agent

**Objective:** Create a sub agent whose only job is to add a task to the kanban
board from Lab 2 — and see what "delegation" actually buys you.

A sub agent has **its own prompt, its own tools and its own context window**.
The main conversation gets the summary, not the noise.

---

## Step 1 — Create the agent

You can use `/agents` interactively, or describe it and let Claude write the
file. Describing it is faster and more repeatable:

**Prompt:**

```
Create a project-level sub agent at .claude/agents/add-task.md.

Frontmatter:
  name: add-task
  description: Adds a new task to the project kanban board (KANBAN.md).
    Use when the user asks to add, create or log a task, feature or bug.
  tools: Read, Edit, Write

System prompt:
  You maintain KANBAN.md, a markdown kanban board with the columns Backlog,
  In Progress, Review and Done.

  When asked to add a task:
  1. Read KANBAN.md to understand the current structure and formatting.
  2. Create the task with:
     - a short, specific title
     - a one-line description
     - an acceptance criterion describing how completion is verified
     - a priority (High / Medium / Low), inferred from the request
  3. Place it in the column the user asked for; default to Backlog if they
     did not say.
  4. Match the existing formatting exactly - do not restructure the board.
  5. Never remove or reorder existing tasks.
  6. Reply with just the task you added and which column it went into.
```

---

## Step 2 — Restart and confirm

Restart Claude Code, then:

```
/agents
```

`add-task` should be listed.

---

## Step 3 — Invoke it

**Prompt:**

```
Use the add-task agent to add a new task: installation of Microsoft Dynamics
365 licences. Mark it as In Progress.
```

---

## Step 4 — Check the board

```bash
cat KANBAN.md
```

The task should be under **In Progress**, formatted like its neighbours, with
nothing else disturbed.

---

## Step 5 — Add a few more

**Prompt:**

```
Use the add-task agent to add these to Backlog:
- Migrate the contact form to a real backend endpoint
- Add Open Graph tags for social sharing
- Set up uptime monitoring for the live site
```

---

## Step 6 — See the context benefit

**Prompt:**

```
Why did delegating this to a sub agent keep my main conversation cleaner than
doing it directly?
```

The sub agent read the whole board, reasoned about formatting and edited the
file — all in **its** context window. Your main thread only received the result.

---

**Checkpoint:** `.claude/agents/add-task.md` exists, appears in `/agents`, and
adding the Dynamics 365 task placed it correctly under In Progress.

⬅️ Back: [Part B](PART-B-whatsapp-widget.md) · ➡️ Next: [Part D — Security agent](PART-D-security-agent.md)
