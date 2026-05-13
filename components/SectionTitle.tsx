export function SectionTitle({ eyebrow, title, description, light = false }: { eyebrow?: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-sm font-semibold tracking-[0.22em] text-[var(--color-secondary)]">{eyebrow}</p> : null}
      <h2 className={`text-3xl font-bold tracking-tight md:text-4xl ${light ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-8 ${light ? "text-white/70" : "text-slate-600"}`}>{description}</p> : null}
    </div>
  );
}
