import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Return & Refund Policy – Arohi Hair Care',
  description: 'Arohi Hair Care return and refund policy – conditions, process, and timelines.',
};

export default function ReturnPolicyPage() {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">↩️ Returns & Refunds</span>
          <h1>Return & Refund Policy</h1>
          <div className="divider-gold" />
          <p>We want you to be completely satisfied with your Arohi Hair Care purchase.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="policy-content">
            <p>Last updated: November 2026</p>

            <h3>1. Our Return Policy</h3>
            <p>We accept returns and refund requests under the following conditions:</p>
            <ul>
              <li>The product received is <strong>damaged, broken, or leaking</strong></li>
              <li>You received the <strong>wrong product</strong></li>
              <li>The product is <strong>expired</strong> or has a manufacturing defect</li>
            </ul>

            <h3>2. Non-Returnable Items</h3>
            <p>The following cannot be returned:</p>
            <ul>
              <li>Products that have been opened and used (except in case of defect)</li>
              <li>Products returned after 7 days of delivery</li>
              <li>Products damaged due to misuse or improper storage</li>
              <li>Items purchased on special sale or discount</li>
            </ul>

            <h3>3. How to Initiate a Return</h3>
            <p>To initiate a return, please follow these steps:</p>
            <ul>
              <li>Contact us on WhatsApp at <strong>+91 93708 17379</strong> within <strong>7 days of receiving your order</strong></li>
              <li>Share your order details, photos/video of the damaged product, and reason for return</li>
              <li>Our team will review your request and respond within 24–48 hours</li>
            </ul>

            <h3>4. Refund Process</h3>
            <p>Once your return request is approved:</p>
            <ul>
              <li>Refund will be processed within <strong>5–7 business days</strong></li>
              <li>Refund will be issued via the original payment method (UPI/bank transfer)</li>
              <li>For COD orders, refund will be issued via bank transfer or UPI</li>
            </ul>

            <h3>5. Exchange Policy</h3>
            <p>If you received a wrong product, we will arrange a replacement at no extra cost. Please contact us on WhatsApp within 7 days of delivery.</p>

            <h3>6. Contact for Returns</h3>
            <p>For any return or refund queries, please contact us:</p>
            <ul>
              <li>WhatsApp / Call: +91 93708 17379</li>
              <li>Available: Monday to Saturday, 9:00 AM – 7:00 PM</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
