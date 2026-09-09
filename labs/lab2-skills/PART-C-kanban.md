# Part C — Track the Revamp with `agent-kanban`

**Objective:** Use the kanban skill to turn "revamp the site" into a visible,
ordered board of work instead of a vague intention.

---

## Step 1 — Create the board

**Prompt:**

```
Plan the remaining revamp of this website as a kanban board.

Break the work into small, individually shippable tasks across these columns:
Backlog, In Progress, Review, Done.

The revamp should cover:
- The green visual identity (colours, typography, spacing)
- Accessibility (contrast ratios, focus states, labels, semantic landmarks)
- Responsive behaviour on mobile
- Performance (image sizes, render-blocking resources)
- The enquiry form's usability (error clarity, success feedback)

For each task give: a short title, a one-line description, and an
acceptance criterion that says how I will know it is done.

Move the security work from Part B into Done, since it is already complete.
```

---

## Step 2 — Persist the board

**Prompt:**

```
Save the board as KANBAN.md in the project root, formatted so it stays
readable on github.com. Use a section per column, with checkboxes for each
task and its acceptance criterion underneath.
```

---

## Step 3 — Work the board

**Prompt:**

```
Take the top task from Backlog, move it to In Progress in KANBAN.md,
implement it, verify it against its acceptance criterion, then move it to
Done. Show me the diff and tell me which task is next.
```

Repeat for a few tasks. The point is to feel the rhythm: the board is the
shared plan, and Claude updates it as work completes.

---

**Checkpoint:** `KANBAN.md` exists, reflects real state, and at least two tasks
have moved to Done with the code changes to match.

⬅️ Back: [Part B](PART-B-security.md) · ➡️ Next: [Part D — Green UX](PART-D-green-ux.md)
