import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions – Arohi Hair Care',
  description: 'Arohi Hair Care terms and conditions – rules governing the use of our website and purchase of products.',
};

export default function TermsPage() {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">📄 Legal</span>
          <h1>Terms & Conditions</h1>
          <div className="divider-gold" />
          <p>Please read these terms carefully before using our website or purchasing our products.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="policy-content">
            <p>Last updated: November 2026</p>
            <p>By accessing this website or purchasing products from Arohi Hair Care, you agree to be bound by these Terms and Conditions.</p>

            <h3>1. Products & Information</h3>
            <p>All product descriptions, images, and information on this website are for informational purposes only. We strive for accuracy but cannot guarantee that all information is complete or error-free.</p>
            <ul>
              <li>Product results may vary from person to person</li>
              <li>Arohi Hair Care products are not intended to diagnose, treat, cure, or prevent any disease</li>
              <li>Always do a patch test before using any new product</li>
              <li>Discontinue use if irritation occurs and consult a doctor</li>
            </ul>

            <h3>2. Orders & Pricing</h3>
            <ul>
              <li>All orders are placed via WhatsApp at +91 93708 17379</li>
              <li>Prices are subject to change without prior notice</li>
              <li>Orders are confirmed only after payment receipt</li>
              <li>We reserve the right to cancel any order if payment is not received within 24 hours</li>
            </ul>

            <h3>3. Intellectual Property</h3>
            <p>All content on this website including text, images, logos, and product designs are the property of Arohi Hair Care. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.</p>

            <h3>4. Limitation of Liability</h3>
            <p>Arohi Hair Care shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our maximum liability shall not exceed the amount paid for the product(s) in question.</p>

            <h3>5. Governing Law</h3>
            <p>These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Solapur, Maharashtra.</p>

            <h3>6. Changes to Terms</h3>
            <p>We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated date.</p>

            <h3>7. Contact</h3>
            <p>For any questions regarding these Terms and Conditions:</p>
            <ul>
              <li>WhatsApp / Call: +91 93708 17379</li>
              <li>Address: Arohi Hair Care, Goradwadi, Post Goradwadi, Taluka Malshiras, District Solapur, Maharashtra – 413107</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
