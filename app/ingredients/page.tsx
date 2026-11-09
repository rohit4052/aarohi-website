import type { Metadata } from 'next';
import { ingredients } from '@/data/ingredients';

export const metadata: Metadata = {
  title: 'Ingredients – Natural Ayurvedic Herbs',
  description:
    'Discover the 12 powerful Ayurvedic herbs used in Arohi Hair Care products: Amla, Shikakai, Bhringraj, Brahmi, Hibiscus, Neem, Aloe Vera and more.',
};

export default function IngredientsPage() {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">🌿 Pure & Natural</span>
          <h1>Our Ingredients</h1>
          <div className="divider-gold" />
          <p>
            12 powerful Ayurvedic herbs carefully selected for maximum hair benefit.<br />
            <span style={{ fontFamily: 'var(--font-marathi)' }}>नैसर्गिक घटक – आयुर्वेदाच्या शक्तीने केसांची काळजी</span>
          </p>
        </div>
      </div>

      {/* Intro Banner */}
      <section className="section-sm" style={{ background: 'var(--color-green-light)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem', color: 'var(--color-green-dark)', fontWeight: 500 }}>
            🌱 All Arohi Hair Care products are made using traditional Ayurvedic herbs that have been
            trusted for centuries. No harsh chemicals. No synthetic additives. Just nature&apos;s best.
          </p>
        </div>
      </section>

      {/* Ingredients Grid */}
      <section className="section">
        <div className="container">
          <div className="ingredients-grid">
            {ingredients.map((ing) => (
              <div key={ing.id} className="ingredient-card">
                <span className="ingredient-emoji">{ing.emoji}</span>
                <div className="ingredient-name">{ing.name}</div>
                <span className="ingredient-name-mr">{ing.nameMr}</span>
                <span className="ingredient-benefit">{ing.benefit}</span>
                <p className="ingredient-desc">{ing.description}</p>
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                    Found In
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', justifyContent: 'center' }}>
                    {ing.usedIn.map((pid) => {
                      const labels: Record<string, string> = {
                        'hair-oil': 'Hair Oil',
                        'shampoo': 'Shampoo',
                        'toner': 'Toner',
                        'conditioner': 'Conditioner',
                        'hair-mask': 'Hair Mask',
                        'serum': 'Serum',
                      };
                      return (
                        <span key={pid} style={{
                          fontSize: '0.68rem', padding: '0.15rem 0.5rem',
                          background: 'var(--color-gold-light)',
                          borderRadius: 'var(--radius-full)',
                          color: 'var(--color-gold-dark)', fontWeight: 600,
                        }}>
                          {labels[pid] || pid}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Experience the Power of Nature</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', fontFamily: 'var(--font-marathi)' }}>
            या सर्व नैसर्गिक घटकांचा फायदा आरोही हेअर केअरच्या उत्पादनांद्वारे मिळवा
          </p>
          <a
            href="https://wa.me/+919370817379?text=नमस्कार! Arohi Hair Care च्या उत्पादनांबद्दल माहिती हवी आहे. 🌿"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-secondary btn-lg"
          >
            Shop All Products
          </a>
        </div>
      </section>
    </div>
  );
}
