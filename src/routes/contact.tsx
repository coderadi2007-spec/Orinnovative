import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { LogoBanner } from "@/components/site/LogoBanner";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Orinnovative" },
      { name: "description", content: "Get in touch with Orinnovative — Melbourne, Australia. Call +61 423 459 234 or email info@orinnovative.com." },
      { property: "og:title", content: "Contact Orinnovative" },
      { property: "og:description", content: "Let's build something together." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    const body = encodeURIComponent(`Hi Orinnovative,\n\n${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:info@orinnovative.com?subject=${encodeURIComponent(form.subject || "New enquiry from website")}&body=${body}`;
    toast.success("Opening your email client…");
  };

  return (
    <>
      <LogoBanner />
      <PageHero
        eyebrow="Let's Talk"
        title="Get In Touch"
        subtitle="Have a project in mind? Send a message and our team will get back within 24 hours."
      />

      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-14">
          {/* Info */}
          <div className="space-y-8">
            {[
              { icon: MapPin, title: "Visit Us", text: "Garden City, Port Melbourne\nMelbourne 3207, Australia", color: "text-orange-500" },
              { icon: Phone, title: "Call Us", text: "+61 423 459 234", color: "text-emerald-500", href: "tel:+61423459234" },
              { icon: Mail, title: "Email Us", text: "info@orinnovative.com", color: "text-teal-500", href: "mailto:info@orinnovative.com" },
              { icon: MessageCircle, title: "WhatsApp", text: "+91 75032 87360", color: "text-[#25D366]", href: "https://wa.me/917503287360" },
            ].map((c) => (
              <a key={c.title} href={c.href ?? "#"} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex gap-5 items-start group">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <c.icon className={c.color} size={26} strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-navy text-lg">{c.title}</h3>
                  <p className="text-muted-foreground whitespace-pre-line text-sm mt-1">{c.text}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={submit} className="bg-secondary rounded-3xl p-10 space-y-5">
            <h3 className="font-display font-bold text-2xl text-navy mb-2">Send us a message</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-5 py-4 rounded-xl bg-white border border-border focus:border-coral focus:outline-none transition-colors" />
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email address" className="w-full px-5 py-4 rounded-xl bg-white border border-border focus:border-coral focus:outline-none transition-colors" />
            </div>
            <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Subject" className="w-full px-5 py-4 rounded-xl bg-white border border-border focus:border-coral focus:outline-none transition-colors" />
            <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your project…" className="w-full px-5 py-4 rounded-xl bg-white border border-border focus:border-coral focus:outline-none transition-colors resize-none" />
            <button type="submit" className="pill-btn pill-solid w-full !rounded-xl !py-4">
              Send Message <Send size={16} className="ml-2" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
