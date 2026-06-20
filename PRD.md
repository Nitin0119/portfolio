# PRD — Nitin Yadav Portfolio Website
**Version:** 1.0  
**Role:** Data Scientist / Data Analyst (Web Developer by Hobby)  
**Stack:** React + Vite, ReactBits, Shadcn/UI, Framer Motion / GSAP, Tailwind CSS

---

## 1. Project Overview

A single-page portfolio that functions as a **live proof of craft** — not a résumé dumped into HTML, but a product that demonstrates Nitin's technical range in the very thing it's built on. The site's job: make a recruiter or hiring manager *feel* the signal-to-noise ratio in Nitin's work within the first 10 seconds, then give them a clean path to reach out.

The design direction is **terminal-meets-editorial**: a carbon-black shell, lime-green precision accents, monospaced data aesthetics in the details, and a typographic system that reads as engineered rather than decorative.

---

## 2. Goals & Success Metrics

| Goal | Metric |
|---|---|
| Hold attention past the fold | Avg. scroll depth ≥ 70% |
| Drive recruiter contact | ≥ 1 contact action per 10 sessions |
| Signal technical taste | Zero "template feel" in user feedback |
| Fast load on mobile | LCP < 2.5s, CLS < 0.1 |
| Accessibility floor | WCAG AA on all interactive elements |

---

## 3. Target Audience

**Primary:** Technical recruiters and hiring managers at product/data companies (India + remote).  
**Secondary:** Potential freelance clients who need dashboards, ML models, or data pipelines.  
**Mindset:** Busy, pattern-matching fast, allergic to fluff. They want: *What did you build? What was the impact? Can I trust your judgment?*

---

## 4. Design System

### 4.1 Color Palette

| Token | Name | Hex | RGB | Usage |
|---|---|---|---|---|
| `--color-bg` | Carbon | `#171717` | 23, 23, 23 | Page background, dark sections |
| `--color-accent` | Lime | `#C6FF34` | 198, 255, 52 | Primary CTA, highlights, cursor, active states |
| `--color-surface` | Carbon 2 | `#1F1F1F` | 31, 31, 31 | Cards, input backgrounds |
| `--color-border` | Carbon 3 | `#2C2C2C` | 44, 44, 44 | Dividers, card borders |
| `--color-text-primary` | Off-white | `#F2F2F2` | 242, 242, 242 | Headlines, body text |
| `--color-text-muted` | Ash | `#666666` | 102, 102, 102 | Labels, metadata, captions |
| `--color-accent-dim` | Lime 30% | `#C6FF3430` | — | Glow halos, tag backgrounds |

**Rule:** Lime is used sparingly — borders on hover, active nav items, metric numbers, CTA buttons. Never fill a large surface with it.

---

### 4.2 Typography

| Role | Family | Weight | Usage |
|---|---|---|---|
| Display | **Space Grotesk** | 700, 800 | Hero headline, section titles |
| Body | **Inter** | 400, 500 | Paragraphs, descriptions |
| Mono | **JetBrains Mono** | 400, 600 | Metrics, skill tags, code snippets, terminal UI |

**Type scale (rem):**
```
xs:   0.75   → metadata, tags
sm:   0.875  → captions, labels
base: 1.0    → body
lg:   1.125  → card titles
xl:   1.5    → sub-headlines
2xl:  2.25   → section titles
3xl:  3.5    → hero sub-title
display: clamp(4rem, 8vw, 7rem) → hero name
```

**Signature typographic detail:** Hero name rendered in Space Grotesk 800, tracked wide with a lime underline that draws in on load via GSAP `drawSVG`. Every metric number (ROC-AUC 0.92, 250K records, 23% reduction) uses JetBrains Mono with a lime tint.

---

### 4.3 Spacing & Layout

- Base unit: `8px`
- Container max-width: `1200px`, padded `24px` on mobile, `48px` on desktop
- Section padding: `120px 0` on desktop, `80px 0` on mobile
- Card border-radius: `12px`
- Button border-radius: `6px` (sharp-ish — matches the engineering aesthetic)

---

### 4.4 Signature Element

