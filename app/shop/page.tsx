import type { Metadata } from 'next';
import Image from 'next/image';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Shop Now – Order Arohi Hair Care via WhatsApp',
  description:
    'Order Arohi Hair Care herbal products via WhatsApp. Easy ordering, fast delivery across Maharashtra. Contact +91 93708 17379.',
};

const WHATSAPP = '+919370817379';

const steps = [
  { step: '1', icon: '💬', title: 'Send WhatsApp', titleMr: 'WhatsApp करा', desc: 'Click the product you want and send us a WhatsApp message.' },
  { step: '2', icon: '📋', title: 'Confirm Order', titleMr: 'ऑर्डर पक्की करा', desc: 'Share your name, address and product details with us.' },
  { step: '3', icon: '💳', title: 'Make Payment', titleMr: 'पेमेंट करा', desc: 'Pay via UPI / Bank Transfer. COD available on select orders.' },
  { step: '4', icon: '📦', title: 'Get Delivered', titleMr: 'डिलिव्हरी मिळवा', desc: 'Your order will be packed and dispatched within 1-2 business days.' },
];

export default function ShopPage() {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">🛒 Easy Ordering</span>
          <h1>Shop Now</h1>
          <div className="divider-gold" />
          <p>
            Order via WhatsApp – Simple, Fast, Reliable.<br />
            <span style={{ fontFamily: 'var(--font-marathi)' }}>WhatsApp वर सहज ऑर्डर करा आणि आपल्या दारापर्यंत मिळवा!</span>
          </p>
        </div>
      </div>

      {/* How to Order */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Process</span>
            <h2>How to Order</h2>
            <div className="divider-gold" />
            <p>ऑर्डर करण्याची सोपी पद्धत – फक्त ४ सोपे पाऊले</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
            {steps.map((s) => (
              <div key={s.step} style={{
                background: 'white', borderRadius: 'var(--radius-lg)', padding: '2rem',
                textAlign: 'center', border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)', position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%)',
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 700, fontSize: '0.9rem',
                  boxShadow: 'var(--shadow-gold)',
                }}>
                  {s.step}
                </div>
                <div style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <h4 style={{ marginBottom: '0.2rem' }}>{s.title}</h4>
                <p style={{ fontFamily: 'var(--font-marathi)', color: 'var(--color-gold-dark)', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 500 }}>{s.titleMr}</p>
                <p style={{ fontSize: '0.88rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products to Order */}
      <section className="section" style={{ background: 'var(--color-blush)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Select & Order</span>
            <h2>Choose Your Product</h2>
            <div className="divider-gold" />
            <p>Click &ldquo;Order Now&rdquo; on any product to open WhatsApp with a pre-filled message</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {products.map((product) => (
              <div key={product.id} style={{
                background: 'white', borderRadius: 'var(--radius-lg)',
                overflow: 'hidden', border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.35s ease',
              }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: 'var(--color-blush)' }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.15rem' }}>
                        {product.name}
                      </div>
                      <span style={{ fontFamily: 'var(--font-marathi)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                        {product.nameMr}
                      </span>
                    </div>
                    <span className="badge badge-green">✓ Available</span>
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.6rem 1rem',
                    background: 'var(--color-gold-light)', borderRadius: 'var(--radius-sm)',
                    marginBottom: '1rem',
                  }}>
                    <span style={{ fontSize: '1rem' }}>💰</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                      WhatsApp के लिए कीमत पूछें / किंमत जाणून घ्या
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                    📦 Pack Size: {product.size}
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(product.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-block"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Order Now via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section-sm">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Payment</span>
            <h3>Payment Methods</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            {[
              { icon: '📱', title: 'UPI Payment', desc: 'GPay, PhonePe, Paytm, BHIM UPI' },
              { icon: '🏦', title: 'Bank Transfer', desc: 'Direct NEFT/IMPS bank transfer' },
              { icon: '💵', title: 'Cash on Delivery', desc: 'COD available for select orders' },
            ].map((p) => (
              <div key={p.title} style={{
                background: 'white', borderRadius: 'var(--radius-lg)', padding: '2rem',
                textAlign: 'center', border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{p.icon}</div>
                <h4 style={{ marginBottom: '0.5rem' }}>{p.title}</h4>
                <p style={{ fontSize: '0.88rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Order?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', fontFamily: 'var(--font-marathi)' }}>
            आमच्याशी WhatsApp वर संपर्क करा आणि आपले उत्पादन आजच ऑर्डर करा!
          </p>
          <a
            href={`https://wa.me/${WHATSAPP}?text=नमस्कार! मला Arohi Hair Care च्या उत्पादनांची माहिती आणि किंमत जाणून घ्यायची आहे. ऑर्डर करायची आहे. 🌿`}
            target="_blank" rel="noopener noreferrer"
            className="btn btn-secondary btn-lg"
          >
            📱 WhatsApp: +91 93708 17379
          </a>
        </div>
      </section>
    </div>
  );
}
