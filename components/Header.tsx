"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { Button } from "./Button";
import { Container } from "./Container";

const navItems = [
  ["首页", "#home"], ["关于我们", "#about"], ["服务项目", "#services"], ["产品展示", "#products"], ["案例展示", "#cases"], ["企业优势", "#advantages"], ["联系我们", "#contact"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <Image src={siteConfig.logo} alt={`${siteConfig.shortName} logo`} width={40} height={40} className="rounded-xl" />
          <div>
            <p className="font-bold text-slate-950">{siteConfig.shortName}</p>
            <p className="hidden text-xs text-slate-500 sm:block">{siteConfig.industry}</p>
          </div>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => <a key={href} href={href} className="text-sm font-medium text-slate-600 transition hover:text-[var(--color-primary)]">{label}</a>)}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href={`tel:${siteConfig.contact.phone}`} className="text-sm font-semibold text-[var(--color-primary)]">{siteConfig.contact.phone}</a>
          <Button href="#contact" className="px-5 py-2.5">咨询方案</Button>
        </div>
        <button aria-label="打开菜单" onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 p-2 lg:hidden">
          <span className="block h-0.5 w-6 bg-slate-900" /><span className="mt-1.5 block h-0.5 w-6 bg-slate-900" /><span className="mt-1.5 block h-0.5 w-6 bg-slate-900" />
        </button>
      </Container>
      {open ? (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <Container className="grid gap-1 py-4">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">{label}</a>)}
            <Button href="#contact" className="mt-2">立即咨询</Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
