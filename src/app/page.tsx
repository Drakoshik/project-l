import { Section } from "@/components/Section";
import { StackIcon } from "@/components/StackIcon";
import {
  about,
  contacts,
  education,
  experience,
  keySkills,
  languages,
  profile,
  skills,
} from "@/content";

const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const stats = [
  { value: "4 yrs", label: "commercial development" },
  { value: "5", label: "teams & companies" },
  { value: "AI", label: "agents in daily work" },
  { value: "B2", label: "English" },
];

const initials = profile.name
  .split(" ")
  .map((w) => w[0])
  .join("");

const contactIcons: Record<string, React.ReactNode> = {
  Email: <path d="M3 6h18v12H3zM3 6l9 7 9-7" />,
  Phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  ),
  Telegram: <path d="M21 4 3 11l6 2m12-9-4 16-8-7m12-9L9 13v5l3-3" />,
};

export default function Home() {
  return (
    <>
      {/* Background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="bg-dots absolute inset-0" />
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent-2/25 blur-3xl" />
        <div className="absolute top-20 -right-40 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/5 bg-background/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a
            href="#top"
            className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-sm font-bold text-background"
            aria-label="Back to top"
          >
            {initials}
          </a>
          <ul className="-mr-2 flex gap-1 overflow-x-auto text-sm text-muted">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="block rounded-full px-3 py-1.5 whitespace-nowrap transition hover:bg-white/5 hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Hero */}
        <section className="pt-20 pb-16 sm:pt-32 sm:pb-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-2/40 bg-accent-2/10 px-3 py-1 text-sm text-accent-2-soft">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {profile.role}
          </p>
          <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{profile.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 font-medium text-background transition hover:shadow-[0_0_24px_-4px_var(--turquoise)]"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="rounded-full border border-accent-2/60 px-6 py-3 font-medium transition hover:bg-accent-2/20"
            >
              See experience
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="card p-5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-semibold text-accent">{s.value}</dd>
                <dd className="mt-1 text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Section id="about" index="01" title="About">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-4 text-lg leading-relaxed text-muted">
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div>
              <h3 className="mb-4 font-mono text-sm tracking-wider text-accent-2-soft uppercase">
                Key skills
              </h3>
              <ul className="space-y-2">
                {keySkills.map((k) => (
                  <li key={k} className="card flex gap-3 p-4 text-sm leading-relaxed">
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills" index="02" title="Tools & Stack">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group} className="card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <StackIcon group={s.group} />
                  <h3 className="text-lg font-semibold">{s.group}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-full border border-accent-2/40 bg-accent-2/15 px-3 py-1 text-sm"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" index="03" title="Experience">
          <ol className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-gradient-to-b before:from-accent before:via-accent-2 before:to-transparent">
            {experience.map((e, i) => (
              <li key={`${e.company}-${e.period}`} className="relative pl-10">
                <span
                  aria-hidden
                  className={`absolute top-6 left-0 size-[15px] rounded-full border-2 ${
                    i === 0
                      ? "border-accent bg-accent shadow-[0_0_12px_var(--turquoise)]"
                      : "border-accent-2-soft bg-background"
                  }`}
                />
                <article className="card p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="text-lg font-semibold">{e.role}</h3>
                    <p className="shrink-0 font-mono text-sm text-accent">{e.period}</p>
                  </div>
                  <p className="text-accent-2-soft">{e.company}</p>
                  <ul className="mt-4 space-y-2 text-muted">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="education" index="04" title="Education">
          <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.title} className="card p-6">
                  <p className="font-mono text-sm text-accent">{e.period}</p>
                  <h3 className="mt-1 font-semibold">{e.title}</h3>
                  <p className="text-sm text-accent-2-soft">{e.place}</p>
                </li>
              ))}
            </ul>
            <div className="card h-fit p-6">
              <h3 className="mb-4 font-mono text-sm tracking-wider text-accent-2-soft uppercase">
                Languages
              </h3>
              <ul className="space-y-3">
                {languages.map((l) => (
                  <li key={l.name} className="flex items-center justify-between gap-4">
                    <span className="font-medium">{l.name}</span>
                    <span className="rounded-full bg-accent/15 px-3 py-0.5 text-sm text-accent">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" index="05" title="Contact">
          <div className="relative overflow-hidden rounded-3xl border border-accent-2/40 bg-gradient-to-br from-accent-2/25 via-surface to-accent/10 p-8 sm:p-12">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s work together</h3>
            <p className="mt-3 max-w-xl text-muted">
              Open to roles in data analytics and development. The fastest way to reach me is Telegram or
              email.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-background/60 p-4 transition hover:border-accent/60"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-background">
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="size-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {contactIcons[c.label]}
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted">{c.label}</span>
                      <span className="block truncate text-sm font-medium">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </main>

      <footer className="mx-auto max-w-5xl border-t border-white/5 px-4 py-8 text-sm text-muted sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}
