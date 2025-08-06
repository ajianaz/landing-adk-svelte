# Animations and UI/UX Plan

## Design Philosophy

- Clean, tech-oriented layout with smooth animations
- Use of light/dark theme toggle to enhance UX
- Bilingual support (Indo/Eng) switch in top right corner
- Responsive design across all devices
- Clear CTAs: Konsultasi Gratis / Free Consultation

## Animation Library

- Use Svelte's built-in animation capabilities
- Consider using svelte/animate and svelte/transition for smooth effects
- Implement staggered animations for lists and grids
- Add hover effects and micro-interactions

## UI/UX Features

### Header Animations

- Smooth navigation menu transitions
- Language toggle hover effects
- CTA button pulse animation

### Hero Section

- Text fade-in animations
- Background particle animation or gradient shift
- Button hover effects

### Services Section

- Card flip or slide-in animations
- Icon animations on hover
- Staggered entrance animations

### How It Works Section

- Step-by-step reveal animations
- Progress line animation
- Icon transitions

### Portfolio Section

- Filter transition animations
- Project card hover effects
- Image gallery transitions

### Testimonials Section

- Carousel slide animations
- Client photo reveal animations
- Text fade transitions

### About Section

- Bio text reveal animations
- Team member card animations
- Background element movements

### Contact Section

- Form field focus animations
- Button hover and click effects
- Success message animations

## Theme Implementation

- Light theme: Clean whites, tech blues, and accent colors
- Dark theme: Deep blacks, vibrant accents
- Smooth transition between themes
- System preference detection

## Responsive Design

- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interactions
- Adaptive layouts for all screen sizes

## Performance Considerations

- Optimize animations for 60fps
- Use CSS transforms and opacity for better performance
- Lazy load non-critical animations
- Provide reduced motion options
