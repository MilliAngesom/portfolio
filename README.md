# Million Angesom Asefaw - Portfolio Website

This is a modern, responsive portfolio website for Million Angesom Asefaw, a Robotics PhD Student. Built with Next.js, Tailwind CSS, and TypeScript.

## Features

- **Responsive Design**: Looks great on all devices (Mobile, Tablet, Desktop).
- **Projects Showcase**: Featured projects with detailed MDX pages and GitHub integration.
- **Dynamic Content**: Easy to update projects using Markdown/MDX in `content/projects`.
- **CV & Research**: Specialized sections for academic timeline and publications/research.
- **Contact Form**: Integrated with API (ready for serverless deployment).
- **SEO Optimized**: Semantic HTML, meta tags, and JSON-LD structured data.

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MilliAngesom/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Structure

- `/pages`: Application routes and views.
- `/components`: Reusable UI components (Header, Footer, Cards).
- `/content`: MDX files for projects and CV.
- `/public`: Static assets (images, CV PDF).
- `/lib`: Utility functions (MDX parsing, GitHub API).
- `/styles`: Global styles and Tailwind configuration.

## Customization

- To change colors: Edit `tailwind.config.js`.
- To update content: Edit files in `content/` or specific pages in `pages/`.
- To change the headshot: Replace `public/headshot.jpg`.

## License

MIT
