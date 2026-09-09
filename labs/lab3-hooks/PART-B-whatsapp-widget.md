# Part B — Floating WhatsApp Widget

**Objective:** Add a floating WhatsApp chat widget to the Lab 1 site, and use a
hook so the class can see an event-triggered behaviour in the browser as well as
in the terminal.

---

## Step 1 — Build the widget

**Prompt:**

```
Add a floating WhatsApp chat widget to the website.

Appearance and behaviour:
- A round WhatsApp-green button fixed to the bottom-right corner, above all
  other content, with a subtle shadow and a gentle hover lift.
- Clicking it expands a small chat panel with a header ("Chat with us"), a
  short greeting message ("Hi! How can I help you?"), and a close button.
- Show 3 suggested-question chips as quick replies:
    "I'd like a quote"
    "What services do you offer?"
    "How long does a project take?"
- Clicking a chip, or typing a message and pressing send, opens WhatsApp with
  that text pre-filled, using https://wa.me/<number>?text=<url-encoded message>.
- Ask me for the WhatsApp number to use, and use my own number so I can test
  it end to end.
- After 10 seconds on the page, the panel auto-opens once with the greeting.
  Never auto-open again in the same session (remember it in sessionStorage).

Requirements:
- Vanilla JS and CSS, matching the site's existing green design.
- Fully responsive; on mobile the panel must not cover the whole screen.
- Accessible: keyboard reachable, aria-label on the button, focus moved into
  the panel when it opens, Escape closes it.
```

---

## Step 2 — Test with Playwright

**Prompt:**

```
Use the Playwright MCP tool to verify the widget:

1. Open the site and confirm the floating button is visible bottom-right.
2. Wait 10 seconds and confirm the panel auto-opens exactly once.
3. Reload and confirm it does not auto-open a second time in the same session.
4. Click a suggested-question chip and confirm the wa.me URL is correct and
   contains the URL-encoded question text.
5. Confirm Escape closes the panel and focus returns to the button.
6. Screenshot the open panel on both desktop and mobile viewports.

Report pass/fail for each check.
```

---

## Step 3 — Add a hook that guards the widget

A useful, realistic hook: stop yourself from ever committing a placeholder
phone number.

**Prompt:**

```
Create a PreToolUse hook at .claude/hooks/check-whatsapp-number.js that runs
before Edit and Write tools.

It should:
- Read the tool input from stdin as JSON.
- If the content being written contains a wa.me link with an obviously
  placeholder number (for example 1234567890, 0000000000, or the literal
  text <number>), print a clear error to stderr and exit with code 2 to
  block the write.
- Otherwise pass the input through unchanged and exit 0.

Register it in .claude/settings.json as a PreToolUse hook with matcher
"Edit|Write", merging with the existing hooks rather than replacing them.
```

Test it by asking Claude to set the number to `1234567890` — the write should be
blocked.

---

**Checkpoint:** The widget works, auto-opens once after 10 seconds, chips open
WhatsApp correctly, and the guard hook blocks placeholder numbers.

⬅️ Back: [Part A](PART-A-hooks.md) · ➡️ Next: [Part C — Add-task agent](PART-C-add-task-agent.md)
