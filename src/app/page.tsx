import { Section } from "@/components/Section";
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

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-accent-2/30 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="font-semibold text-accent">
            {profile.name.split(" ")[0]}
          </a>
          <ul className="hidden gap-6 text-sm text-muted sm:flex">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="hover:text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Hero */}
        <section className="relative isolate py-24 sm:py-32">
          <div aria-hidden className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-72 w-[min(40rem,100%)] -translate-x-1/2 rounded-full bg-accent-2/25 blur-3xl" />
          <p className="mb-3 text-sm text-accent">{profile.role}</p>
          <h1 className="bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">{profile.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{profile.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`${basePath}${profile.cvPdf}`}
              download
              className="rounded-lg bg-accent px-5 py-3 font-medium text-background hover:opacity-90"
            >
              Download CV (PDF)
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-accent-2 px-5 py-3 font-medium hover:bg-accent-2/20"
            >
              Contact me
            </a>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="max-w-2xl space-y-4 text-muted">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <h3 className="mt-10 mb-4 font-medium text-accent">Key skills</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {keySkills.map((k) => (
              <li key={k} className="flex gap-3 rounded-xl bg-surface p-4 text-sm text-muted">
                <span aria-hidden className="mt-1.5 size-2 shrink-0 rounded-full bg-accent-2" />
                {k}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Tools & Stack">
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="rounded-xl bg-surface p-5">
                <h3 className="mb-3 font-medium text-accent">{s.group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <li key={i} className="rounded-md bg-accent-2/20 px-2.5 py-1 text-sm text-foreground">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-8 border-l-2 border-accent-2/60 pl-6">
            {experience.map((e) => (
              <li key={`${e.company}-${e.period}`}>
                <p className="text-sm text-accent">{e.period}</p>
                <h3 className="font-medium">
                  {e.role} · {e.company}
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="education" title="Education">
          <ul className="space-y-4">
            {education.map((e) => (
              <li
                key={e.title}
                className="flex flex-col gap-1 rounded-xl bg-surface p-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
              >
                <div>
                  <h3 className="font-medium">{e.title}</h3>
                  <p className="text-sm text-muted">{e.place}</p>
                </div>
                <p className="shrink-0 text-sm text-accent">{e.period}</p>
              </li>
            ))}
          </ul>
          <h3 className="mt-10 mb-4 font-medium text-accent">Languages</h3>
          <ul className="flex flex-wrap gap-3">
            {languages.map((l) => (
              <li key={l.name} className="rounded-xl bg-surface px-4 py-3">
                <span className="font-medium">{l.name}</span>
                <span className="ml-2 rounded-md bg-accent-2/20 px-2 py-0.5 text-sm">{l.level}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <ul className="grid gap-3 sm:grid-cols-2">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  className="flex justify-between gap-4 rounded-xl bg-surface p-4 hover:ring-1 hover:ring-accent/50"
                >
                  <span className="text-muted">{c.label}</span>
                  <span className="truncate">{c.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="py-10 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
