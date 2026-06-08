import { createFileRoute, Link } from "@tanstack/react-router";
import { DashedDivider } from "@/components/site/DashedDivider";
import {
  Globe, Smartphone, Code2, Boxes, PenTool, Megaphone, Palette, FileText,
  ArrowRight, Award, Users, Cpu, Headphones, Quote
} from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import work6valley from "@/assets/work-6valley.jpg.asset.json";
import workItailor from "@/assets/work-itailor.jpg.asset.json";
import workAfro from "@/assets/work-afro.jpg.asset.json";
import workBitomax from "@/assets/work-bitomax.jpg.asset.json";
import workMa from "@/assets/work-ma.jpg.asset.json";
import workLuxury from "@/assets/work-luxury.jpg.asset.json";
import pStrategy from "@/assets/process-strategy.jpg";
import pDesign from "@/assets/process-design.jpg";
import pDevelop from "@/assets/process-develop.jpg";
import pSupport from "@/assets/process-support.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orinnovative — Transforming Ideas Into Powerful Digital Solutions" },
      { name: "description", content: "Modern websites, mobile apps, custom software, blockchain, UI/UX, branding & digital marketing. Innovating the technology that helps businesses grow." },
      { property: "og:title", content: "Orinnovative — Innovating The Technology" },
      { property: "og:description", content: "Build your next digital project with Orinnovative." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Globe, title: "Website Development", desc: "Professional, responsive, modern websites built for performance, speed and conversions." },
  { icon: Smartphone, title: "Mobile Applications", desc: "Android and iOS apps with user-friendly interfaces and powerful backend systems." },
  { icon: Code2, title: "Custom Software", desc: "Tailor-made software that automates and improves your business operations." },
  { icon: Boxes, title: "Blockchain & Web3", desc: "Secure blockchain applications, smart contracts and Web3 product development." },
  { icon: PenTool, title: "UI / UX Design", desc: "Creative, interactive interface design focused on engagement and clarity." },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, social media, paid ads and branding to grow your online presence." },
  { icon: Palette, title: "Graphic Design & Branding", desc: "Logos, social creatives and complete brand identity systems." },
  { icon: FileText, title: "Content Writing", desc: "SEO-friendly, engaging content for websites, blogs and campaigns." },
];

const process = [
  { num: "01", title: "Strategy", color: "text-coral", img: pStrategy, desc: "We understand your business goals, define your audience and discover what's working in your industry — then plan accordingly." },
  { num: "02", title: "Design", color: "text-lime-400", img: pDesign, desc: "Color scheme, layout, sitemap and style. We bring your brand to life with a one-of-a-kind digital masterpiece built just for you." },
  { num: "03", title: "Develop", color: "text-teal-400", img: pDevelop, desc: "We turn your ideas into reality. Your project is placed on a development server where you watch the whole process, live." },
  { num: "04", title: "Support", color: "text-orange-400", img: pSupport, desc: "Where you go live, to the world. Design, marketing and maintenance — we'll be at your side for the life of your product." },
];

const works = [
  { img: workItailor.url, tag: "Web Design", title: "iTailor — Online Tailor" },
  { img: workBitomax.url, tag: "Blockchain", title: "Bitomax Crypto Exchange" },
  { img: work6valley.url, tag: "E-Commerce", title: "6Valley Marketplace" },
  { img: workLuxury.url, tag: "Real Estate", title: "Luxury Residences" },
  { img: workAfro.url, tag: "Branding", title: "Afro Synthese Agency" },
  { img: workMa.url, tag: "E-Commerce", title: "MA Switzerland Cosmetics" },
];

const stats = [
  { icon: Award, n: "100+", l: "Projects Completed" },
  { icon: Users, n: "50+", l: "Happy Clients" },
  { icon: Cpu, n: "10+", l: "Technology Experts" },
  { icon: Headphones, n: "24/7", l: "Global Support" },
];

