import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.seo.siteTitle,
  description: siteConfig.seo.siteDescription,
  keywords: [...siteConfig.seo.keywords],
  icons: { icon: siteConfig.favicon },
  openGraph: {
    title: siteConfig.seo.siteTitle,
    description: siteConfig.seo.siteDescription,
    images: [siteConfig.seo.ogImage],
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body style={{ "--color-primary": siteConfig.primaryColor, "--color-secondary": siteConfig.secondaryColor } as React.CSSProperties}>
        {children}
      </body>
    </html>
  );
}
