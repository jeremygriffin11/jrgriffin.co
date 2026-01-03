import Link from "next/link";
import Image from "next/image";

type Card = { title: string; body: string };
type Pill = { label: string; value: string };

const CONTENT = {
  brand: "Jeremy Griffin",

  nav: [
    { label: "Home", href: "#top" },
    { label: "For Partners", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Current Focus", href: "#focus" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    headline: "Real estate investing + advisory.",
    subhead:
      "Aligning investors with compelling risk-adjusted opportunities. Los Angeles-based with a national network. I partner across equity and structured capital — focused on situations where structure, speed, and judgment matter.",
    ctaLabel: "Connect",
    ctaHref: "mailto:jeremy@jrgriffin.co",
  },

  about: {
    title: "How I Partner",
    tiles: [
      {
        title: "Invest",
        body:
          "Direct investments across the capital structure — GP/co-GP/LP equity and structured solutions (preferred equity / mezzanine) depending on the situation.",
      },
      {
        title: "Partner",
        body:
          "A collaborative capital partner for sponsors and operators: clear feedback, thoughtful structuring, reliable execution — and a strong focus on alignment.",
      },
      {
        title: "Advise",
        body:
          "Select advisory work for investors, operators, and entrepreneurs — including an \"outsourced CIO\" style role. Underwriting, structuring / re-structuring, thesis & strategy, and capital markets.",
      },
    ]
  },

  experience: {
    title: "Experience",
    intro: "I've spent 14 years in real estate private equity and 4 years at a public REIT, investing through multiple cycles, from post-GFC and COVID to today's environment, across both distressed and expansionary markets. I invest across the capital stack in assets, portfolios and platforms, focusing on situations where structure and judgment drive outcomes. I'm actively building new relationships with LPs, sponsors, and brokers who value clarity, alignment, and clean execution.",
    bullets: [
      "20+ years investing and operating in real estate",
      "Experience across equity (LP, GP, co-GP, programmatic JVs) and debt/structured capital (preferred equity, mezzanine, bespoke solutions)",
      "14+ years at Rialto Capital Management — Managing Director, Investment Management; led West Coast investing efforts and served as the primary relationship and execution point of contact for sponsors, brokers, and partners across the region",
      "$2bn+ transaction volume across cycles and property types",
      "MBA from Columbia Business School, BA from UCLA",
      "Additional transaction experience and case studies available upon request",
      "Not an offer to sell or the solicitation of an offer to buy securities; information available upon request.",
    ],
  },

  focus: {
    title: "Areas of Focus",
    items: [
      {
        label: "Property types",
        value: "Multifamily · Industrial · Office · R&D · Self-storage · Retail",
      },
      {
        label: "Deal size",
        value: "$25–$50MM+ asset value · $5–$20MM equity investments",
      },
      {
        label: "Structures",
        value:
          "Equity (LP, GP/co-GP, programmatic JVs) · preferred equity · mezzanine / structured debt",
      },
      {
        label: "Deal types",
        value:
          "Motivated/forced selling · capital stack solutions · DPOs · transitional business plans where structure and certainty matter · selective thematic growth opportunities",
      },
      {
        label: "Geography",
        value: "Major US primary and secondary markets (relationship-driven)",
      },
    ],
  },

  partners: {
    title: "Who I partner with",
    lines: [
      {
        label: "Sponsors / Operators",
        value:
          "Collaborative capital for acquisitions, transitional business plans, and capital stack solutions.",
      },
      {
        label: "LPs / Capital Partners",
        value:
          "Disciplined, relationship-driven investing with aligned capital.",
      },
      {
        label: "Brokers / Advisors",
        value:
          "Quick responses and clean execution.",
      },
    ],
    ctaLabel: "Connect",
    ctaHref: "mailto:jeremy@jrgriffin.co",
  },

  dealChecklist: {
    title: "For deals, please include (if available)",
    items: [
      "Address / market + quick property summary",
      "Capital structure + debt / lender information and timeline",
      "T-12 and rent roll (or operating snapshot)",
      "Thesis + Business plan",
      "Your process expectations + timing",
    ],
  },

  contact: {
    title: "Let's connect",
    subhead:
      "If you're working on a deal, need a capital solution, or want to compare notes, please reach out.",
    email: "jeremy@jrgriffin.co",
    linkedin: "https://www.linkedin.com/in/jeremy-griffin-a01b491/",
  },

  footer: "© 2026 Jeremy Griffin",
};

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

function Section({
  id,
  title,
  children,
  bgColor = "bg-neutral-50",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  bgColor?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 ${bgColor}`}>
      <Container>
        <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-neutral-900 mb-8">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}

function Card({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200/60 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-lg font-display font-semibold text-neutral-900 mb-3">{title}</div>
      <p className="text-sm leading-relaxed text-neutral-600">{body}</p>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
      {items.map((b) => (
        <li key={b} className="flex gap-4">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function FocusRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="pb-6 border-b border-neutral-100 last:border-b-0 last:pb-0">
      <div className="text-xs font-display font-medium tracking-wider uppercase text-neutral-500 mb-2">
        {label}
      </div>
      <div className="text-sm sm:text-base text-neutral-900 leading-relaxed">{value}</div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/80 backdrop-blur-sm">
        <Container>
          <div className="flex h-14 items-center justify-between">
            <div className="text-sm font-display font-semibold tracking-tight">
              <Link href="#top" className="hover:opacity-80 transition-opacity">
                {CONTENT.brand}
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
              {CONTENT.nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="hover:text-neutral-900 transition-colors font-medium"
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={CONTENT.hero.ctaHref}
                className="inline-flex items-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-display font-medium text-white hover:bg-neutral-800 transition-colors"
              >
                {CONTENT.hero.ctaLabel}
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section id="top" className="pt-14 sm:pt-20 pb-32 sm:pb-40 bg-neutral-50">
        <Container>
          <div className="rounded-3xl border border-neutral-200/60 bg-white p-10 sm:p-16 shadow-sm">
            <h1 className="text-4xl sm:text-6xl font-display font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              {CONTENT.hero.headline}
            </h1>

            <p className="mt-10 max-w-3xl text-base sm:text-lg leading-relaxed text-neutral-600">
              {CONTENT.hero.subhead}
            </p>

            <div className="mt-12">
              <a
                href={CONTENT.hero.ctaHref}
                className="inline-flex items-center rounded-xl bg-neutral-900 px-6 py-3 text-sm font-display font-medium text-white hover:bg-neutral-800 transition-colors shadow-sm"
              >
                {CONTENT.hero.ctaLabel}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* How I Partner */}
      <section id="about" className="scroll-mt-24 py-16 sm:py-20 bg-white">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-neutral-900 mb-8">
            {CONTENT.about.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CONTENT.about.tiles.map((t) => (
              <Card key={t.title} title={t.title} body={t.body} />
            ))}
          </div>
        </Container>
      </section>

      {/* For Partners */}
      <Section id="partners" title={CONTENT.partners.title} bgColor="bg-neutral-100">
        <div className="rounded-3xl border border-neutral-200/60 bg-white p-8 sm:p-10 shadow-sm">
          <div className="space-y-5 text-sm sm:text-base text-neutral-600 leading-relaxed">
            {CONTENT.partners.lines.map((l) => (
              <div key={l.label}>
                <span className="font-display font-semibold text-neutral-900">
                  {l.label}:
                </span>{" "}
                <span>{l.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title={CONTENT.experience.title} bgColor="bg-white">
        <div className="rounded-3xl border border-neutral-200/60 bg-neutral-50 p-8 sm:p-10 shadow-sm">
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
            {CONTENT.experience.intro}
          </p>
          <BulletList items={CONTENT.experience.bullets} />
        </div>
      </Section>

      {/* Current Focus */}
      <Section id="focus" title={CONTENT.focus.title} bgColor="bg-neutral-100">
        <div className="rounded-3xl border border-neutral-200/60 bg-white p-8 sm:p-10 shadow-sm">
          <div className="space-y-6">
            {CONTENT.focus.items.map((i) => (
              <FocusRow key={i.label} label={i.label} value={i.value} />
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title={CONTENT.contact.title} bgColor="bg-white">
        <div className="rounded-3xl border border-neutral-200/60 bg-white p-8 sm:p-10 shadow-sm">
          <div className="lg:grid lg:grid-cols-5 lg:gap-6">
            <div className="lg:col-span-3">
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {CONTENT.contact.subhead}
              </p>

              <div className="mt-8 space-y-5 text-sm sm:text-base">
                <div>
                  <div className="text-xs font-display font-medium tracking-wider uppercase text-neutral-500 mb-2">
                    General
                  </div>
                  <a
                    href={`mailto:${CONTENT.contact.email}`}
                    className="mt-1 inline-block font-display font-semibold text-neutral-900 hover:text-neutral-700 transition-colors"
                  >
                    {CONTENT.contact.email}
                  </a>
                </div>

                <div>
                  <div className="text-xs font-display font-medium tracking-wider uppercase text-neutral-500 mb-2">
                    LinkedIn
                  </div>
                  <a
                    href={CONTENT.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block font-display font-semibold text-neutral-900 hover:text-neutral-700 transition-colors"
                  >
                    View profile
                  </a>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="lg:col-span-2 mt-8 lg:mt-0 rounded-3xl border border-neutral-200/60 bg-white p-4 shadow-sm">
              <div className="w-full rounded-2xl overflow-hidden">
                <Image
                  src="/headshot.png"
                  alt="Jeremy Griffin"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Deal Checklist */}
          <div className="mt-10 pt-8 border-t border-neutral-200/60">
            <div className="text-lg font-display font-semibold text-neutral-900 mb-6">
              {CONTENT.dealChecklist.title}
            </div>
            <div>
              <BulletList items={CONTENT.dealChecklist.items} />
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-neutral-200/60 py-12">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4 text-sm text-neutral-500">
            <div className="font-display">{CONTENT.footer}</div>
          </div>
        </Container>
      </footer>
    </main>
  );
}

