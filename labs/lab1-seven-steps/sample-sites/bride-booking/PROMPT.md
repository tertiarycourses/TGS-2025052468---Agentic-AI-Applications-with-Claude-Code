# Bridal Photography Booking — Build Prompt

Create a modern single-page website for a Bridal Photography Booking service.

Build using only HTML, CSS, and JavaScript in one file.

## Website Theme
- Elegant, romantic, premium, and modern
- Soft pastel color palette such as blush pink, ivory, champagne, beige, and gold accents
- Clean typography with a luxury wedding photography feel
- Fully responsive for desktop, tablet, and mobile

## Page Sections

### 1. Hero Section
- Large beautiful bridal photography background image
- Headline: "Capture Your Perfect Bridal Moments"
- Subheadline: "Elegant bridal photography packages for pre-wedding, wedding day, and studio shoots."
- Call-to-action button: "Book a Session"

### 2. About Section
- Short introduction about the bridal photography service
- Mention professional photographers, elegant styling, indoor/outdoor shoots, and personalized packages

### 3. Photography Packages
Create 3 package cards:
- Classic Bridal Shoot
- Premium Pre-Wedding Shoot
- Luxury Wedding Day Coverage

Each package should include:
- Package name
- Short description
- Duration
- Number of edited photos
- Starting price
- "Select Package" button

### 4. Gallery Section
- Modern photo grid layout
- Use placeholder bridal/wedding photography images
- Add hover effect on images

### 5. Booking Form Section
Create a booking form with:
- Full Name
- Email Address
- Phone Number
- Preferred Date
- Preferred Time
- Photography Package dropdown
- Shoot Location
- Number of People
- Special Request / Message
- Submit Booking button

Form Requirements:
- Validate required fields
- Show success message after submission
- Smooth scroll to booking form when CTA is clicked

### 6. Contact Section
- Studio name
- Phone number
- Email
- Location
- Social media links

## Design Requirements
- Sticky navigation bar
- Smooth scrolling
- Rounded cards
- Soft shadows
- Elegant buttons
- Mobile-friendly hamburger menu
- Subtle animations on scroll
- Clean spacing and professional layout

## JavaScript Requirements
- Mobile menu toggle
- Smooth scroll navigation
- Package selection button should auto-fill the package dropdown
- Booking form validation
- Display confirmation message after successful booking
- Log submitted form data to the browser console

## Email Delivery (Formsubmit)
Send booking submissions by email using **Formsubmit** (https://formsubmit.co) — a free, no-signup form-to-email service that works on static hosts like GitHub Pages.

Implementation:
- POST the form data as JSON to `https://formsubmit.co/ajax/<recipient-email>` using `fetch`
- Set `Content-Type: application/json` and `Accept: application/json`
- Include these helper fields in the JSON body:
  - `_subject`: a descriptive subject line (e.g. `New Bridal Booking — <Full Name>`)
  - `_template`: `"table"` for a clean tabular email layout
- Map each form field to a human-readable key (e.g. `"Full Name"`, `"Phone"`, `"Preferred Date"`)
- Disable the submit button and show a "Sending…" state during the request
- On success: show the confirmation message
- On failure: show an alert and re-enable the submit button
- No API keys, no backend, no server code — Formsubmit handles delivery

Activation note (include in README or comments):
> The first submission to a new Formsubmit address triggers a confirmation email
> from `formsubmit.co` to the recipient. The recipient must click the activation
> link before any subsequent submissions will be delivered.

## Output
- Provide the complete code in a single HTML file
- Include all CSS and JavaScript inside the same file
- Use placeholder images from Unsplash or similar image placeholders
