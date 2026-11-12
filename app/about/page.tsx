import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us – Our Story & Mission',
  description:
    'Learn about Arohi Hair Care – a premium herbal hair care brand from Solapur, Maharashtra, inspired by traditional Indian Ayurvedic botanicals.',
};

const milestones = [
  { icon: '🌱', title: 'Our Beginning', desc: 'Born from a passion for natural hair care in the heartland of Maharashtra, Solapur.' },
  { icon: '🌿', title: 'Herbal Research', desc: 'Carefully studied traditional Ayurvedic texts and local herb knowledge to craft effective formulas.' },
  { icon: '🧪', title: 'Product Development', desc: 'Created 6 premium products covering every step of a complete herbal hair care routine.' },
  { icon: '💚', title: 'Community First', desc: 'Built on trust, natural ingredients, and affordable pricing for every Indian household.' },
];

const values = [
  { icon: '🌿', label: 'Natural', labelMr: 'नैसर्गिक', desc: 'Every ingredient is chosen for its proven herbal benefit.' },
  { icon: '🤝', label: 'Trust', labelMr: 'विश्वास', desc: 'Transparent formulas with no hidden chemicals.' },
  { icon: '💎', label: 'Quality', labelMr: 'दर्जा', desc: 'Premium quality at an accessible price for every customer.' },
  { icon: '🌍', label: 'Local', labelMr: 'स्थानिक', desc: 'Proudly made in Maharashtra, supporting local communities.' },
];

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">🌿 Our Story</span>
          <h1>About Arohi Hair Care</h1>
          <div className="divider-gold" />
          <p>
            Inspired by India&apos;s ancient herbal wisdom, crafted with love in Solapur, Maharashtra.
            <br />
            <span style={{ fontFamily: 'var(--font-marathi)' }}>आमच्याविषयी – निसर्गाच्या प्रेरणेतून जन्मलेला ब्रँड</span>
          </p>
        </div>
      </div>

      {/* Brand Story */}
      <section className="section">
        <div className="container">
          <div className="split-grid">
            <div>
              <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>
                Our Mission
              </span>
              <h2 style={{ marginBottom: '1.5rem' }}>
                निसर्गाची देणगी,<br />
                <span style={{ color: 'var(--color-gold)' }}>तुमच्या केसांसाठी!</span>
              </h2>
              <p style={{ marginBottom: '1.25rem', fontSize: '1.05rem' }}>
                Arohi Hair Care हा नैसर्गिक घटकांपासून प्रेरणा घेऊन तयार केलेला हेअर केअर ब्रँड आहे.
                भारतीय पारंपरिक वनौषधी आणि केसांची निगा यांचा संगम साधून केसांच्या दैनंदिन काळजीसाठी
                उत्तम उत्पादने उपलब्ध करून देणे हे आमचे उद्दिष्ट आहे.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                We believe that the best solutions for hair care lie in nature — in the herbs our
                grandmothers used, in the wisdom passed down through generations. Our mission is to
                bring these time-tested remedies to modern, busy lives in a convenient, premium form.
              </p>
              <p style={{ fontFamily: 'var(--font-marathi)', color: 'var(--color-green-dark)', fontWeight: 500, fontSize: '1rem', borderLeft: '3px solid var(--color-gold)', paddingLeft: '1rem' }}>
                "निसर्गाच्या प्रेरणेतून केसांच्या काळजीसाठी विश्वासार्ह उत्पादने ग्राहकांपर्यंत पोहोचवणे."
              </p>
            </div>
            <div>
              <Image
                src="/images/logo.jpg"
                alt="Arohi Hair Care Brand"
                width={500}
                height={500}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-lg)',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Milestones */}
      <section className="section" style={{ background: 'var(--color-blush)' }}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Journey</span>
            <h2>How We Got Here</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid-4-steps">
            {milestones.map((m, i) => (
              <div key={i} style={{
                background: 'white', borderRadius: 'var(--radius-lg)', padding: '2rem',
                textAlign: 'center', border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)', position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%)',
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 700, fontSize: '0.85rem',
                  boxShadow: 'var(--shadow-gold)',
                }}>
                  {i + 1}
                </div>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem', marginTop: '0.5rem' }}>{m.icon}</div>
                <h4 style={{ marginBottom: '0.5rem' }}>{m.title}</h4>
                <p style={{ fontSize: '0.88rem' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">What We Stand For</span>
            <h2>Our Core Values</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid-4">
            {values.map((v) => (
              <div key={v.label} className="usp-card" style={{ background: 'white', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <div className="usp-icon-wrap">{v.icon}</div>
                <h4>{v.label}</h4>
                <p style={{ fontFamily: 'var(--font-marathi)', color: 'var(--color-gold-dark)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>{v.labelMr}</p>
                <p style={{ fontSize: '0.88rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address / Location */}
      <section className="section-sm" style={{ background: 'linear-gradient(135deg, #1a0a0a 0%, #2C1A1A 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1rem' }}>
            Find Us
          </span>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>आमचा पत्ता</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Arohi Hair Care, Goradwadi, Post Goradwadi,<br />
            Taluka Malshiras, District Solapur,<br />
            Maharashtra, India – 413107
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
            <a
              href="https://wa.me/+919370817379?text=नमस्कार! Arohi Hair Care बद्दल माहिती हवी आहे."
              target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
