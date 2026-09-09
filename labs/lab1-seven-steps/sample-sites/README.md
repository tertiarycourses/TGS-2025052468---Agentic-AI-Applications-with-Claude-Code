# Sample Sites

Finished examples built with Claude Code using the same 7-step workflow you are
learning in this lab. Open them, read them, borrow from them — but build your
own site rather than copying one of these.

| Sample | What it is | Why it is here |
|---|---|---|
| [`../reference-site/`](../reference-site/) | **NorthPoint Systems** — software-dev marketing site | The exact deliverable for this lab: hero + testimonials + enquiry form |
| [`bride-booking/`](bride-booking/) | Bridal photography booking page | A booking form with more fields and validation; see its `PROMPT.md` for the original brief |
| [`interior-design/`](interior-design/) | AURA & ARCH interior design studio | A more visually ambitious build — custom cursor, scroll effects, image assets |
| [`lead-generation/`](lead-generation/) | Lead Generator SG | A small **app**, not a brochure: live API calls, sortable table, CSV export, dark/light theming |

---

## Running any of them

They are all static — no build step, no server required:

```bash
open bride-booking/index.html      # macOS
start bride-booking/index.html     # Windows
```

> **`lead-generation`** talks to the Apify API and needs a token. It prompts for
> one in the browser and stores it in `localStorage`. Nothing is committed — the
> local `.env` is gitignored.

---

## What to look at in each

- **`bride-booking/PROMPT.md`** — a real Step 1 brief. Compare its level of
  detail against your own; this is what "specific enough to build from" reads
  like.
- **`interior-design/`** — shows how far the visual bar can be pushed while
  staying vanilla HTML/CSS/JS.
- **`lead-generation/`** — shows the same workflow applied to something with
  real state and external data, not just a landing page.
