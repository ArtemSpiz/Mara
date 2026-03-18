import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Header";
import { ceraPro, satoshi } from "./fonts";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Mara",
  description: "Mara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${ceraPro.variable} ${satoshi.variable}   antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
