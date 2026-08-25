import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Brain,
  Server,
  Building2,
  ShieldCheck,
  Zap,
  FlaskConical,
  Microscope,
  Layers,
  Clock,
  HeartHandshake,
  MapPin,
  ListChecks,
  Lock,
  Camera,
  Globe2,
  Workflow,
} from "lucide-react";
import logoAsset from "@/assets/cpexs-logo.png.asset.json";
import portraitAsset from "@/assets/fernando.png.asset.json";
import { CblxSection } from "@/components/CblxSection";
import { GlassCta } from "@/components/GlassCta";
import { HeroBackground } from "@/components/HeroBackground";
import { LanguageMenu } from "@/components/LanguageMenu";
import { localeHead } from "@/lib/i18n-seo";
import { useContent } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => localeHead("es"),
  component: HomePage,
});

// Icons are matched to content by array index (same order across every
// locale file), not by title text, so they stay correct in ES/EN/DE.
const FOCUS_ICONS = [Brain, Server, Building2, ShieldCheck, Zap, FlaskConical];
const PRINCIPLE_ICONS = [Microscope, Layers, Clock, HeartHandshake];
const ATLAS_CAPABILITY_ICONS = [MapPin, ListChecks, Lock, Camera, Globe2, Workflow];

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <span className="label-micro block">
      ({index}) {children}
    </span>
  );
}

