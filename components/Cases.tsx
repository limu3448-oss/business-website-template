import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";

export function Cases() {
  return (
    <section id="cases" className="bg-slate-50 py-20">
      <Container>
        <SectionTitle eyebrow="CASES" title="案例展示" description="用真实业务场景、项目描述和交付成果增强客户信任。" />
        <div className="grid gap-6 lg:grid-cols-3">
          {siteConfig.cases.map((item) => (
            <article key={item.title} className="rounded-3xl bg-white p-4 shadow-sm">
              <Image src={item.image} alt={item.title} width={520} height={340} className="aspect-[4/3] rounded-2xl object-cover" />
              <div className="p-3 pt-5">
                <span className="rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">{item.industry}</span>
                <h3 className="mt-4 text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                <p className="mt-4 border-l-4 border-[var(--color-secondary)] pl-3 text-sm font-semibold text-slate-700">{item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
