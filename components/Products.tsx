import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";

export function Products() {
  return (
    <section id="products" className="bg-white py-20">
      <Container>
        <SectionTitle eyebrow="PRODUCTS" title="产品展示" description="统一图片比例与标签布局，后续替换产品图片时不影响页面结构。" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.products.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <Image src={item.image} alt={item.title} width={520} height={360} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-6">
                <p className="text-sm font-semibold text-[var(--color-secondary)]">{item.category}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
