# Part D — A Security-Scan Sub Agent

**Objective:** Build a sub agent that runs a security scan using the
`cybersecurity-analyst` skill from Lab 2 and writes its findings to JSON.

This part combines two triggers: a sub agent (**by delegation**) that itself
pulls in a skill (**on demand**).

---

## Step 1 — Create the agent

**Prompt:**

```
Create a project-level sub agent at .claude/agents/security-scanner.md.

Frontmatter:
  name: security-scanner
  description: Scans the website for security vulnerabilities and writes the
    findings to a JSON report. Use when asked to run a security scan, check
    for vulnerabilities, or audit the site's security.
  tools: Read, Grep, Glob, Write, Bash

System prompt:
  You are a security scanner for this static website project. Use the
  cybersecurity-analyst skill to inform your analysis.

  On each run:
  1. Scan all HTML, CSS and JavaScript files in the project.
  2. Look for: XSS-prone DOM writes (innerHTML, document.write), unvalidated
     form input, hardcoded secrets or API keys, unsafe eval, inline event
     handlers, external resources loaded without integrity checks, and
     missing input sanitisation.
  3. Write the results to security-scan.json in the project root with this
     exact shape:

     {
       "scan_timestamp": "<ISO 8601 UTC>",
       "files_scanned": <integer>,
       "summary": { "critical": 0, "high": 0, "medium": 0, "low": 0 },
       "findings": [
         {
           "id": "<stable slug, e.g. xss-innerhtml-script-js-42>",
           "severity": "critical|high|medium|low",
           "category": "<e.g. XSS, Secrets, Validation>",
           "file": "<relative path>",
           "line": <integer>,
           "description": "<what is wrong>",
           "recommendation": "<how to fix it>"
         }
       ]
     }

  4. If security-scan.json already exists, read it first and mark each
     finding as "new", "existing" or "resolved" in a "status" field, so I can
     see what changed between runs.
  5. Do NOT modify any application code. You only report.
  6. Reply with a short summary: counts by severity, and what changed since
     the previous scan.
```

Note step 5 — the agent is deliberately **read-only** on application code. Scan
and fix are different jobs, and mixing them makes both harder to trust.

---

## Step 2 — Restart and run it

Restart Claude Code, then:

**Prompt:**

```
Use the security-scanner agent to scan the website.
```

---

## Step 3 — Inspect the report

```bash
cat security-scan.json
```

Check that it is valid JSON and the counts match the findings:

```bash
python3 -m json.tool security-scan.json > /dev/null && echo "valid JSON"
```

---

## Step 4 — Prove the diffing works

Introduce a deliberate issue, then re-scan:

**Prompt:**

```
In script.js, add a line that writes an unescaped URL query parameter into
the page with innerHTML. This is intentionally insecure - it is a test
fixture for the scanner.
```

Then:

```
Use the security-scanner agent to scan again.
```

The new finding should appear with `"status": "new"`. Now remove the bad line
and re-scan — it should flip to `"resolved"`.

---

## Step 5 — Fix what it found

**Prompt:**

```
Fix every critical and high finding in security-scan.json, then run the
security-scanner agent again to confirm they are resolved.
```

---

**Checkpoint:** `security-scan.json` exists, is valid JSON, and findings
correctly change status between runs.

⬅️ Back: [Part C](PART-C-add-task-agent.md) · ➡️ Next: [Part E — /loop](PART-E-loop.md)
