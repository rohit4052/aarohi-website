import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shipping Policy – Arohi Hair Care',
  description: 'Arohi Hair Care shipping policy – delivery timelines, charges, and coverage across India.',
};

export default function ShippingPolicyPage() {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">📦 Delivery Information</span>
          <h1>Shipping Policy</h1>
          <div className="divider-gold" />
          <p>Everything you need to know about delivery of your Arohi Hair Care order.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="policy-content">
            <p>Last updated: November 2026</p>

            <h3>1. Order Processing</h3>
            <p>All orders are processed within <strong>1–2 business days</strong> after receiving your order and payment confirmation. Orders are not processed on Sundays and public holidays.</p>

            <h3>2. Delivery Timelines</h3>
            <ul>
              <li><strong>Maharashtra (Local):</strong> 2–4 business days</li>
              <li><strong>Other States across India:</strong> 4–7 business days</li>
              <li><strong>Remote areas:</strong> May take up to 10 business days</li>
            </ul>
            <p>Delivery times may vary during festivals, public holidays, or due to courier delays beyond our control.</p>

            <h3>3. Shipping Charges</h3>
            <p>Shipping charges vary based on the order value and delivery location. Charges will be communicated to you when you place your order via WhatsApp.</p>
            <ul>
              <li>Free shipping may be available on orders above a certain amount</li>
              <li>Standard shipping charges apply for smaller orders</li>
              <li>Remote areas may incur additional shipping charges</li>
            </ul>

            <h3>4. Shipping Coverage</h3>
            <p>We ship to all major cities and towns across India. We use trusted courier partners including India Post, DTDC, BlueDart, and Delhivery.</p>

            <h3>5. Order Tracking</h3>
            <p>Once your order is dispatched, we will share the tracking details via WhatsApp. You can track your order using the courier partner's website or app.</p>

            <h3>6. Cash on Delivery (COD)</h3>
            <p>COD is available for select pin codes. Please confirm COD availability when placing your order on WhatsApp at <strong>+91 93708 17379</strong>.</p>

            <h3>7. Contact for Shipping Enquiries</h3>
            <p>For any shipping-related questions, please contact us:</p>
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
