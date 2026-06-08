import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LogoBanner } from "@/components/site/LogoBanner";
import teamHero from "@/assets/team-hero.jpg";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Orinnovative" },
      { name: "description", content: "Meet the Orinnovative team — engineers, designers and strategists building digital products." },
      { property: "og:title", content: "Team — Orinnovative" },
      { property: "og:description", content: "The people behind Orinnovative." },
    ],
  }),
  component: Team,
});

const members = [
  { name: "Letha L. Young", role: "Marketer", muted: true },
  { name: "Harold D. Cote", role: "Developer", muted: false },
  { name: "Oren R. Odom", role: "Marketer", muted: true },
  { name: "Gregory F. Parrino", role: "CEO", muted: true },
];

function Team() {
  return (
    <>
      <LogoBanner />
      <section className="bg-white relative overflow-hidden">
        <div className="absolute -left-10 top-32 text-[14rem] font-display font-extrabold text-coral/10 select-none leading-none rotate-[-90deg] origin-left">
          team
        </div>
        <div className="grid lg:grid-cols-2 items-center">
          <div className="px-6 lg:px-20 py-24 relative z-10">
            {members.map((m) => (
              <div key={m.name} className="py-3 group cursor-pointer">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className={`font-display font-bold text-3xl md:text-5xl transition-colors ${m.muted ? "text-muted-foreground/60 group-hover:text-navy" : "text-navy"}`}>
                    {m.name}
                  </span>
                  <span className={`font-display font-bold text-2xl md:text-4xl ${m.muted ? "text-coral-soft group-hover:text-coral" : "text-coral"}`}>
                    {m.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-[500px] lg:h-[700px]">
            <img src={teamHero} alt="Team lead" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/90 hover:bg-coral hover:text-white text-navy flex items-center justify-center transition-colors shadow-md">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-navy max-w-2xl mx-auto">
          Built by passionate <span className="text-coral">engineers, designers & strategists</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          A close-knit team committed to quality, craft and delivering work that makes a real impact for our clients.
        </p>
      </section>
    </>
  );
}
