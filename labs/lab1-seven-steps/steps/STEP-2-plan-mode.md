# Step 2 — Plan Mode

**Objective:** Make Claude think before it builds — and give yourself a chance
to correct course while corrections are still cheap.

Plan mode is read-only. Claude explores the project and proposes an approach,
but **changes nothing** until you approve.

---

## Enter plan mode

Press **`Shift+Tab`** to cycle permission modes until the prompt shows
**`plan mode on`**.

> In the VS Code extension, the mode indicator sits at the bottom of the Claude
> Code panel. Cycle it the same way.

---

## Ask for the plan

**Prompt:**

```
Read PROMPT.md and plan how you will build this site. Show me the file
structure you intend to create, what goes in each file, and how the enquiry
form validation and the smooth-scroll CTA will work. Do not write any code
yet.
```

---

## Review the plan properly

This is the whole point of the step. Read what comes back and check:

- Are all **three sections** there — hero, testimonials, enquiry form?
- Is the file split what you asked for (`index.html`, `styles.css`, `script.js`)?
- Does it describe **validation** (required fields + email regex) and the
  **success message**?
- Does it mention the **commented-out `fetch()`** example?
- Any frameworks sneaking in? There should be none.

If something is off, say so — you are still in plan mode, so it costs nothing:

**Prompt (example correction):**

```
The plan is missing the inline error messages under each invalid field, and
the CTA button needs to smooth-scroll to the form. Revise the plan.
```

---

## Approve

When the plan is right, accept it. Claude leaves plan mode and is ready to
build.

---

**Checkpoint:** You have a written plan you actually agree with, and still no
code on disk.

⬅️ Back: [Step 1](STEP-1-goal-and-features.md) · ➡️ Next: [Step 3 — Execute](STEP-3-execute.md)
