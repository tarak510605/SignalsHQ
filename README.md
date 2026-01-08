# SignalsHQ Landing Page

A modern, conversion-focused landing page for SignalsHQ - an AI-powered tax automation platform for CPAs and tax firms.

## Features

- 🎨 Modern, clean design with Tailwind CSS
- 📱 Fully responsive (mobile-first)
- ⚡ Built with Next.js 14 and React 18
- 🎯 Conversion-optimized layout
- ♿ Accessibility best practices
- 🔄 Smooth scroll navigation

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
signalshq/
├── app/
│   ├── globals.css      # Global styles with Tailwind
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Button.tsx       # Reusable button component
│   ├── FeatureCard.tsx  # Feature card component
│   ├── Step.tsx         # How it works step component
│   ├── Testimonial.tsx  # Testimonial card component
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features grid section
│   ├── HowItWorks.tsx   # How it works section
│   ├── Testimonials.tsx # Testimonials section
│   ├── Security.tsx     # Security section
│   ├── CTASection.tsx   # Call-to-action section
│   └── Footer.tsx       # Footer
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies

```

## Sections

1. **Header** - Fixed navigation with smooth scroll
2. **Hero** - Eye-catching headline with primary CTAs
3. **Features** - 6 key benefits in a responsive grid
4. **How It Works** - 3-step process visualization
5. **Testimonials** - Social proof with stats
6. **Security** - Enterprise-grade security features
7. **CTA Section** - Final conversion push
8. **Footer** - Links and company info

## Customization

### Colors

Edit the color palette in [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: {
    // Customize primary brand colors
  }
}
```

### Content

All content is editable in the component files within the `components/` directory.

## Technologies

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **CSS Grid & Flexbox** - Responsive layouts

## License

MIT

