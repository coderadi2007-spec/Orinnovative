import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import work6valley from "@/assets/work-6valley.jpg.asset.json";
import workItailor from "@/assets/work-itailor.jpg.asset.json";
import workAfro from "@/assets/work-afro.jpg.asset.json";
import workBitomax from "@/assets/work-bitomax.jpg.asset.json";
import workMa from "@/assets/work-ma.jpg.asset.json";
import workMonetbil from "@/assets/work-monetbil.jpg.asset.json";
import workLuxury from "@/assets/work-luxury.jpg.asset.json";
import workJammer from "@/assets/work-jammer.jpg.asset.json";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Orinnovative" },
      { name: "description", content: "Selected work from Orinnovative — websites, mobile apps, blockchain platforms, software dashboards and branding projects." },
      { property: "og:title", content: "Portfolio — Orinnovative" },
      { property: "og:description", content: "Modern websites, apps, blockchain and branding work." },
    ],
  }),
  component: Portfolio,
});

type Cat = "All" | "Web Design" | "E-Commerce" | "Blockchain" | "Branding" | "Real Estate";

const items: { img: string; title: string; cat: Cat }[] = [
  { img: workItailor.url, title: "iTailor — Online Tailor", cat: "Web Design" },
  { img: work6valley.url, title: "6Valley Marketplace", cat: "E-Commerce" },
  { img: workBitomax.url, title: "Bitomax Crypto Exchange", cat: "Blockchain" },
  { img: workAfro.url, title: "Afro Synthese Agency", cat: "Branding" },
  { img: workMa.url, title: "MA Switzerland Cosmetics", cat: "E-Commerce" },
  { img: workMonetbil.url, title: "Monetbil Mobile Payments", cat: "Web Design" },
  { img: workLuxury.url, title: "Luxury Residences", cat: "Real Estate" },
  { img: workJammer.url, title: "Jammer.ie Auto Marketplace", cat: "Web Design" },
];

const cats: Cat[] = ["All", "Web Design", "E-Commerce", "Blockchain", "Branding", "Real Estate"];

function Portfolio() {
  const [cat, setCat] = useState<Cat>("All");
  const filtered = cat === "All" ? items : items.filter((i) => i.cat === cat);

  return (
    <>
      
      <PageHero
        eyebrow="Our Works"
        title="Recent Projects & Creative Solutions"
        subtitle="A collection of modern websites, mobile applications, software systems, blockchain solutions, branding and digital marketing campaigns built for clients worldwide."
      />

      <section className="bg-white py-20 px-6">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2.5 rounded-full text-xs font-display tracking-[0.25em] uppercase transition-all ${
                cat === c
                  ? "bg-coral text-white shadow-lg shadow-coral/30"
                  : "bg-secondary text-navy hover:bg-coral/10 hover:text-coral"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((it, idx) => (
            <div key={`${it.title}-${idx}`} className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white">
                  <div className="text-coral text-xs tracking-[0.3em] uppercase mb-1">{it.cat}</div>
                  <h3 className="font-display text-xl">{it.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contact" className="pill-btn pill-outline">Start Your Project</Link>
        </div>
      </section>
    </>
  );
}
