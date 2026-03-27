# Kiku86 Restaurant Website

A modern, responsive restaurant website for Kiku86, a Japanese restaurant in Helsinki. Built with Next.js, React, and Tailwind CSS.

## Project Overview

Kiku86 is a sushi and Japanese restaurant website featuring:
- Responsive home page with hero section
- Full menu display
- Restaurant information (hours, location)
- Online table booking system via Klarsystems
- Modern design with serif and sans-serif typography

## Technology Stack

- **Framework**: Next.js 16.1.6
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS 4.2.0
- **UI Components**: Radix UI
- **Typography**: Google Fonts (Inter, Playfair Display)
- **Analytics**: Vercel Analytics
- **Forms**: React Hook Form

## Booking System
- Widget URL: https://booking.klarsystems.com/book/kiku
- Admin: https://booking.klarsystems.com/admin/kiku/login
- Managed by Klar Systems (booking.klarsystems.com)

## Project Structure

```
kiku86/
├── app/
│   ├── page.tsx              # Home page with inlined booking section
│   ├── layout.tsx            # Root layout with metadata
│   ├── menu/
│   │   └── page.tsx          # Full menu page
│   └── globals.css           # Global styles
├── components/
│   ├── navbar.tsx            # Navigation bar
│   ├── hero.tsx              # Hero section
│   ├── menu-section.tsx       # Featured menu section
│   ├── about-section.tsx      # Restaurant info
│   ├── hours-section.tsx      # Operating hours
│   ├── location-section.tsx   # Location & address
│   ├── contact-section.tsx    # Booking widget (also inlined in app/page.tsx)
│   └── footer.tsx            # Footer
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended Node.js 20 LTS)
- npm or yarn package manager

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Key Features

### Dynamic Content Loading

- Home page uses `force-dynamic` with `revalidate = 0` to ensure real-time updates
- Prevents caching of stale booking widget content

### Responsive Design

- Mobile-first approach with Tailwind CSS
- Breakpoints: `md:` for tablet/desktop
- Flexible grid system with `max-w-5xl` and `max-w-2xl` containers

### Semantic HTML

- Proper section IDs for navigation (contact, menu, hours, location)
- Accessible iframe with descriptive titles
- Semantic heading hierarchy

## Environment Configuration

All configuration is stored in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Kiku86 — Sushi & Japanese Dishes in Helsinki',
  description: 'Kiku86 is a Japanese restaurant in Helsinki...',
}
```

## Deployment

The website is optimized for deployment on Vercel:

- Includes Vercel Analytics
- Automatic environment setup
- Zero-config deployment

## Contact Section Styling

The booking section uses consistent Tailwind classes:

- **Container**: `py-20 px-6 bg-muted`
- **Max Width**: `max-w-5xl mx-auto`
- **Heading**: `font-serif text-3xl md:text-4xl font-bold`
- **Subheading**: `text-xs tracking-[0.2em] uppercase`
- **Widget Container**: `max-w-2xl` with `border border-border rounded-lg`

## Troubleshooting

### Booking Widget Not Loading

1. Verify the restaurant slug in the iframe src matches your Klarsystems configuration
2. Check browser console for iframe loading errors
3. Ensure CORS headers allow embedding from Klarsystems
4. Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Stale Content Issues

The home page uses force-dynamic rendering to prevent caching issues with the inlined booking widget. If changes don't appear:

1. Clear Next.js cache: `rm -rf .next`
2. Rebuild: `npm run build`
3. Restart dev server: `npm run dev`

## License

Private project for Kiku86 restaurant.

## Support

For questions about the booking system integration, contact Klarsystems support at [their website](https://www.klarsystems.com).
