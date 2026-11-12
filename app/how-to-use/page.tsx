import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'How to Use – Step-by-Step Hair Care Guide',
  description:
    'Complete guide on how to use Arohi Hair Care products: Hair Oil, Shampoo, Conditioner, Toner, Hair Mask and Serum for best results.',
};

export default function HowToUsePage() {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">📋 Usage Guide</span>
          <h1>How to Use</h1>
          <div className="divider-gold" />
          <p>
            Step-by-step instructions for all Arohi Hair Care products.<br />
            <span style={{ fontFamily: 'var(--font-marathi)' }}>वापरण्याची पद्धत – प्रत्येक उत्पादनासाठी</span>
          </p>
        </div>
      </div>

      {/* Routine Guide */}
      <section className="section-sm" style={{ background: 'var(--color-gold-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1rem' }}>🌿 Recommended Weekly Routine</h3>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1rem' }}>
            For best results, follow this complete hair care routine:
            <strong style={{ color: 'var(--color-gold-dark)' }}> Oil (2-3x/week) → Shampoo → Conditioner → Toner (daily) → Serum → Mask (1x/week)</strong>
          </p>
        </div>
      </section>

      {/* Individual Product How-To */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {products.map((product, pi) => (
              <div
                key={product.id}
                className="how-to-product-grid"
                style={{
                  paddingBottom: '4rem',
                  borderBottom: pi < products.length - 1 ? '1px solid var(--color-border)' : 'none',
                }}
              >
                {/* Product Info Card */}
                <div
                  className="how-to-sticky-card"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-blush) 0%, white 100%)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    border: '1px solid var(--color-border)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>
                    {['🌿', '🧴', '💧', '✨', '🌱', '💫'][pi]}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>{product.name}</h3>
                  <span style={{ fontFamily: 'var(--font-marathi)', fontSize: '1rem', color: 'var(--color-gold-dark)', display: 'block', marginBottom: '0.5rem' }}>
                    {product.nameMr}
                  </span>
                  <span className="badge badge-green" style={{ marginBottom: '1rem' }}>📦 {product.size}</span>
                  <p style={{ fontSize: '0.88rem', marginBottom: '1.5rem' }}>{product.tagline}</p>
                  <Link href={`/products/${product.slug}`} className="btn btn-secondary btn-sm btn-block">
                    View Product →
                  </Link>
                </div>

                {/* Steps */}
                <div>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-gold-dark)', fontSize: '1rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
                    Step-by-Step Guide
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                    {product.howToUse.map((step, i) => (
                      <div key={i} className="step-item">
                        <div className="step-num">{i + 1}</div>
                        <div style={{
                          flex: 1, background: 'white', borderRadius: 'var(--radius-md)',
                          padding: '0.9rem 1.25rem', border: '1px solid var(--color-border)',
                          boxShadow: 'var(--shadow-sm)',
                        }}>
                          <p style={{ color: 'var(--color-text)', fontWeight: 500, fontSize: '0.92rem', marginBottom: '0.2rem' }}>
                            {step}
                          </p>
                          {product.howToUseMr[i] && (
                            <p style={{ fontFamily: 'var(--font-marathi)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                              {product.howToUseMr[i]}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ingredients used */}
                  <div style={{ background: 'var(--color-green-light)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-green)', marginBottom: '0.6rem' }}>
                      🌿 Key Ingredients in This Product
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {product.ingredients.map((ing) => (
                        <span key={ing} style={{
                          fontSize: '0.78rem', padding: '0.25rem 0.7rem',
                          background: 'white', border: '1px solid rgba(74,124,89,0.3)',
                          borderRadius: 'var(--radius-full)',
                          color: 'var(--color-green-dark)', fontWeight: 500,
                        }}>
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-sm" style={{ background: 'var(--color-blush)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="eyebrow">Pro Tips</span>
            <h3>💡 General Hair Care Tips</h3>
          </div>
          <div className="grid-3">
            {[
              { icon: '🌡️', tip: 'Always use lukewarm water (not hot) for washing hair', tipMr: 'केस धुण्यासाठी नेहमी कोमट पाणी वापरा (गरम नाही)' },
              { icon: '💆‍♀️', tip: 'Massage oil gently – aggressive rubbing damages roots', tipMr: 'तेल हलक्या हाताने लावा – जोरात घासल्यास मुळांना नुकसान होते' },
              { icon: '🌿', tip: 'Consistency is key – use products regularly for best results', tipMr: 'नियमितता महत्त्वाची – सर्वोत्तम परिणामासाठी नियमित वापरा' },
              { icon: '⏰', tip: 'Leave oil overnight for maximum nourishment', tipMr: 'जास्तीत जास्त पोषणासाठी तेल रात्रभर ठेवा' },
              { icon: '🧴', tip: 'Always follow shampoo with conditioner', tipMr: 'शॅम्पूनंतर नेहमी कंडिशनर वापरा' },
              { icon: '✂️', tip: 'Trim split ends every 6-8 weeks for healthier hair', tipMr: 'निरोगी केसांसाठी दर ६-८ आठवड्यांनी टोके कापा' },
            ].map((t, i) => (
              <div key={i} style={{
                background: 'white', borderRadius: 'var(--radius-md)', padding: '1.5rem',
                border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{t.icon}</div>
                <p style={{ color: 'var(--color-text)', fontWeight: 500, fontSize: '0.9rem', marginBottom: '0.4rem' }}>{t.tip}</p>
                <p style={{ fontFamily: 'var(--font-marathi)', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{t.tipMr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
