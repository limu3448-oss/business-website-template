import { siteConfig } from "@/config/site.config";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";

export function FAQ() {
  return (
    <section className="bg-slate-50 py-20">
      <Container className="max-w-4xl">
        <SectionTitle eyebrow="FAQ" title="常见问题" description="把客户咨询前最关心的问题提前说明，提升转化效率。" />
        <div className="space-y-4">
          {siteConfig.faqs.map((item) => (
            <details key={item.question} className="group rounded-2xl bg-white p-6 shadow-sm" open={item.question.includes("多久")}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-950">
                {item.question}<span className="text-[var(--color-primary)] transition group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-4 leading-8 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
