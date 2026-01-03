import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import type React from 'react';
import Header from './components/common/header';
import Footer from './components/common/footer';
import WhatsAppFloating from '../components/WhatsAppFloating';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

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
          defaultTheme='system'
          enableSystem
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
