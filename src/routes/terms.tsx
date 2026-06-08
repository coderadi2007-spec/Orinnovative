import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { LogoBanner } from "@/components/site/LogoBanner";
import { LegalLayout } from "./privacy";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Orinnovative" },
      { name: "description", content: "Terms governing the use of Orinnovative services and website." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <LogoBanner />
      <PageHero eyebrow="Legal" title="Terms & Conditions" subtitle="Please read carefully before using our services." />
      <LegalLayout>
        <p>By accessing or using Orinnovative's website and services, you agree to comply with and be bound by the following Terms and Conditions.</p>

        <h2>1. Company Information</h2>
        <p>Orinnovative provides services including Website Design &amp; Development, Mobile App Development, Software Development, Digital Marketing, Graphic Design, Content Writing, and Blockchain &amp; IT Solutions.</p>

        <h2>2. Acceptance of Terms</h2>
        <p>By accessing our website or hiring our services, you agree to these Terms and Conditions, our Privacy Policy, and any additional agreements related to specific projects.</p>

        <h2>3. Services</h2>
        <p>We provide services based on the agreed project scope, timeline and pricing. Work outside the agreed scope may require extra charges and timeline extensions.</p>

        <h2>4. Payments</h2>
        <ul><li>Clients must pay according to the agreed schedule.</li><li>Advance payments are non-refundable once the project has started.</li><li>Delayed payments may result in project delays or suspension.</li><li>Final files may be withheld until full payment is received.</li></ul>

        <h2>5. Client Responsibilities</h2>
        <p>Clients are responsible for providing accurate requirements, supplying content/credentials on time and reviewing submitted work promptly.</p>

        <h2>6. Intellectual Property</h2>
        <p>All custom work becomes the client's property after full payment. Orinnovative may showcase completed projects in its portfolio unless otherwise agreed. Third-party tools remain subject to their respective licenses.</p>

        <h2>7. Confidentiality</h2>
        <p>Both parties agree to keep confidential information and project details private unless disclosure is required by law.</p>

        <h2>8. Revisions</h2>
        <p>Reasonable revisions are included; major or repeated changes beyond the agreed limit may involve additional charges.</p>

        <h2>9. Cancellation</h2>
        <p>Either party may cancel with written notice. Payments for completed work and used resources are non-refundable. Pending dues must be cleared immediately upon cancellation.</p>

        <h2>10. Limitation of Liability</h2>
        <p>Orinnovative is not liable for indirect business losses, delays caused by third-party services, or security breaches caused by third-party software or client negligence.</p>

        <h2>11. Third-Party Tools</h2>
        <p>Projects may involve third-party software, hosting, APIs or plugins. We are not responsible for issues caused by third-party providers.</p>

        <h2>12. Termination</h2>
        <p>We may suspend services if terms are violated, payments remain unpaid, or illegal/unethical activities are detected.</p>

        <h2>13. Governing Law</h2>
        <p>These Terms are governed by the laws of India.</p>

        <h2>14. Changes &amp; Contact</h2>
        <p>Orinnovative may modify these Terms at any time. For questions, contact <a href="mailto:info@orinnovative.com">info@orinnovative.com</a>.</p>
      </LegalLayout>
    </>
  );
}
