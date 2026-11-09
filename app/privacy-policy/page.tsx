import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – Arohi Hair Care',
  description: 'Arohi Hair Care privacy policy – how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">🔒 Your Privacy</span>
          <h1>Privacy Policy</h1>
          <div className="divider-gold" />
          <p>Your privacy is important to us. This policy explains how we handle your information.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="policy-content">
            <p>Last updated: November 2026</p>
            <p>Arohi Hair Care (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information and your right to privacy.</p>

            <h3>1. Information We Collect</h3>
            <p>When you contact us or place an order, we may collect:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, phone number, WhatsApp number</li>
              <li><strong>Delivery Information:</strong> Delivery address, PIN code</li>
              <li><strong>Order Information:</strong> Products ordered, payment method</li>
              <li><strong>Communication:</strong> Messages sent via WhatsApp or our contact form</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <p>We use the collected information to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your order status and delivery</li>
              <li>Respond to your enquiries and provide customer support</li>
              <li>Send you product updates and offers (only if you consent)</li>
              <li>Improve our products and services</li>
            </ul>

            <h3>3. Information Sharing</h3>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your delivery address with our courier partners solely for the purpose of delivering your order.</p>

            <h3>4. Data Security</h3>
            <p>We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p>

            <h3>5. WhatsApp Communication</h3>
            <p>When you contact us via WhatsApp, your messages are stored on WhatsApp&apos;s servers. Please refer to WhatsApp&apos;s Privacy Policy for how they handle your data.</p>

            <h3>6. Your Rights</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to your personal data we hold</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h3>7. Contact Us</h3>
            <p>For any privacy-related queries, please contact us at:</p>
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
