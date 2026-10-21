# Gundu Babu Ruchulu (GBR) + SOL Café — Website

Production website for **Gundu Babu Ruchulu**, a Food & Beverage company in
Hyderabad, with **SOL Café** as its consumer-facing café brand on the same
domain.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and
`lucide-react`. Server components by default; client components only where
interactivity requires it.

## Routes

| Route              | Page                                     |
| ------------------ | ---------------------------------------- |
| `/`                | Homepage (GBR)                           |
| `/about`           | About GBR                                |
| `/corporate-meals` | Corporate Meals                          |
| `/cloud-kitchen`   | Cloud Kitchen                            |
| `/sol-cafe`        | SOL Café (own palette, header and footer)|
| `/contact`         | Contact + form                           |
| `/api/contact`     | Form submission endpoint                 |
| `/sitemap.xml`     | Sitemap                                  |
| `/robots.txt`      | Robots                                   |

## Getting started

```bash
bun install
bun run dev      # development server on http://localhost:3000
bun run build    # production build
bun run start    # serve the production build
bun run lint     # eslint
bunx tsc --noEmit
```

## Project structure

```
app/                  Routes, SEO metadata, API route, sitemap/robots
components/           Shared UI (header, footer, wordmark, form, reveal)
components/sol/       SOL-specific components (header, footer, menu)
content/              ★ Editable content layer (see below)
lib/validation.ts     Contact-form rules shared by client + server
public/logo/          Official logos: gbr.jpg, sol.jpg
public/images/gbr/    GBR photography
public/images/sol/    SOL café photography
```

## Content editing (the "CMS layer")

All editable content lives in `content/` as typed data. Presentation
components render whatever the data contains, so the team can update content
without touching layouts. This layer is designed to be swapped for a real CMS
later — export the same types from Sanity/Contentful/etc. and nothing else
changes.

### `content/sol.ts` — SOL menu, subscriptions, specials, events

- **Menu**: `menuCategories[]` with `items[]` (name, optional description,
  optional price, optional image). Categories currently ship with the
  approved category list and **empty item arrays** — add approved items and
  they appear automatically. Fields that are absent are simply hidden (no
  price → no price shown). Set `available: false` to unpublish an item
  without deleting it.
- **Subscriptions**: `subscriptions[]` — add entries and they render in the
  subscriptions section. Ships empty with an empty state.
- **Weekend specials**: `specials[]` — same pattern.
- **Events**: `events[]` — same pattern.
- **Offers**: `offers[]` — the "What SOL offers" category cards.

### `content/gbr.ts` — GBR service descriptions

Home business areas, About offerings, corporate services list, the "how we
work" process steps and cloud-kitchen expectations.

### `content/site.ts` — identity, navigation, contacts

Site name, tagline, emails, phone numbers, social links, location, nav items
and enquiry types.

### `content/promos.ts` — promotional banners

Slots exist on Home, Corporate, Cloud Kitchen and SOL pages. A banner shows
only when `enabled: true` **and** it has a title — nothing unapproved can
appear by accident.

## Contact form

`POST /api/contact` accepts JSON and validates with the same rules the form
uses client-side (`lib/validation.ts`).

**Spam protection**: hidden honeypot field, minimum fill-time check, and a
per-IP rate limit (5 messages / 10 min, in-memory per instance — move to a
shared store such as Upstash if you run multiple instances).

**Email delivery (Resend)** — set these environment variables to enable real
delivery; the API key stays server-side only:

| Variable              | Purpose                                        | Default                    |
| --------------------- | ---------------------------------------------- | -------------------------- |
| `RESEND_API_KEY`      | Resend API key (https://resend.com)            | unset → no email sent      |
| `CONTACT_TO_EMAIL`    | Where enquiries are delivered                  | `info@gundubaburuchulu.com`|
| `CONTACT_FROM_EMAIL`  | Verified sender domain in Resend               | `onboarding@resend.dev`    |

Without configuration:

- **Development**: the message is printed to the server console and the UI
  tells the user it was saved to the development log only — it never pretends
  the message was sent.
- **Production**: the endpoint returns `503` and the UI shows a failure state
  with a direct email link. There is no false success message.

The CTA links on `/corporate-meals`, `/cloud-kitchen` and SOL deep-link to
`/contact?type=…`, which preselects the enquiry type.

## Logos and images

- Official logos live in `public/logo/gbr.jpg` and `public/logo/sol.jpg`;
  they are used in the headers, footers and as the site favicon
  (`app/icon.png`, generated from the GBR logo). Replace the files to update
  the artwork everywhere.
- Photography lives in `public/images/gbr/` and `public/images/sol/`. The
  current set includes supplied photos plus temporary, easily replaceable
  stock images chosen to match each section's subject. Alt text describes
  what each image shows.

## Design system

- **GBR**: Playfair Display headings, DM Sans body, Cormorant Garamond
  italic accents; roasted brown, burnt orange and gold on warm cream.
- **SOL**: same type system with its own palette — cream, espresso, olive,
  sun gold, terracotta — scoped under the `.sol` class so the café identity
  never leaks into GBR pages.
- Tokens are CSS variables in `app/globals.css`; components only use
  semantic Tailwind names (`bg-canvas`, `text-muted`, `btn-primary`…).
- Motion is restrained (scroll reveals, hover states) and respects
  `prefers-reduced-motion`.

## Known to-do for launch

- Publish approved SOL menu items, subscription plans, specials and events
  into `content/sol.ts` (they ship as empty states by design).
- Configure `RESEND_API_KEY` (and a verified `CONTACT_FROM_EMAIL`) before
  going live so the contact form delivers email.
- Swap temporary photography for approved brand photos when available.
