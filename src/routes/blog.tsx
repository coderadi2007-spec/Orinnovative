import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LogoBanner } from "@/components/site/LogoBanner";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Orinnovative" },
      { name: "description", content: "Insights on web development, design, blockchain and digital marketing from the Orinnovative team." },
      { property: "og:title", content: "Blog — Orinnovative" },
      { property: "og:description", content: "Articles on tech, design and digital growth." },
    ],
  }),
  component: Blog,
});

const posts = [
  { date: "Jun 02, 2026", title: "Building scalable SaaS dashboards", author: "Harold Cote", img: work1, cat: "Web Design" },
  { date: "May 24, 2026", title: "Why every business needs a mobile app in 2026", author: "Letha Young", img: work2, cat: "Mobile" },
  { date: "May 18, 2026", title: "An intro to blockchain for product teams", author: "Gregory Parrino", img: work3, cat: "Blockchain" },
  { date: "May 09, 2026", title: "Designing for trust — UX patterns that convert", author: "Oren Odom", img: work4, cat: "UI/UX" },
];

function Blog() {
  return (
    <>
      <LogoBanner />
      <PageHero
        eyebrow="From The Studio"
        title="Insights, Ideas & Tutorials"
        subtitle="Notes on building digital products, growing brands and shipping software that customers love."
      />

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
          {posts.map((p) => (
            <article key={p.title} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-display mb-3">
                  <span className="text-coral">{p.date}</span>
                  <span className="text-border">•</span>
                  <span className="text-muted-foreground">{p.cat}</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-navy mb-3 group-hover:text-coral transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">By {p.author}</p>
                <Link to="/blog" className="text-coral font-display text-sm tracking-[0.25em] uppercase hover:underline">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
