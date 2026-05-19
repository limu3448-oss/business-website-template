import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";

export function About() {
  const { about } = siteConfig;
  return (
    <section id="about" className="bg-white py-20">
      <Container>
        <SectionTitle eyebrow="ABOUT" title={about.aboutTitle} description={about.aboutDescription} />
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Image src={about.aboutImage} alt={about.aboutTitle} width={640} height={460} className="aspect-[4/3] rounded-[2rem] object-cover shadow-soft" />
          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                <p className="text-4xl font-bold text-[var(--color-primary)]">{stat.value}<span className="text-2xl text-[var(--color-secondary)]">{stat.suffix}</span></p>
                <p className="mt-3 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
