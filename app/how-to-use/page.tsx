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
            <span style={{ fontFamily: 'var(--font-marathi)' }}>🌸 आरोही हेअर केअर – वापरण्याची योग्य पद्धत 🌸</span>
          </p>
        </div>
      </div>

      {/* Routine Guide */}
      <section className="section-sm" style={{ background: 'var(--color-gold-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1rem' }}>🌿 Recommended Hair Care Routine</h3>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1rem' }}>
            For best results, follow this complete routine:
            <strong style={{ color: 'var(--color-gold-dark)' }}> Oil (2x/week at night) → Shampoo (morning, diluted in bowl) → Conditioner → Toner (daily) → Serum → Herbal Hair Mask / मेहंदी (1x/month)</strong>
          </p>
          <p style={{ maxWidth: '650px', margin: '0.6rem auto 0', fontSize: '0.9rem', fontFamily: 'var(--font-marathi)', color: 'var(--color-green-dark)', fontWeight: 500 }}>
            नैसर्गिक घटकांसह केसांची नियमित निगा राखा.
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
                    {['🌿', '🧴', '💧', '✨', '🌺', '💫'][pi]}
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
              { icon: '🚫', tip: 'Never heat the Hair Oil — always apply it directly to roots & hair', tipMr: 'तेल कधीही गरम करू नये. थेट वापरावे.' },
              { icon: '🥣', tip: 'Always dilute shampoo with a little water in a bowl before applying', tipMr: 'आवश्यक तेवढा शॅम्पू एका वाटीत घेऊन थोडे पाणी मिसळून वापरावा.' },
              { icon: '🌙', tip: 'Apply Hair Oil twice a week at night and wash in the morning', tipMr: 'आठवड्यातून दोन वेळा रात्री तेल लावा आणि सकाळी शॅम्पूने धुवा.' },
              { icon: '🌺', tip: 'Use Herbal Hair Mask (मेहंदी) once a month with herbal water', tipMr: 'महिन्यातून एकदा हर्बल हेअर मास्क हर्बल पाण्यासोबत वापरा.' },
              { icon: '🧪', tip: 'Always perform a patch test before applying the Hair Mask', tipMr: 'हेअर मास्क वापरण्यापूर्वी नेहमी पॅच टेस्ट करावी.' },
              { icon: '💆‍♀️', tip: 'Massage gently with fingertips – aggressive rubbing damages roots', tipMr: 'बोटांच्या टोकांनी हलक्या हाताने मसाज करा – जोरात घासल्यास मुळांना नुकसान होते.' },
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

          <div style={{
            marginTop: '3rem',
            background: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem 1.5rem',
            textAlign: 'center',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, fontFamily: 'var(--font-marathi)', color: 'var(--color-green-dark)', marginBottom: '0.4rem' }}>
              🌿 आरोही हेअर केअर
            </div>
            <p style={{ fontFamily: 'var(--font-marathi)', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
              नैसर्गिक घटकांसह केसांची नियमित निगा राखा.
            </p>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 600, fontStyle: 'italic', color: 'var(--color-gold-dark)' }}>
              Healthy Hair... Happy You! 💗
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
