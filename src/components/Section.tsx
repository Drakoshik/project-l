export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-20">
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-sm text-accent">{index}</span>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-accent-2/70 to-transparent" />
      </div>
      {children}
    </section>
  );
}