**Custom Lime Cursor** — a 16px lime dot that trails the default cursor with slight lag (Framer Motion spring). On hovering any interactive element, it morphs into a larger hollow ring. On hovering project cards, it transforms into a "VIEW →" text cursor. This is the one memorable moment without being excessive.

---

## 5. Tech Stack & Libraries

| Layer | Choice | Reason |
|---|---|---|
| Framework | React 18 + Vite | Fast DX, easy deployment |
| Styling | Tailwind CSS v4 + CSS variables | Utility-first with custom token system |
| UI Components | Shadcn/UI | Headless, unstyled base — fully themeable to Carbon/Lime |
| Motion | Framer Motion (primary) + GSAP ScrollTrigger (scroll orchestration) | Framer for component-level transitions; GSAP for scroll-pinned sequences |
| Reactbits | TextReveal, MagneticButton, CardSpotlight, AnimatedCounter, SplitText | Specific interactive moments listed per section below |
| Icons | Lucide React | Consistent, minimal |
| Fonts | Google Fonts (Space Grotesk, Inter, JetBrains Mono) | Self-hosted via `next/font` or Fontsource |
| Deployment | Vercel | Zero-config, fast CDN |

---

## 6. Section Specifications

### 6.1 Navigation

**Type:** Fixed top nav, transparent → frosted glass on scroll (`backdrop-blur-md bg-[#171717]/80`).

**Items:**
```
[NITIN.DEV]   About   Skills   Projects   Experience   Contact
```
- Logo: `NITIN.DEV` in JetBrains Mono, lime-colored dot blinking before it (like a terminal prompt `█`)
- Active section: lime underline, detected via Intersection Observer
- Mobile: Hamburger → full-screen overlay menu with staggered line entries (Framer Motion)
- CTA: `[ Hire Me ]` button — outlined, lime border, fills on hover

---

### 6.2 Hero Section

**Goal:** Stop the scroll in under 3 seconds.

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   > _                           [ambient particle bg]  │
│                                                         │
│   NITIN YADAV                                          │
│   ─────────────────────────                            │
│   Data Scientist  ·  ML Engineer  ·  Analyst           │
│                                                         │
│   I turn raw, messy data into decisions people         │
│   actually make.                                        │
│                                                         │
│   [ View Work ]   [ Download Resume ]                  │
│                                                         │
│   ↓ scroll                                             │
└─────────────────────────────────────────────────────────┘
```

**Animations:**
- Terminal prompt `> _` blinks for 800ms before name appears
- Name: SplitText GSAP reveal — each character drops in with stagger 0.04s, ease `expo.out`
- Subtitle: Framer Motion `TypewriterEffect` cycling through `Data Scientist` → `ML Engineer` → `Analyst` (loop, 2s each)
- Tagline fades up after 1.2s delay
- CTAs: Magnetic button effect (ReactBits `MagneticButton`)
- Background: subtle animated particle grid in lime at 5% opacity (canvas, requestAnimationFrame) — not distracting, just alive

**ReactBits:** `SplitText`, `MagneticButton`, `TypewriterText`  
**Framer Motion:** staggered children reveal on mount  
**GSAP:** `SplitText` + `gsap.from` for character animation

---

### 6.3 About Section

**Layout (two-column on desktop, stacked on mobile):**
```
┌──────────────────────────┬───────────────────────────────┐
│                          │                               │
│   [Avatar / Initials]    │   I'm a data professional     │
│   [NY] monogram card     │   with...                     │
│                          │                               │
│   Currently:             │   MSc CS · Delhi University   │
│   Ethara AI              │   → Kurukshetra University    │
│   LLM Annotation Intern  │                               │
│                          │   [ Resume ↓ ]                │
└──────────────────────────┴───────────────────────────────┘
```

**Content (copy):**
```
I build things that make data useful — ML models, BI dashboards, 
annotation pipelines, and the occasional e-commerce backend at midnight.

MSc Computer Science → hands-on with LightGBM, XGBoost, MLflow, Power BI, 
and enough SQL to debug someone else's CTE at 11pm.

