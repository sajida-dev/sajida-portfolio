# Recruiter-First Portfolio Refinement Plan

This document outlines the technical plan to implement the revised portfolio audit. The primary focus is eliminating visual noise, removing AI-generated template patterns, standardizing on a Green + Slate color system, and optimizing all copy to be recruiter-friendly (problem-first, scannable, and non-redundant).

## User Review Required

Please review the proposed architectural changes and file updates. 
> [!IMPORTANT]
> To ensure zero credential repetition, we are completely removing:
> * `RecruiterSnapshot.tsx`
> * `FeaturedHighlights.tsx`
> * `ProfessionalSummary.tsx`
> * `Chatbot.tsx`
> * The contact form in `Contact.tsx`.
>
> We will place your three core metrics (3+ Years Experience, 7+ Commercial Projects, 4+ Production Systems) at the bottom of your Hero section, and keep the Stanford credential restricted to the Hero top badge and your Experience timeline.

---

## Proposed Changes

### 1. Global Styles & Theme Config

#### [MODIFY] [globals.css](file:///d:/Mern/projects/sajida-portfolio/app/globals.css)
* Update variables to configure the **Green + Slate** theme:
  * `--primary`: `142.1 76.2% 36.3%` (Emerald Green `#059669`)
  * `--ring`: `142.1 76.2% 36.3%`
  * Add utility class `.copy-toast` or transitions for the clipboard feature.
  * Keep the light background clean with a cool gray/slate accent.

#### [MODIFY] [tailwind.config.ts](file:///d:/Mern/projects/sajida-portfolio/tailwind.config.ts)
* Verify that the primary green scale is mapped correctly.

---

### 2. Page & Layout Reorganization

#### [MODIFY] [page.tsx](file:///d:/Mern/projects/sajida-portfolio/app/page.tsx)
* Remove imports and rendering of:
  * `RecruiterSnapshot`
  * `FeaturedHighlights`
  * `ProfessionalSummary`
  * `Chatbot`
* Clean up layout structure. Order of sections:
  1. `Navbar`
  2. `Hero`
  3. `Experience`
  4. `SelectedWork`
  5. `Achievements`
  6. `TechnicalExpertise`
  7. `CompetitiveProgramming`
  8. `Contact`
  9. `Footer`

---

### 3. Components Refinement

#### [MODIFY] [Navbar.tsx](file:///d:/Mern/projects/sajida-portfolio/components/navigation/Navbar.tsx)
* Remove the "View Resume" button.
* Re-label the remaining button to a single, high-contrast **"Resume"** CTA that opens the Google Docs modal.
* Swap all blue color utilities (`text-blue-600`, `bg-blue-600`) to green equivalents (`text-emerald-600`, `bg-emerald-600`, `hover:bg-emerald-700`).

#### [MODIFY] [Hero.tsx](file:///d:/Mern/projects/sajida-portfolio/components/sections/Hero.tsx)
* **Top Badge**: Retain **only** the `Section Leader @ Stanford Code in Place` badge. Remove availability badges.
* **Headline**: Change to a value-focused message: **"Full Stack Engineer Specializing in Laravel & AI Systems"**
* **Subheadline / Statement**: Condense to: **"Building production-ready Laravel web applications, multi-tenant SaaS platforms, and secure backend architectures."**
* **Metrics Block**: Render your 3 core metrics at the bottom left:
  * `3+ Years` - Development Experience
  * `7+` - Commercial Projects
  * `4+` - Production Systems Deployed
* **CTAs**: Render exactly two buttons:
  1. "View Selected Work" (Primary, emerald bg)
  2. "Get in Touch" (Secondary, border outline)
* **Hero Visual**: Replace the VS Code mockup with a clean, static **Featured Project Card** showcasing *Load Masta* (commercial logistics tracking platform with RBAC & Stripe integrations).

#### [MODIFY] [Experience.tsx](file:///d:/Mern/projects/sajida-portfolio/components/sections/Experience.tsx)
* Convert the alternating timeline and focus panel to a **single-column vertical chronological timeline**.
* Each entry displays: Role, Company, Period, and a **1-sentence primary impact statement**.
* Add a **click/tap interaction only** (zero hover state) that expands/collapses the detailed deliverables and technologies list.
* Update color schema to green/slate.

#### [MODIFY] [SelectedWork.tsx](file:///d:/Mern/projects/sajida-portfolio/components/sections/SelectedWork.tsx)
* Implement **problem-first formatting** for project descriptions:
  * Title -> 2-line problem-focused description -> 1-badge tag -> Tech stack.
  * Remove the "Key Outcome" blue box. Integrate outcomes cleanly.
* Restrict tech tags to a maximum of 4 core technologies per card.
* Restrict badges to a maximum of 1 badge per card (e.g. `Production System` or `Commercial`).
* Ensure grid and badge paddings wrap properly on mobile viewports.

#### [MODIFY] [Achievements.tsx](file:///d:/Mern/projects/sajida-portfolio/components/sections/Achievements.tsx)
* Remove the Stanford Code in Place achievement card (as it already appears in the Hero and Experience sections) to avoid repetition.
* Replace all blue class overrides with emerald green.

#### [MODIFY] [CompetitiveProgramming.tsx](file:///d:/Mern/projects/sajida-portfolio/components/sections/CompetitiveProgramming.tsx)
* Remove the "Focus Domains" column completely.
* Expand the verified profiles and tournament log grid to balance the spacing.
* Remove blue styles.

#### [MODIFY] [Contact.tsx](file:///d:/Mern/projects/sajida-portfolio/components/sections/Contact.tsx)
* Delete the Form element, message textarea, and Formspree code.
* Replace with a single centered **Direct Channel Card**:
  * Clean subtitle: *"Open to Full-Stack and Backend Engineering opportunities."*
  * Copy-to-clipboard email card (`sajidajaved604@gmail.com`) with dynamic "Copied!" toast/text state.
  * Row of clean social link icons (LinkedIn, GitHub, LeetCode, Resume).

---

## Verification Plan

### Automated Tests
* Run `npm run build` to verify there are no TypeScript compile errors or styling issues.
* Test responsiveness and layout with chrome dev tools.

### Manual Verification
* Scan the portfolio in 10-15 seconds to ensure no duplicate badges, certifications, or metrics are visible.
* Verify click-to-expand timeline behavior on mobile simulation.
* Verify project cards show a maximum of 4 tech stack badges.
