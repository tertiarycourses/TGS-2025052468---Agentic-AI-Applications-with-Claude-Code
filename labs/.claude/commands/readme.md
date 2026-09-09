---
description: Generate or refresh README.md with tech badges, live demo, Playwright screenshots, file structure, project description, and how to start.
---

# /readme

Generate or refresh the project's `README.md`. Inspect the codebase first, then write a complete README in this exact section order.

## 1. Title and tagline

- `# <Project Name>` derived from the folder name or `package.json`.
- One-line tagline describing what it does.

## 2. Tech badges

Use shields.io flat-square badges for the actual tech detected in the project. Examples:

```markdown
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)
```

Pick badges that match what's actually used (HTML, CSS, JS, React, Node, Tailwind, etc.).

## 3. Live demo

- If GitHub Pages is enabled, fetch the URL with `gh api repos/{owner}/{repo}/pages` and link it as **Live Demo**.
- If a Vercel/Netlify URL is configured (check `.vercel`, `vercel.json`, repo homepage), use that.
- If none, skip this section gracefully.

## 4. Screenshots (via Playwright MCP)

- Start the local server if it isn't running (`npx serve` or whatever `package.json` defines).
- Use Playwright MCP to navigate to the local URL.
- Take **two** screenshots: desktop (1280×800) and mobile (375×812). Save to `screenshots/desktop.png` and `screenshots/mobile.png`.
- Embed both:
  ```markdown
  ## Screenshots
  ![Desktop](screenshots/desktop.png)
  ![Mobile](screenshots/mobile.png)
  ```

## 5. About this project

2–4 sentences explaining what the project is, who it's for, and the main user value. Derive from the actual code — don't invent features.

## 6. File structure

A short tree of the top-level files and folders, each with a one-line description:

```
project/
├── index.html        # Main page
├── style.css         # Styles
├── app.js            # Application logic
├── .claude/          # Project agents, commands, hooks, skills
└── README.md
```

## 7. How to start the app

Detect the project type and give exact commands:

- **Static site:** `npx serve` → open `http://localhost:3000`
- **Node/npm:** `npm install && npm run dev`
- **Python:** `pip install -r requirements.txt && python main.py`

Include any required environment variables (reference `.env.example` if present).

## 8. License

Read `LICENSE` if present, otherwise write `MIT` or ask the user.

---

## Output rules

- Keep it concise — no filler.
- No emojis unless the project already uses them.
- If `README.md` already exists, preserve any custom sections the user has added (anything between `<!-- preserve -->` and `<!-- /preserve -->` markers).
- Do **not** commit or push — that's the `/github-push` command's job.
