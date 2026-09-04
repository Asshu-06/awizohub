# Awizo Hub - Design System

## Premium Corporate Visual Identity

A sophisticated blue-orange color system with modern typography for a professional, trustworthy, and energetic brand presence.

---

## Color Palette

### Primary Colors
```css
--primary-navy: #0B1F3A      /* Deep Navy - Headings & Strong Branding */
--primary-blue: #155EEF       /* Royal Blue - Primary Actions & Important UI */
--secondary-blue: #2563EB     /* Secondary interactions */
```

**Usage:**
- **Deep Navy (#0B1F3A)**: All headings, hero titles, strong branding elements
- **Royal Blue (#155EEF)**: Primary buttons, links, CTAs, important UI elements
- **Secondary Blue (#2563EB)**: Hover states, secondary interactions

### Accent Colors
```css
--accent-orange: #FF6B1A      /* Vibrant Orange - Highlights & Active States */
--accent-gold: #F59E0B        /* Gold accents */
```

**Usage:**
- **Vibrant Orange (#FF6B1A)**: Use sparingly for emphasis, conversion-focused CTAs, active states, highlights
- **Gold (#F59E0B)**: Trust badges, special achievements, premium indicators

### Background Colors
```css
--background-soft: #F8FAFC    /* Soft Off-White - Main Background */
--background-secondary: #EEF5FF /* Light Blue Background */
--white: #FFFFFF              /* Pure White */
```

**Usage:**
- **Soft Off-White (#F8FAFC)**: Primary page background, clean and premium feel
- **Light Blue (#EEF5FF)**: Alternate section backgrounds, form containers
- **White (#FFFFFF)**: Cards, modals, overlays

### Text Colors
```css
--text-main: #0F172A          /* Main Text - Dark slate */
--text-secondary: #475569     /* Secondary Text - Medium slate */
```

**Usage:**
- **Main Text (#0F172A)**: Primary body text, important labels
- **Secondary Text (#475569)**: Descriptions, metadata, supporting text

### Border & Utility Colors
```css
--border-color: #D9E2F2       /* Light Blue-Gray Borders */
--success-green: #10B981      /* Success states */
--error-red: #EF4444          /* Error states */
```

---

## Typography - Plus Jakarta Sans

### Font Family
```css
--font-heading: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Google Fonts Import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

### Font Weights
- **400** - Body text (regular)
- **500** - Medium emphasis, links
- **600** - Navigation, subheadings, labels
- **700** - Headings, section titles
- **800** - Hero headings, page titles

### Heading Hierarchy

#### H1 - Hero/Page Titles
```css
font-size: clamp(2rem, 5vw, 3.5rem);
font-weight: 800;
letter-spacing: -0.02em;
color: var(--primary-navy);
line-height: 1.2;
```

#### H2 - Section Headings
```css
font-size: clamp(1.75rem, 4vw, 2.75rem);
font-weight: 700;
letter-spacing: -0.02em;
color: var(--primary-navy);
line-height: 1.2;
```

#### H3 - Subsection Headings
```css
font-size: clamp(1.5rem, 3vw, 2rem);
font-weight: 700;
letter-spacing: -0.01em;
color: var(--primary-navy);
line-height: 1.2;
```

#### H4 - Card Titles
```css
font-size: clamp(1.25rem, 2.5vw, 1.5rem);
font-weight: 600;
color: var(--primary-navy);
```

### Body Text
```css
font-size: clamp(1rem, 2vw, 1.125rem);
font-weight: 400;
line-height: 1.7;
color: var(--text-secondary);
```

### Navigation
```css
font-weight: 600;
font-size: 1rem;
letter-spacing: -0.01em;
```

### Buttons
```css
font-weight: 600-700;
letter-spacing: -0.01em;
```

### Labels & Stats
```css
font-weight: 600;
font-size: 0.9375rem;
```

---

## Design Principles

### 1. **Premium & Professional**
- Clean layouts with generous white space
- Subtle shadows and borders
- High-quality imagery
- Consistent spacing using 8px grid

### 2. **Trust & Credibility**
- Deep Navy for authority
- Royal Blue for reliability
- Soft backgrounds for approachability
- Clear hierarchy

### 3. **Energy & Action**
- Vibrant Orange for conversion points
- Gold for achievements
- Smooth transitions
- Interactive hover states

### 4. **Readability First**
- Generous line-height (1.7 for body)
- Strong color contrast
- Proper font sizing (clamp)
- Clear heading hierarchy

---

## Component Patterns

### Buttons

#### Primary Button
```css
background-color: var(--primary-blue);
color: var(--white);
font-weight: 600;
box-shadow: 0 2px 8px rgba(21, 94, 239, 0.2);

hover:
  background-color: var(--secondary-blue);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(21, 94, 239, 0.3);
```

#### Secondary Button (Orange)
```css
background-color: var(--accent-orange);
color: var(--white);
font-weight: 600;
box-shadow: 0 2px 8px rgba(255, 107, 26, 0.2);

hover:
  background-color: #E55E15;
  transform: translateY(-2px);
```

### Cards
```css
background-color: var(--white);
border: 1px solid var(--border-color);
border-radius: var(--radius-lg);
box-shadow: var(--shadow-md);

hover:
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-blue);
```

### Form Inputs
```css
border: 2px solid var(--border-color);
border-radius: var(--radius-md);
font-weight: 400;

focus:
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 4px rgba(21, 94, 239, 0.1);
```

### Gradients

#### Hero Backgrounds
```css
background: linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-blue) 100%);
```

#### CTAs
```css
background: linear-gradient(135deg, var(--accent-orange), #E55E15);
```

#### Icon Backgrounds
```css
background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
```

---

## Spacing System

Based on 8px grid:

```css
--spacing-xs: 0.5rem    /* 8px */
--spacing-sm: 1rem      /* 16px */
--spacing-md: 1.5rem    /* 24px */
--spacing-lg: 2rem      /* 32px */
--spacing-xl: 3rem      /* 48px */
--spacing-2xl: 4rem     /* 64px */
```

---

## Shadows

```css
--shadow-sm: 0 1px 3px rgba(11, 31, 58, 0.08);
--shadow-md: 0 4px 12px rgba(11, 31, 58, 0.10);
--shadow-lg: 0 8px 24px rgba(11, 31, 58, 0.12);
--shadow-xl: 0 12px 32px rgba(11, 31, 58, 0.15);
```

All shadows use Deep Navy with low opacity for a cohesive, premium feel.

---

## Border Radius

```css
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 16px
--radius-full: 9999px
```

---

## Transitions

```css
--transition-fast: 150ms ease-in-out
--transition-base: 250ms ease-in-out
--transition-slow: 350ms ease-in-out
```

---

## Accessibility

### Color Contrast
- All text meets WCAG AA standards
- Headings: Deep Navy (#0B1F3A) on light backgrounds
- Body: Medium Slate (#475569) on light backgrounds
- Interactive elements have clear focus states

### Typography
- Minimum font size: 16px (1rem)
- Line height: 1.7 for body text
- Letter spacing: -0.02em for large headings (improved readability)

### Interactive States
- Clear hover states on all interactive elements
- Focus rings using primary blue with opacity
- Smooth transitions for better UX

---

## Usage Guidelines

### ✅ Do's
- Use Deep Navy for all headings
- Use Royal Blue for primary actions
- Use Orange sparingly for conversion elements
- Maintain generous white space
- Use consistent font weights across similar elements
- Apply subtle shadows for depth
- Use smooth transitions

### ❌ Don'ts
- Avoid excessive gradients
- Don't use too many accent colors in one area
- Avoid neon or overly bright colors
- Don't use generic fonts (Arial, Times New Roman)
- Avoid small font sizes (<14px)
- Don't skip hover states on interactive elements

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance

- Font loading optimized with `font-display: swap`
- Preconnect to Google Fonts for faster loading
- CSS variables for dynamic theming
- Minimal external dependencies

---

**Last Updated:** January 2024
**Version:** 1.0
