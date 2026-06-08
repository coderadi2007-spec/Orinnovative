import { DashedDivider } from "./DashedDivider";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-navy text-white pb-32 pt-10 relative">
      <div className="mx-auto max-w-4xl px-6 text-center fade-up">
        {eyebrow && (
          <p className="text-coral text-xs tracking-[0.4em] uppercase mb-6 font-display">{eyebrow}</p>
        )}
        <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">{title}</h1>
        {subtitle && <p className="text-white/70 text-lg max-w-2xl mx-auto">{subtitle}</p>}
        <div className="mt-12">
          <DashedDivider variant="light" height={80} />
        </div>
      </div>
    </section>
  );
}
