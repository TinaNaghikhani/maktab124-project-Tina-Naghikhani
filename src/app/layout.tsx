import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from 'next/font/google';

import "./globals.css";
import Header from "@/components/shared/header/page";
import Footer from "@/components/shared/footer/page";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const playfair = Playfair_Display({
  subsets: ['latin'], // زیرمجموعه‌های زبانی (مثل انگلیسی)
  weight: ['400', '700'], // وزن‌های مختلف فونت (Regular و Bold)
  variable: '--font-playfair', // متغیر CSS برای استفاده در کل پروژه
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
        className={`${playfair.variable} font-sans antialiased flex flex-col min-h-screen`} style={{ background: '#FEFAE0' }}
      >
        <main className="flex-grow"> 
        {children}
        </main>
      </body>
    </html>
  );
}
