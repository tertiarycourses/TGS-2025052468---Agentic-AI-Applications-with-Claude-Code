---
name: wsq-learner-guide
description: >
  Create a WSQ Learner Guide document (.docx) for Tertiary Infotech Academy Pte Ltd in
  the house template format. Use when building, revamping or standardising a WSQ learner
  guide. Enforces the cover page, Document Version Control Record, Word Table of Contents
  field, and a body of topics with detailed step-by-step activities.
---

# WSQ Learner Guide Skill

> **Scope:** This skill (with `wsq-slides` and `wsq-lesson-plan`) applies to **all** Tertiary
> Infotech Academy WSQ courseware design — not just one course. Swap in the relevant course
> title, TGS code and content; keep the house format below.

House format for Tertiary Infotech Academy WSQ **Learner Guide** documents. The deliverable
is a Microsoft Word `.docx`. Build the body in Markdown, then wrap it with the cover,
version-control record and a live Word TOC field (see [Build method](#build-method)).

## Organisation constants

- Organisation name: **Tertiary Infotech Academy Pte Ltd**
- UEN: **201200696W**
- Contact: enquiry@tertiaryinfotech.com · +65 6100 0613 · www.tertiarycourses.com.sg
- LMS (courseware + assessment): **https://lms-tms.tertiaryinfotech.com/**

## Document structure (in order)

1. **Cover page** (all centred, single page, then a page break):
   - Organisation name — 13 pt bold
   - `UEN: 201200696W` — 10 pt
   - **LEARNER GUIDE** — 26 pt bold
   - `For` — 12 pt
   - Course title — 20 pt bold
   - `TGS Ref No: <code>` — 12 pt
   - `Conducted by` — 12 pt
   - Organisation name — 13 pt bold
   - `UEN: 201200696W` — 10 pt
   - `Version <x.y>` — 12 pt bold
2. **DOCUMENT VERSION CONTROL RECORD** (bold heading + bordered table, then page break).
   Columns: **Version Number | Effective Date of Release | Summary of Included Changes | Author**.
   One row per revision; use absolute dates.
3. **TABLE OF CONTENTS** (bold heading + a Word TOC field `TOC \o "1-3" \h \z \u`, then a
   page break). Set `w:updateFields val="true"` so Word builds it on open.
4. **Body** (uses Heading 1/2/3 styles so the TOC builds, ideally two levels: Topics and
   Activities):
   - **How to Use This Guide** — short intro + what learners need before starting.
   - **Topic sections** (Heading 1 per topic) with numbered sub-sections (Heading 2/3) for
     concepts.
   - **Step-by-step Activities** (Heading 2) — each activity has a one-line **Goal**, then a
     numbered **Step-by-step** list. Include exact commands, file paths and code blocks the
     learner runs. Where a long prompt or file is needed (e.g. a build prompt or a command
     file), include it verbatim in a block quote or fenced code block.
   - **Quick Command Reference** — a two-column table of commands and what they do.
   - **Support** — contact details, LMS link, and the **assessment flow**.

## Assessment flow (include near the end)

Show the order learners follow at the assessment step:

1. **TRAQOM** — scan the TRAQOM QR code on the LMS and complete the survey.
2. **Assessment Digital Attendance**.
3. **Assessment** (Written Assessment + Practical Performance).
4. **Submit the assessment answers** on the LMS.
5. **Sign the Assessment Summary Record**.

Courseware and the assessment are on the LMS (https://lms-tms.tertiaryinfotech.com/).
For assessment timings (one-day vs two-day) see the **wsq-lesson-plan** / **wsq-slides** skills.

## Formatting rules

- **Prose prompts are NOT code.** When a step says "ask Claude …", write the prompt as a
  **block quote** (`> …`) or plain text on a single line — never inside a fenced code block.
  Fenced code blocks render in a monospace font that does not word-wrap, so in Word long
  prompts break mid-word (e.g. "val\nid"). Block quotes wrap cleanly.
- **Use fenced code blocks ONLY for real code** — shell commands, JSON/YAML, file contents
  (e.g. `CLAUDE.md`, a `.claude/commands/*.md` file, a settings snippet). Keep these lines
  short so they don't wrap awkwardly.
- Keep one consistent style across every activity in the document.

## Build method

1. Write the body in Markdown (`Learner-Guide.md`) starting at `## How to Use This Guide`
   (no cover/title block in the body).
2. `pandoc Learner-Guide.md -o body.docx` for Heading-styled body content.
3. With `python-docx`, build a front-matter doc: cover page, version-control table, and a
   TOC field (raw OOXML `w:fldChar`/`w:instrText`).
4. Merge with **docxcompose** (`Composer(front).append(body)`), set `updateFields`, save.
5. Also keep the Markdown source alongside the `.docx` for easy editing.
6. QA by converting to PDF and checking the cover, version table, TOC page and activity
   formatting render correctly.

Write activities so a learner can follow them click-by-click; prefer concrete commands and
expected results over prose. Keep formatting clean and consistent with the project `template/`.
