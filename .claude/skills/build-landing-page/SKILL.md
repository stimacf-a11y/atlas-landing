---
name: build-landing-page
description: Add a new landing page or microsite to this TanStack Start app, reusing the existing design system, components, and localization pattern instead of starting from scratch. Use when asked to create a new landing page, campaign page, product page, or "otra web"/variant of the site within this repo. Not for editing the existing single-page content (edit src/lib/content/*.ts for that). Any motion the new page needs is built with the animate skill and checked against review-animations before the page is considered done.
---

# Building a New Landing Page in This Repo

This repo (`atlas-landing`) is a single TanStack Start app that currently serves one marketing site (the Caelum Private Equity / ATLAS page) in three locales. "Making another web" here means adding another route that reuses the same design system and components — not spinning up a separate project.

## Before writing anything

Read these to know what already exists, so nothing gets rebuilt:

- `src/styles.css` — design tokens (`@theme inline` + `:root`/`.dark` vars): colors (`background`, `surface`, `accent`, `border`, …), fonts (`--font-display` = Sora, `--font-sans` = Manrope, `--font-mono` = JetBrains Mono), radius. Use these tokens (`bg-surface`, `text-accent`, `font-display`, `label-micro`, `hairline-card`, etc.) — never hardcode a new color or font.
- `components.json` — shadcn/ui is configured (`new-york` style, `@/components/ui` alias) but no components are installed yet. Add any shadcn primitive with `bunx shadcn add <name>` rather than hand-rolling it.
- `src/components/` — reusable pieces already built: `GlassCta` (liquid-glass CTA button with mobile/SSR fallback), `HeroBackground` (Three.js shader gradient + GSAP), `LanguageMenu`, `CblxSection`. Reuse these on a new page before writing a new hero/CTA from scratch.
- `src/routes/index.tsx` — the canonical page structure: sticky nav → hero (`<header id="top">`) → numbered sections (`SectionLabel` with `(01)`, `(02)`…) each `border-b border-border py-24` → footer. Copy this section rhythm for a new page rather than inventing a new layout language.
- `src/lib/content/` — `types.ts` defines `SiteContent`; `en.ts`/`es.ts`/`de.ts` implement it; `index.ts`'s `useContent()` picks the right one from the URL via `localeFromPath`. All copy lives here, not inline in JSX.
- `src/lib/i18n-seo.ts` — `LOCALES`, `LOCALE_PATH`, `HTML_LANG`, `SEO` map, and `localeHead(locale)` which builds the `head()` meta/hreflang payload.
- `src/routes/sitemap[.]xml.ts` — every public URL must be listed in `URLS` (and `IMAGES` if it has hero/team images) or it won't be indexed.

## Decide the shape of the new page first

Ask (or infer from the request) before writing code:

1. **Does it need its own content type, or is it copy variations of the existing sections?** If it's a genuinely different page (different sections/purpose), it needs its own `SiteContent`-like type and its own `en.ts`/`es.ts`/`de.ts` files (e.g. `src/lib/content/promo/`), not entries bolted onto the existing `SiteContent`.
2. **Does it need all three locales, or just one?** Don't scaffold `de.tsx`/`en.tsx` files for a page that's Spanish-only — only add the locale routes actually requested.
3. **Does it share the domain, or is it truly a separate site?** This app deploys as one Cloud Run service from one `cloudbuild.yaml`. A new route under the same app is cheap; a genuinely separate site (different repo/deploy) is a much bigger ask — flag that distinction if the user's request implies the latter.

## Build sequence

1. **Content**: add the typed content object(s) under `src/lib/content/` (or a subfolder for a distinct page family) and wire them into `useContent`-equivalent lookups keyed by path, mirroring how `CONTENT` and `localeFromPath` work today.
2. **Route**: add `src/routes/<name>.tsx` with `createFileRoute("/<name>")`. Point `head: () => localeHead(...)` at real SEO copy — don't leave a page without meta/OG tags. TanStack Router's file-based routing regenerates `routeTree.gen.ts` automatically on `bun run dev`/`bun run build`; never hand-edit that file.
3. **Page body**: compose it from the existing section rhythm and components (`HeroBackground`, `GlassCta`, `SectionLabel`, the `border-b border-border py-24` section pattern, `hairline-card`, `label-micro`). Introduce a new component under `src/components/` only for something genuinely new and reusable — not a one-off `<div>` tree.
4. **Locale routes** (only if multi-locale was asked for): thin files like `src/routes/en.tsx` that just re-export the same page component with a different `localeHead(locale)` — follow the existing `en.tsx`/`de.tsx` pattern exactly (`export const Route = createFileRoute("/en")({ head: () => localeHead("en"), component: HomePage })`).
5. **Sitemap**: add the new path(s) to `URLS` (and `IMAGES` if relevant) in `src/routes/sitemap[.]xml.ts`.
6. **Nav/links**: if the new page should be reachable from the existing site, add a link where it makes sense (nav, footer) — don't leave it orphaned unless it's meant to be a standalone landing page for ads/campaigns.
7. **Motion, if any**: if the page needs an entrance, a CTA, or any transition beyond a plain `hover:`/`transition-colors` swap, use the `animate` skill to build it rather than approximating a curve or duration by feel. Once written, run it through `review-animations` before considering the page done — it checks the ten non-negotiable standards (justified motion, frequency-appropriate, `ease-out` on entrances, sub-300ms UI, correct transform-origin, GPU-only properties, `prefers-reduced-motion`, etc.) and will block anything that doesn't clear the bar. A page with no motion at all is a valid, often correct outcome — don't invent animation just to have something to review.

## Validate before calling it done

```bash
bun run lint
bun run build   # catches route-tree/type errors TanStack Start won't tell you about otherwise
bun run dev     # visually check the new route(s) in the browser, all requested locales
```

Check in the browser: the hero renders, `GlassCta`/`HeroBackground` degrade correctly on mobile (resize the viewport), and `head()` meta tags are present (view page source or devtools `<head>`). If the page has any motion, `review-animations` must have signed off (Approve, not Block) before the page ships.
