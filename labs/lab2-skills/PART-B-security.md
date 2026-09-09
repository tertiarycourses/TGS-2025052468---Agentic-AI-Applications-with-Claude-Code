# Part B — Harden the Site with `cybersecurity-analyst`

**Objective:** Run a real security review over the Lab 1 site and fix what it
finds — without ever naming the skill.

---

## Step 1 — Trigger the skill by describing the goal

Notice this prompt never says "use the cybersecurity skill". Claude matches the
request to the skill's description and loads it on demand.

**Prompt:**

```
Do a thorough security review of this website and harden it.

Cover at least:
- Cross-site scripting (XSS) risk anywhere user input is read or rendered,
  including the enquiry form fields and anything written back to the DOM.
- Input validation and sanitisation on every form field, server-side-style
  checks done client-side as defence in depth.
- Any secrets, API keys or tokens committed in the repository.
- Missing security headers, and which ones a static site on GitHub Pages can
  actually set (and which it cannot).
- Unsafe patterns: innerHTML assignment, eval, inline event handlers,
  third-party scripts loaded without integrity checks.
- Dependency and external-resource risk (fonts, CDNs).

For each finding, tell me:
  1. the severity (critical / high / medium / low),
  2. the file and line,
  3. why it is exploitable in this specific site,
  4. the concrete fix.

Then apply the fixes for everything medium and above. Do not change the
visual design or break the existing form behaviour.
```

---

## Step 2 — Read the findings critically

Not every finding will be real. A static marketing page has no server, no
database and no authentication, so some generic advice will not apply.

**Prompt:**

```
Which of those findings are genuinely exploitable on a static GitHub Pages
site with no backend, and which are boilerplate that does not apply here?
Be honest — I would rather fix three real issues than twenty imaginary ones.
```

This is a good habit generally: an agent that agrees with itself is not a
review.

---

## Step 3 — Verify nothing broke

```
Re-test the enquiry form: empty submit shows inline errors, a bad email is
rejected, and a valid submission still shows the success message and resets
the form.
```

---

## Step 4 — Record the result

**Prompt:**

```
Write a SECURITY.md summarising: what was reviewed, what was found, what was
fixed, and what is intentionally out of scope for a static site.
```

---

**Checkpoint:** Real issues fixed, the form still works, and `SECURITY.md`
records the review.

⬅️ Back: [Part A](PART-A-install-skills.md) · ➡️ Next: [Part C — Kanban](PART-C-kanban.md)
