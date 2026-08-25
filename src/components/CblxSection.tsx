import {
  ChevronDown,
  ChevronRight,
  Info,
  Trash2,
  Truck,
  LineChart,
  Route,
  LayoutDashboard,
  Network,
} from "lucide-react";

// Icons are matched to content by array index (same order across every
// locale file), not by title text, so they stay correct in ES/EN/DE.
const STACK_ICONS = [Trash2, Truck, LineChart, Route, LayoutDashboard, Network];
import { useLocation } from "@tanstack/react-router";
import { localeFromPath } from "@/lib/i18n-seo";
import { CBLX_EVOLUTION_COPY } from "@/lib/cblx-evolution";
import { useContent } from "@/lib/content";

export function CblxSection() {
  const { pathname } = useLocation();
  const copy = CBLX_EVOLUTION_COPY[localeFromPath(pathname)];
  const CBLX_EVOLUTION = copy.stages;
  const t = useContent().cblx;

  return (
    <section id="cblx" className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="label-micro block">(04) {t.label}</span>
        <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-balance md:text-4xl">
          {t.heading}
        </h2>
        <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
          {t.kicker}
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 leading-relaxed text-muted-foreground">
            {t.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="border border-border bg-surface p-8">
            <span className="label-micro">{t.conceptualEvolutionLabel}</span>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {t.conceptualEvolutionBody1}
            </p>
            <p className="mt-6 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              {t.conceptualEvolutionBody2}
            </p>
          </div>
        </div>

        <div className="mt-16 border border-border bg-surface/40 p-8 md:p-12">
          <span className="label-micro">{copy.pathLabel}</span>
          <div className="mt-12 flex flex-col items-stretch gap-4 md:flex-row md:items-stretch">
            {CBLX_EVOLUTION.map((step, i) => (
              <div key={step.title} className="group/tooltip flex flex-1 flex-col md:flex-row md:items-stretch">
                <div className="relative flex-1 border border-border bg-background p-6 transition-colors hover:border-border-strong hover:bg-surface-raised">
                  <span className="absolute -top-3 left-5 border border-accent/40 bg-background px-2 py-0.5 font-mono text-[10px] tracking-[0.16em] text-accent">
                    0{i + 1}
                  </span>
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="mt-1 font-display text-sm font-semibold tracking-[0.1em] uppercase">
                      {step.title}
                    </h4>
                    <div className="relative">
                      <button
                        type="button"
                        aria-label={copy.metricAria(step.title)}
                        className="mt-0.5 text-muted-foreground transition-colors hover:text-accent focus:outline-none focus-visible:text-accent"
                      >
                        <Info className="size-4" strokeWidth={1.5} />
                      </button>
                      <div className="pointer-events-none absolute right-0 top-full z-20 mt-2 w-56 translate-y-1 border border-border bg-surface-raised p-3 text-xs leading-relaxed text-foreground opacity-0 shadow-sm transition-all group-hover/tooltip:pointer-events-auto group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:pointer-events-auto group-focus-within/tooltip:translate-y-0 group-focus-within/tooltip:opacity-100 md:right-0 md:left-auto lg:w-64">
                        <span className="block font-mono text-[10px] tracking-[0.16em] text-accent uppercase">{copy.measurableLabel}</span>
                        <span className="mt-1 block text-muted-foreground">{step.tooltip}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{step.body}</p>
                  <span
                    className="absolute bottom-0 left-0 h-0.5 bg-accent"
                    style={{ width: `${20 * (i + 1)}%` }}
                  />
                </div>
                {i < CBLX_EVOLUTION.length - 1 && (
                  <div
                    className="flex shrink-0 items-center justify-center text-accent md:w-8"
                    aria-hidden="true"
                  >
                    <ChevronDown className="size-4 md:hidden" strokeWidth={2} />
                    <ChevronRight className="hidden size-4 md:block" strokeWidth={2} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-10 font-mono text-[10px] leading-relaxed tracking-[0.16em] text-muted-foreground uppercase">
            {copy.flowLine}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-l border-border md:grid-cols-2 lg:grid-cols-3">
          {t.stack.map((item, i) => {
            const Icon = STACK_ICONS[i % STACK_ICONS.length];
            return (
            <article
              key={item.id}
              className="border-r border-b border-border p-8 transition-colors hover:bg-surface"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-accent">{item.id}</span>
                <Icon className="size-5 text-accent" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-medium">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
            );
          })}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-sm font-semibold tracking-[0.14em] uppercase">
              {t.questionsHeading}
            </h3>
            <div className="mt-6 divide-y divide-border border-t border-border">
              {t.questions.map((item) => (
                <div key={item.id} className="flex items-start gap-4 py-5">
                  <span className="mt-0.5 border border-accent/40 px-2 py-1 font-mono text-[10px] tracking-[0.16em] text-accent">
                    {item.id}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{item.q}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold tracking-[0.14em] uppercase">
              {t.operatingModelHeading}
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {t.operatingModelBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {t.signals.map((signal) => (
                <span
                  key={signal}
                  className="border border-border px-3 py-1.5 font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="label-micro">{t.valuePropositionLabel}</h3>
          <div className="mt-8 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {t.value.map((item) => (
              <article key={item.title} className="bg-background p-8">
                <span className="font-mono text-[10px] tracking-[0.2em] text-accent">
                  0{item.n}
                </span>
                <h4 className="mt-4 text-lg font-medium">{item.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          <div>
            <h3 className="label-micro">{t.targetUsersLabel}</h3>
            <ul className="mt-5 space-y-2.5">
              {t.users.map((user) => (
                <li key={user} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-2 size-1 shrink-0 bg-accent" />
                  {user}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="label-micro">{t.economicsLabel}</h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {t.economicsBody1}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t.economicsBody2}
            </p>
          </div>
          <div>
            <h3 className="label-micro">{t.governanceLabel}</h3>
            <div className="mt-5 space-y-5">
              {t.governance.map((item) => (
                <div key={item.title} className="border-l border-border pl-5">
                  <h4 className="text-sm font-medium">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {t.governanceFooter}
            </p>
          </div>
        </div>

        <div className="mt-16 border-l-2 border-accent bg-surface/50 p-8 md:p-10">
          <h3 className="font-display text-sm font-semibold tracking-[0.14em] uppercase">
            {t.positioningHeading}
          </h3>
          <p className="mt-5 max-w-4xl leading-relaxed text-muted-foreground">
            {t.positioningBody}
          </p>
        </div>
      </div>
    </section>
  );
}
