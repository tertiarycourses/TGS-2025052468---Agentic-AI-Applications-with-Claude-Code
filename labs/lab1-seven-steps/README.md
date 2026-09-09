# Lab 1 — The 7-Step Build Workflow

**Topic 1 · Claude Code Fundamentals — maps to Activity 1A + 1B (slides 25–39)**

In this lab you build and ship a real website using the **7-step workflow** that
frames the whole course. The deliverable is a single-page, responsive marketing
site for a software development company, with a **hero section** and a working
**enquiry form**.

You will not hand-write the site. You describe the outcome; Claude Code builds
it. Your job is to drive the loop — brief it well, review the plan, and verify
the result.

---

## The 7 steps

| # | Step | What you do | Where it lives |
|---|------|-------------|----------------|
| 1 | **Goal & Features** | Write a clear, detailed build prompt | [`STEP-1-goal-and-features.md`](steps/STEP-1-goal-and-features.md) |
| 2 | **Plan Mode** | Let Claude plan before it codes (`Shift+Tab`) | [`STEP-2-plan-mode.md`](steps/STEP-2-plan-mode.md) |
| 3 | **Execute** | Approve the plan and let it build | [`STEP-3-execute.md`](steps/STEP-3-execute.md) |
| 4 | **Context** | `/init` a `CLAUDE.md` so context survives the session | [`STEP-4-context.md`](steps/STEP-4-context.md) |
| 5 | **Commit to GitHub** | Version-control and push | [`STEP-5-commit-to-github.md`](steps/STEP-5-commit-to-github.md) |
| 6 | **Deployment** | Publish on GitHub Pages | [`STEP-6-deployment.md`](steps/STEP-6-deployment.md) |
| 7 | **CI/CD** | Automate redeploys with GitHub Actions | [`STEP-7-cicd.md`](steps/STEP-7-cicd.md) |

> **In class:** steps 1–3 are Activity 1A. Then you cover context engineering.
> Steps 4–7 are Activity 1B.

Every step file contains the **exact prompt or commands** to use, what you should
see, and a **checkpoint** to confirm before moving on.

---

## Before you start

- Claude Code installed and signed in (terminal or the VS Code extension)
- A GitHub account
- A browser

Create and enter the project folder:

```bash
mkdir softwaredev-site
cd softwaredev-site
claude
```

> Work in **your own** `softwaredev-site` folder. The [`reference-site/`](reference-site/)
> folder here is a finished example of this lab's deliverable — look at it only
> if you get stuck, or afterwards to compare.
>
> [`sample-sites/`](sample-sites/) holds three more finished builds
> (bridal booking, interior design, lead generator) produced with this same
> 7-step workflow, if you want to see how far it stretches.

---

## Run through the steps

Follow them in order:

1. [Step 1 — Goal & Features](steps/STEP-1-goal-and-features.md)
2. [Step 2 — Plan Mode](steps/STEP-2-plan-mode.md)
3. [Step 3 — Execute](steps/STEP-3-execute.md)
4. [Step 4 — Context (`/init`)](steps/STEP-4-context.md)
5. [Step 5 — Commit to GitHub](steps/STEP-5-commit-to-github.md)
6. [Step 6 — Deployment](steps/STEP-6-deployment.md)
7. [Step 7 — CI/CD](steps/STEP-7-cicd.md)

---

## Does the application follow the 7 steps?

Yes — and you should be able to prove it. When you finish, check each one off:

- [ ] **Step 1** — you have a written build prompt (saved as `PROMPT.md`)
- [ ] **Step 2** — Claude produced a plan and you reviewed it *before* any code
- [ ] **Step 3** — the site was built by executing that plan
- [ ] **Step 4** — a `CLAUDE.md` exists and describes this project
- [ ] **Step 5** — the code is committed and pushed to GitHub
- [ ] **Step 6** — a live GitHub Pages URL serves the site
- [ ] **Step 7** — a push to `main` redeploys it automatically

That checklist *is* the lab. A site that works but skipped steps 2, 4 or 7 has
not completed the lab.

---

## What you end up with

```
softwaredev-site/
├── index.html          # hero + testimonials + enquiry form
├── styles.css
├── script.js           # form validation, smooth scroll
├── PROMPT.md           # step 1 — your build brief
├── CLAUDE.md           # step 4 — project memory
└── .github/workflows/
    └── deploy.yml      # step 7 — CI/CD
```

**Checkpoint:** the site is live on GitHub Pages, the enquiry form validates and
confirms, and pushing a change to `main` redeploys within a minute.
