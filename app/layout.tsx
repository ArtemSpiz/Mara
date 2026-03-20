import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import { ceraPro, instrumentSerif, satoshi } from "./fonts";
import Footer from "./Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
  ),
  title: {
    default: "Mara",
    template: "%s | Mara",
  },
  description: "Mara",
  openGraph: {
    type: "website",
    siteName: "Mara",
    locale: "en_US",
    title: "Mara",
    description: "Mara",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${ceraPro.variable} ${satoshi.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
