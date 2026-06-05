import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import PageBackground from "@/components/PageBackground";
import BackToTop from "@/components/BackToTop";
import { company } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: `${company.name} — ${company.tagline}`,
  description: company.description,
  keywords: [
    "digital marketing agency",
    "SEO",
    "paid advertising",
    "social media marketing",
    "branding",
    "web design",
    "marketing analytics",
  ],
  applicationName: company.name,
  authors: [{ name: company.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: company.name,
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
    url: company.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: company.url,
  description: company.description,
  email: company.email,
  telephone: company.phone,
  address: company.address,
  sameAs: Object.values(company.socials),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col bg-haze-50 font-sans text-ink-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <PageBackground />
        {/* Global film-grain texture */}
        <div className="pointer-events-none fixed inset-0 z-[1] bg-noise opacity-[0.04]" />
        <SmoothScroll />
        <CursorGlow />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
