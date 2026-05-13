import { siteConfig } from "@/config/site.config";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <Container>
        <SectionTitle eyebrow="SERVICES" title="服务项目" description="模块内容来自配置文件，可快速替换成不同行业的服务能力。" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map((item) => (
            <article key={item.title} className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-xl font-bold text-white">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
