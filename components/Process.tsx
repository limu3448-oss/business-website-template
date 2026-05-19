import { siteConfig } from "@/config/site.config";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";

export function Process() {
  return (
    <section className="bg-[var(--color-primary)] py-20 text-white">
      <Container>
        <SectionTitle eyebrow="PROCESS" title="合作流程" description="清晰流程让客户知道从咨询到交付每一步怎么走。" light />
        <div className="grid gap-4 md:grid-cols-5">
          {siteConfig.process.map((step, index) => (
            <div key={step} className="relative rounded-3xl bg-white/10 p-6 ring-1 ring-white/15">
              <span className="text-sm text-white/60">STEP {String(index + 1).padStart(2, "0")}</span>
              <p className="mt-8 text-xl font-bold">{step}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
