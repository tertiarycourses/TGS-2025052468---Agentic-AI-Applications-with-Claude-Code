---
name: wsq-lesson-plan
description: >
  Create a WSQ Lesson Plan document (.docx) for Tertiary Infotech Academy Pte Ltd in
  the house template format. Use when building, revamping or standardising a WSQ lesson
  plan. Enforces the cover page, Document Version Control Record, Word Table of Contents
  field, the day schedule table, and the assessment scheduling rules.
---

# WSQ Lesson Plan Skill

> **Scope:** This skill (with `wsq-slides` and `wsq-learner-guide`) applies to **all**
> Tertiary Infotech Academy WSQ courseware design — not just one course. Swap in the relevant
> course title, TGS code and content; keep the house format below.

House format for Tertiary Infotech Academy WSQ **Lesson Plan** documents. The deliverable
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
   - **LESSON PLAN** — 26 pt bold
   - `For` — 12 pt
   - Course title — 20 pt bold
   - `TGS Ref No: <code>` — 12 pt
   - `Conducted by` — 12 pt
   - Organisation name — 13 pt bold
   - `UEN: 201200696W` — 10 pt
   - `Version <x.y>` — 12 pt bold
2. **DOCUMENT VERSION CONTROL RECORD** (bold heading + bordered table, then page break).
   Columns: **Version Number | Effective Date of Release | Summary of Included Changes | Author**.
   One row per revision; convert relative dates to absolute (e.g. "27 Jun 2026").
3. **TABLE OF CONTENTS** (bold heading + a Word TOC field `TOC \o "1-3" \h \z \u`, then a
   page break). Set `w:updateFields val="true"` so Word offers to build it on open.
4. **Body** (uses Heading 1/2/3 styles so the TOC builds):
   - **Course Overview** — 1–2 sentences on the course.
   - **Learning Outcomes** — bulleted, "By the end of this course, participants will be able to…".
   - **Daily Schedule** — a table: **Time | Duration | Topic / Activity | Method**. Show
     breaks and the assessment block explicitly. For a one-day class use 9:00 AM – 6:00 PM.
   - **Topic-by-topic breakdown** — Heading 1 per topic, with sub-points and activities.
   - **Resources Required** — bulleted.
   - **Assessment** — WA + PP timings, start time, open-book, funding criteria, and the LMS link.

## Assessment scheduling (must match the deck / wsq-slides skill)

- Every class ends at **6:00 PM**. Schedule content to finish before the assessment.
- **One-day class:** 1-hour assessment at **5:00 PM** = **30 min WA + 30 min PP**.
- **Two-day class:** 2-hour assessment at **4:00 PM** on the final day = **1 hr WA + 1 hr PP**.
- To make room, breaks may be **10 min** and lunch **45 min**.
- Show the assessment block on the schedule table with its start and end time.
- Courseware and the assessment are on the LMS (https://lms-tms.tertiaryinfotech.com/).

See the **wsq-slides** skill for the slide-deck equivalents and the assessment flow
(TRAQOM → Attendance → Assessment → Submit answers → Sign the record).

## Build method

1. Write the body in Markdown (`Lesson-Plan.md`) starting at `## Learning Outcomes`
   (no cover/title in the body — the cover is generated separately).
2. `pandoc Lesson-Plan.md -o body.docx` to get Heading-styled body content.
3. With `python-docx`, build a front-matter doc: cover page, version-control table, and a
   TOC field (raw OOXML `w:fldChar`/`w:instrText`).
4. Merge with **docxcompose** (`Composer(front).append(body)`), set `updateFields`, save.
5. QA by converting to PDF and checking the cover, version table and page breaks render.

Keep prose clean: no decorative formatting; mirror the wording style of the existing
`template/` documents in the project.
