# Vxtra Health Marketing Site

## Overview
Multi-page marketing site for Vxtra Health, a physician-steward health plan targeting self-insured middle-market employers in the Southeast, South, and Midwest. Now launching in Augusta & Gainesville, GA.

## Tech Stack
- **Framework:** Next.js 15.0.8 (App Router)
- **Styling:** Global CSS (`app/globals.css`) with Tailwind base utilities
- **Fonts:** DM Serif Display (headings), Inter (body)
- **Colors:** Teal (#22BAB4), Coral (#E8734A), Ink (#1B2A3D)
- **Runtime:** Node.js 20, port 5000
- **Package Manager:** npm
- **ESLint:** v8 with eslint-config-next@15.0.8

## Project Structure
```
app/
  layout.tsx             — Root layout, metadata, JSON-LD (Organization + LocalBusiness + WebSite)
  page.tsx               — Homepage
  globals.css            — All styles (~3000 lines)
  about/page.tsx         — About page
  about/leadership/      — Leadership team page
  brokers/page.tsx       — Brokers landing page
  contact/page.tsx       — Contact form page
  employees/page.tsx     — Employees landing page
  employers/page.tsx     — Employers landing page
  physicians/page.tsx    — Physicians landing page
  privacy/page.tsx       — Privacy policy page
  resources/page.tsx     — Resources & downloads page
  startengine/page.tsx   — StartEngine investment page (iframe)
  terms/page.tsx         — Terms of service page
  robots.ts              — Robots.txt generation
  sitemap.ts             — Sitemap generation
components/
  Nav.tsx                — Sticky nav with scroll effect, mobile menu (breakpoint: 1024px)
  Hero.tsx               — Hero with image carousel, floating stat cards
  ScrollReveal.tsx       — Scroll-triggered reveal animations (IntersectionObserver + MutationObserver)
  Footer.tsx             — Footer with logo, links, legal (privacy/terms)
  landing/               — Shared landing page components (LandingHero, LandingPlan, etc.)
  [other components]     — ProblemCards, PlanSteps, ComparisonTable, OurTownModel, etc.
data/
  brokers.ts             — Brokers page content
  employees.ts           — Employees page content
  employers.ts           — Employers page content
  physicians.ts          — Physicians page content
  faq.ts                 — FAQ data
  resources.ts           — Resources data (all currently unavailable)
public/
  vxtrahealth-logo.png
  (hero images served from Unsplash via next/image)
next.config.mjs          — Remote image patterns for Unsplash
```

## Key Conventions
- All images use Next.js `<Image>` component with `style={{ width: "auto" }}` for aspect ratio
- CSS classes used instead of inline styles throughout
- Hero carousel uses `.hero-slide` wrapper divs with `.active` class toggling
- Semantic HTML with aria-labels/roles throughout
- CTAs use mailto links (no backend needed)
- No environment variables required
- ScrollReveal uses MutationObserver to handle elements added via client-side navigation
- Mobile nav breakpoint is 1024px (hamburger menu shown at ≤1024px)

## Running
```
npm run dev  # starts on port 5000, host 0.0.0.0
```
