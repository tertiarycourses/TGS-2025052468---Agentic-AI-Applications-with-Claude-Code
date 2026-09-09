# Agentic AI Applications with Claude Code (TGS-2025052468)

## Step-by-Step Learner Activities

---

## Topic 1: Claude Code Fundamentals

### Activity 1.1: Install the Claude Code Extension on VS Code

**Objective:** Get Claude Code working inside VS Code — the easiest way to start.

**Steps:**

1. Open VS Code.
2. Open the Extensions sidebar (`Cmd+Shift+X` on Mac, `Ctrl+Shift+X` on Windows).
3. Search for **Claude Code** (publisher: Anthropic) and click **Install**.
4. Click the Claude Code icon in the activity bar — a sign-in prompt appears.
5. Sign in with your Anthropic account (Claude.ai subscription or API key).
6. Optional: right-click the Claude Code icon → **Move to Secondary Side Bar** so it lives on the right.

**Checkpoint:** The Claude Code panel is open and ready to chat in VS Code.

---

### Activity 1.2: Install Claude Code in the Terminal

**Objective:** Install the Claude Code CLI so you can run `claude` from any terminal.

**Steps:**

1. Make sure Node.js (LTS) is installed. Check with:
   ```bash
   node --version
   ```
   If missing, download from https://nodejs.org.

2. Install Claude Code globally:
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```

3. Verify:
   ```bash
   claude --version
   ```

4. Launch it from a project folder:
   ```bash
   claude
   ```

**Windows note:** if `claude` is not recognized after install, close and reopen PowerShell. If still missing, add `%APPDATA%\npm` to your PATH.

**Checkpoint:** `claude --version` prints a version number.

---

### Activity 1.3: Create the Project Folder and `.claude` Structure

**Objective:** Set up a clean project for the bride-booking app.

**Steps:**

1. Create the project folder and open it in VS Code:
   ```bash
   mkdir bride-booking
   cd bride-booking
   code .
   ```

2. In Claude Code, ask:
   ```
   Create folders .claude/agents, .claude/commands, .claude/hooks, and .claude/skills
   ```

**Checkpoint:** All four folders exist under `.claude/`.

---

### Activity 1.4: Build the Bride-Booking Landing Page

**Objective:** Use Claude Code to build a single-page bridal photography booking website with a booking form.

**Steps:**

1. In Claude Code, paste this prompt:
   ```
   Build a single-page bridal photography booking website in one index.html file
   (HTML + CSS + JS inline). Sections: Hero, About, Packages (3 cards), Gallery,
   Booking Form, Contact. The booking form fields: Full Name, Email, Phone,
   Preferred Date, Preferred Time, Package, Location, Number of People, Message.
   On submit, POST as JSON to https://formsubmit.co/ajax/your-email@example.com
   and show a success message. Use placeholder images from Unsplash.
   Style: elegant, romantic, blush pink + gold accents.
   ```

2. Open the page directly in your browser — it's pure static HTML, no server needed:
   - Mac: `open index.html`
   - Windows: `start index.html`
   - Or just double-click the file in Finder / Explorer

3. Test by submitting a booking — you should see a success message.

**Checkpoint:** The landing page loads and the booking form works.

---

### Activity 1.5: Generate `CLAUDE.md` with `/init`

**Objective:** Create a project memory file so Claude understands the project in future sessions.

**Steps:**

1. In Claude Code, run:
   ```
   /init
   ```

2. Review the generated `CLAUDE.md` — it should describe the bride-booking site, its sections, and the form flow.

**Checkpoint:** `CLAUDE.md` exists and accurately describes the project.

---

### Activity 1.6: Memory Management Commands

**Objective:** Learn the everyday memory commands.

Try each one in Claude Code:

| Command | What it does |
|---------|--------------|
| `/clear` | Wipes the current conversation |
| `/compact` | Summarises the conversation to free up context |
| `/new` | Starts a fresh conversation in the same session |
| `/resume` | Reopens your previous conversation |
| `/rewind` | Reverts the conversation (and file edits) to an earlier checkpoint |

**Checkpoint:** You can describe when to use each one.

---

### Activity 1.7: Push the Project to GitHub

**Objective:** Publish the bride-booking project to your own GitHub repo.

**Steps:**

1. Install Git and GitHub CLI if you haven't:
   - Mac: `brew install git gh`
   - Windows: `winget install Git.Git` and `winget install GitHub.cli`

2. Configure Git once:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your@email.com"
   ```

3. Sign in to GitHub:
   ```bash
   gh auth login
   ```
   Choose **GitHub.com → HTTPS → Login with a web browser**, then paste the code shown in the terminal into the browser page that opens.

4. Create `.gitignore` to keep secrets out:
   ```
   .env
   .mcp.json
   node_modules/
   .DS_Store
   ```

