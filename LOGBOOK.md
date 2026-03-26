# No Box Dev Website Logbook

Development log for the No Box Dev website project.

---

## 2026-03-03

### Next.js Migration
- Website migrated from static HTML/CSS/JS to Next.js (v16.1.6)
- New component-based architecture with CSS Modules
- Deploy workflow added via GitHub Actions
- Custom fonts (Aeonik, Arbeit) in `/public/fonts/`

### Homepage Copy Updates
- Hero headline: "We build products that understand people" (was "We design products")
- Tagline: "Where psychology meets beautiful engineering" (was "behavioral science")
- Philosophy statement reformatted onto separate lines for emphasis
- CTA section: title changed to "Let's Talk", tagline updated to "Working on something exciting and need support? We build human-centered digital products. Drop us a line."

### Mouse Glow Effect
- Increased glow opacity (~2-3x) for better visibility on both dark and light sections

### Our Products Section (NEW)
- Added new "Our Products" / "Built by NoBoxDev" section before Contact
- Feature grid layout (3 columns, responsive)
- Light-muted background (matching Case Studies section)
- Products listed: Blindspot, Boundless, GitPulse
- **Note: These applications are NOT public yet — do not link to live URLs or repos**

### Products (Internal Reference)
| Product | Description | Status |
|---------|-------------|--------|
| Blindspot | Bug reporting tool with AI-powered screenshot analysis (widget + API + dashboard) | Active, not public |
| Boundless | Smart learning platform for remote families | Active, not public |
| GitPulse | AI-powered project management dashboard for GitHub organisations | Active, not public |

---

## 2026-01-07

### AI Section - Complete Redesign

**Background & Layout:**
- Changed background from light purple gradient to solid purple (#B49AF7)
- Updated cards from 3-column to 2-column grid layout
- Cards now have transparent background with white border stroke
- Added hover effect: cards turn white with purple text on hover

**Content Updates:**
- Consolidated two philosophy blocks into one
- Single subtitle: "Workflow Support, Not Blind Automation"
- Three paragraphs stacked vertically with increased text size (16px body, 20px title)
- Closing sentence "Good AI does not try to impress. It helps users move forward." styled italic and thin
- Updated all 6 card texts to be more concise:
  1. Plug & Play AI
  2. Custom AI Solutions
  3. Data-Driven Intelligence
  4. Decision and Support Insight
  5. Workflow Automation
  6. Scalable AI Architecture

### How We Work Section

- Changed from scroll-triggered effect to hover effect
- Hover now shows peach fill with white text
- Removed scroll-based JavaScript

### Style Guide

- Created STYLE_GUIDE.md with complete design system
- Updated color naming: #FE795D = "Peach", #B49AF7 = "Purple"
- Updated CSS variable --color-secondary to #B49AF7
- Consolidated hardcoded purple values to use CSS variable

### References

- Added new reference images in `/references/AI/` folder:
  - HoneyBook Web 737.png
  - Hims Web 174.png
  - Hims Web 127.png

---
