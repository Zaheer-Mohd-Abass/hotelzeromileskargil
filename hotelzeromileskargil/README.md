# Hotel Zero Miles Kargil

A modern, responsive hotel website built with Next.js and Tailwind CSS.

## Features

- 🏨 Beautiful and modern UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Styled with Tailwind CSS
- ⚡ Built with Next.js 14 (App Router)
- 🔍 SEO optimized
- 📝 Contact and booking form

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd hotelzeromileskargil
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
hotelzeromileskargil/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Navbar.tsx      # Navigation bar
│       ├── Hero.tsx        # Hero section
│       ├── Rooms.tsx       # Rooms section
│       ├── Amenities.tsx   # Amenities section
│       ├── Services.tsx    # Services section
│       ├── Contact.tsx     # Contact & booking form
│       └── Footer.tsx      # Footer
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Customization

You can customize the website by:
- Updating room information in `src/components/Rooms.tsx`
- Modifying amenities in `src/components/Amenities.tsx`
- Changing contact information in `src/components/Contact.tsx` and `src/components/Footer.tsx`
- Adjusting colors in `tailwind.config.ts`

## License

This project is open source and available for use.
