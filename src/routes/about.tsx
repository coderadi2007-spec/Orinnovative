import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LogoBanner } from "@/components/site/LogoBanner";
import { DashedDivider } from "@/components/site/DashedDivider";
import { Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Orinnovative" },
      { name: "description", content: "Orinnovative is a modern digital solutions company building websites, apps, software, blockchain and brands that grow businesses." },
      { property: "og:title", content: "About Orinnovative" },
      { property: "og:description", content: "Innovating digital solutions for modern businesses." },
    ],
  }),
  component: About,
});

const whyUs = [
  "Innovative & modern approach",
  "Experienced development team",
  "Client-focused solutions",
  "Affordable & scalable services",
  "Timely project delivery",
  "Strong technical support",
  "Commitment to quality & security",
];

function About() {
  return (
    <>
      <LogoBanner />
      <PageHero
        eyebrow="About Us"
        title="Innovating Digital Solutions For Modern Businesses"
        subtitle="Where creativity meets technology — we help businesses, startups and entrepreneurs grow through powerful, scalable and innovative digital solutions."
      />

      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-muted-foreground fade-up">
          <p>
            Welcome to <strong className="text-navy">Orinnovative</strong> — a modern digital solutions company specializing in website development, mobile applications, custom software, blockchain technology, UI/UX design and digital marketing.
          </p>
          <p>
            We believe technology should not only solve problems but create new opportunities. Our team combines creativity, technical expertise and strategic thinking to build products that are visually impressive, highly functional and future-ready.
          </p>
          <p>
            Whether it's developing a professional business website, creating a custom mobile application, designing enterprise software, or building blockchain-based platforms — we focus on delivering quality, performance and long-term value.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-24 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-sm">
            <p className="text-coral text-xs tracking-[0.4em] uppercase mb-3 font-display">Our Vision</p>
            <h3 className="font-display text-2xl text-navy mb-4">A trusted global technology partner</h3>
            <p className="text-muted-foreground">
              To become a trusted global technology partner known for innovation, creativity and delivering impactful digital experiences.
            </p>
          </div>
          <div className="bg-navy text-white p-10 rounded-3xl shadow-lg">
            <p className="text-coral text-xs tracking-[0.4em] uppercase mb-3 font-display">Our Mission</p>
            <h3 className="font-display text-2xl mb-4">Empower businesses with advanced solutions</h3>
            <p className="text-white/70">
              To empower businesses with advanced digital solutions that drive growth, improve efficiency and create lasting success in the digital world.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <DashedDivider height={50} />
          <h2 className="mt-8 text-3xl md:text-5xl font-display font-bold text-navy">Why choose <span className="text-coral">Orinnovative?</span></h2>
        </div>
        <ul className="mx-auto max-w-3xl grid sm:grid-cols-2 gap-4">
          {whyUs.map((w) => (
            <li key={w} className="flex items-start gap-3 bg-secondary p-5 rounded-xl hover:bg-coral hover:text-white transition-colors duration-300 group">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-coral text-white flex items-center justify-center group-hover:bg-white group-hover:text-coral transition-colors">
                <Check size={14} />
              </span>
              <span className="font-display font-medium">{w}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-navy text-white py-24 px-6 diagonal-top">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-coral text-xs tracking-[0.4em] uppercase mb-4 font-display">Our Commitment</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">We build long-term partnerships</h2>
          <p className="text-white/70 text-lg">
            At Orinnovative, we don't just build projects — we build long-term partnerships driven by passion, innovation and a commitment to helping our clients succeed in today's competitive digital landscape.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="pill-btn pill-solid">Start a Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
