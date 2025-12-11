# Fellows Project

A modern static website built with Next.js.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build Static Site

To build a static export:

```bash
npm run build
```

The static files will be in the `out/` directory, ready to deploy anywhere.

## Deployment

The static site can be deployed to:
- **GitHub Pages**: Push the `out/` folder to your `gh-pages` branch
- **Netlify**: Connect your repo and set build command to `npm run build` and publish directory to `out`
- **Vercel**: Connect your repo (Next.js is automatically detected)
- **Any static hosting**: Upload the contents of the `out/` folder

## Tech Stack

- Next.js 14
- React 18
- Static Export Mode
