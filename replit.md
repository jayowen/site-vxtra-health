# Vxtra Health Marketing Site

## Overview
Single-page marketing site for Vxtra Health, a physician-steward health plan targeting self-insured middle-market employers in the Southeast, South, and Midwest. Now launching in Augusta & Gainesville, GA.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Global CSS (`app/globals.css`) — no CSS modules or Tailwind
- **Fonts:** DM Serif Display (headings), Inter (body)
- **Colors:** Teal (#22BAB4), Coral (#E8734A), Ink (#1B2A3D)
- **Runtime:** Node.js 20, port 5000
- **Package Manager:** npm
- **ESLint:** v8 (pinned for eslint-config-next@14 compatibility)

## Project Structure
```
app/
  layout.tsx       — Root layout, metadata, JSON-LD (Organization + LocalBusiness + WebSite)
  page.tsx         — Main page wrapped in <main>
  globals.css      — All styles (~2000 lines)
components/
  Nav.tsx          — Sticky nav with scroll effect
  Hero.tsx         — Hero with image carousel (data-slide pattern), floating stat cards
  Problem.tsx      — 4-column problem grid (StoryBrand villain)
  HowItWorks.tsx   — 3-step plan section
  Comparison.tsx   — Comparison table
  OurTown.tsx      — Our Town model section with orbital layout
  Audience.tsx     — Who We Help section
  OurStory.tsx     — Our Story section
  FinalCTA.tsx     — Final call-to-action
  Footer.tsx       — Footer with logo, links, legal
public/
  vxtrahealth-logo.png
  (hero images served from Unsplash via next/image)
next.config.mjs   — Remote image patterns for Unsplash
```

## Key Conventions
- All images use Next.js `<Image>` component (no raw `<img>` tags)
- No inline styles except for Next.js Image aspect ratio fixes (`width: "auto"`)
- CSS classes used instead of inline styles throughout
- Hero carousel uses `.hero-slide` wrapper divs with `data-slide` attributes and `.active` class toggling
- Semantic HTML with aria-labels/roles throughout
- CTAs use mailto links (no backend needed)
- No environment variables required

## Running
```
npm run dev  # starts on port 5000, host 0.0.0.0
```
