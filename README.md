# Digital Marketing Agency Website

A modern, responsive website for a digital marketing agency, built with
**Next.js 15**, **React 19**, and **Tailwind CSS**.

## Pages

- **Home** (`/`) — hero, services, stats, featured work, process, testimonials, CTA
- **Services** (`/services`) — detailed breakdown of every service
- **Work** (`/work`) — portfolio of case studies, each with its own page (`/work/[slug]`)
- **About** (`/about`) — company story, values, team
- **Contact** (`/contact`) — contact form + details

## Running the site

```bash
npm install      # first time only (already done)
npm run dev      # start the dev server at http://localhost:3000
```

To build for production:

```bash
npm run build
npm run start
```

## 🔑 Editing the content (important)

All the text, services, projects, testimonials, and contact details live in
**one file**:

```
lib/content.ts
```

Open it and replace the placeholder content with the real company's details:

- `company` — name, tagline, email, phone, address, social links
- `services` — what the agency offers
- `projects` — the case studies shown under "Work" (this is "their work")
- `testimonials` — client quotes
- `team`, `values`, `stats` — about-page content

You don't need to touch any of the design code — change the data and the whole
site updates.

### Replacing placeholder images

Project "images" are currently colorful gradients (the `gradient` field in each
project). To use real images later, drop them in a `public/` folder and update
the components to use Next.js `<Image>`.

## Deploying

The easiest way to host this is **Vercel** (free for this kind of site):

1. Push the project to GitHub.
2. Go to vercel.com, import the repo, and click deploy.

It also works on Netlify or any host that supports Next.js.