export function HomePage() {
  const t = useContent();

  const NAV = [
    { label: t.nav.focus, href: "#focus" },
    { label: t.nav.principles, href: "#principles" },
    { label: t.nav.atlas, href: "#atlas" },
    { label: t.nav.cblx, href: "#cblx" },
    { label: t.nav.team, href: "#team" },
    { label: t.nav.contact, href: "#contact" },
  ];


  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-center">
            <img
              src={logoAsset.url}
              alt="Caelum Private Equity — CPEXS"
              className="h-11 w-auto"
            />
          </a>
          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-7 md:flex">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <LanguageMenu />
          </div>
        </div>
      </nav>

      <header id="top" className="relative isolate overflow-hidden border-b border-border">
        <HeroBackground />
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_75%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-36">
          <div className="mb-10 inline-flex items-center gap-2.5 border border-accent/30 bg-accent/10 px-3 py-1.5">
            <span className="size-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
              {t.hero.badge}
            </span>
          </div>
          <h1 className="max-w-4xl text-5xl leading-[0.95] font-semibold text-balance md:text-7xl">
            {t.hero.heading}
          </h1>
          <div className="mt-12 flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t.hero.paragraph}
            </p>
            <GlassCta href="#contact" label={t.hero.cta} />
          </div>
        </div>
      </header>

      <section id="focus" className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel index="01">{t.focus.label}</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{t.focus.heading}</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
            {t.focus.intro}
          </p>

          <div className="mt-16 grid grid-cols-1 border-t border-l border-border md:grid-cols-2 lg:grid-cols-3">
            {t.focus.items.map((item, i) => {
              const Icon = FOCUS_ICONS[i % FOCUS_ICONS.length];
              return (
              <article
                key={item.title}
                className="border-r border-b border-border p-8 transition-colors hover:bg-surface"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="size-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="principles" className="border-b border-border bg-surface/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="lg:w-1/3">
              <SectionLabel index="02">{t.principles.label}</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{t.principles.heading}</h2>
            </div>
            <div className="grid gap-12 md:grid-cols-2 lg:w-2/3">
              {t.principles.items.map((item, i) => {
                const Icon = PRINCIPLE_ICONS[i % PRINCIPLE_ICONS.length];
                return (
                  <div key={item.title} className="border-l border-border pl-6">
                    <Icon className="size-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="mt-4 font-display text-sm font-semibold tracking-[0.12em] uppercase">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="atlas" className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel index="03">{t.atlas.label}</SectionLabel>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-balance md:text-4xl">
            {t.atlas.heading}
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-6 leading-relaxed text-muted-foreground">
              {t.atlas.intro.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="border border-border bg-surface p-8">
              <span className="label-micro">{t.atlas.agentPipelineLabel}</span>
              <ol className="mt-6 space-y-5">
                {t.atlas.agents.map((agent) => (
                  <li key={agent.id} className="flex items-start gap-4">
                    <span className="mt-0.5 border border-accent/40 px-2 py-1 font-mono text-[10px] tracking-[0.16em] text-accent">
                      {agent.id}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{agent.name}</p>
                      <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                        {agent.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                {t.atlas.agentFooter}
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
            {t.atlas.markets.map((market) => (
              <article key={market.tag} className="bg-background p-8">
                <span className="font-mono text-[10px] tracking-[0.2em] text-accent">
                  {market.tag}
                </span>
                <h3 className="mt-4 text-lg font-medium">{market.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{market.body}</p>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-4xl leading-relaxed text-muted-foreground">
            {t.atlas.asymmetryParagraph}
          </p>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.atlas.capabilities.map((cap, i) => {
              const Icon = ATLAS_CAPABILITY_ICONS[i % ATLAS_CAPABILITY_ICONS.length];
              return (
                <article key={cap.title} className="hairline-card p-7">
                  <Icon className="size-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-4 text-base font-medium">{cap.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cap.body}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-16 border-l-2 border-accent bg-surface/50 p-8 md:p-10">
            <h3 className="font-display text-sm font-semibold tracking-[0.14em] uppercase">
              {t.atlas.whyHeading}
            </h3>
            <p className="mt-5 max-w-4xl leading-relaxed text-muted-foreground">
              {t.atlas.whyParagraph}
            </p>
          </div>
        </div>
      </section>

      <CblxSection />

      <section className="border-b border-border bg-surface/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel index="05">{t.capabilityTrack.label}</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{t.capabilityTrack.heading}</h2>

          <div className="mt-14 flex flex-col gap-px border border-border bg-border">
            {t.capabilityTrack.items.map((item) => (
              <article
                key={item.title}
                className="grid gap-6 bg-background p-8 md:grid-cols-12 md:items-start"
              >
                <div className="md:col-span-4">
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <span className="mt-3 inline-block border border-accent/30 px-2 py-1 font-mono text-[10px] tracking-[0.16em] text-accent uppercase">
                    {item.stage}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/80 md:col-span-4">
                  {item.summary}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground md:col-span-4">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {t.capabilityTrack.partnerReasons.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-base font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="border-b border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel index="06">{t.team.label}</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{t.team.heading}</h2>

          <div className="mt-14 flex flex-col gap-14 lg:flex-row">
            <div className="lg:w-72 lg:shrink-0">
              <img
                src={portraitAsset.url}
                alt={t.team.portraitAlt}
                className="w-60 border border-border object-cover"
                width={240}
                height={300}
                loading="lazy"
              />
              <h3 className="mt-6 text-2xl font-semibold">{t.team.name}</h3>
              <p className="mt-2 font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
                {t.team.role}
              </p>
            </div>

            <div className="flex-1">
              <p className="font-display text-sm tracking-[0.1em] text-foreground/80 uppercase">
                {t.team.tagline}
              </p>
              <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                {t.team.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="label-micro">{t.team.careerLabel}</h4>
                <div className="mt-6 divide-y divide-border border-t border-border">
                  {t.team.career.map((job) => (
                    <div
                      key={job.company}
                      className="grid grid-cols-1 gap-2 py-4 md:grid-cols-4 md:items-baseline"
                    >
                      <span className="font-mono text-[11px] tracking-[0.12em] text-accent">
                        {job.period}
                      </span>
                      <div className="md:col-span-3">
                        <p className="text-sm font-medium">{job.company}</p>
                        <p className="text-sm text-muted-foreground">{job.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 grid gap-12 md:grid-cols-2">
                <div>
                  <h4 className="label-micro">{t.team.certificationsLabel}</h4>
                  <ul className="mt-5 space-y-2.5">
                    {t.team.certifications.map((cert) => (
                      <li key={cert} className="flex items-start gap-3 text-sm text-foreground/80">
                        <span className="mt-2 size-1 shrink-0 bg-accent" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="label-micro">{t.team.educationLabel}</h4>
                  <div className="mt-5 space-y-4 text-sm">
                    {t.team.education.map((edu) => (
                      <div key={edu.degree}>
                        <p className="font-medium">{edu.degree}</p>
                        <p className="text-muted-foreground">{edu.school}</p>
                      </div>
                    ))}
                    <p className="text-muted-foreground">{t.team.languages}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 border-t border-border pt-12">
            <h3 className="label-micro">{t.team.advisoryLabel}</h3>
            <div className="mt-8 grid gap-px border border-border bg-border md:grid-cols-3">
              {t.team.advisory.map((item) => (
                <div key={item.title} className="bg-background p-8">
                  <h4 className="text-base font-medium">{item.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-b border-border bg-surface/40 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <SectionLabel index="07">{t.contact.label}</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{t.contact.heading}</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              {t.contact.paragraph}
            </p>
            <a
              href="mailto:stimacf@cpexs.com"
              className="group mt-10 inline-flex items-center gap-3 bg-accent px-7 py-4 font-display text-sm font-semibold text-accent-foreground transition-[filter] hover:brightness-110"
            >
              {t.contact.cta}
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </a>
          </div>
          <dl className="divide-y divide-border border-t border-border">
            <div className="flex items-baseline justify-between py-5">
              <dt className="label-micro">{t.contact.emailLabel}</dt>
              <dd>
                <a href="mailto:stimacf@cpexs.com" className="text-sm hover:text-accent">
                  stimacf@cpexs.com
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between py-5">
              <dt className="label-micro">{t.contact.websiteLabel}</dt>
              <dd>
                <a href="https://www.cpexs.com" className="text-sm hover:text-accent">
                  www.cpexs.com
                </a>
              </dd>
            </div>
            <div className="flex items-baseline justify-between py-5">
              <dt className="label-micro">{t.contact.locationLabel}</dt>
              <dd className="text-sm">{t.contact.location}</dd>
            </div>
          </dl>
        </div>
      </section>

      <footer className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <img
                src={logoAsset.url}
                alt={t.footer.logoAlt}
                className="h-10 w-auto"
                loading="lazy"
              />
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h3 className="label-micro">{t.footer.developmentAreasLabel}</h3>
              <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                {t.footer.developmentAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="label-micro">{t.footer.companyLabel}</h3>
              <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                {t.footer.companyLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-accent">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-14 border-t border-border pt-8 font-mono text-[10px] leading-relaxed tracking-[0.14em] text-muted-foreground uppercase">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