Currently evaluating LLM outputs at Ethara AI. Looking for my next full-time 
data role where I can ship work that actually ships to production.
```

**Details:**
- Avatar: stylized `NY` monogram in a lime-bordered card with subtle rotation on hover (Framer `whileHover`)
- "Currently" badge: pulsing green dot + `Ethara AI` text in JetBrains Mono
- Resume button: downloads `Nitin_Yadav_Resume.pdf` directly
- Section reveal: left column slides in from left, right column from right (Framer `useInView`)

---

### 6.4 Skills Section

**Goal:** Show technical depth without listing every tool ever touched.

**Layout: Bento Grid**
```
┌──────────────────┬────────────────┬──────────────────────┐
│  Languages &     │   ML & Libs    │   BI & Viz           │
│  Query           │                │                      │
│  Python · SQL    │  Scikit-learn  │  Power BI · DAX      │
│  CTEs · Windows  │  LightGBM      │  Excel · Tableau     │
│  Functions       │  XGBoost       │  Data Storytelling   │
├──────────────────┴────────────────┤                      │
│  Cloud & MLOps                    ├──────────────────────┤
│  GCP · MLflow · CI/CD (Jenkins)   │  Tools               │
│                                   │  Git · Jupyter       │
│                                   │  Google Analytics    │
└───────────────────────────────────┴──────────────────────┘
```

**Details:**
- Each bento cell: `CardSpotlight` from ReactBits — lime spotlight follows cursor within the card
- Tags rendered as `<code>` blocks in JetBrains Mono with lime-tinted backgrounds
- On scroll-in: cards stagger-appear from bottom (GSAP ScrollTrigger, stagger 0.1s)
- No skill bars/percentages — those are subjective and recruiters distrust them

**ReactBits:** `CardSpotlight`  
**GSAP:** `ScrollTrigger` with staggered batch

---

### 6.5 Projects Section

**Goal:** Lead with impact numbers, not tool lists.

**Layout: 2-column grid (1-col mobile), full-width featured card on top**

**Project Cards — Required fields:**
- Project title
- One-line impact statement (the number comes first)
- Tech stack pills
- Links: `[ GitHub ]` `[ Live Demo ]` (if available)
- Hover: card lifts (shadow + slight scale), background reveals a subtle grid pattern

**Projects from resume + formatting:**

**Featured (full-width):**
```
┌────────────────────────────────────────────────────────────────┐
│  01  REAL ESTATE INVESTMENT ADVISORY SYSTEM             [↗]    │
│                                                                │
│  0.92 ROC-AUC  ·  250K records  ·  5-year price forecasting   │
│                                                                │
│  End-to-end ML pipeline: feature engineering on 250K property  │
│  records → XGBoost + Random Forest comparison via MLflow →     │
│  Streamlit decision tool for real-time investment analysis.    │
│                                                                │
│  [Python]  [XGBoost]  [Scikit-learn]  [MLflow]  [Streamlit]   │
└────────────────────────────────────────────────────────────────┘
```

**Grid cards (2-col):**

*Card 2: Fraud Risk Modeling*
- Impact: 0.91 ROC-AUC · 23% fewer false negatives on high-value transactions
- Tools: Python, LightGBM, Logistic Regression

*Card 3: Student Well-Being Risk Analysis*
- Impact: 51% → 78% classifier accuracy · Power BI dashboard for 500+ students
- Tools: Python, SQL, Power BI, Scikit-learn

*Card 4: Customer Shopping Behavior Analysis*
- Impact: 10K transactions · top-20% buyers = 80% revenue · 3.5% higher AOV in express-shipping segment
- Tools: Python, PostgreSQL, Power BI

**Animations:**
- Section title reveals with GSAP SplitText
- Cards scroll in with `ScrollTrigger` stagger from bottom
- Hover: Framer `whileHover` scale 1.02 + shadow spread
- Featured card: `CardSpotlight` spotlight effect (ReactBits)
- Impact metrics: `AnimatedCounter` from ReactBits — numbers count up when card enters viewport

---

### 6.6 Experience Section

**Layout: Vertical timeline (centered line on desktop, left-aligned on mobile)**

```
                    │
   Apr 2026 ────── ●  LLM Data & Annotation Analyst
                   │   Ethara AI  ·  Remote
                   │   [bullet 1]
                   │   [bullet 2]
                   │
   Sep 2021 ────── ●  Data Analyst Intern
                   │   Fancy Odds  ·  Gurugram
                   │   [bullet 1]
                   │   [bullet 2]
                   │
