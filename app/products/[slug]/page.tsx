import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { products, getProductBySlug } from '@/data/products';

const WHATSAPP = '+919370817379';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Arohi Hair Care`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const otherProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="product-detail-hero">
        <div className="container">
          <div className="split-grid">
            {/* Image */}
            <div className="product-detail-img-wrap">
              <div className="product-detail-img-bg" />
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={600}
                style={{
                  width: '100%', height: 'auto',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-lg)',
                  position: 'relative', zIndex: 1,
                  objectFit: 'cover',
                }}
                priority
              />
              <div className="product-qty-badge">
                <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>📦</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text)' }}>Net Quantity</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-gold-dark)' }}>{product.size}</div>
              </div>
            </div>

            {/* Info */}
            <div>
              <Link href="/products" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginBottom: '1.25rem' }}>
                ← All Products
              </Link>
              <span className="badge badge-green" style={{ marginBottom: '1rem' }}>✓ Available</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.4rem' }}>{product.name}</h1>
              <span style={{
                display: 'block', fontFamily: 'var(--font-marathi)',
                fontSize: '1.2rem', color: 'var(--color-gold-dark)',
                marginBottom: '0.5rem', fontWeight: 600,
              }}>
                {product.nameMr}
              </span>
              <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
                {product.tagline}
              </p>
              <p style={{ fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                {product.description}
              </p>

              {/* Ingredients pills */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-green)', marginBottom: '0.75rem' }}>
                  🌿 Key Ingredients
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {product.ingredients.map((ing) => (
                    <span key={ing} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                      padding: '0.35rem 0.9rem',
                      background: 'var(--color-green-light)', border: '1px solid rgba(74,124,89,0.3)',
                      borderRadius: 'var(--radius-full)', fontSize: '0.82rem',
                      color: 'var(--color-green-dark)', fontWeight: 500,
                    }}>
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="product-detail-actions">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(product.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Order via WhatsApp
                </a>
                <a
                  href={`tel:+919370817379`}
                  className="btn btn-secondary btn-lg"
                >
                  📞 Call to Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & How to Use */}
      <section className="section">
        <div className="container">
          <div className="split-grid-start">
            {/* Benefits */}
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>
                ✨ Benefits
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {product.benefits.map((benefit, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                    padding: '0.9rem 1.25rem',
                    background: 'white', borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    <span style={{
                      width: '28px', height: '28px', minWidth: '28px',
                      borderRadius: '50%', background: 'var(--color-green-light)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--color-green)', fontWeight: 700, fontSize: '0.75rem',
                    }}>✓</span>
                    <div>
                      <p style={{ color: 'var(--color-text)', fontWeight: 500, fontSize: '0.92rem', marginBottom: '0.1rem' }}>
                        {benefit}
                      </p>
                      {product.benefitsMr[i] && (
                        <p style={{ fontFamily: 'var(--font-marathi)', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                          {product.benefitsMr[i]}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Use */}
            <div>
              <h3 style={{ marginBottom: '1.5rem' }}>
                📋 How to Use / वापरण्याची पद्धत
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {product.howToUse.map((step, i) => (
                  <div key={i} className="step-item">
                    <div className="step-num">{i + 1}</div>
                    <div>
                      <p style={{ color: 'var(--color-text)', fontWeight: 500, fontSize: '0.92rem', marginBottom: '0.1rem' }}>
                        {step}
                      </p>
                      {product.howToUseMr[i] && (
                        <p style={{ fontFamily: 'var(--font-marathi)', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                          {product.howToUseMr[i]}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Order Box */}
              <div style={{
                marginTop: '2rem', padding: '1.5rem',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                borderRadius: 'var(--radius-lg)', textAlign: 'center',
              }}>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>
                  💚 Order via WhatsApp
                </div>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', marginBottom: '1rem', fontFamily: 'var(--font-marathi)' }}>
                  किंमत जाणून घ्या आणि सहज ऑर्डर करा
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(product.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block', background: 'white',
                    color: '#128C7E', fontWeight: 700,
                    padding: '0.75rem 2rem', borderRadius: 'var(--radius-full)',
                    fontSize: '0.95rem', textDecoration: 'none',
                  }}
                >
                  Chat Now: +91 93708 17379
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {otherProducts.length > 0 && (
        <section className="section-sm" style={{ background: 'var(--color-blush)' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '2rem' }}>
              <span className="eyebrow">Also Available</span>
              <h3>You May Also Like</h3>
            </div>
            <div className="grid-3">
              {otherProducts.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ display: 'flex', gap: '1rem', padding: '1rem', alignItems: 'center', borderRadius: 'var(--radius-md)' }}>
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={72}
                      height={90}
                      style={{ borderRadius: 'var(--radius-sm)', objectFit: 'cover', width: 72, height: 90 }}
                    />
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                        {p.name}
                      </div>
                      <span style={{ fontFamily: 'var(--font-marathi)', fontSize: '0.78rem', color: 'var(--color-gold-dark)' }}>
                        {p.nameMr}
                      </span>
                      <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.3rem' }}>
                        {p.size}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
