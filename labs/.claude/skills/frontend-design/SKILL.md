---
name: frontend-design
description: Redesign websites in a rustic retro Ero style — weathered textures, sepia/cream palette, vintage serif typography, hand-drawn flourishes, and aged paper backgrounds. Use when the user asks to apply a "rustic", "retro", "Ero", "vintage", or "old-world" look to a UI.
---

# Frontend Design — Rustic Retro Ero

Apply this aesthetic when redesigning the bride-booking site (or any landing page).

## Visual language

- **Palette:** sepia, cream, weathered ivory, dusty rose, faded gold, walnut brown. No pure white, no pure black.
- **Typography:** vintage serif headings (Playfair Display, Cormorant Garamond, or DM Serif Display); slab serif or typewriter body (Special Elite, Courier Prime).
- **Textures:** aged paper background, subtle film grain, soft vignette, paper-fold creases.
- **Decoration:** hand-drawn floral flourishes, antique frame borders, art-nouveau dividers, wax-seal motifs on buttons.
- **Imagery:** apply a sepia / faded duotone filter to all photos. Slight rotation (±2°) and Polaroid-style framing for the gallery.
- **Micro-interactions:** ink-blot hover effects, type-on-typewriter reveal for headings.

## Implementation steps

1. Use Playwright MCP to screenshot the current page (desktop + mobile).
2. Replace the existing palette with CSS custom properties:
   ```css
   :root {
     --paper: #f3e9d2;
     --ink:   #3b2a1a;
     --rose:  #c98a8a;
     --gold:  #b08a3e;
     --shade: #8a6a4a;
   }
   ```
3. Add the paper texture as a `body` background (data URI SVG noise or an Unsplash aged-paper photo at low opacity).
4. Swap fonts via Google Fonts and update typographic scale.
5. Apply sepia filter to gallery images: `filter: sepia(0.6) contrast(0.95);`.
6. Restyle buttons as wax seals (circular, gold-on-ink, drop shadow).
7. Verify responsiveness at 375px / 768px / 1024px.
8. Take after-screenshots and present a side-by-side comparison.

## Constraints

- Keep the booking form fully functional — do not change field names, IDs, or submit logic.
- Maintain WCAG AA contrast (text vs. paper background) — ink (#3b2a1a) on paper (#f3e9d2) easily passes.
