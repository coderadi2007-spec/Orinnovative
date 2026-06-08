import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LogoBanner } from "@/components/site/LogoBanner";
import { Globe, Smartphone, Code2, Boxes, PenTool, Megaphone, Palette, FileText } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Orinnovative" },
      { name: "description", content: "Web development, mobile apps, custom software, blockchain, UI/UX, digital marketing, branding and content services." },
      { property: "og:title", content: "Services — Orinnovative" },
      { property: "og:description", content: "End-to-end digital services to build and grow your business." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Globe, title: "Website Development", desc: "Professional, responsive and modern websites designed for performance, speed and conversions. Built with the latest stack." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Android and iOS applications with user-friendly interfaces, smooth animations and powerful backend systems." },
  { icon: Code2, title: "Custom Software", desc: "Tailor-made software solutions designed to automate and improve your business operations end-to-end." },
  { icon: Boxes, title: "Blockchain & Web3", desc: "Secure blockchain-based applications, smart contracts, NFT platforms and Web3 product engineering." },
  { icon: PenTool, title: "UI / UX Design", desc: "Creative and interactive user interface designs focused on engagement, usability and brand consistency." },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, social media management, paid advertising and growth strategies to scale your online presence." },
  { icon: Palette, title: "Graphic Design & Branding", desc: "Professional logos, banners, social media creatives and complete brand identity systems." },
  { icon: FileText, title: "Content Writing", desc: "SEO-friendly, engaging content for websites, blogs, marketing campaigns and product launches." },
];

function Services() {
  return (
    <>
      <LogoBanner />
      <PageHero
        eyebrow="What We Do"
        title="Services Built To Help You Grow"
        subtitle="A complete suite of digital and technology services — from product strategy and design to engineering, launch and ongoing growth."
      />

      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-white border border-border rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-coral/5 group-hover:bg-coral/10 transition-colors" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-navy text-coral flex items-center justify-center mb-6 group-hover:bg-coral group-hover:text-white transition-colors">
                  <s.icon size={28} strokeWidth={1.7} />
                </div>
                <div className="text-coral font-display text-sm mb-2">0{i + 1}.</div>
                <h3 className="font-display font-bold text-xl text-navy mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link to="/contact" className="pill-btn pill-solid">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
