# Step 6 — Deployment

**Objective:** Put the site on the public internet with GitHub Pages.

Because the site is plain static files, GitHub Pages can serve it directly —
no build, no hosting bill.

---

## Turn on Pages

**Prompt:**

```
Enable GitHub Pages for this repository, serving from the main branch, and
tell me the live URL.
```

---

## Or do it in the browser

1. Go to your repo on github.com.
2. **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
4. Branch: **main**, folder: **/ (root)**. Click **Save**.
5. Wait about a minute, then reload the page to see the published URL.

---

## Your URL

```
https://<your-username>.github.io/softwaredev-site/
```

---

## Verify the deployed site

Open the live URL — not your local file — and re-test:

- The hero renders and the CTA smooth-scrolls
- Testimonials stack correctly on a phone-width window
- The enquiry form validates and shows the success message

> **If you get a 404:** Pages can take a minute or two on first deploy. Also
> confirm the file is named `index.html` and sits at the repository root.

---

**Checkpoint:** The site is live at a public `github.io` URL and works there
exactly as it did locally.

⬅️ Back: [Step 5](STEP-5-commit-to-github.md) · ➡️ Next: [Step 7 — CI/CD](STEP-7-cicd.md)