5. Initialise, commit, and push in one go:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: bride-booking site"
   gh repo create bride-booking --public --source=. --push
   ```

6. Open the new repo in your browser:
   ```bash
   gh repo view --web
   ```

**Checkpoint:** Your repo is live on GitHub and `.env` / `.mcp.json` are excluded.

---

## Topic 2: Tools and Commands

### Activity 2.1: Custom `/readme` Slash Command

**Objective:** Create a reusable `/readme` slash command that generates a polished `README.md` — including tech badges, a live demo link, Playwright screenshots, file structure, project description, and how-to-start instructions.

**Steps:**

1. In Claude Code, paste this prompt to create the command file:

   **Prompt:**
   ```
   Create .claude/commands/readme.md as a custom slash command that
   generates or refreshes README.md with these sections in order:
   1. Title + one-line tagline
   2. Tech badges (shields.io flat-square) for the actual stack
   3. Live Demo link (read GitHub Pages URL via gh api)
   4. Screenshots — use Playwright MCP to take desktop (1280x800)
      and mobile (375x812) shots, save under screenshots/
   5. About this project — 2-4 sentences
   6. File structure — short tree with one-line descriptions
   7. How to start the app — exact commands for the detected stack
   8. License
   The command should NOT commit or push.
   ```

2. The page is just `index.html` — Playwright will open it directly via `file://` (no server needed).

3. Run it:
   ```
   /readme
   ```

4. Review the generated `README.md` and the screenshots under `screenshots/`.

**Checkpoint:** A complete `README.md` exists with badges, live-demo link, both screenshots, file tree, and start commands.

---

### Activity 2.2: Custom `/github-push` Slash Command (Calls `/readme` + GitHub Pages via Actions)

**Objective:** Create a `/github-push` slash command that:

1. Calls `/readme` to refresh the README
2. Adds a GitHub Actions workflow that deploys to GitHub Pages on every push
3. Commits, pushes, enables Pages, and updates the repo description / topics / homepage

**Steps:**

1. In Claude Code, paste this prompt to create the command file:

   **Prompt:**
   ```
   Create .claude/commands/github-push.md as a custom slash command that:
   1. Runs pre-flight safety checks (.gitignore, secret scan)
   2. Invokes the project /readme command to refresh README.md
   3. Creates .github/workflows/deploy.yml using actions/deploy-pages@v4
      (so GitHub Pages is built by GitHub Actions on every push to main)
   4. Commits all changes with a clear message and pushes to origin
   5. Enables GitHub Pages with build_type=workflow via gh api
   6. Sets repo description, topics, and homepage URL via gh repo edit
   7. Prints the live GitHub Pages URL
   ```

2. Run it:
   ```
   /github-push
   ```

3. Watch Claude:
   - Run `/readme` first to refresh the README + screenshots
   - Create `.github/workflows/deploy.yml`
   - Commit and push
   - Enable Pages and update the repo About section
   - Print the live URL

4. Open the live URL — it should show the bride-booking site (give the first deploy ~1 minute).

**Checkpoint:** The site is live on GitHub Pages, the README has badges + screenshots + a working live-demo link, and the repo About section shows the description, topics, and homepage URL.

---

### Activity 2.3: Auto-Fill and Submit the Booking Form with Playwright MCP

**Objective:** Use the Playwright MCP server to drive a real browser — open the bride-booking page, fill the booking form, and submit it.

**Steps:**

1. Create `.mcp.json` in the project root:
   ```json
   {
     "mcpServers": {
       "playwright": {
         "command": "npx",
         "args": ["@playwright/mcp@latest"]
       }
     }
   }
   ```

2. Restart Claude Code so it loads the MCP server.

3. In Claude Code, ask:
   ```
   Use Playwright MCP to:
   1. Open the local index.html file (use file:// path)
   2. Scroll to the booking form
   3. Fill in: Full Name "Jane Tan", Email "jane@example.com",
      Phone "98765432", Preferred Date next Saturday, Preferred Time "2pm",
      Package "Premium Pre-Wedding Shoot", Location "Gardens by the Bay",
      Number of People "2", Message "Looking forward to it!"
   4. Click Submit
   5. Take a screenshot of the success message
   ```

4. Watch Claude operate the browser and confirm the success state.

**Checkpoint:** The form was filled and submitted by Playwright, and a confirmation screenshot was captured.

---

## Topic 3: Skills and Agents

### Activity 3.1: Add a Project-Level Frontend-Design Skill (Rustic Retro Ero)

**Objective:** Create a project-scoped skill at `.claude/skills/frontend-design/` that redesigns the bride-booking site in a **rustic retro Ero** style — sepia palette, vintage serif type, aged paper textures, wax-seal buttons.

**Steps:**

