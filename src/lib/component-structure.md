# Component Structure

## Directory Structure

```
src/lib/
├── components/
│   ├── Header.svelte
│   ├── Hero.svelte
│   ├── Services.svelte
│   ├── HowItWorks.svelte
│   ├── Portfolio.svelte
│   ├── Testimonials.svelte
│   ├── About.svelte
│   ├── Contact.svelte
│   ├── Footer.svelte
│   └── ui/
│       ├── Button.svelte
│       ├── Card.svelte
│       ├── LanguageToggle.svelte
│       └── ThemeToggle.svelte
└── stores.md
```

## Component Descriptions

### Header.svelte

- Contains logo, navigation menu, language toggle, and CTA button
- Responsive design with mobile menu
- Uses LanguageToggle and ThemeToggle components

### Hero.svelte

- Main headline and subheadline in both languages
- Primary and secondary CTA buttons
- Background animation or illustration

### Services.svelte

- Grid of service cards with icons
- Interactive hover effects
- Bilingual descriptions for each service

### HowItWorks.svelte

- Step-by-step process visualization
- Animated transitions between steps
- Icons or illustrations for each step

### Portfolio.svelte

- Project showcase with filtering capability
- Project cards with bilingual descriptions
- Image gallery or carousel for each project

### Testimonials.svelte

- Client testimonials carousel
- Client photos/logos
- Bilingual testimonials with translation flags

### About.svelte

- Company bio or founder story
- Vision and mission statements
- Remote-first, tech-forward approach description

### Contact.svelte

- Contact form with validation
- WhatsApp button with custom message
- Email and Calendly integration

### Footer.svelte

- Links to Terms, Privacy, Contact
- Social media icons
- Bilingual copyright notice

### UI Components

#### Button.svelte

- Reusable button component with variants
- Support for icons
- Loading states

#### Card.svelte

- Reusable card component for content
- Support for images, titles, and descriptions
- Hover effects

#### LanguageToggle.svelte

- Toggle between Indonesian and English
- Flag icons for each language
- Persistent user preference

#### ThemeToggle.svelte

- Toggle between light and dark themes
- Icon changes based on current theme
- Persistent user preference
