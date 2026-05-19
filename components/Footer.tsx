import { siteConfig } from "@/config/site.config";
import { Container } from "./Container";

const links = [["关于我们", "#about"], ["服务项目", "#services"], ["产品展示", "#products"], ["案例展示", "#cases"], ["联系我们", "#contact"]];

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-white">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div><h3 className="text-xl font-bold">{siteConfig.companyName}</h3><p className="mt-4 max-w-md leading-8 text-white/60">{siteConfig.description}</p></div>
          <div><p className="font-bold">快速导航</p><div className="mt-4 grid gap-3">{links.map(([label, href]) => <a key={href} href={href} className="text-white/60 hover:text-white">{label}</a>)}</div></div>
          <div><p className="font-bold">联系方式</p><div className="mt-4 space-y-3 text-white/60"><p>{siteConfig.contact.phone}</p><p>{siteConfig.contact.email}</p><p>{siteConfig.contact.address}</p></div></div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/45">© {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.</div>
      </Container>
    </footer>
  );
}
