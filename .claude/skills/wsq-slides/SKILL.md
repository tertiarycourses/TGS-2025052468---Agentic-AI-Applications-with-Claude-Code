---
name: wsq-slides
description: >
  Generate or revamp WSQ courseware slide decks for Tertiary Infotech Academy Pte Ltd.
  Use whenever building, revamping, or standardising a WSQ training PowerPoint (.pptx).
  Enforces the house standards: copyright line, organisation name + UEN on the front
  page, two "About the Trainer" variants (a blank General Trainer template and the
  named trainer), and the correct admin slide order (Briefing for Assessment before
  the Assessment slide), plus a Lesson Plan slide.
---

# WSQ Slides Skill

> **Scope:** This skill (with `wsq-learner-guide` and `wsq-lesson-plan`) applies to **all**
> Tertiary Infotech Academy WSQ courseware design — not just one course. Swap in the relevant
> course title, TGS code and content; keep the house standard below.

House standard for Tertiary Infotech Academy WSQ courseware decks. Apply ALL of the
rules below to every WSQ slide deck you create or revamp.

## Organisation constants

- Organisation name: **Tertiary Infotech Academy Pte Ltd**
- UEN: **201200696W**
- Copyright line (footer of every slide): **© Tertiary Infotech Academy Pte Ltd**
- Contact: enquiry@tertiaryinfotech.com · +65 6100 0613 · www.tertiarycourses.com.sg
- LMS (courseware download + assessment): **https://lms-tms.tertiaryinfotech.com/**

## Required elements

1. **Copyright on every slide.** Put `© Tertiary Infotech Academy Pte Ltd` in the
   footer of every slide (title, dividers, content, activity and closing slides).

2. **Front / title page.** Show the course title, course code, trainer name, version,
   and the **organisation name + UEN** clearly on the title slide.

3. **About the Trainer — two slides.**
   - A **General Trainer** template with the info left blank (placeholder fields:
     name, title, qualifications, expertise, experience, contact) so any trainer can
     fill it in.
   - The **named trainer** (e.g. Dr. Alfred Ang) with full details.

4. **Admin slide order.** The **Briefing for Assessment** slide must come **before**
   the **Assessment / Final Assessment** slide.

5. **Lesson Plan slide.** Include a Lesson Plan slide showing the day's schedule
   (e.g. a time/session table, typically 9:00 AM – 6:00 PM with breaks). Follow the
   [Lesson plan & assessment scheduling](#lesson-plan--assessment-scheduling) rules below.

6. **Standard admin slides** to include where relevant: Digital Attendance,
   About the Trainer (×2), Learner Introduction, Ground Rules, Course Outline,
   Lesson Plan, Briefing for Assessment, Assessment & Funding, and a closing
   Certification & TRAQOM survey slide (ai-lms-tms.tertiaryinfo.tech).

7. **LMS slide.** Include a slide telling learners to **download the courseware**
   and **complete the assessment on the LMS** at **https://lms-tms.tertiaryinfotech.com/**.
   Place it near the end (e.g. before the Certification & TRAQOM survey slide).

8. **Assessment flow.** At the assessment step, show the procedure in this order:
   (1) TRAQOM (scan the QR code on the LMS) → (2) Assessment Digital Attendance →
   (3) Assessment → (4) Submit the assessment answers on the LMS →
   (5) Sign the Assessment Summary Record. The TRAQOM QR code and the assessment
   submission are both on the LMS (https://lms-tms.tertiaryinfotech.com/).

## Recommended canonical order

1. Title (with org name + UEN)
2. Digital Attendance
3. About the Trainer — General (blank template)
4. About the Trainer — Named trainer
5. Learner Introduction ("Let's know each other")
6. Ground Rules
7. Course Outline
8. Lesson Plan
9. Briefing for Assessment
10. Assessment & Funding
11. … topic content + activities …
12. Summary & Q&A
13. Courseware & Assessment on the LMS (download courseware, take assessment)
14. Certification & TRAQOM survey
15. Thank You

## Lesson plan & assessment scheduling

Every class ends at **6:00 PM**. Schedule the teaching content and activities to finish
before the assessment start time, then place the assessment at the end.

- **One-day class:** a **1-hour** assessment starts at **5:00 PM** (5:00 – 6:00 PM),
  made up of **30 min Written Assessment (WA) + 30 min Practical Performance (PP)**.
  Content and wrap-up must finish by 5:00 PM.
- **Two-day class:** a **2-hour** assessment starts at **4:00 PM** on the final day
  (4:00 – 6:00 PM), made up of **1 hr Written Assessment (WA) + 1 hr Practical
  Performance (PP)**. Content and wrap-up must finish by 4:00 PM.

To free up the time needed for the assessment block, you may compress the breaks:

- **Morning / afternoon breaks:** reduce to **10 minutes** each.
- **Lunch break:** reduce to **45 minutes**.

Always show the assessment block explicitly on the Lesson Plan slide (and in any
Lesson Plan document) with its start and end time.

## Design notes

- Build with `pptxgenjs` (LAYOUT_WIDE / 16:9). See the `pptx` skill for mechanics.
- Keep a clean, modern look: dark title/divider slides, light content slides,
  one accent colour, icon chips as the repeating motif. No accent stripes/bars.
- Safe fonts: Cambria (headers) + Calibri (body); Courier New for code.
- Always run visual QA (render to images, inspect) before delivering.
