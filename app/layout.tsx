import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import type React from 'react';
import type { Metadata } from 'next';
import Header from './components/common/header';
import Footer from './components/common/footer';
import WhatsAppFloating from '../components/WhatsAppFloating';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://oriums.com'),
  title: {
    default: 'Oriums — Digital Product & Software Agency',
    template: '%s | Oriums',
  },
  description:
    'Oriums crafts digital products and software that help businesses grow — product design, engineering, and strategy.',
  keywords: [
    'Oriums',
    'digital product',
    'software agency',
    'design',
    'engineering',
  ],
  authors: [{ name: 'Oriums', url: 'https://oriums.com' }],
  creator: 'Oriums',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oriums.com',
    title: 'Oriums — Digital Product & Software Agency',
    description:
      'Oriums crafts digital products and software that help businesses grow — product design, engineering, and strategy.',
    siteName: 'Oriums',
    images: [
      {
        url: '/placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'Oriums Open Graph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oriums — Digital Product & Software Agency',
    description:
      'Oriums crafts digital products and software that help businesses grow — product design, engineering, and strategy.',
    images: ['/placeholder.jpg'],
    creator: '@oriums',
  },
  icons: {
    icon: '/placeholder-logo.png',
    shortcut: '/placeholder-logo.png',
    apple: '/placeholder-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={spaceGrotesk.variable} suppressHydrationWarning>
      <body className='font-sans antialiased'>
        <ThemeProvider
          attribute='class'
          forcedTheme='dark'
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloating />
        </ThemeProvider>
      </body>
    </html>
  );
}
