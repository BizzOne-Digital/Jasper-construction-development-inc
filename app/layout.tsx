import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Lora, Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";
import "./globals.css";
const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-heading",
  display: "swap",
});
const body = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});
const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Jasper Construction | Home Renovations in Brampton & the GTA",
    template: "%s | Jasper Construction",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [
      {
        url: "/images/jasper/social-preview.webp",
        width: 1200,
        height: 630,
        alt: "Residential kitchen renovation inspiration",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = {
  themeColor: "#252623",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    url: site.url,
    telephone: "+1-647-913-2300",
    email: site.email,
    areaServed: [
      { "@type": "City", name: "Brampton" },
      { "@type": "Place", name: "Greater Toronto Area" },
    ],
    description: site.description,
  };
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={heading.variable + " " + body.variable + " " + sans.variable}
      >
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
