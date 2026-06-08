import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Works" },
  { to: "/team", label: "Pages" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contacts" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const path = location.pathname;

  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="bg-navy">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logo.url}
              alt="Orinnovative — Innovating the Technology"
              className="h-9 w-auto brightness-110 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n, i) => {
              const active = path === n.to;
              return (
                <div key={n.to} className="flex items-center gap-8">
                  <Link
                    to={n.to}
                    className={`nav-link hover:text-coral ${active ? "nav-link-active" : ""}`}
                  >
                    {n.label}
                  </Link>
                  {i < nav.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-coral" aria-hidden />
                  )}
                </div>
              );
            })}
          </nav>

          <a
            href="tel:+61423459234"
            className="hidden lg:inline-flex font-display font-medium text-white tracking-wider hover:text-coral transition-colors"
          >
            +61 423 459 234
          </a>

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-white/10 px-6 py-6 space-y-4 animate-fade-in">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`block nav-link hover:text-coral ${path === n.to ? "nav-link-active" : ""}`}
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+61423459234" className="block text-white font-display pt-2">
              +61 423 459 234
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