```

**Details:**
- Timeline line: SVG `<line>` animated with GSAP `drawSVG` — draws from top to bottom as user scrolls
- Each node (●): lime-colored dot with pulse ring animation on appear
- Date labels: JetBrains Mono, muted color
- Company + role: Space Grotesk, primary text
- Bullets: Inter, standard size, with small lime `▸` markers
- Cards slide in alternating left/right on desktop (Framer Motion)

**GSAP:** `ScrollTrigger` + `drawSVG` for the timeline stroke  
**Framer Motion:** card slide-in on viewport enter

---

### 6.7 Education & Certifications Section

**Layout: Two sub-sections side by side**

**Education (left):**
```
MSc Computer Science
Kurukshetra University  ·  2022–2024

BSc Computer Science
University of Delhi  ·  2019–2022
```

**Certifications (right) — Badge grid:**
```
┌─────────────────┐  ┌─────────────────┐
│  DataCamp       │  │  DataCamp       │
│  Data Scientist │  │  Data Analyst   │
│  Associate 2025 │  │  Associate 2024 │
└─────────────────┘  └─────────────────┘

┌─────────────────┐  ┌─────────────────┐
│  DataCamp       │  │  Google         │
│  SQL Associate  │  │  Analytics      │
│  2024           │  │  2024           │
└─────────────────┘  └─────────────────┘
```

**Details:**
- Cert badges: card with institution logo placeholder, lime border, hover lifts
- Each badge links to the actual cert URL (if available)
- Reveal: stagger fade-up on scroll (Framer Motion)

---

### 6.8 Contact Section

**Goal:** One clear action. No noise.

**Layout:**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   Let's build something.                               │
│                                                         │
│   Open to full-time data roles and selective           │
│   freelance projects.                                   │
│                                                         │
│   nitin.ydv1901@gmail.com                              │
│                                                         │
│   [ Send a Message ]                                   │
│                                                         │
│   ──────────────────────────────────                   │
│   GitHub  ·  LinkedIn  ·  Resume                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Details:**
- "Let's build something." in Display / Space Grotesk 800, large
- Email address: clickable `mailto:`, JetBrains Mono, lime color
- Contact form: Shadcn/UI `<Input>` + `<Textarea>` + `<Button>`, themed to Carbon/Lime — uses Formspree or EmailJS for delivery (no backend required)
- Form fields: `Name`, `Email`, `Message`
- Submit button: `[ Send Message → ]` — MagneticButton (ReactBits), fills lime on hover
- Social links: icon + label, horizontal row, muted until hover → lime
- Background: very subtle lime radial glow at center bottom, 4% opacity

---

## 7. Animation & Transition Architecture

### 7.1 Scroll Behavior

- **Smooth scroll:** CSS `scroll-behavior: smooth` + Framer Motion `useScroll` for progress tracking
- **Section transitions:** Each section uses `useInView` (Framer) with `triggerOnce: true` — elements animate in once on first scroll-enter
- **No scroll-jacking:** Do not lock native scroll. GSAP ScrollTrigger used only for additive effects (timeline draw, counter trigger), never to override scroll position

### 7.2 Page Load Sequence

```
0ms    → Carbon background renders
100ms  → Nav fades in (opacity 0→1)
300ms  → Terminal prompt `> _` appears and blinks
800ms  → Hero name: SplitText character stagger starts
1200ms → Tagline fades up
1500ms → CTA buttons slide up
2000ms → Scroll indicator pulses
```

### 7.3 Shared Transition Variants (Framer Motion)

```js
// Fade up — used for most text and card reveals
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

// Stagger container — wraps groups of cards/tags
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

