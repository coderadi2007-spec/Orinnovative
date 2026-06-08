import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LogoBanner } from "@/components/site/LogoBanner";
import { LegalLayout } from "./privacy";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Orinnovative" },
      { name: "description", content: "General disclaimer for the Orinnovative website and services." },
    ],
  }),
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <>
      <LogoBanner />
      <PageHero eyebrow="Legal" title="Disclaimer" subtitle="Information on this site is for general business and informational purposes only." />
      <LegalLayout>
        <p>While we strive to keep all information accurate and up to date, we make no guarantees or warranties regarding the completeness, reliability, accuracy, suitability or availability of the website, services or related information.</p>

        <h2>1. Professional Services</h2>
        <p>All services are based on client requirements, project scope and mutual agreements. Results may vary depending on goals, market conditions, third-party platforms and client cooperation.</p>

        <h2>2. No Guaranteed Results</h2>
        <p>Orinnovative does not guarantee specific business outcomes, rankings, traffic growth, sales or marketing performance unless explicitly agreed in writing.</p>

        <h2>3. Third-Party Disclaimer</h2>
        <p>Projects may involve third-party tools, APIs, hosting providers, plugins, payment gateways or external services. We are not responsible for interruptions, failures, pricing changes or damages caused by them.</p>

        <h2>4. Website &amp; Technical</h2>
        <p>We do not guarantee that the website will always be available without interruption, free from errors, viruses or security vulnerabilities.</p>

        <h2>5. External Links</h2>
        <p>Our website may link to external sites. Orinnovative does not control or endorse the content, policies or practices of third-party websites.</p>

        <h2>6. Limitation of Liability</h2>
        <p>Under no circumstances shall Orinnovative be held liable for any direct, indirect, incidental, consequential or business-related damages arising from the use of our website, services or digital products.</p>

        <h2>7. Intellectual Property</h2>
        <p>All logos, trademarks, graphics, content and brand names displayed belong to their respective owners. Unauthorized use, reproduction or distribution is strictly prohibited.</p>

        <h2>8. Consent &amp; Updates</h2>
        <p>By using our website and services you agree to this Disclaimer. Orinnovative may modify it at any time without prior notice.</p>

        <h2>9. Contact</h2>
        <p>Questions? Email <a href="mailto:info@orinnovative.com">info@orinnovative.com</a>.</p>
      </LegalLayout>
    </>
  );
}
