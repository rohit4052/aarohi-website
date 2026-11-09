import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us – Get in Touch with Arohi Hair Care',
  description:
    'Contact Arohi Hair Care for product enquiries, orders, and support. WhatsApp: +91 93708 17379. Located in Goradwadi, Malshiras, Solapur, Maharashtra.',
};

// Re-export the contact page as a server wrapper with metadata
// The actual form uses client-side only window.open which works in JSX without 'use client'
// since it's inside an event handler

const WHATSAPP = '+919370817379';

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">📞 Get in Touch</span>
          <h1>Contact Us</h1>
          <div className="divider-gold" />
          <p>
            We&apos;re here to help! Reach us via WhatsApp, call, or visit us.<br />
            <span style={{ fontFamily: 'var(--font-marathi)' }}>आमच्याशी संपर्क साधा – आम्ही नेहमी उपलब्ध आहोत!</span>
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>
                तुमच्या केसांच्या काळजीसाठी<br />
                <span style={{ color: 'var(--color-gold)' }}>आरोही सदैव सोबत!</span>
              </h2>

              <div className="contact-info-item">
                <div className="contact-icon" style={{ color: 'var(--color-gold-dark)' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-label">WhatsApp / Mobile</div>
                  <div className="contact-value">
                    <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }}>
                      +91 93708 17379
                    </a>
                  </div>
                  <p style={{ fontSize: '0.82rem', marginTop: '0.2rem' }}>Click to open WhatsApp chat</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon" style={{ color: 'var(--color-gold-dark)' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Phone / Call</div>
                  <div className="contact-value"><a href="tel:+919370817379">+91 93708 17379</a></div>
                  <p style={{ fontSize: '0.82rem', marginTop: '0.2rem' }}>Mon–Sat: 9:00 AM – 7:00 PM</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon" style={{ color: 'var(--color-gold-dark)' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Business Address</div>
                  <div className="contact-value" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                    Arohi Hair Care<br />Goradwadi, Post Goradwadi,<br />Taluka Malshiras,<br />District Solapur, Maharashtra – 413107
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', borderRadius: 'var(--radius-lg)', padding: '1.75rem', textAlign: 'center' }}>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>💬 Fastest Response on WhatsApp</div>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.88rem', marginBottom: '1.25rem', fontFamily: 'var(--font-marathi)' }}>
                  उत्पादनांची किंमत, उपलब्धता किंवा ऑर्डरसाठी WhatsApp हा सर्वात जलद मार्ग आहे
                </p>
                <a href={`https://wa.me/${WHATSAPP}?text=नमस्कार! मला Arohi Hair Care च्या उत्पादनांबद्दल माहिती हवी आहे. 🌿`} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-block', background: 'white', color: '#128C7E', fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 'var(--radius-full)', fontSize: '1rem', textDecoration: 'none' }}>
                  Open WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Contact Info Card */}
            <div style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: '2.5rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Send us a Message</h3>
              <p style={{ marginBottom: '2rem', fontFamily: 'var(--font-marathi)', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                संदेश पाठवा – WhatsApp वर थेट पाठवला जाईल
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { icon: '💬', title: 'WhatsApp Chat', desc: 'सर्वात जलद उत्तर. उत्पादने, किंमत, ऑर्डर सर्व एकाच ठिकाणी.', href: `https://wa.me/${WHATSAPP}?text=नमस्कार! Arohi Hair Care बद्दल माहिती हवी आहे.`, btnText: 'Start WhatsApp Chat', btnClass: 'btn-whatsapp' },
                  { icon: '📞', title: 'Call Us', desc: 'सोमवार ते शनिवार सकाळी ९ ते संध्याकाळी ७ वाजेपर्यंत.', href: 'tel:+919370817379', btnText: 'Call +91 93708 17379', btnClass: 'btn-primary' },
                  { icon: '🛒', title: 'Place an Order', desc: 'सर्व उत्पादने पाहा आणि WhatsApp द्वारे ऑर्डर करा.', href: '/shop', btnText: 'Go to Shop', btnClass: 'btn-secondary' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: '1rem', padding: '1.25rem', background: 'var(--color-blush)', borderRadius: 'var(--radius-md)', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '2rem', flexShrink: 0 }}>{item.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.3rem' }}>{item.title}</div>
                      <p style={{ fontSize: '0.85rem', marginBottom: '0.75rem', fontFamily: 'var(--font-marathi)' }}>{item.desc}</p>
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className={`btn ${item.btnClass} btn-sm`}>
                        {item.btnText}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
