# Step 1 — Goal & Features

**Objective:** Turn a vague idea ("a website for a software company") into a
brief precise enough that Claude Code can build the right thing first time.

The clearer the brief, the better the build. This is the step people skip, and
it is the step that decides whether the other six go smoothly.

---

## What a good brief covers

| Element | Why it matters |
|---|---|
| **Goal** | What the site is *for* — here, market services and capture leads |
| **Sections** | The page structure, in order |
| **Behaviour** | What happens on click, submit, scroll |
| **Styling** | Palette, typography, responsiveness |
| **Deliverable** | File layout, and that it must run with no build step |

---

## Optional: draft it with ChatGPT first

You do not have to write the brief cold. Ask a chatbot to expand your one-line
idea, then paste the result into Claude Code.

**Prompt to give ChatGPT:**

```
Create a detailed build prompt for a single-page marketing website for a
software development company. It must have a hero section, testimonials and
an enquiry form. Plain HTML, CSS and vanilla JavaScript only — no frameworks,
no build step. Specify sections, behaviour, styling and the deliverable.
```

---

## The build prompt

Save this as `PROMPT.md` in your project folder, then paste it into Claude Code.

```
Build a single-page, responsive website for a software development company
using HTML, CSS and vanilla JavaScript only (no frameworks). Split into
index.html, styles.css and script.js.

Goal: A modern, professional landing page that markets custom software
development services and captures leads through an enquiry form.

Sections (in order):

1. Hero Section — Full-width banner with a strong headline
   ("We Build Software That Scales") and a one-line subheadline. Short
   supporting paragraph. Primary CTA button ("Get a Quote") that
   smooth-scrolls to the enquiry form. Clean gradient background, large
   readable typography, centred content. Navbar with logo and anchor links
   (Home, Services, Testimonials, Contact).

2. Testimonial Section — Heading ("What Our Clients Say"). 3 testimonial
   cards, each with a client quote, client name, role/company and an avatar
   placeholder (initials circle). Responsive grid: 3 columns on desktop,
   1 on mobile. Subtle card shadows and a hover effect.

3. Enquiry Form Section — Heading ("Get in Touch"). Fields: Name (required),
   Email (required), Phone (optional), Service interested in (dropdown),
   Message (textarea, required). Submit button. Handle submission in
   JavaScript: intercept with event.preventDefault(); validate (required
   checks + email regex) and show inline error messages; on success show
   "Thanks! We'll be in touch shortly.", reset the form, and console.log the
   collected data as an object. Include a commented-out fetch() example
   showing how to POST to an API endpoint.

Styling: Mobile-first and fully responsive (flexbox/grid + media queries).
Consistent palette using CSS variables (primary, accent, background, text).
Modern font stack or a Google Font. Smooth scrolling. Accessible: semantic
HTML5, a label for every input, sufficient contrast.

Deliverable: Working, copy-paste-ready code that runs by opening index.html
in a browser — no build step.
```

---

## Do it

1. In your `softwaredev-site` folder, start Claude Code:
   ```bash
   claude
   ```

2. Ask Claude to save the brief so it is part of the project:

   **Prompt:**
   ```
   Create PROMPT.md containing the build brief I am about to give you, so we
   have a record of the original requirements.
   ```

3. Paste the build prompt above — but **do not let it start coding yet**.
   Step 2 comes first.

---

**Checkpoint:** `PROMPT.md` exists and contains your build brief. You have not
written a line of HTML yourself.

➡️ Next: [Step 2 — Plan Mode](STEP-2-plan-mode.md)
