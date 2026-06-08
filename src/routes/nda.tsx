import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LogoBanner } from "@/components/site/LogoBanner";
import { LegalLayout } from "./privacy";

export const Route = createFileRoute("/nda")({
  head: () => ({
    meta: [
      { title: "NDA Policy — Orinnovative" },
      { name: "description", content: "Orinnovative's Non-Disclosure Agreement policy and confidentiality commitments." },
    ],
  }),
  component: NDA,
});

function NDA() {
  return (
    <>
      <LogoBanner />
      <PageHero eyebrow="Legal" title="Non-Disclosure Agreement (NDA) Policy" subtitle="Protecting your business ideas, data and intellectual property." />
      <LegalLayout>
        <p>At Orinnovative, we highly value the privacy, confidentiality and protection of our clients' business information, ideas and intellectual property. We're fully willing to work under an NDA whenever required by the client.</p>

        <h2>Our Commitment to Confidentiality</h2>
        <p>We protect all confidential information shared with us during discussions, planning, development, testing and business collaboration, including:</p>
        <ul><li>Business ideas and concepts</li><li>Startup plans and strategies</li><li>Software architecture and source code</li><li>Financial or operational information</li><li>Client databases and customer information</li><li>Marketing plans and intellectual property</li><li>Login credentials and private project files</li></ul>

        <h2>NDA Support</h2>
        <p>Orinnovative can sign client-provided NDAs before project discussions, provide a standard NDA document upon request, and maintain strict confidentiality throughout the project lifecycle.</p>

        <h2>Information Protection</h2>
        <p>Confidential information is handled securely and never shared, sold, disclosed or distributed to unauthorized parties without written permission from the client.</p>

        <h2>Team Confidentiality</h2>
        <p>Our internal team members, developers, designers and collaborators are expected to maintain professional confidentiality standards for client projects.</p>

        <h2>Data Security</h2>
        <p>We take reasonable technical and organizational measures to protect client information from unauthorized access, misuse or disclosure.</p>

        <h2>Duration</h2>
        <p>Confidentiality obligations remain effective even after project completion unless otherwise agreed in writing.</p>

        <h2>Contact</h2>
        <p>To request an NDA before discussing your project, email <a href="mailto:info@orinnovative.com">info@orinnovative.com</a>.</p>
      </LegalLayout>
    </>
  );
}
