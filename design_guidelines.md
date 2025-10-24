# E-Portfolio Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based, drawing inspiration from modern developer/designer portfolios like Linear team pages, Behance profiles, and contemporary personal brand sites.

**Core Principles:**
- Bold, confident typography hierarchy
- Content-first presentation with strategic whitespace
- Professional credibility balanced with creative personality
- Seamless video integration as a primary trust-building element

## Typography System

**Primary Font:** Inter (Google Fonts) - Clean, modern, highly readable
**Accent Font:** Space Grotesk (Google Fonts) - Distinctive headers

**Hierarchy:**
- Hero Name: text-5xl md:text-7xl, font-bold, tracking-tight
- Section Headers: text-3xl md:text-5xl, font-bold
- Subsection Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- Labels/Meta: text-sm, font-medium, uppercase tracking-wide

## Layout System

**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, gap-8, my-12)

**Section Padding:** py-16 md:py-24 for consistent vertical rhythm

**Container Widths:**
- Full sections: w-full with max-w-7xl mx-auto px-6 md:px-8
- Content blocks: max-w-4xl for text readability
- Project grids: max-w-6xl

## Component Library

### Navigation
Fixed header with backdrop blur (backdrop-blur-lg), minimal height (h-16), contains logo/name on left, navigation links center/right, and "Download CV" primary CTA button. Links use text-sm font-medium with subtle underline on hover.

### Hero Section (Full Viewport)
Asymmetric two-column layout (60/40 split on desktop, stacked mobile). Left column: Large name display, professional title/student status, two-line objective statement, dual CTAs ("View Projects" primary, "Contact Me" secondary). Right column: Presentation video embed with rounded corners (rounded-2xl), subtle shadow, and play overlay. No generic background - clean, focused layout.

### Presentation Video Section
Video player with custom controls styling, 16:9 aspect ratio, rounded-2xl container. Include video title above and brief context text below (30-60 seconds about what viewers will learn).

### About & Objectives Section
Two-column layout (md:grid-cols-2, gap-12). Left: Professional headshot (circular, w-64 h-64) with short bio paragraph. Right: "My Objectives" card with bulleted list (3-5 items) using checkmark icons from Heroicons, and "What I'm Looking For" subsection with specific opportunities/roles listed.

### Projects Showcase
Masonry-style grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-6). Each project card: Featured image (aspect-video), project title (text-xl font-semibold), brief description (2-3 lines), tech stack tags (inline pills with rounded-full), and "View Details" link. Cards have subtle hover lift effect (transform transition).

### Experience/CV Section
Timeline layout with vertical line connector. Each experience entry: Company/Institution name (text-lg font-semibold), Role/Program, Date range (text-sm uppercase), 2-3 bullet points of achievements. Alternate left/right positioning on desktop for visual interest.

### Skills Grid
Three-column grid (grid-cols-2 md:grid-cols-3 lg:grid-cols-4, gap-4) of skill cards. Each card: Icon from Heroicons, skill name, optional proficiency indicator (simple dot system or text like "Advanced"). Group by category (Technical, Design, Soft Skills).

### Contact/CTA Section
Centered layout with bold heading "Let's Work Together", supporting paragraph, email address as large clickable link (text-2xl), social media icons (LinkedIn, GitHub, portfolio links) using Heroicons, and "Download Full CV" prominent button with download icon.

### Footer
Three-column layout (stacked mobile): Left - Name and tagline, Center - Quick links (About, Projects, Contact), Right - Social links and "Last updated [date]". Minimal height, text-sm.

## Icons
**Library:** Heroicons via CDN (outline style for most UI, solid for emphasis)
**Common Uses:** Checkmarks, external links, download, social media, tech stack categories

## Images

**Hero Section:** Optional professional headshot or working environment photo - if used, keep it subtle and not dominating (prefer video as main visual)

**About Section:** One high-quality professional headshot (circular crop, well-lit, appropriate attire)

**Project Showcase:** 3-6 project thumbnail images showing interface designs, deployed projects, or representative work samples (aspect-video ratio, high-res)

**Background Elements:** None - maintain clean, distraction-free presentation

**Image Treatment:** All images use rounded-2xl corners, subtle shadow (shadow-lg), and slight hover scale (hover:scale-105 transition)

## Accessibility
- Focus states on all interactive elements using ring utilities
- Semantic HTML throughout (nav, main, section, article)
- Alt text for all images
- ARIA labels for icon-only buttons
- Keyboard navigation support
- Sufficient contrast ratios (will be validated with color implementation)

## Animations
**Minimal and Purposeful:**
- Smooth scroll behavior for anchor navigation
- Subtle fade-in on scroll for section reveals (intersection observer)
- Card hover lifts (translate-y-1 transition)
- Button hover states (built-in component behavior)
**No:** Parallax, complex scroll-triggered sequences, or loading animations