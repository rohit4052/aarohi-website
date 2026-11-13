import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://aarohi-website.pages.dev'),
  title: {
    default: 'Arohi Hair Care – Healthy Hair... Happy You!',
    template: '%s | Arohi Hair Care',
  },
  description:
    'Arohi Hair Care – Premium herbal hair care products made from traditional Indian botanicals. नैसर्गिक घटकांसह केसांची नियमित निगा राखा. Order via WhatsApp.',
  keywords: [
    'Arohi Hair Care',
    'herbal hair oil',
    'hair care marathi',
    'ayurvedic hair products',
    'natural hair shampoo',
    'hair fall solution',
    'भृंगराज तेल',
    'आवळा शॅम्पू',
  ],
  openGraph: {
    title: 'Arohi Hair Care – Healthy Hair... Happy You!',
    description: 'Premium herbal hair care products from Solapur, Maharashtra.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.jpg" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
