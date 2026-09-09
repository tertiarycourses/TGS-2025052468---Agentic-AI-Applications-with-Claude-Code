# Part A — A Completion Hook

**Objective:** Make Claude Code congratulate you automatically when it finishes a
task — with no prompting, every single time.

Hooks are shell commands registered against lifecycle events in
`.claude/settings.json`. They are **deterministic**: the event fires, the hook
runs. The model does not get a vote.

---

## The lifecycle events

| Event | Fires when |
|---|---|
| `PreToolUse` | Before a tool runs — can **block** it |
| `PostToolUse` | After a tool completes |
| `Notification` | When Claude needs input |
| `Stop` | When Claude finishes responding |

For "task done", `Stop` is the one you want.

---

## Step 1 — Create the hook script

**Prompt:**

```
Create a project-level hook at .claude/hooks/task-complete.sh that celebrates
when a task finishes.

It must:
- Read the hook payload from stdin (JSON) without failing if it is empty.
- Show a desktop dialog saying "Congratulations - task completed!" with the
  project name in the body.
  - On macOS use osascript with `display dialog`, giving it a 10-second
    timeout so it never blocks forever.
  - On Linux fall back to notify-send, and on Windows (Git Bash) fall back to
    a PowerShell message box.
  - Detect the platform rather than assuming macOS.
- Also play a short completion sound where one is available
  (macOS: afplay /System/Library/Sounds/Glass.aiff).
- Always exit 0 and always pass stdin through unchanged, so the hook can
  never break my session.

Make the script executable.
```

Then:

```bash
chmod +x .claude/hooks/task-complete.sh
```

---

## Step 2 — Register it on the Stop event

**Prompt:**

```
Create or update .claude/settings.json to register .claude/hooks/task-complete.sh
as a Stop hook, invoked as:
  bash $CLAUDE_PROJECT_DIR/.claude/hooks/task-complete.sh

Keep any hooks that are already configured — merge, do not overwrite.
```

The result should look like:

```json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "bash $CLAUDE_PROJECT_DIR/.claude/hooks/task-complete.sh"
          }
        ]
      }
    ]
  }
}
```

---

## Step 3 — Restart and verify

Restart Claude Code, then:

```
/hooks
```

Your Stop hook should be listed.

---

## Step 4 — Test it

Ask for anything small:

```
List the files in this project.
```

When Claude finishes, the dialog should appear on its own. You never asked for
it — that is the point.

---

## Step 5 — Feel the difference

**Prompt:**

```
Explain why this dialog is guaranteed to appear, whereas if I had written
"always congratulate me when you finish" in CLAUDE.md it might not.
```

The answer is the trigger model: a hook is enforced by the harness; an
instruction is followed by a model exercising judgement.

---

**Checkpoint:** The congratulations dialog fires automatically at the end of
every task, without being asked.

➡️ Next: [Part B — WhatsApp widget](PART-B-whatsapp-widget.md)
