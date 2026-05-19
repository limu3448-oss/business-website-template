import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";

export function Testimonials() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionTitle eyebrow="TESTIMONIALS" title="客户评价" description="评价文案保持自然克制，更符合真实商业官网气质。" />
        <div className="grid gap-6 lg:grid-cols-3">
          {siteConfig.testimonials.map((item) => (
            <figure key={item.name} className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
              <blockquote className="leading-8 text-slate-700">“{item.content}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image src={item.avatar} alt={item.name} width={44} height={44} className="rounded-full" />
                <div><p className="font-bold text-slate-950">{item.name}</p><p className="text-sm text-slate-500">{item.role}</p></div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
