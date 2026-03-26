# No Box Dev Design Style Guide

This document contains the official design system for the No Box Dev website.

---

## Colors

### Primary Colors
| Name | Variable | Hex | Usage |
|------|----------|-----|-------|
| Peach | `--color-primary` | `#FE795D` | Primary brand color, buttons, links, accents |
| Peach Dark | `--color-primary-dark` | `#e56a50` | Hover states for peach elements |
| Purple | `--color-secondary` | `#B49AF7` | Secondary accent, AI section, CTAs |

### Neutral Colors
| Name | Variable | Hex | Usage |
|------|----------|-----|-------|
| Dark | `--color-dark` | `#201E1D` | Primary text, headings |
| Charcoal | `--color-charcoal` | `#333333` | Secondary dark elements |
| Text Light | `--color-text-light` | `#666666` | Body text, descriptions |
| Light Grey | `--color-light-grey` | `#F5F5F5` | Section backgrounds |
| White | `--color-white` | `#FFFFFF` | Backgrounds, text on dark |

### Special Colors
| Name | Hex | Usage |
|------|-----|-------|
| AI Purple | `#8B5CF6` | AI section highlights, accents |
| Card Background | `#F0F0F0` | Service cards |
| Card Hover | `#E8E8E8` | Service cards on hover |

---

## Typography

### Font Families

**Display Font (Headings)**
```css
font-family: 'Aeonik', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
- Files: `Aeonik-regular.ttf`, `Aeonik bold italic.ttf`
- Weights: 400 (regular), 700 (bold italic)

**Body Font**
```css
font-family: 'Arbeit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```
- Files: `Arbeit-Regular.otf`, `Arbeit-Bold.otf`, `Arbeit-LightItalic.otf`
- Weights: 300 (light italic), 400 (regular), 700 (bold)

### Type Scale
| Element | Size | Font | Weight |
|---------|------|------|--------|
| H1 | 56px | Aeonik | 400 |
| H2 | 40px | Aeonik | 400 |
| H3 | 20px | Aeonik | 400 |
| H4 | 18px | Aeonik | 400 |
| Body | 16px | Arbeit | 400 |
| Small | 14px | Arbeit | 400 |
| Label | 12px | Arbeit | 500 (uppercase) |

### Line Heights
- Headings: `1.1`
- Body text: `1.7`
- Card descriptions: `1.6`

---

## Spacing

| Variable | Value | Usage |
|----------|-------|-------|
| `--spacing-xs` | 0.5rem (8px) | Tiny gaps |
| `--spacing-sm` | 1rem (16px) | Small gaps, paragraph margins |
| `--spacing-md` | 1.5rem (24px) | Medium gaps, card padding |
| `--spacing-lg` | 2rem (32px) | Section gaps |
| `--spacing-xl` | 3rem (48px) | Large gaps |
| `--spacing-xxl` | 5rem (80px) | Section padding |

---

## Border Radius

| Variable | Value | Usage |
|----------|-------|-------|
| `--radius-sm` | 4px | Buttons, small elements |
| `--radius-md` | 8px | Cards, form inputs |
| `--radius-lg` | 16px | Service cards, AI cards |
| `--radius-full` | 9999px | Pills, circular elements |

---

## Shadows

```css
--shadow-sm: 0 1px 2px rgba(32, 30, 29, 0.05);
--shadow-md: 0 4px 6px rgba(32, 30, 29, 0.07);
--shadow-lg: 0 10px 25px rgba(32, 30, 29, 0.1);
--shadow-xl: 0 20px 50px rgba(32, 30, 29, 0.15);
```

### Hover Shadow (Cards)
```css
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
```

### AI Card Hover Shadow
```css
box-shadow: 0 12px 40px rgba(139, 92, 246, 0.15);
```

---

## Transitions

| Variable | Value | Usage |
|----------|-------|-------|
| `--transition-fast` | 150ms ease | Hover states, quick feedback |
| `--transition-base` | 250ms ease | Standard animations |
| `--transition-slow` | 400ms ease | Complex animations |

---

## Breakpoints

| Size | Max Width | Layout Changes |
|------|-----------|----------------|
| Desktop | > 1024px | 4-column grids |
| Tablet | 1024px | 2-column grids |
| Mobile | 768px | 1-column grids, mobile nav |
| Small | 480px | Reduced font sizes |

---

## Layout

### Container
```css
max-width: 1200px;
padding: 0 1.5rem;
margin: 0 auto;
```

---

## Buttons

### Primary (Peach)
```css
.btn-peach {
    background-color: #FE795D;
    color: #FFFFFF;
    padding: 10px 28px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
}
```

### Outline (White)
```css
.btn-outline-white {
    background-color: transparent;
    color: #FFFFFF;
    border: 2px solid #FFFFFF;
    padding: 10px 28px;
}
```

### Button Hover Effect
```css
transform: translateY(-2px);
```

---

## Gradients

### AI Section Background
```css
background: linear-gradient(135deg,
    #E8E0F0 0%,
    #D4C4E8 30%,
    #C9B8E0 50%,
    #B8A8D8 70%,
    #E0D8F0 100%
);
```

---

## Card Styles

### Service Card
```css
background-color: #F0F0F0;
border-radius: 16px;
padding: 32px;
```

### Case Study Card
```css
background-color: #FFFFFF;
border-radius: 8px;
overflow: hidden;
```

### AI Card
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(10px);
border-radius: 16px;
padding: 3rem;
border: 1px solid rgba(255, 255, 255, 0.5);
```

---

## Overlay Styles

### Hero Overlay
```css
background: rgba(0, 0, 0, 0.5);
```

### Contact Overlay
```css
background: rgba(0, 0, 0, 0.4);
```

---

## Section Backgrounds

| Section | Background |
|---------|------------|
| Services | White (`#FFFFFF`) |
| AI | Purple gradient |
| Case Studies | Light grey (`#F5F5F5`) |
| Collaboration CTA | Purple (`#B49AF7`) |
| How We Work | White (`#FFFFFF`) |
| Contact | Image with dark overlay |
| Footer | Peach (`#FE795D`) |

---

## Quick Reference: CSS Variables

```css
:root {
    /* Colors */
    --color-primary: #FE795D;
    --color-primary-dark: #e56a50;
    --color-secondary: #B49AF7;
    --color-dark: #201E1D;
    --color-charcoal: #333333;
    --color-light-grey: #F5F5F5;
    --color-white: #FFFFFF;
    --color-text: #201E1D;
    --color-text-light: #666666;

    /* Fonts */
    --font-display: 'Aeonik', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-body: 'Arbeit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-xxl: 5rem;

    /* Layout */
    --container-max: 1200px;
    --container-padding: 1.5rem;

    /* Radii */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --radius-full: 9999px;

    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-base: 250ms ease;
    --transition-slow: 400ms ease;

    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(32, 30, 29, 0.05);
    --shadow-md: 0 4px 6px rgba(32, 30, 29, 0.07);
    --shadow-lg: 0 10px 25px rgba(32, 30, 29, 0.1);
    --shadow-xl: 0 20px 50px rgba(32, 30, 29, 0.15);
}
```

---

*Last updated: January 2026*
