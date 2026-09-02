<div align="center">

# 🤖 WSQ – Agentic AI Applications with Claude Code

**Go from a plain-English goal to a deployed, tested application — in one day.**

[![Register](https://img.shields.io/badge/📝_Register-Enrol_Now-D97757?style=for-the-badge)](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-claude-code.html)
[![WSQ Funded](https://img.shields.io/badge/WSQ-SkillsFuture_Funded-3A7D7B?style=flat-square)](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-claude-code.html)
[![Course Code](https://img.shields.io/badge/TGS-2025052468-21201C?style=flat-square)](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-claude-code.html)
[![Duration](https://img.shields.io/badge/Duration-1_Day_(8h)-6B6862?style=flat-square)](#course-details)
[![Level](https://img.shields.io/badge/Level-Beginner_to_Intermediate-6B6862?style=flat-square)](#course-details)
[![Assessment](https://img.shields.io/badge/Assessment-WA_%2B_PP-6B6862?style=flat-square)](#course-details)

**[📝 Register for this course →](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-claude-code.html)**

</div>

---

## About This Course

A hands-on, one-day WSQ course on building real applications with **Claude Code**, Anthropic's agentic coding tool. Learners go from a plain-English goal to a deployed, tested website using the agentic loop, context engineering, custom slash commands, MCP tools, agent skills, sub agents and hooks.

The course is practical throughout — every topic is followed immediately by a lab — and closes with a **mini-capstone project** that each learner builds, tests and presents. It suits developers, technical professionals and technically-minded non-developers who want to work productively with an AI coding agent.

## Learning Outcomes

By the end of this course, learners will be able to:

| # | Learning Outcome |
|---|---|
| **LO1** | Explain the agentic loop and apply context-engineering techniques in Claude Code. |
| **LO2** | Create custom slash commands and connect MCP tools to extend Claude Code. |
| **LO3** | Use agent skills, sub agents and hooks to automate specialised tasks. |
| **LO4** | Build, deploy, test, secure and optimise a real website end-to-end with Claude Code. |

## Course Topics & Labs

| Topic | Covers | Labs |
|---|---|---|
| **1 — Claude Code Fundamentals** | Setup (Terminal, VS Code, Desktop); the agentic loop & built-in tools; context engineering and the context window (`/context`, `/compact`, `/clear`); memory files (`CLAUDE.md` vs auto memory, `/init`, `/memory`); permission modes and the dangers of bypass permissions; sessions, scheduled tasks (Routines) and `/goal`; the 7-step build workflow. | **Activity 1** — Build & deploy a website (Steps 1–7) |
| **2 — Tools and Commands** | The `.claude` directory; custom slash commands and arguments; MCP architecture and connecting servers; Playwright MCP. | **Activity 2** — Create a `/gitpush` command<br>**Activity 3** — Install & use Playwright MCP<br>**Activity 3B** — Test the enquiry form |
| **3 — Skills, Agents & Hooks** | Agent skills and installation; `SKILL.md` vs `CLAUDE.md`; sub agents and agent teams; hooks; the mini-capstone. | **Activity 4** — Install & run skills<br>**Activity 5** — Create custom sub agents<br>**Activity 6 / Mini Capstone** — Test, convert & present |

> Lab files are maintained in a separate repository so learners can clone them independently.

## Tools Used

| Tool | Purpose |
|---|---|
| [Claude Code](https://claude.com/claude-code) | The agentic coding tool used throughout the course |
| [VS Code](https://code.visualstudio.com/) | Primary IDE for the labs |
| [Node.js](https://nodejs.org/) | Runtime for local dev servers and tooling |
| [GitHub](https://github.com/) | Version control, GitHub Pages deployment and CI/CD |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Browser automation for testing the built site |
| [LMS-TMS](https://lms-tms.tertiaryinfotech.com/) | Courseware delivery and assessment |

## Repository Structure

```
.
├── courseware/                  # Trainer & learner materials (DOCX + PDF/PPTX only)
│   ├── Agentic AI Applications with Claude Code - v14.pptx   # Slide deck (66 slides)
│   ├── Agentic AI Applications with Claude Code - v14.pdf
│   ├── LG-Agentic AI Applications with Claude Code.docx      # Learner Guide  (v1.3)
│   ├── LG-Agentic AI Applications with Claude Code.pdf
│   ├── LP-Agentic AI Applications with Claude Code.docx      # Lesson Plan    (v1.4)
│   └── LP-Agentic AI Applications with Claude Code.pdf
├── .claude/skills/              # House courseware build skills
│   ├── wsq-slides/              #   slide deck generator (+ reference/ build pipeline)
│   ├── wsq-learner-guide/       #   Learner Guide generator
│   ├── wsq-lesson-plan/         #   Lesson Plan generator
│   └── assets/                  #   branding assets
└── README.md
```

> **Note:** the confidential `assessment/` folder (question papers and answer keys) and the `labs/` working repository are **deliberately excluded** from this repository.

## Course Details

| | |
|---|---|
| **Course Title** | WSQ – Agentic AI Applications with Claude Code |
| **TGS Reference** | TGS-2025052468 |
| **Duration** | 1 day (8 hours, 9:00 AM – 6:00 PM) |
| **Level** | Beginner to Intermediate |
| **Assessment** | Written Assessment (30 min) + Practical Performance (30 min) — both open book, on the LMS |
| **Mode** | Classroom / synchronous e-learning, hands-on |
| **Certification** | WSQ Statement of Attainment (SOA) |
| **Provider** | Tertiary Infotech Academy Pte Ltd (UEN 201200696W) |

### Funding

This course is **WSQ-funded and SkillsFuture claimable**. To qualify for funding, learners must achieve a **minimum 75% attendance** and be assessed as **Competent**. For current subsidy rates and eligibility, see the [course registration page](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-claude-code.html).

## Building the Courseware

All artifacts are generated from a single source so the deck, Lesson Plan and Learner Guide can never drift apart:

```bash
# Regenerate everything (slide deck, Lesson Plan, Learner Guide)
bash .claude/skills/wsq-slides/reference/build_courseware.sh

# Or build individually
python3 .claude/skills/wsq-slides/reference/build_slides.py
python3 .claude/skills/wsq-slides/reference/build_lesson_plan.py
python3 .claude/skills/wsq-slides/reference/build_learner_guide.py
```

Each regeneration bumps the artifact version and adds a row to the Document Version Control Record.

## Contact

**Tertiary Infotech Academy Pte Ltd** · UEN 201200696W

- 🌐 [Course page & registration](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-claude-code.html)
- 📧 enquiry@tertiaryinfotech.com
- ☎️ +65 6100 0613
- 🎓 [LMS-TMS](https://lms-tms.tertiaryinfotech.com/) — courseware & assessment

---

<div align="center">

### Ready to build with Claude Code?

**[📝 Register for this course →](https://www.tertiarycourses.com.sg/wsq-agentic-ai-applications-with-claude-code.html)**

© 2026 Tertiary Infotech Academy Pte Ltd · UEN 201200696W

</div>
