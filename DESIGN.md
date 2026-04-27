# Design Brief

## Purpose & Context
Professional SEO and digital marketing platform with AI audit capabilities. Premium, trustworthy, expert-focused interface for agencies and enterprises evaluating website health.

## Tone & Aesthetic
Premium tech, confident expertise, refined minimalism. Interfaces inspired by Stripe, Linear, Vercel. Bold when it matters (CTAs, headlines); restrained elsewhere.

## Differentiation
Gradient text on hero headlines, blue-to-teal accent system, elevated card-based layouts with subtle borders, trust badges prominently integrated into service cards.

## Color Palette

| Token | Light OKLCH | Dark OKLCH | Purpose |
|-------|------------|-----------|---------|
| Primary | 0.52 0.22 253 | 0.72 0.2 253 | CTAs, hero accents, primary interaction |
| Accent | 0.65 0.15 170 | 0.75 0.14 170 | Secondary highlights, teal innovation accent |
| Destructive | 0.55 0.22 25 | 0.65 0.19 22 | Error states, warnings |
| Foreground | 0.1 0 0 | 0.95 0 0 | Body text, primary content |
| Muted | 0.92 0 0 | 0.22 0 0 | Secondary text, disabled states |
| Border | 0.88 0 0 | 0.25 0 0 | Card borders, dividers |

## Typography

| Tier | Font | Usage | Size | Weight |
|------|------|-------|------|--------|
| Display | General Sans | Hero titles, section headings | 48–64px | 700–800 |
| Headline | General Sans | Card titles, subsections | 24–32px | 600–700 |
| Body | DM Sans | Paragraphs, descriptions | 14–16px | 400–500 |
| Mono | Geist Mono | Code snippets, audit results | 12–14px | 500 |

## Elevation & Depth

- **Header**: White bg (light), dark bg (dark); 1px bottom border (border color)
- **Cards**: bg-card with 1px border-border, subtle shadow on default, elevated shadow on hover
- **Footer**: Muted bg (0.92/0.22), top border (border color)
- **Sections**: Alternate bg-background and bg-muted/30 for visual rhythm

## Structural Zones

| Zone | Light BG | Dark BG | Accents |
|------|----------|---------|---------|
| Header/Nav | 1.0 0 0 | 0.15 0 0 | Border-b in border color |
| Hero | Gradient subtle | Gradient subtle | Gradient-text on h1, gradient CTA |
| Services Cards | bg-card, border-border | bg-card, border-border | Primary accent on icons, trust badges inline |
| Features Grid | bg-background | bg-background | Section divider: gradient line |
| Pricing Tiers | bg-card with lift on hover | bg-card with lift on hover | Highlighted tier: primary border |
| Testimonials | bg-secondary/10 | bg-card | No decoration, clean quotes |
| CTA Section | Gradient subtle | Gradient subtle | Gradient button, gradient text |
| Footer | bg-muted/50 | bg-muted/20 | Subtle divider on top |

## Spacing & Rhythm
- **Grid**: 16px (Tailwind default)
- **Sections**: 64px vertical gap
- **Cards**: 24px padding
- **Buttons**: 12px–16px padding (h=40–44px)
- **Density**: Light (generous whitespace), refined

## Component Patterns
- **Buttons**: Gradient CTA, outlined secondary, text tertiary. Consistent 40px min height.
- **Cards**: Border + subtle shadow, hover lift (shadow-card-hover), border-primary on highlight.
- **Trust Badges**: Inline within card headers, 24px icons in primary color.
- **Inputs**: Border-input, focus ring in primary, placeholder in muted-foreground.
- **Section Dividers**: Gradient line (h-1 with gradient-to-r) between major sections.

## Motion
- **Transitions**: All smooth (0.3s cubic-bezier) on hover interactions.
- **Entrance**: Staggered fade-in + slide-up on page load (200–400ms delays per card).
- **Micro**: Card elevation on hover, button scale on active, icon float in hero.
- **Choreography**: Hero float animation (3s infinite), CTA pulse on visibility, fade-in for lazy sections.

## Constraints
- No rainbow or multi-color stripes; blue-teal palette only.
- No neon gradients or glow effects; refined, subtle shadows.
- No excessive animation; one motion storyboard per page.
- No flat text on flat background; always use structural zones with defined surface levels.
- Trust badges and testimonials must be visually prominent, not footnotes.

## Signature Detail
**Gradient Text on Headlines**: Primary-to-accent gradient on hero h1 and section titles creates a premium, distinctive mark. Use `gradient-text` utility class sparingly — hero and 1–2 section titles only.
