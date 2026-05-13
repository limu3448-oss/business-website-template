import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { Button } from "./Button";
import { Container } from "./Container";

export function Hero() {
  const { hero } = siteConfig;
  return (
    <section id="home" className="relative overflow-hidden bg-[linear-gradient(135deg,#fff_0%,#f7f5f0_48%,#eef3f7_100%)] py-16 md:py-24">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[var(--color-secondary)]/10 blur-3xl" />
      <Container className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[var(--color-secondary)]/30 bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)]">{hero.subtitle}</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">{hero.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">{hero.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.mainButtonLink}>{hero.mainButtonText}</Button>
            <Button href={hero.secondaryButtonLink} variant="secondary">{hero.secondaryButtonText}</Button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm text-slate-600">
            <span className="rounded-2xl bg-white p-4 shadow-sm">方案清晰</span><span className="rounded-2xl bg-white p-4 shadow-sm">交付稳定</span><span className="rounded-2xl bg-white p-4 shadow-sm">售后安心</span>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[2rem] border border-white bg-white p-3 shadow-soft">
            <Image src={hero.heroImage} alt={hero.title} width={720} height={560} priority className="aspect-[4/3] rounded-[1.5rem] object-cover" />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-5 shadow-soft">
            <p className="text-sm text-slate-500">咨询热线</p><p className="text-xl font-bold text-[var(--color-primary)]">{siteConfig.contact.phone}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