1. In Claude Code, paste this prompt to create the skill file:

   **Prompt:**
   ```
   Create .claude/skills/frontend-design/SKILL.md as a project-level skill.
   Frontmatter: name "frontend-design", description that triggers on the words
   rustic / retro / Ero / vintage / old-world.
   Body should describe a rustic retro Ero aesthetic:
   - Palette: sepia, cream, weathered ivory, dusty rose, faded gold, walnut
   - Vintage serif headings (Playfair Display) + typewriter body (Special Elite)
   - Aged paper background, subtle grain, vignette
   - Hand-drawn floral flourishes, art-nouveau dividers
   - Sepia/duotone filter on gallery images, slight tilt for Polaroid feel
   - Wax-seal style buttons
   Include implementation steps that use Playwright MCP to screenshot before/after.
   ```

2. Restart Claude Code so it picks up the new skill.

3. Verify it loaded:
   ```
   What skills are available?
   ```
   You should see `frontend-design` in the list.

4. Invoke the skill — Playwright will open `index.html` directly:
   ```
   Use the frontend-design skill to redesign the bride-booking
   index.html in a rustic retro Ero style.
   ```

5. Review the before/after screenshots Claude produces and the CSS changes applied.

**Checkpoint:** The bride-booking site now has a sepia, vintage, paper-textured look — and the booking form still works.

---

### Activity 3.2: Create a UX/UI Agent — Oriental Chinese Purple Redesign

**Objective:** Build a custom UX/UI agent at `.claude/agents/ux-reviewer.md` and use it to redesign the bride-booking site in an oriental Chinese style with a purple palette.

**Steps:**

1. Ask Claude Code to create the agent file:

   **Prompt:**
   ```
   Create .claude/agents/ux-reviewer.md as a project-level agent.
   Frontmatter:
     name: ux-reviewer
     description: UX/UI design agent specialising in oriental Chinese aesthetics
                  with a purple palette. Use when the user asks for an oriental,
                  Chinese, purple, or eastern-inspired UI redesign.
     tools: all
   Body — instruct the agent to:
   - Use Playwright MCP to screenshot the page first
   - Apply a purple-dominant palette (deep violet, plum, lavender) with gold accents
   - Add Chinese-inspired motifs: cloud patterns, lattice borders, jade tones
   - Use a serif display font with a hint of brush-stroke feel for headings
   - Add subtle red double-happiness or floral accents on package cards
   - Maintain elegance, romance, and full responsiveness (375 / 768 / 1024)
   - Output concrete CSS/HTML edits and apply them
   - Take an after-screenshot for comparison
   ```

   *Alternative:* you can also create it interactively via `/agents` → **Create a new agent**.

2. Restart Claude Code so the agent loads, then verify:
   ```
   /agents
   ```
   `ux-reviewer` should appear in the list.

3. Invoke the agent — Playwright will open `index.html` directly:

   **Prompt:**
   ```
   @ux-reviewer Redesign the bride-booking index.html with an
   oriental Chinese style and a purple palette.
   ```

4. Review the changes by reopening `index.html` in your browser.

**Checkpoint:** The site shows a purple oriental redesign and still works on mobile.

---

### Activity 3.3: Pre- and Post-Submit Hooks for the Booking Form

**Objective:** Add two project-level hooks under `.claude/hooks/`:

1. **PreToolUse** — validates the booking form data before the browser submits it.
2. **PostToolUse** — when the submission succeeds, plays a sound and uses TTS to announce *"Hurray, your form is submitted"*.

Both hooks are registered in `.claude/settings.json` and matched on Playwright MCP tool calls.

**Steps:**

**Part A — Create the validation pre-hook:**

1. Paste this prompt to create the validation script:

   **Prompt:**
   ```
   Create .claude/hooks/validate-booking.js that:
   - Reads tool input from stdin as JSON
   - If the input mentions booking-form fields (Full Name, Preferred Date, etc.),
     check: Full Name non-empty, Email matches an email regex, Phone has 8+ digits,
     Preferred Date is today or later, Number of People is a positive integer
   - On failure, print errors to stderr and exit with code 2 to block the tool call
   - Otherwise pass input through unchanged
   ```

**Part B — Create the success-celebration post-hook:**

2. Paste this prompt to create the TTS script:

   **Prompt:**
   ```
   Create .claude/hooks/booking-success-tts.sh that:
   - Reads stdin
   - If the output mentions a successful booking submission
     (e.g. "success", "thank you", "booking confirmed")
   - Play /System/Library/Sounds/Glass.aiff with afplay
   - Use `say -v Samantha "Hurray, your form is submitted"` for TTS
   - Always pass the original output through unchanged
   Make the script executable.
   ```

3. Make the shell script executable:
   ```bash
   chmod +x .claude/hooks/booking-success-tts.sh
   ```

