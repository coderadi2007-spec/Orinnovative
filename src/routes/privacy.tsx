import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "@/components/site/PageHero";
import { LogoBanner } from "@/components/site/LogoBanner";

export function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <section className="bg-white py-20 px-6">
      <article className="mx-auto max-w-3xl prose prose-slate prose-headings:font-display prose-headings:text-navy prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-a:text-coral prose-strong:text-navy prose-li:text-muted-foreground prose-p:text-muted-foreground prose-p:leading-relaxed">
        {children}
      </article>
    </section>
  );
}

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Orinnovative" },
      { name: "description", content: "How Orinnovative collects, uses and protects your information." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <LogoBanner />
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Effective Date: 23 May 2026" />
      <LegalLayout>
        <p>Your privacy is important to us. This Privacy Policy explains how Orinnovative (“Company”, “we”, “our”, or “us”) collects, uses, stores and protects your information when you use our website, services and digital platforms. By accessing or using our website and services, you agree to the terms described in this Privacy Policy.</p>

        <h2>1. Company Information</h2>
        <p><strong>Company:</strong> Orinnovative — IT Services &amp; Software Development.<br /><strong>Email:</strong> info@orinnovative.com<br /><strong>Website:</strong> https://orinnovative.com</p>

        <h2>2. Information We Collect</h2>
        <h3>Personal Information</h3>
        <ul><li>Full name</li><li>Email address</li><li>Phone number</li><li>Company name</li><li>Billing information</li><li>Project requirements</li><li>Communication details</li></ul>
        <h3>Technical Information</h3>
        <ul><li>IP address</li><li>Browser type</li><li>Device information</li><li>Operating system</li><li>Website usage data</li><li>Cookies and tracking data</li></ul>
        <h3>Business Information</h3>
        <p>When working on projects, we may receive business documents, design assets, login credentials, project files and marketing materials.</p>

        <h2>3. How We Use Your Information</h2>
        <ul><li>To provide our services</li><li>To communicate with clients</li><li>To manage projects and support requests</li><li>To improve website performance and user experience</li><li>To process payments and invoices</li><li>To send service updates</li><li>To maintain security and prevent fraud</li><li>To comply with legal obligations</li></ul>

        <h2>4. Cookies &amp; Tracking</h2>
        <p>Our website may use cookies and similar technologies to improve functionality, analyze visitor behavior and enhance user experience. Users may disable cookies through browser settings; however some features may not function properly.</p>

        <h2>5. Third-Party Services</h2>
        <p>We may use trusted third-party services including hosting providers, payment gateways, analytics, cloud storage, marketing tools and communication platforms (e.g. Google Analytics, Stripe, Razorpay, PayPal, WhatsApp Business). We are not responsible for the privacy practices of third-party websites.</p>

        <h2>6. Data Security</h2>
        <p>We use SSL encryption, secure servers, restricted administrative access and firewall protection. While we strive to protect your information, no online system can guarantee absolute security.</p>

        <h2>7. Data Sharing</h2>
        <p>We do not sell, rent or trade personal information. Information may only be shared with authorized service providers, for legal compliance, payment processing, or to protect company rights.</p>

        <h2>8. Confidentiality of Client Projects</h2>
        <p>Confidential files, source code, credentials or business materials shared with us are handled responsibly and used solely for project-related purposes unless otherwise agreed in writing.</p>

        <h2>9. User Rights</h2>
        <p>You may request to access, correct or delete your personal data, withdraw consent, or request data-related assistance by contacting us.</p>

        <h2>10. Data Retention</h2>
        <p>We retain information only as long as necessary to provide services, comply with legal obligations, maintain business records or resolve disputes.</p>

        <h2>11. Children's Privacy</h2>
        <p>Our services are not intended for individuals under 18 and we do not knowingly collect personal information from minors.</p>

        <h2>12. External Links</h2>
        <p>Our website may contain links to third-party websites. We are not responsible for their content, privacy practices or policies.</p>

        <h2>13. Changes to This Policy</h2>
        <p>Orinnovative reserves the right to update this Privacy Policy at any time. Updated versions will be posted on this page with a revised effective date.</p>

        <h2>14. Contact</h2>
        <p>Questions? Email <a href="mailto:info@orinnovative.com">info@orinnovative.com</a>.</p>
      </LegalLayout>
    </>
  );
}
