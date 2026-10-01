# NeonForge

Built in Next.js (App Router + TypeScript + Tailwind v4). Each section is now
its own page/route — navigation is instant, same-tab, no more anchor scrolling.

## Structure

- `app/page.tsx` — Home (`/`)
- `app/portfolio/page.tsx` — Portfolio (`/portfolio`)
- `app/services/page.tsx` — Services (`/services`)
- `app/connect/page.tsx` — Connect (`/connect`)
- `app/projects/page.tsx` — the "View Projects" page (thumbnail grid + click-to-enlarge lightbox with per-project screenshot carousel)
- `app/api/contact/route.ts` — receives the Connect form and forwards it to Telegram
- `app/icon.png` / `app/apple-icon.png` — your NF logo, used as the site favicon
- `lib/projects.ts` — **edit this file** to add/update projects (title, description, images, tags)
- `components/` — Navbar, sections, gallery, etc.
- `public/images/` — section background photos
- `public/images/projects/` — project screenshots (already includes your 2 projects)
- `public/images/logo-nf.png` — your logo, used in the nav and the floating back-to-top button

## 1. Install dependencies

```bash
npm install
```

## 2. Add your Telegram bot credentials

Copy `.env.local.example` to `.env.local` and fill in your real bot token and chat ID:

```bash
cp .env.local.example .env.local
```

```
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

`.env.local` is already git-ignored — never commit it. When you deploy (e.g. to Vercel),
add the same two variables in your hosting provider's dashboard under Environment Variables.

## 3. Run locally

```bash
npm run dev
```

Visit http://localhost:3000. Submit the Connect form to test — you should get a
message in your Telegram chat within a couple of seconds.

## 4. Update content

- **Section backgrounds**: your 4 photos are already in `public/images/`
  (home-bg, portfolio-bg, services-bg, connect-bg). Replace any of them any
  time — same filenames, any resolution.
- **Projects**: `lib/projects.ts` already lists your barbershop and Diamond
  Nest projects, each with 3 screenshots. Add more projects the same way —
  drop screenshots into `public/images/projects/` and add an entry with
  `title`, `description`, `images` (array), and `tags`.

## 5. Build for production

```bash
npm run build
npm run start
```

## Deploying

Any Next.js host works (Vercel is the simplest — connect the repo, add the two
Telegram env vars, deploy). Just make sure the environment variables are set on
the host, not just locally.
