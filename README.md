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

### Deploy to GitHub Pages

This project includes a GitHub workflow for automatic deployment to GitHub Pages:

1. **Before first deployment:**
   - In GitHub repository settings, go to "Pages" and set the source to "GitHub Actions"
   - Update the `basePath` in `next.config.js` to match your repository name (e.g., `/portfolio`) 
   - If deploying to `username.github.io`, set `basePath` to an empty string

2. **Automatic deployment:**
   - Every push to the `main` branch will trigger the deployment workflow
   - You can also manually trigger the workflow from the "Actions" tab in your GitHub repository

3. **Manual deployment:**
   ```bash
   npm run deploy
   ```

### Deploy to Vercel

The easiest way to deploy this site is to use [Vercel](https://vercel.com/), the platform from the creators of Next.js:

```bash
npm install -g vercel
vercel
```

## License

MIT 