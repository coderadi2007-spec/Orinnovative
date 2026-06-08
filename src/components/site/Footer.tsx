import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg.asset.json";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      {/* Top contact band */}
      <section className="bg-[oklch(0.97_0.003_250)] text-ink py-24 -mb-1 relative diagonal-both">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-12 text-center">
          {[
            { icon: Phone, title: "Call Us", lines: ["+61 423 459 234"], color: "text-emerald-500" },
            { icon: Mail, title: "Write Us", lines: ["info@orinnovative.com"], color: "text-teal-500" },
            { icon: MapPin, title: "Visit Us", lines: ["Garden City, Port Melbourne", "Melbourne 3207, Australia"], color: "text-orange-500" },
          ].map((c) => (
            <div key={c.title} className="group">
              <div className="mx-auto w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                <c.icon className={`${c.color}`} size={34} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-display font-semibold text-navy mb-2">{c.title}</h3>
              {c.lines.map((l) => (
                <p key={l} className="text-sm text-muted-foreground">{l}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Logo + socials */}
      <div className="pt-20 pb-16 text-center">
        <Link to="/" className="inline-block mb-8">
          <img src={logo.url} alt="Orinnovative" className="h-12 mx-auto" />
        </Link>
        <div className="flex justify-center gap-6">
          {[Twitter, Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="social"
              className="text-coral hover:text-white transition-colors hover:-translate-y-1 inline-block duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-coral text-white text-center py-5 text-xs tracking-[0.25em] uppercase font-display">
        © Copyright {new Date().getFullYear()} Orinnovative — All Rights Reserved
      </div>
    </footer>
  );
}
