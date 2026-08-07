# Justin Dwinata Portfolio

Modern, responsive personal portfolio website built with Next.js, showcasing Justin's projects, skills, and experience.

## Features

- **Dark Theme**: Sleek dark background with high contrast white text and accent colors
- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile devices
- **Scroll Animations**: Smooth fade-in animations triggered on scroll with IntersectionObserver
- **Smooth Navigation**: Active nav highlighting and smooth scroll behavior
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Project Showcase**: Grid layout with project thumbnails and descriptions
- **Career Timeline**: Visual timeline of education and professional experience
- **Skills Display**: Organized skill groups with tool tags
- **Certificates**: Certificate gallery with image overlays
- **Contact Section**: Multiple contact options (email, GitHub, LinkedIn, WhatsApp)
- **Hero Section**: Eye-catching hero with scroll hint and entrance animations

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: CSS with CSS Variables
- **Animations**: Custom CSS animations + Intersection Observer API
- **Icons**: React Icons

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/Justindwinata/finalporto.git
cd finalporto
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Career.tsx          # Career timeline
│   ├── Projects.tsx        # Projects showcase
│   ├── Achievements.tsx    # Certificates
│   ├── Contact.tsx         # Contact section
│   ├── Footer.tsx          # Footer
│   └── ScrollFade.tsx      # Scroll animation wrapper
├── styles/
│   ├── navbar.css
│   ├── hero.css
│   ├── about.css
│   ├── skills.css
│   ├── career.css
│   ├── projects.css
│   ├── achievements.css
│   ├── contact.css
│   ├── footer.css
│   └── animations.css
├── lib/
│   └── config.ts           # Configuration and content
└── public/
    ├── cv/                 # Resume files
    ├── sertifikat/         # Certificate images
    ├── assets/             # Project thumbnails
    └── images/             # Photos and images
```

## Customization

Edit `src/lib/config.ts` to update:
- Developer info (name, title, description)
- About section content
- Skills and tools
- Career/experience entries
- Projects list
- Certificates
- Contact information

## Sections

### Home (Hero)
- Large heading with developer name
- Title and location
- Brief description
- Call-to-action buttons (Download CV, Get in Touch)
- Scroll hint animation

### About
- Profile photo with frame effect
- Personal introduction
- Detailed bio
- Highlights/badges (university, status, availability)

### Skills
- Organized skill groups
- Tool tags for each skill category
- Hover effects

### Career
- Visual timeline of experiences
- Education and professional positions
- Technologies used
- Animated timeline markers

### Projects
- Grid layout of project cards
- Project thumbnails/images
- Project descriptions and technologies
- Load more functionality
- Hover zoom effects

### Achievements
- Certificate gallery
- Image overlay on hover
- Clickable to view full certificate
- Load more functionality

### Contact
- Multiple contact options
- Email, GitHub, LinkedIn, WhatsApp links
- Resume download link
- Hover effects with icon scaling

### Footer
- Copyright information
- Links back to social profiles

## Animations

- **Scroll Fade**: Elements fade in and slide up as they enter the viewport
- **Hero Entrance**: Staggered animations for hero title, subtitle, description, and CTA
- **Scroll Hint**: Bouncing arrow in hero section
- **Hover Effects**: Cards scale, overlay appears, colors shift
- **Floating Glows**: Background gradient orbs float gently
- **Active Nav**: Underline animation for active navigation link

## Performance

- Static site generation with Next.js
- Lazy loading for images
- CSS animations (GPU-accelerated)
- Optimized bundle size (~108KB First Load JS)

## Deployment

The site is ready for deployment on:
- **Vercel** (recommended, built-in Next.js support)
- **Netlify**
- **GitHub Pages**
- **Any static hosting**

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT License - feel free to use this template for your own portfolio

## Credits

Design inspired by modern portfolio websites with focus on:
- Dark theme aesthetics
- Smooth animations
- Responsive design
- Professional layout

---

**Built by Justin Dwinata** | [GitHub](https://github.com/Justindwinata) | [LinkedIn](https://linkedin.com/in/justindwinata)
