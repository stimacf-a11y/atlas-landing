---
name: brand-building
description: Orchestrates the 29 installed brand-building skills (arnabbagxd/Brand-building-skills) into one coherent workflow — routes a brand request to the right skill, keeps every skill reading and writing the same shared brand context, and sequences full brand-build projects end to end. Use when asked to build, define, or work on a brand (strategy, identity, naming, voice, messaging, guidelines, packaging, launch, or channel marketing) and it's unclear which of the individual brand-* skills applies, or when doing several of them in sequence for the same brand.
---

# Building a Brand, End to End

This repo has 29 brand skills installed from `arnabbagxd/Brand-building-skills` (`brand-strategy`, `brand-identity`, `brand-naming`, `brand-voice`, `brand-guidelines`, channel-marketing skills, etc.). Most requests need one of them directly — this skill exists for the two cases that need more than "pick one": routing an ambiguous ask to the right skill, and running several of them in sequence for the same brand without losing context between steps.

## Foundation: brand-context.md comes first

Every brand skill in this pack is written to read `.agents/brand-context.md` (or `.claude/brand-context.md`) before doing its work — see each skill's own "Before You Start". If that file doesn't exist yet for the brand being worked on, run `brand-context` first, even if the user asked for something further downstream (e.g. they say "write a tagline" but no context file exists yet — capture context, then move to `brand-messaging`). Once it exists, every subsequent skill in the session should read it rather than re-asking the user questions it already answers.

If the brand already has real material from the user (a brief, a pasted brand book, uploaded logos) — like the Street Lab brand book handled earlier in this session — extract the context fields from that material into `brand-context.md` directly rather than re-interviewing the user for information they already gave.

## Routing: which skill for which ask

| The ask sounds like... | Skill |
| --- | --- |
| "Set up / save the brand info", starting a new brand project | `brand-context` (always first) |
| "Full brand strategy", a filled-out questionnaire, "brand report for a client" | `brand-strategy` |
| "What should we call this", naming feedback/scoring | `brand-naming` |
| "Where do we sit vs. competitors", differentiation, "brand territory" | `brand-positioning` |
| "Analyze competitor brands" before positioning | `competitor-branding` |
| "Who is our customer", personas, ICP | `target-audience` |
| "How should the brand sound", tone/vocabulary rules | `brand-voice` |
| "Tagline", value prop, messaging hierarchy | `brand-messaging` |
| "Why we exist", founder/origin story, About page | `brand-story` |
| "Manifesto", belief statement, rally-the-team document | `brand-manifesto` |
| "Logo direction, colors, typography" as a design brief | `brand-identity` |
| "Full brand book / style guide / standards doc" | `brand-guidelines` (synthesizes identity + voice + messaging into one document) |
| "Packaging brief", unboxing, label design | `brand-packaging` |
| Multiple brands/sub-brands, house of brands, naming system for a family of products | `brand-architecture` |
| "Is our brand consistent", health check on an existing brand | `brand-audit` |
| "KPIs for brand health", proving brand ROI | `brand-measurement` |
| "How do we launch / announce this" | `brand-launch` |
| "Our brand feels outdated", pivoting an existing brand | `rebranding` |
| Co-branding, licensing, joint campaigns | `brand-partnerships` |
| B2B / enterprise / long sales cycle | `b2b-brand-marketing` |
| Selling direct to consumer, retention, subscriptions | `d2c-marketing` |
| A founder's/exec's own personal brand, thought leadership | `personal-brand` |
| App Store / Google Play listing optimization | `aso` |
| Meta/Facebook/Instagram ads | `meta-ads` |
| Google Search/Shopping/PMax/YouTube ads | `google-ads` |
| Email list, newsletters, campaigns | `email-marketing` |
| Creators, gifting, sponsored posts | `influencer-marketing` |
| Customer photos/videos/reviews as content | `ugc-strategy` |
| WhatsApp Business, broadcasts, drip flows | `whatsapp-marketing` |

When the ask genuinely spans two rows (e.g. "build the whole brand"), don't guess — run the sequence below instead.

## Full brand-build sequence

For a from-scratch brand (a new company, product line, or — as with Street Lab earlier in this session — a brand brief or book handed over all at once), run in this order, skipping any step whose output the user already supplied:

1. **`brand-context`** — capture or extract the foundation. Nothing downstream should re-ask what this file already has.
2. **`target-audience`** and **`competitor-branding`** — the two research inputs everything else strategizes against.
3. **`brand-strategy`** — the core strategic document (vision, mission, values, positioning narrative, personas, competitor read).
4. **`brand-naming`** — only if the name isn't locked yet.
5. **`brand-positioning`** and **`brand-messaging`** — sharpen the strategy into an ownable statement and a messaging hierarchy (tagline, value prop, key messages).
6. **`brand-voice`** and **`brand-story`** / **`brand-manifesto`** — the verbal identity: how it sounds, and (for brands with real conviction behind them) the story or manifesto.
7. **`brand-identity`** — the visual direction brief (logo, color, type, imagery) a designer would work from.
8. **`brand-guidelines`** — synthesizes everything above into the reference document — this is the "brand book" deliverable itself.
9. **`brand-packaging`** (physical product) and **`brand-launch`** — go-to-market steps once the identity is locked.
10. Channel skills (`meta-ads`, `google-ads`, `email-marketing`, `influencer-marketing`, `ugc-strategy`, `whatsapp-marketing`, `d2c-marketing`, `b2b-brand-marketing`) as the user's actual channels dictate — don't run all of them by default, only the ones the brand will actually use.

Re-enter this sequence with **`brand-audit`** (health check) or **`rebranding`** (transformation) when the work is on an existing brand rather than a new one.

## Bridging to this repo's web skills

If the brand work needs an actual website or landing page built in this codebase (`atlas-landing`), hand off to `build-landing-page` once `brand-guidelines`/`brand-identity` has locked the visual and verbal identity — don't let `build-landing-page` invent a design system that contradicts what the brand skills already decided. Conversely, if a page is being designed before brand strategy exists, flag that ordering problem rather than building either in isolation.
