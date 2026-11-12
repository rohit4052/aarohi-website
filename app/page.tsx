import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { products } from '@/data/products';
import { ingredients } from '@/data/ingredients';

export const metadata: Metadata = {
  title: 'Arohi Hair Care – निसर्गाची देणगी, तुमच्या केसांसाठी!',
  description:
    'Premium herbal hair care products made from traditional Indian Ayurvedic botanicals. Reduce hair fall, control dandruff, promote growth. Order via WhatsApp.',
};

const WHATSAPP = '+919370817379';

const problems = [
  { icon: '💇‍♀️', title: 'Hair Fall', titleMr: 'केस गळणे', desc: 'Excessive hair shedding weakening your confidence daily.' },
  { icon: '🌨️', title: 'Dandruff', titleMr: 'कोंडा', desc: 'Persistent dandruff causing itchiness and embarrassment.' },
  { icon: '⬜', title: 'Premature Greying', titleMr: 'अकाली पांढरे केस', desc: 'Early greying making you look older than your age.' },
  { icon: '🌵', title: 'Dry & Frizzy Hair', titleMr: 'कोरडे, राठ केस', desc: 'Lifeless, dry, unmanageable hair ruining your look.' },
];

const usps = [
  { icon: '🌿', title: 'Pure Herbal', titleMr: 'शुद्ध हर्बल', desc: 'Made from traditional Ayurvedic herbs used for centuries.' },
  { icon: '🏡', title: 'Made in Maharashtra', titleMr: 'महाराष्ट्रात बनवलेले', desc: 'Crafted locally in Solapur with love and care.' },
  { icon: '💚', title: 'No Harsh Chemicals', titleMr: 'केमिकल-मुक्त', desc: 'Free from harmful sulfates, parabens, and silicones.' },
  { icon: '💰', title: 'Budget Friendly', titleMr: 'किफायतशीर', desc: 'Salon-quality results without the salon price tag.' },
];

const testimonials = [
  {
    text: 'आरोही हेअर ऑइल वापरल्यानंतर माझे केस गळणे खूपच कमी झाले. फक्त ३ आठवड्यात फरक जाणवला! खूप छान उत्पादन आहे.',
    author: 'Priya Deshmukh',
    location: 'Pune, Maharashtra',
    stars: 5,
  },
  {
    text: 'मी खूप वर्षांपासून कोंड्याने त्रस्त होते. Arohi Herbal Shampoo वापरल्यानंतर कोंडा जवळपास गेला. अतिशय समाधानी आहे!',
    author: 'Sunita Jadhav',
    location: 'Solapur, Maharashtra',
    stars: 5,
  },
  {
    text: 'Hair Toner खूपच छान आहे. हलके आणि ताजेपणा देणारे. माझ्या केसांना खूप फायदा झाला. नक्कीच recommend करेन!',
    author: 'Kavita Pawar',
    location: 'Kolhapur, Maharashtra',
    stars: 5,
  },
];

const marqueeItems = [
  '🌿 Pure Herbal', 'आवळा', '🌸 Bhringraj', 'शिकाकाई', '🌺 Hibiscus',
  '💚 No Chemicals', 'ब्राह्मी', '🌿 Neem', 'कोरफड', '✨ Natural Shine',
  '🌿 Pure Herbal', 'आवळा', '🌸 Bhringraj', 'शिकाकाई', '🌺 Hibiscus',
  '💚 No Chemicals', 'ब्राह्मी', '🌿 Neem', 'कोरफड', '✨ Natural Shine',
];