const testimonials = [
  { name: "Jeffrey P. McAllister", role: "Moving Co.", text: "Orinnovative delivered our project professionally and on time. Highly recommended for any digital build." },
  { name: "Sarah Linton", role: "Founder, Brewline", text: "Amazing design quality and excellent technical support. Our store launched ahead of schedule." },
  { name: "Marcus Ellison", role: "CEO, Northwind Labs", text: "Their team helped grow our online business with powerful digital marketing and a refined brand identity." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <video
            src={heroVideo.url}
            autoPlay muted loop playsInline
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />
        </div>

        <div className="relative pt-32 pb-24 px-6">
          <div className="mx-auto max-w-6xl text-center fade-up">
            

            <p className="text-coral text-xs md:text-sm tracking-[0.5em] uppercase mb-8 font-display">Innovating The Technology</p>
            <h1 className="font-display font-extrabold leading-[0.95] text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight">
              Powerful
              <br />
              <span className="text-coral">Digital</span> Solutions
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-white/75 text-lg">
              We build modern websites, mobile applications, custom software, blockchain solutions and digital experiences that help businesses grow faster.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="pill-btn pill-solid hover:-translate-y-1">Get Started</Link>
              <a href="https://wa.me/917503287360" target="_blank" rel="noopener noreferrer" className="pill-btn pill-outline hover:-translate-y-1">Free Consultation</a>
            </div>

            <div className="mt-20 flex justify-center">
              <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
                <span className="w-1 h-2 bg-white/70 rounded-full" />
              </div>
            </div>
          </div>
        </div>
        {/* diagonal bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* INTRO */}
      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <DashedDivider height={50} />
          <h2 className="mt-10 text-3xl md:text-5xl font-display font-bold text-navy leading-tight">
            We are one of the most effective<br /> <span className="text-coral">technology partners</span>
          </h2>
          <p className="mt-8 text-muted-foreground text-lg">
            Orinnovative is a technology-driven company specializing in website development, mobile applications, custom software, blockchain, UI/UX, digital marketing and branding services. We combine creativity, innovation and technology to deliver scalable, result-oriented digital products.
          </p>
          <div className="mt-10">
            <Link to="/about" className="pill-btn pill-outline">Get Started</Link>
          </div>
          <div className="mt-10"><DashedDivider height={60} /></div>
        </div>

        {/* SERVICES GRID */}
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
          {services.map((s) => (
            <div key={s.title} className="text-center group">
              <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-accent to-white ring-1 ring-border shadow-sm flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-coral/20">
                <s.icon className="text-coral" size={32} strokeWidth={1.6} />
              </div>
              <h3 className="text-lg font-display font-semibold text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-navy text-white py-32 px-6 diagonal-both">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <p className="text-coral text-xs tracking-[0.4em] uppercase mb-4 font-display">Our Working Process</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">How we deliver every project</h2>
        </div>

        <div className="mx-auto max-w-5xl space-y-24">
          {process.map((p, i) => (
            <div key={p.num} className={`grid md:grid-cols-3 gap-8 items-center ${i % 2 ? "md:[&>*:first-child]:order-3" : ""}`}>
              <div className={`text-center md:text-right ${i % 2 ? "md:text-left" : ""}`}>
                {i % 2 === 0 ? (
                  <>
                    <div className={`flex items-end justify-center md:justify-end gap-2 ${p.color}`}>
                      <span className="font-display font-extrabold text-7xl md:text-8xl leading-none">{p.num}</span>
                      <span className="text-white font-display text-3xl md:text-4xl pb-2">{p.title}</span>
                    </div>
                  </>
                ) : (
                  <p className="text-white/70 leading-relaxed max-w-xs ml-auto md:ml-0">{p.desc}</p>
                )}
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden ring-4 ring-white/10 shadow-2xl">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={`text-center md:text-left ${i % 2 ? "md:text-right" : ""}`}>
                {i % 2 === 0 ? (
                  <p className="text-white/70 leading-relaxed max-w-xs">{p.desc}</p>
                ) : (
                  <div className={`flex items-end justify-center md:justify-start gap-2 ${p.color}`}>
                    <span className="text-white font-display text-3xl md:text-4xl pb-2">{p.title}</span>
                    <span className="font-display font-extrabold text-7xl md:text-8xl leading-none">{p.num}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.l} className="group">
              <s.icon className="mx-auto text-coral mb-4 group-hover:scale-110 transition-transform" size={36} strokeWidth={1.5} />
              <div className="font-display font-extrabold text-5xl text-navy">{s.n}</div>
              <div className="text-sm text-muted-foreground mt-1 tracking-wider uppercase">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bg-secondary py-24 px-6">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <DashedDivider height={50} />
          <p className="text-coral text-xs tracking-[0.4em] uppercase mt-8 mb-4 font-display">Our Recent Projects</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy">Selected work we're proud of</h2>
        </div>
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w) => (
            <Link key={w.title} to="/portfolio" className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={w.img} alt={w.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <div className="text-coral text-xs tracking-[0.3em] uppercase mb-1">{w.tag}</div>
                  <h3 className="font-display text-xl">{w.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link to="/portfolio" className="pill-btn pill-outline">View All Works</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative bg-navy text-white py-32 px-6 diagonal-both overflow-hidden">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-coral text-xs tracking-[0.4em] uppercase mb-4 font-display">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">What our clients say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 backdrop-blur rounded-2xl p-8 hover:bg-white/10 transition-colors border border-white/5">
                <Quote className="text-coral mb-4" size={28} />
                <p className="text-white/80 italic text-sm leading-relaxed">"{t.text}"</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="font-display font-semibold">{t.name}</div>
                  <div className="text-xs text-coral tracking-wider uppercase mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-28 px-6 text-center">
        <DashedDivider height={50} />
        <h2 className="mt-10 text-3xl md:text-5xl font-display font-bold text-navy max-w-3xl mx-auto leading-tight">
          Ready to build your next <span className="text-coral">digital project?</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Partner with Orinnovative and transform your ideas into successful digital products.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="pill-btn pill-solid">Let's Talk <ArrowRight className="ml-2" size={16} /></Link>
          <Link to="/services" className="pill-btn pill-outline">Explore Services</Link>
        </div>
      </section>
    </>
  );
}
