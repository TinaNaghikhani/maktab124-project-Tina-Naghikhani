import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';
import { ToastContainer } from "react-toastify";
import { CartProvider } from '@/context/CartContext';

const BZiba = localFont({
  src: '../../public/font/B\ Ziba_0.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BookTin",
  description: "فروشگاه بوکتین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${BZiba.className} font-sans antialiased flex flex-col min-h-screen`} style={{ background: '#FEFAE0' }}
      >
        <main className="flex-grow">
          <CartProvider>
            {children}
          </CartProvider>
        </main>
        <ToastContainer rtl position="top-right" />

      </body>
    </html>
  );
}