export default function HomePage() {
  return (
    <div className="page-wrapper">
      {/* ─── HERO ─── */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <span className="hero-eyebrow">🌿 100% Natural &amp; Herbal</span>
              <h1 className="hero-title">
                Beautiful Hair<br />
                <span style={{ color: 'var(--color-gold)' }}>Naturally.</span>
              </h1>
              <span className="hero-title-mr">निसर्गाची देणगी, तुमच्या केसांसाठी!</span>
              <p className="hero-desc">
                पारंपरिक वनौषधींपासून प्रेरणा घेऊन तयार केलेली Arohi Hair Care ची उत्पादने
                तुमच्या केसांच्या नियमित काळजीसाठी एक संपूर्ण नैसर्गिक उपाय.
              </p>
              <div className="hero-buttons">
                <Link href="/shop" className="btn btn-primary btn-lg">
                  Shop Now →
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=नमस्कार! मला Arohi Hair Care च्या उत्पादनांबद्दल माहिती हवी आहे. 🌿`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
              <div className="hero-stats">
                <div>
                  <div className="stat-num">6+</div>
                  <div className="stat-label">Products</div>
                </div>
                <div>
                  <div className="stat-num">12</div>
                  <div className="stat-label">Herbal Ingredients</div>
                </div>
                <div>
                  <div className="stat-num">100%</div>
                  <div className="stat-label">Natural</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hero-image-wrap">
              <Image
                src="/images/hero-banner.jpg"
                alt="Arohi Hair Care – Complete Herbal Collection"
                width={600}
                height={650}
                style={{ borderRadius: 'var(--radius-xl)', objectFit: 'cover', width: '100%', height: 'auto' }}
                priority
              />
              <div className="hero-badge-float top-left">
                <div className="badge-icon">🌿</div>
                <div className="badge-label">100% Herbal</div>
                <div className="badge-sub">No Harsh Chemicals</div>
              </div>
              <div className="hero-badge-float bottom-right">
                <div className="badge-icon">⭐</div>
                <div className="badge-label">Premium Quality</div>
                <div className="badge-sub">Made in Maharashtra</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              <span className="marquee-sep" />
            </span>
          ))}
        </div>
      </div>

      {/* ─── PROBLEM SECTION ─── */}
      <section className="problem-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">केसांच्या समस्या</span>
            <h2 style={{ color: 'white' }}>केसांच्या समस्यांमुळे<br />त्रस्त आहात का?</h2>
            <div className="divider-gold" />
            <p style={{ color: 'rgba(255,255,255,0.65)' }}>
              आजकाल लहान वयातच अनेकांना केसांच्या समस्यांना सामोरे जावे लागते.
              Arohi Hair Care हे बदलण्यासाठी आले आहे.
            </p>
          </div>
          <div className="grid-4">
            {problems.map((p) => (
              <div key={p.title} className="problem-card">
                <span className="problem-icon">{p.icon}</span>
                <h4>{p.title}</h4>
                <p style={{ fontFamily: 'var(--font-marathi)', fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>{p.titleMr}</p>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--font-marathi)' }}>
              🌿 पार्लरवरील खर्चाचा विचार करण्याआधी एकदा AROHI HAIR CARE नक्की पाहा!
            </p>
            <Link href="/products" className="btn btn-primary btn-lg">
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="section" style={{ background: 'var(--color-blush)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Complete Collection</span>
            <h2>Our Herbal Products</h2>
            <div className="divider-gold" />
            <p>आमची उत्पादने – निसर्गाच्या प्रेरणेतून केसांची संपूर्ण निगा</p>
          </div>
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
                <Link href={`/products/${product.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="product-card-body">
                    <span className="badge badge-green" style={{ marginBottom: '0.75rem' }}>✓ Available</span>
                    <div className="product-card-name">{product.name}</div>
                    <span className="product-card-name-mr">{product.nameMr}</span>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                      <span className="product-card-size">📦 {product.size}</span>
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
                  <Link href={`/products/${product.slug}`} style={{ fontSize: '0.82rem', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                    Details →
                  </Link>
                </div>
              </div>
            ))}

          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/products" className="btn btn-secondary btn-lg">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY AROHI ─── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Why Choose Us</span>
            <h2>AROHI HAIR CARE का निवडावे?</h2>
            <div className="divider-gold" />
            <p>केसांच्या नियमित काळजीसाठी एकाच ब्रँडमध्ये विविध उत्पादने</p>
          </div>
          <div className="grid-4">
            {usps.map((u) => (
              <div key={u.title} className="usp-card">
                <div className="usp-icon-wrap">{u.icon}</div>
                <h4>{u.title}</h4>
                <p style={{ fontFamily: 'var(--font-marathi)', fontSize: '0.8rem', color: 'var(--color-gold-dark)', marginBottom: '0.5rem' }}>{u.titleMr}</p>
                <p style={{ fontSize: '0.88rem' }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INGREDIENTS STRIP ─── */}
      <section className="section-sm" style={{ background: 'var(--color-green-light)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="eyebrow">Natural Ingredients</span>
            <h2>नैसर्गिक घटक</h2>
            <div className="divider-gold" />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {ingredients.map((ing) => (
              <span key={ing.id} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.5rem 1.1rem',
                background: 'white', border: '1px solid var(--color-green)',
                borderRadius: 'var(--radius-full)', fontSize: '0.88rem',
                color: 'var(--color-green-dark)', fontWeight: 500,
                boxShadow: 'var(--shadow-sm)',
              }}>
                {ing.emoji} {ing.name} · {ing.nameMr}
              </span>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/ingredients" className="btn btn-green">
              Learn About Our Ingredients →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Customer Reviews</span>
            <h2>ग्राहकांचा अनुभव</h2>
            <div className="divider-gold" />
            <p>आमच्या ग्राहकांनी सांगितलेले अनुभव</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">{'★'.repeat(t.stars)}</div>
                <p className="testimonial-text" style={{ fontFamily: 'var(--font-marathi)', color: 'var(--color-text)' }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.author[0]}</div>
                  <div>
                    <div className="testimonial-name">{t.author}</div>
                    <div className="testimonial-loc">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative' }}>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)', display: 'block', textAlign: 'center', marginBottom: '1rem', fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>
            आजच ऑर्डर करा
          </span>
          <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '1rem' }}>
            तुमच्या केसांचा नवा प्रवास<br />आजच सुरू करा!
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', textAlign: 'center', maxWidth: '500px', margin: '0 auto 2rem', fontFamily: 'var(--font-marathi)' }}>
            WhatsApp वर मेसेज करा, किंमत जाणून घ्या आणि सहज ऑर्डर करा.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${WHATSAPP}?text=नमस्कार! मला Arohi Hair Care च्या उत्पादनांची माहिती आणि किंमत जाणून घ्यायची आहे. 🌿`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ color: '#25D366' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Now
            </a>
            <Link href="/products" className="btn btn-secondary btn-lg">
              Browse Products
            </Link>
          </div>
          <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
            📱 +91 93708 17379 &nbsp;|&nbsp; 📍 Goradwadi, Malshiras, Solapur, Maharashtra
          </p>
        </div>
      </section>
    </div>
  );
}
