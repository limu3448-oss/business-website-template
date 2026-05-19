import { siteConfig } from "@/config/site.config";
import { Button } from "./Button";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";

export function Contact() {
  const c = siteConfig.contact;
  return (
    <section id="contact" className="bg-white py-20">
      <Container>
        <SectionTitle eyebrow="CONTACT" title="联系我们" description="保留二维码和地图位置，替换真实素材即可用于客户官网。" />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[2rem] bg-[var(--color-primary)] p-8 text-white md:p-10">
            <h3 className="text-2xl font-bold">获取专属方案与报价</h3>
            <p className="mt-4 max-w-2xl leading-8 text-white/75">留下需求或直接电话沟通，我们会根据行业、页面数量、素材情况与交付周期给出建议。</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[ ["联系电话", c.phone], ["微信号", c.wechat], ["邮箱", c.email], ["营业时间", c.businessHours], ["公司地址", c.address] ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/10 p-4"><p className="text-sm text-white/60">{label}</p><p className="mt-2 font-semibold">{value}</p></div>
              ))}
            </div>
            <Button href={`tel:${c.phone}`} variant="secondary" className="mt-8 bg-white">立即电话咨询</Button>
          </div>
          <div className="grid gap-6">
            <div className="flex min-h-56 items-center justify-center rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 text-center text-slate-500">
              <div><p className="font-semibold text-slate-700">微信二维码预留位</p><p className="mt-2 text-sm">将二维码图片放入 public/images 后在组件中替换</p></div>
            </div>
            <a href={c.mapUrl} className="flex min-h-56 items-center justify-center rounded-[2rem] bg-slate-100 text-center text-slate-500" target="_blank">
              <div><p className="font-semibold text-slate-700">地图位置预留位</p><p className="mt-2 text-sm">点击可跳转地图链接</p></div>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
