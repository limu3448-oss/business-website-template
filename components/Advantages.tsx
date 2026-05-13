import { siteConfig } from "@/config/site.config";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";

export function Advantages() {
  return (
    <section id="advantages" className="bg-white py-20">
      <Container>
        <SectionTitle eyebrow="WHY US" title="企业优势" description="从品质、经验、交付与售后角度，降低访客决策顾虑。" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.advantages.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-100 bg-gradient-to-b from-white to-slate-50 p-6">
              <div className="mb-5 inline-flex rounded-2xl bg-[var(--color-secondary)]/15 px-4 py-3 text-sm font-bold text-[var(--color-primary)]">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
