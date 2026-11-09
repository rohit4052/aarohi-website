import Link from 'next/link';

const WHATSAPP = '+919370817379';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Our Products' },
  { href: '/ingredients', label: 'Ingredients' },
  { href: '/how-to-use', label: 'How to Use' },
  { href: '/shop', label: 'Shop Now' },
  { href: '/contact', label: 'Contact Us' },
];

const policyLinks = [
  { href: '/faq', label: 'FAQ' },
  { href: '/shipping-policy', label: 'Shipping Policy' },
  { href: '/return-policy', label: 'Return & Refund Policy' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
];

const products = [
  { href: '/products/hair-oil', label: 'Herbal Hair Oil' },
  { href: '/products/shampoo', label: 'Herbal Shampoo' },
  { href: '/products/toner', label: 'Hair Toner' },
  { href: '/products/conditioner', label: 'Hair Conditioner' },
  { href: '/products/hair-mask', label: 'Hair Mask' },
  { href: '/products/serum', label: 'Hair Serum' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-logo-name">AROHI</div>
            <p className="footer-tagline">निसर्गाची देणगी, तुमच्या केसांसाठी!</p>
            <p style={{ marginBottom: '1.25rem' }}>
              पारंपरिक वनौषधींपासून प्रेरणा घेऊन तयार केलेली Arohi Hair Care ची उत्पादने
              तुमच्या केसांच्या नियमित काळजीसाठी एक संपूर्ण कलेक्शन.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href={`https://wa.me/${WHATSAPP}?text=नमस्कार! Arohi Hair Care बद्दल माहिती हवी आहे.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  color: '#25D366', fontWeight: 600, fontSize: '0.9rem',
                }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +91 93708 17379
              </a>
              <a href="tel:+919370817379" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem' }}>
                📞 +91 93708 17379
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4>Our Products</h4>
            <ul className="footer-links">
              {products.map((p) => (
                <li key={p.href}>
                  <Link href={p.href}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Contact */}
          <div>
            <h4>Policies</h4>
            <ul className="footer-links" style={{ marginBottom: '1.5rem' }}>
              {policyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
            <h4>Address</h4>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.8' }}>
              Arohi Hair Care<br />
              Goradwadi, Post Goradwadi,<br />
              Taluka Malshiras,<br />
              District Solapur,<br />
              Maharashtra – 413107
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Arohi Hair Care. All rights reserved.</p>
          <p style={{ fontFamily: 'var(--font-marathi)' }}>निसर्गाची देणगी, तुमच्या केसांसाठी! 🌿</p>
        </div>
      </div>
    </footer>
  );
}
