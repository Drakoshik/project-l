export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-16">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight">
        {title}
        <span aria-hidden className="mt-2 block h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent-2" />
      </h2>
      {children}
    </section>
  );
}
