import { About } from "@/components/About";
import { Advantages } from "@/components/Advantages";
import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { siteConfig } from "@/config/site.config";

export default function Home() {
  const { sections } = siteConfig;
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        {sections.products ? <Products /> : null}
        {sections.cases ? <Cases /> : null}
        {sections.advantages ? <Advantages /> : null}
        {sections.process ? <Process /> : null}
        {sections.testimonials ? <Testimonials /> : null}
        {sections.faq ? <FAQ /> : null}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
