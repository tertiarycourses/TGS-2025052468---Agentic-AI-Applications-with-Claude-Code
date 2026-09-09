# Part D — Green Redesign with `ui-ux-pro-max`

**Objective:** Move the site to a green visual identity and raise its overall
design quality — without breaking anything you fixed in Parts B and C.

---

## Step 1 — Capture the "before"

If you did Lab 1b you already have Playwright MCP installed:

**Prompt:**

```
Use the Playwright MCP tool to screenshot the current site at 1280x800 and
save it as screenshots/before-redesign.png.
```

---

## Step 2 — The redesign prompt

**Prompt:**

```
Redesign this website around a green visual identity, at a professional
studio standard.

Direction:
- Primary palette built on green — a deep, credible green for primary
  actions and headers, a lighter tint for backgrounds and surfaces, and one
  warm accent for contrast. Not neon, not corporate-clinical: this is a
  software consultancy that should look established and trustworthy.
- Define every colour as a CSS custom property so the theme can be changed
  in one place.
- Revisit typographic scale, line length and vertical rhythm — headings
  should feel deliberate, body text comfortable at 60-75 characters.
- Improve spacing consistency using a spacing scale rather than ad-hoc pixel
  values.
- Strengthen the hero: it should communicate the value proposition within
  three seconds.
- Improve the cards and the form: clear hierarchy, obvious affordances,
  visible focus states.

Hard requirements:
- WCAG AA contrast on every text/background pair. Check the actual ratios
  and tell me the numbers.
- Keep the existing HTML structure and all form behaviour working.
- Keep it responsive, mobile-first.
- No frameworks, no build step.

Explain the design decisions you make and why.
```

---

## Step 3 — Capture the "after" and compare

**Prompt:**

```
Screenshot the redesigned site at 1280x800 (screenshots/after-redesign.png)
and at 390x844 (screenshots/after-redesign-mobile.png). Put the before and
after side by side in the README under a "## Redesign" heading, and
summarise what changed.
```

---

## Step 4 — Have it critique its own work

**Prompt:**

```
Review the redesigned site as a senior design critic who did not build it.
What still looks amateur? Give me the five highest-impact improvements
remaining, ranked, and be specific about what to change.
```

Then fix the ones you agree with.

---

## Step 5 — Ship it

If you built `/publish` in Lab 1b:

```
/publish
```

Otherwise commit and push, and confirm the live site shows the new design.

---

**Checkpoint:** The site is green, passes AA contrast, still validates the
enquiry form, and the README shows a before/after comparison.

⬅️ Back: [Part C](PART-C-kanban.md)
