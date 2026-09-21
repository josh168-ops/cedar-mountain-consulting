# Cedar Mountain Consulting — Site

Astro 4 + Tailwind static site. Deployed to Netlify.

## Stack
- **Astro 4** with file-based routing in `src/pages/`
- **Tailwind CSS** via `@astrojs/tailwind`; custom `cedar-*` color palette in `tailwind.config.mjs`
- **Content collections** — `src/content/pages/` (one .md per page) and `src/content/team/` (one .md per person)
- **Decap CMS** at `/admin` — `public/admin/config.yml` and `public/admin/index.html`
- **Netlify Identity** — widget loaded in `src/layouts/Layout.astro`
- **Netlify Forms** — `name="contact"` form in `src/pages/contact.astro`

## Dev
```
npm install
npm run dev        # http://localhost:4321
npm run build      # output in dist/
```

## Content edits
- Page copy: edit the corresponding `.md` in `src/content/pages/`
- Team members: edit/add `.md` files in `src/content/team/` — `order` field controls display order
- Colors: `tailwind.config.mjs` → `theme.extend.colors.cedar`

## Deployment
Push to `main` → Netlify auto-builds. Enable Netlify Identity and Git Gateway in the Netlify dashboard to use the CMS at `/admin`.
