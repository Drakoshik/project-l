import { Section } from "@/components/Section";
import { about, contacts, experience, profile, projects, skills } from "@/content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-white/5 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="font-semibold">
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
        <section className="py-24 sm:py-32">
          <p className="mb-3 text-sm text-accent">{profile.role}</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
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
              className="rounded-lg border border-white/15 px-5 py-3 font-medium hover:border-white/40"
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
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="rounded-xl bg-surface p-5">
                <h3 className="mb-3 font-medium">{s.group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <li key={i} className="rounded-md bg-white/5 px-2.5 py-1 text-sm text-muted">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-8 border-l border-white/10 pl-6">
            {experience.map((e) => (
              <li key={`${e.company}-${e.period}`}>
                <p className="text-sm text-muted">{e.period}</p>
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

        <Section id="projects" title="Projects">
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="rounded-xl bg-surface p-5 transition hover:ring-1 hover:ring-accent/50"
              >
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.description}</p>
              </a>
            ))}
          </div>
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
