type ButtonProps = { href: string; children: React.ReactNode; variant?: "primary" | "secondary"; className?: string };

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const styles = variant === "primary"
    ? "bg-[var(--color-primary)] text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lg"
    : "border border-slate-300 bg-white/80 text-slate-900 hover:border-[var(--color-secondary)] hover:text-[var(--color-primary)]";
  return <a href={href} className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${styles} ${className}`}>{children}</a>;
}