// Slide in from left
export const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}
```

### 7.4 Hover States

| Element | Hover Effect |
|---|---|
| Project card | `scale(1.02)`, shadow spread, border → lime |
| Nav link | Lime underline slides in from left |
| CTA button | Background fills lime, text → carbon |
| Social icons | Color → lime, translate-y: -2px |
| Cert badge | Border → lime, slight lift |
| Timeline node | Pulse ring expands |

### 7.5 Cursor (Desktop Only)

```
Default state:    16px lime dot, lag spring: stiffness 400, damping 28
Hover interactive: morphs to 40px hollow ring (border only)
Hover project card: text "VIEW →" in JetBrains Mono replaces dot
Hover CTA button: dot inverts (carbon on lime bg)
```

Implemented as a fixed-position `div` updated via `mousemove` listener + Framer Motion `useSpring`.

---

## 8. Component Map

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── cursor/
│   │   └── CustomCursor.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── ui/                        ← Shadcn/UI components (themed)
│   │   ├── button.jsx
│   │   ├── input.jsx
│   │   ├── textarea.jsx
│   │   └── card.jsx
│   └── shared/
│       ├── SectionTitle.jsx       ← Reusable animated title
│       ├── ProjectCard.jsx
│       ├── SkillBento.jsx
│       ├── TimelineItem.jsx
│       ├── CertBadge.jsx
│       └── AnimatedCounter.jsx
├── hooks/
│   ├── useCustomCursor.js
│   └── useSectionInView.js
├── lib/
│   ├── animations.js              ← Shared Framer variants
│   └── utils.js
├── assets/
│   └── resume/
│       └── Nitin_Yadav_Resume.pdf
├── App.jsx
├── main.jsx
└── index.css                      ← CSS custom properties (token system)
```

---

## 9. Responsive Behavior

| Breakpoint | Key Changes |
|---|---|
| `< 640px` (mobile) | Single-column layout everywhere; hero name font-size ~3rem; nav → hamburger overlay; timeline left-aligned; cursor disabled |
| `640–1024px` (tablet) | 2-col skills bento becomes 1-col; projects 2-col stays; experience timeline centered |
| `> 1024px` (desktop) | Full layout as specified; custom cursor active; 2-col about section |

**`prefers-reduced-motion`:** All GSAP and Framer animations wrap in a `useReducedMotion` check — elements render at final state immediately with no transitions when the user has this preference enabled.

---

## 10. SEO & Meta

```html
<title>Nitin Yadav — Data Scientist & ML Engineer</title>
<meta name="description" content="Portfolio of Nitin Yadav — Data Scientist, ML Engineer, and Data Analyst. Builds ML models, BI dashboards, and data pipelines." />
<meta property="og:image" content="/og-image.png" />  <!-- 1200×630, carbon bg + lime name -->
<meta name="theme-color" content="#171717" />
```

---

## 11. Performance Requirements

| Metric | Target |
|---|---|
| LCP | < 2.5s on 4G |
| FID / INP | < 100ms |
| CLS | < 0.1 |
| Bundle size (JS) | < 300KB gzipped |
| Font load | Preload Space Grotesk 700/800 + Inter 400 |
| Images | WebP, lazy-loaded, explicit width/height |
| GSAP | Import only used plugins (`ScrollTrigger`, `SplitText`) |

---

## 12. Content Checklist (Before Launch)

- [ ] Replace cert badges with actual certification URLs
- [ ] Add GitHub links for all 4 projects
- [ ] Add Streamlit/demo links where live demos exist
- [ ] Professional headshot or finalized monogram asset
- [ ] Set up Formspree / EmailJS endpoint in Contact form
- [ ] OG image created (1200×630, Carbon bg, lime text)
- [ ] Update LinkedIn URL confirmation
- [ ] Final copy review on tagline and About bio
- [ ] Test form submission end-to-end
- [ ] Accessibility audit (keyboard nav, focus rings, contrast ratios)

---

## 13. Out of Scope (v1)

- Blog / writing section
- Dark/light mode toggle (Carbon is the only mode)
- CMS integration
- Analytics dashboard embed
- Multi-language support

---

## 14. Open Questions

1. **Demo links:** Which projects have live Streamlit deployments? These should be linked prominently.
2. **Profile photo:** Use a real photo (recommended — increases response rate from recruiters) or go with a stylized `NY` monogram?
3. **Contact form backend:** Formspree (easiest) or EmailJS (no redirect)? Or just a `mailto:` link?
4. **Domain:** Custom domain (`nitinyadav.dev` or similar) or Vercel default URL for v1?
5. **GitHub repos:** Are the project repos public? If not, make them public before launch.

---

*PRD v1.0 — Ready for implementation. Start with the token system in `index.css`, then build Hero → Navbar → Projects in that order. Everything else is secondary to those three.*
