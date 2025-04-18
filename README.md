# Developer Portfolio

A professional, elegant developer portfolio built with Next.js, Tailwind CSS, and shadcn/ui.

## Features

- Modern, responsive design
- Elegant UI with animations
- Dark/light mode support (planned)
- Sections for showcasing projects, skills, and experience
- Contact form (planned)

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [Framer Motion](https://www.framer.com/motion/) - Animations (planned)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/developer-portfolio.git
cd developer-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

1. Update personal information in the components
2. Replace placeholder images with your own
3. Add your own projects to the `Projects.tsx` component
4. Customize colors in `tailwind.config.js` and `globals.css`

## Deployment

### Deploy to Vercel

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com/), the platform from the creators of Next.js:

1. Push your code to a GitHub repository
2. Import your project to Vercel:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your repository
   - Vercel will automatically detect Next.js and use the optimal build settings

3. Your site will be deployed to a *.vercel.app domain
4. To use a custom domain, add it in the Vercel dashboard

Alternatively, you can deploy from the command line:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## License

MIT 