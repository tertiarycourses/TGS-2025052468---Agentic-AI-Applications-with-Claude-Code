# Step 3 — Execute

**Objective:** Let Claude build the site from the approved plan, then verify it
in a browser.

---

## Optional: bypass permissions

By default Claude asks before each file edit and shell command. For a
hands-free build in a **trusted, throwaway project** like this one, you can turn
those prompts off.

**In the terminal:**

```bash
claude --dangerously-skip-permissions
```

**In VS Code:** Settings → Extensions → Claude Code → enable bypass permissions.

> ⚠️ **Handle with care.** Bypass mode skips every permission prompt and safety
> check — tool calls run immediately with no confirmation. Use it only in a
> sandboxed project you do not mind losing, never on a repo with real code,
> credentials or customer data.
>
> Staying in **default mode** and approving each step is a perfectly good way to
> do this lab. It is slower, not worse.

---

## Build it

**Prompt:**

```
Execute the plan and build the site.
```

Claude will create `index.html`, `styles.css` and `script.js`, writing each
file and reporting as it goes.

---

## Verify in the browser

It is a static site — no server needed:

```bash
open index.html      # macOS
start index.html     # Windows
```

Now actually test it. Do not just look at it:

1. **Hero** — headline and subheadline render; the layout is not broken.
2. **CTA** — click **Get a Quote**; the page should *smooth-scroll* to the form.
3. **Testimonials** — three cards; hover does something; narrow the window and
   they should stack to one column.
4. **Form validation** — submit it empty. You should get inline errors, not a
   page reload.
5. **Bad email** — enter `notanemail` and submit. The email field should
   complain.
6. **Happy path** — fill it in properly and submit. You should see
   *"Thanks! We'll be in touch shortly."*, the form should reset, and the data
   should appear in the browser console (`F12` → Console).

---

## Fix anything that is wrong

Describe the symptom, not the fix — let the loop work:

**Prompt (example):**

```
The CTA button jumps straight to the form instead of scrolling smoothly, and
on mobile the testimonial cards overflow horizontally. Fix both.
```

---

**Checkpoint:** The site opens in a browser, the CTA smooth-scrolls, and the
enquiry form both rejects bad input and confirms good input.

⬅️ Back: [Step 2](STEP-2-plan-mode.md) · ➡️ Next: [Step 4 — Context](STEP-4-context.md)
