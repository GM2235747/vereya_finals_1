# Verēya — Personal Blog Landing Page

**Author:** Guilliano D. Magbitang (BSIT)  
**Type:** School Project — Web Development Finals Activity

A modern, minimalist personal blog landing page built with React and Vite. This project showcases a monochrome design system, state-driven navigation, and a component-based architecture using ShadCN UI primitives.

## About This Project

This is a single-page application designed to serve as a personal blog and portfolio. The site features multiple content sections accessible via in-app navigation without traditional routing, demonstrating modern React patterns and performance-optimized build tooling.

## Technical Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS v4 with custom design tokens
- **UI Components:** ShadCN (Radix UI primitives)
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Type Safety:** JSDoc annotations with VS Code IntelliSense

## Architecture

- **State Management:** Local React state with `useState` and `useMemo` for page switching
- **Navigation:** Anchor-based in-app navigation without React Router
- **Component Structure:** Modular, reusable components following atomic design principles
- **Styling Approach:** Utility-first CSS with Tailwind, custom CSS utilities for typography and spacing
- **Build Output:** Static site generation optimized for edge deployment

## Key Features

- **Monochrome Design System:** Black, white, and gray palette with CSS custom properties
- **Responsive Layout:** Mobile-first approach with Tailwind breakpoints
- **Custom Logo Component:** SVG-based emblem used throughout the site
- **Smooth Scroll Interactions:** IntersectionObserver-based scroll triggers
- **Card-Based Content:** Bento grid layout for featured content
- **Performance Optimized:** Code splitting, lazy loading, and Vite's ESM-based dev server

## Project Structure

```
src/
├── components/
│   ├── pro-blocks/        # Landing page sections
│   │   ├── logo.jsx       # Custom emblem component
│   │   └── landing-page/  # Hero, navbar, footer, features
│   ├── sections/          # Content sections (writing, projects, about)
│   └── ui/                # Reusable UI primitives (buttons, cards)
├── lib/
│   └── utils.js           # Utility functions (cn for class merging)
├── App.jsx                # Main app with state-driven routing
└── index.css              # Global styles and design tokens
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Deployed on Vercel with automatic builds from the `master` branch. The build process uses Vite's optimized bundler with ESM support.

**Live URL:** [Deployed on Vercel](https://vereya-vercel.vercel.app)

## Design Philosophy

This project follows a "quietly practical" design approach—professional without being corporate, personal without being informal. The monochrome palette and card-based layouts prioritize content clarity and reading experience over decorative elements.

## License

This is a school project created for educational purposes.



test message for commit
