import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Our Products – Complete Hair Care Collection',
  description:
    'Shop Arohi Hair Care complete herbal collection: Hair Oil, Shampoo, Toner, Conditioner, Hair Mask & Serum. All 6 products available. Order via WhatsApp.',
};

const WHATSAPP = '+919370817379';

export default function ProductsPage() {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">🌿 All Natural & Herbal</span>
          <h1>Our Products</h1>
          <div className="divider-gold" />
          <p>AROHI HAIR CARE – Complete Herbal Hair Care Collection<br />
            <span style={{ fontFamily: 'var(--font-marathi)' }}>निसर्गाच्या प्रेरणेतून केसांची संपूर्ण निगा</span>
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <Link href={`/products/${product.slug}`} className="product-card-image" style={{ display: 'block' }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={500}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="product-card-overlay">
                    <span
                      className="btn btn-secondary btn-sm"
                      style={{ background: 'white', color: 'var(--color-gold-dark)' }}
                    >
                      View Details →
                    </span>
                  </div>
                </Link>
                <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="product-card-body">
                    <span className="badge badge-green" style={{ marginBottom: '0.75rem' }}>✓ Available</span>
                    <div className="product-card-name">{product.name}</div>
                    <span className="product-card-name-mr">{product.nameMr}</span>
                    <p style={{ fontSize: '0.88rem', marginTop: '0.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {product.tagline}
                    </p>
                    <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {product.ingredients.slice(0, 3).map((ing) => (
                        <span key={ing} style={{
                          fontSize: '0.72rem', padding: '0.2rem 0.6rem',
                          background: 'var(--color-green-light)',
                          borderRadius: 'var(--radius-full)',
                          color: 'var(--color-green-dark)', fontWeight: 500,
                        }}>
                          {ing.split(' ')[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
                <div className="product-card-footer">
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(product.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                  >
                    Enquire Now
                  </a>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>📦 {product.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative' }}>
          <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '1rem' }}>
            ऑर्डर करण्यासाठी WhatsApp करा
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '2rem', fontFamily: 'var(--font-marathi)' }}>
            किंमत, उपलब्धता आणि डिलिव्हरीसाठी आजच संपर्क करा
          </p>
          <div style={{ textAlign: 'center' }}>
            <a
              href={`https://wa.me/${WHATSAPP}?text=नमस्कार! मला Arohi Hair Care च्या सर्व उत्पादनांची माहिती आणि किंमत जाणून घ्यायची आहे. 🌿`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              📱 +91 93708 17379 – WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
