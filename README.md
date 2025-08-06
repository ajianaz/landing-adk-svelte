# IT Services Landing Page

A modern, bilingual (Indonesia & English) landing page for IT consulting services built with SvelteKit.

## Features

- **Bilingual Support**: Full support for both Indonesian and English languages
- **Light/Dark Theme**: Toggle between light and dark themes with system preference detection
- **Responsive Design**: Works on all device sizes
- **Interactive Components**: Animated UI elements with smooth transitions
- **Complete Sections**:
  - Header with navigation and language toggle
  - Hero section with CTAs
  - Key services showcase
  - How we work process visualization
  - Portfolio with filtering capability
  - Client testimonials carousel
  - About section
  - Contact form with WhatsApp integration
  - Footer with social links

## Recent UI/UX Improvements

### Theme Switching Fixes

- Proper theme initialization on page load
- Consistent color scheme using CSS variables
- Smooth transitions between themes
- Improved contrast ratios for accessibility

### Bilingual Support Enhancements

- Verified language toggle functionality
- All content translated to both languages
- Language preference stored in localStorage

### Color Refinement

- Comprehensive color palette using CSS variables
- Improved contrast ratios for better accessibility
- Visual harmony across all components
- Proper dark mode implementation

### Smooth Animations

- Fade-in animations with staggered delays
- Scale and hover effects for interactive elements
- Smooth transitions for all UI changes
- Performance-optimized animations

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/) - Framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vite](https://vitejs.dev/) - Build tool

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd landing-adk-svelte
   ```

2. Install dependencies:

   ```bash
   pnpm install
   # or
   npm install
   ```

3. Start the development server:

   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
pnpm run build
# or
npm run build
```

### Previewing the Production Build

```bash
pnpm run preview
# or
npm run preview
```

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── ui/          # Reusable UI components
│   │   ├── Header.svelte
│   │   ├── Hero.svelte
│   │   ├── Services.svelte
│   │   ├── HowItWorks.svelte
│   │   ├── Portfolio.svelte
│   │   ├── Testimonials.svelte
│   │   ├── About.svelte
│   │   ├── Contact.svelte
│   │   └── Footer.svelte
│   ├── stores.ts        # Global state management
│   ├── translations.ts  # Bilingual content
│   └── types.ts         # TypeScript types
├── routes/
│   ├── +layout.svelte
│   └── +page.svelte
├── app.css              # Global styles
├── app.d.ts             # TypeScript declarations
└── app.html             # HTML template
```

## Customization

### Language Content

All bilingual content is managed in `src/lib/translations.ts`. You can easily add or modify translations in this file.

### Theme Colors

Theme colors are defined in `src/app.css` using CSS variables. Modify these to match your brand colors.

### Adding New Sections

1. Create a new component in `src/lib/components/`
2. Import and use it in `src/routes/+page.svelte`

## Deployment

This project can be deployed to any platform that supports Node.js or static site hosting:

- Vercel
- Netlify
- GitHub Pages
- Any Node.js hosting platform

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
