# Part E — `/loop` the Security Agent

**Objective:** Keep the security scan running on a schedule, so regressions are
caught without anyone remembering to look.

---

## What `/loop` does

`/loop` re-runs a prompt or slash command on an interval. Give it a period and a
task:

```
/loop <interval> <prompt or /command>
```

Omit the interval and Claude paces itself.

---

## Step 1 — Start the loop

**Prompt:**

```
/loop 5m Use the security-scanner agent to scan the website. If any new
critical or high severity findings appeared since the last scan, summarise
them clearly and tell me which file to look at. If nothing changed, just say
"no change".
```

Every 5 minutes the agent re-scans and reports only what is worth your
attention.

---

## Step 2 — Watch it catch a regression

While the loop is running, introduce a problem:

**Prompt:**

```
Add an inline onclick handler to the Get a Quote button that passes a value
straight from the URL query string. This is a deliberate regression to test
the monitoring loop.
```

Within 5 minutes the loop should report a **new** finding.

---

## Step 3 — Fix it and watch it clear

**Prompt:**

```
Remove that inline onclick handler and restore the previous safe behaviour.
```

The next iteration should report the finding as resolved.

---

## Step 4 — Stop the loop

```
/loop stop
```

Or press `Esc` to interrupt.

---

## Step 5 — Think about when this is worth it

**Prompt:**

```
For this project, is a 5-minute security scan loop actually useful, or is it
mostly burning tokens? When would a scheduled scan genuinely earn its cost,
and what would be a better trigger for it?
```

Good answers usually land on: a loop suits *changing* state, and a **hook on
commit** (event-triggered) beats polling for code that only changes when someone
edits it.

That is the lesson the whole course keeps returning to — **match the trigger to
the job**:

| If the work should happen... | Use |
|---|---|
| every session | `CLAUDE.md` |
| when the task matches | a **skill** |
| when the job needs a capability | a **tool / MCP** |
| when you decide | a **slash command** |
| whenever an event occurs | a **hook** |
| in an isolated context | a **sub agent** |
| repeatedly over time | **`/loop`** |

---

**Checkpoint:** The loop ran on schedule, reported a regression you introduced,
confirmed the fix, and you stopped it cleanly.

---

## 🎉 Labs complete

You have now used every extension mechanism in the course on one real project.

⬅️ Back: [Part D](PART-D-security-agent.md)
