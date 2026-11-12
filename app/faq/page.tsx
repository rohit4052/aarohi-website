'use client';
import { useState } from 'react';


const WHATSAPP = '+919370817379';

const faqs = [
  {
    q: 'Are Arohi Hair Care products 100% natural?',
    qMr: 'आरोही हेअर केअरची उत्पादने १००% नैसर्गिक आहेत का?',
    a: 'Yes! All our products are made from traditional Indian Ayurvedic herbs and botanical extracts. We do not add harsh sulfates, parabens, or harmful chemicals.',
    aMr: 'हो! आमची सर्व उत्पादने पारंपरिक भारतीय आयुर्वेदिक वनौषधी आणि वनस्पती अर्कांपासून बनवलेली आहेत.',
  },
  {
    q: 'How long does it take to see results?',
    qMr: 'परिणाम दिसण्यासाठी किती वेळ लागतो?',
    a: 'Most customers see noticeable improvements within 3–4 weeks of regular use. For significant hair growth, consistent use for 2–3 months is recommended.',
    aMr: 'बहुतेक ग्राहकांना नियमित वापराच्या ३-४ आठवड्यांत लक्षणीय सुधारणा दिसतात.',
  },
  {
    q: 'How can I order these products?',
    qMr: 'मी हे उत्पादने कसे ऑर्डर करू शकतो?',
    a: 'Simply WhatsApp us at +91 93708 17379 with the product name and your address. We\'ll guide you through the ordering and payment process.',
    aMr: '+91 93708 17379 वर WhatsApp करा, उत्पादनाचे नाव आणि पत्ता सांगा. आम्ही ऑर्डर प्रक्रियेत मार्गदर्शन करू.',
  },
  {
    q: 'Do you offer Cash on Delivery (COD)?',
    qMr: 'Cash on Delivery (COD) उपलब्ध आहे का?',
    a: 'Yes, COD is available for select orders. Please confirm COD availability while placing your order on WhatsApp.',
    aMr: 'हो, निवडक ऑर्डरसाठी COD उपलब्ध आहे. WhatsApp वर ऑर्डर करताना COD उपलब्धता पक्की करा.',
  },
  {
    q: 'How long will delivery take?',
    qMr: 'डिलिव्हरीला किती वेळ लागेल?',
    a: 'Orders are dispatched within 1–2 business days. Delivery takes 3–7 days depending on your location within Maharashtra/India.',
    aMr: 'ऑर्डर १-२ व्यावसायिक दिवसांत पाठवली जाते. महाराष्ट्र/भारतात तुमच्या स्थानानुसार ३-७ दिवसांत डिलिव्हरी.',
  },
  {
    q: 'Can pregnant or breastfeeding women use these products?',
    qMr: 'गर्भवती किंवा स्तनपान करणाऱ्या महिला हे उत्पादने वापरू शकतात का?',
    a: 'While our products are made from natural herbs, we recommend consulting your doctor before using any new hair care product during pregnancy or breastfeeding.',
    aMr: 'आमची उत्पादने नैसर्गिक आहेत, परंतु गर्भधारणा किंवा स्तनपानाच्या काळात कोणतेही नवीन उत्पादन वापरण्यापूर्वी डॉक्टरांचा सल्ला घ्या.',
  },
  {
    q: 'Is the Hair Oil suitable for all hair types?',
    qMr: 'हेअर ऑइल सर्व प्रकारच्या केसांसाठी योग्य आहे का?',
    a: 'Yes, Arohi Herbal Hair Oil is suitable for all hair types — straight, wavy, curly, oily, dry, or color-treated hair. The herbal formula adapts to your hair\'s natural needs.',
    aMr: 'हो, आरोही हर्बल हेअर ऑइल सर्व प्रकारच्या केसांसाठी योग्य आहे.',
  },
  {
    q: 'Do you ship outside Maharashtra?',
    qMr: 'महाराष्ट्राबाहेर शिपिंग होते का?',
    a: 'Yes! We ship all across India. Additional shipping charges may apply for some locations. Contact us on WhatsApp to confirm delivery to your pincode.',
    aMr: 'हो! आम्ही संपूर्ण भारतात शिप करतो. तुमच्या पिनकोडवर डिलिव्हरीची पुष्टीसाठी WhatsApp वर संपर्क करा.',
  },
  {
    q: 'Can I return a product if I\'m not satisfied?',
    qMr: 'मी समाधानी नसल्यास उत्पादन परत करू शकतो का?',
    a: 'We have a return policy for damaged or incorrect products. Please refer to our Return & Refund Policy page or contact us on WhatsApp within 7 days of receiving your order.',
    aMr: 'खराब किंवा चुकीच्या उत्पादनांसाठी आमचे परत करण्याचे धोरण आहे. ऑर्डर मिळाल्यापासून ७ दिवसांच्या आत WhatsApp वर संपर्क करा.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">❓ Help Center</span>
          <h1>Frequently Asked Questions</h1>
          <div className="divider-gold" />
          <p>
            All your questions about Arohi Hair Care products, ordering and delivery answered.<br />
            <span style={{ fontFamily: 'var(--font-marathi)' }}>वारंवार विचारले जाणारे प्रश्न</span>
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className={`faq-question${openIndex === i ? ' open' : ''}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div>
                    <div>{faq.q}</div>
                    <div style={{ fontFamily: 'var(--font-marathi)', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.2rem', fontWeight: 400 }}>
                      {faq.qMr}
                    </div>
                  </div>
                  <span className="faq-icon">+</span>
                </button>
                <div className={`faq-answer${openIndex === i ? ' open' : ''}`}>
                  <p style={{ color: 'var(--color-text)', marginBottom: '0.5rem' }}>{faq.a}</p>
                  <p style={{ fontFamily: 'var(--font-marathi)', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>{faq.aMr}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="faq-cta-box">
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>💬</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Still have questions?</h3>
            <p style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-marathi)' }}>
              आणखी प्रश्न असल्यास थेट आमच्याशी WhatsApp वर संपर्क करा!
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=नमस्कार! माझ्या मनात Arohi Hair Care बद्दल काही प्रश्न आहेत. कृपया मदत करा.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