**Part C — Register both hooks:**

4. Paste this prompt to register both hooks:

   **Prompt:**
   ```
   Create .claude/settings.json that registers:
   - PreToolUse hook on matcher "mcp__playwright" running
     "node $CLAUDE_PROJECT_DIR/.claude/hooks/validate-booking.js"
   - PostToolUse hook on matcher "mcp__playwright" running
     "bash $CLAUDE_PROJECT_DIR/.claude/hooks/booking-success-tts.sh"
   ```

5. Restart Claude Code so both hooks load. Verify:
   ```
   /hooks
   ```
   Both should be listed.

**Part D — Test the full pipeline:**

6. Test the **pre-hook** with bad data:
   ```
   Use Playwright to fill the booking form with an empty Full Name and submit it.
   ```
   The hook should block the submission and print validation errors.

7. Test the **post-hook** with valid data:
   ```
   Use Playwright to fill the booking form with valid details and submit it.
   ```
   You should hear the Glass sound and Samantha saying *"Hurray, your form is submitted"*.

**Checkpoint:** Invalid bookings are blocked; successful bookings trigger the sound + TTS announcement.

---

### Activity 3.4: Git Worktrees — Three Parallel Improvements

**Objective:** Use Git worktrees to develop three improvements to the bride-booking site in parallel and merge them.

**Steps:**

1. Commit the current state:
   ```bash
   git add . && git commit -m "Base bride-booking site"
   ```

2. Create three worktrees, each on its own branch:
   ```bash
   git worktree add .trees/hero -b hero
   git worktree add .trees/gallery -b gallery
   git worktree add .trees/mobile -b mobile
   ```

3. Open each folder in a new VS Code window (`code .trees/hero`, etc.) and run Claude Code there with its own task:

   - **hero:** "Add a parallax effect and a video background option to the hero section."
   - **gallery:** "Turn the gallery into a lightbox carousel with keyboard navigation."
   - **mobile:** "Make the navigation a smooth-animating hamburger menu and ensure all sections look great at 375px width."

4. Commit in each worktree.

5. Back in the main folder, ask Claude Code:
   ```
   Merge the branches hero, gallery, and mobile into main.
   Resolve any conflicts.
   ```

6. Clean up:
   ```bash
   git worktree remove .trees/hero
   git worktree remove .trees/gallery
   git worktree remove .trees/mobile
   ```

**Checkpoint:** All three improvements are merged into `main`.

---

### Activity 3.5: GitHub Issues → Pull Requests with `@claude`

**Objective:** Install the Claude GitHub App and let Claude fix an issue automatically by tagging `@claude`.

**Steps:**

1. Install the app at https://github.com/apps/claude and grant access to your `bride-booking` repo.

2. In the repo, add a workflow file `.github/workflows/claude.yml` (Claude Code can write this for you):
   ```
   Create .github/workflows/claude.yml that runs the
   anthropics/claude-code-action@v1 on issue comments and PRs that mention @claude.
   ```

3. Set the auth secret on the repo:
   ```bash
   gh secret set CLAUDE_CODE_OAUTH_TOKEN
   ```
   Get the token by running `claude setup-token` locally.

4. Commit and push the workflow.

5. Create an issue:
   ```bash
   gh issue create --title "Add testimonials section" \
     --body "Add a testimonials section with 3 client quotes between Gallery and Booking Form."
   ```

6. On the issue page, comment:
   ```
   @claude please implement this
   ```

7. Wait — Claude will create a branch, push the change, and open a pull request linked to the issue.

8. Review and merge the PR.

**Checkpoint:** The issue is closed by a Claude-authored PR that's merged into `main`.

---

## Summary

| Activity | Topic | Key Skill |
|---|---|---|
| 1.1 | VS Code Extension | Install Claude Code in VS Code |
| 1.2 | Terminal CLI | Install `claude` CLI |
| 1.3 | Project Setup | Create `.claude` folders |
| 1.4 | Build the Site | Bride-booking landing page + form |
| 1.5 | `/init` | Generate `CLAUDE.md` |
| 1.6 | Memory | clear, compact, new, resume, rewind |
| 1.7 | GitHub | Push project to GitHub |
| 2.1 | Custom Command | `/readme` slash command (badges, screenshots, file tree) |
| 2.2 | Custom Command | `/github-push` (calls `/readme` + GitHub Pages via Actions) |
| 2.3 | MCP — Playwright | Auto-fill and submit the booking form |
| 3.1 | Skills | Install a community skill |
| 3.2 | Custom Agent | Oriental purple UX/UI redesign |
| 3.3 | Hooks | Pre-validate booking form data |
| 3.4 | Git Worktrees | Three parallel improvements |
| 3.5 | GitHub Actions | `@claude` issue-to-PR workflow |
