import type { Metadata, Viewport } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta-sans", display: "swap" });

const siteUrl = "https://krateus-dynamics.web.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Krateus Dynamics | Premium Software Agency",
    template: "%s | Krateus Dynamics",
  },
  description:
    "Premium software development & local SEO for businesses in Bengaluru and Mulbagal. We also engineer scalable farm-to-business Agri-Tech infrastructure.",
  authors: [{ name: "Krateus Dynamics" }],
  creator: "Krateus Dynamics",
  publisher: "Krateus Dynamics",
  keywords: [
    "Agri-Tech platform",
    "farm to business logistics",
    "B2B software agency",
    "custom web development",
    "SaaS development agency",
    "React and Next.js developers",
    "UI/UX design agency",
    "Krateus Dynamics",
    "Bengaluru web development",
    "Mulbagal website designers",
    "Karnataka local SEO services",
    "Google Maps pinning for businesses",
    "ecommerce website developers Bengaluru",
    "Mulbagal App Developers",
    "Premium Software Developers",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Krateus Dynamics | Delivering Tech Solutions",
    description: "We build and deliver premium software solutions for local businesses.",
    url: siteUrl,
    siteName: "Krateus Dynamics",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Krateus Dynamics Banner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krateus Dynamics",
    description: "Premium Software Solutions.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = { themeColor: "#10b981" };

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Krateus Dynamics",
    image: `${siteUrl}/favicon/android-chrome-512x512.png`,
    url: siteUrl,
    description:
      "Premium custom web development, SEO, and Google optimization for businesses in Bengaluru and Mulbagal.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mulbagal",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: ["Mulbagal", "Bengaluru", "Karnataka"],
    sameAs: [
      "https://www.linkedin.com/company/krateus-dynamics",
      "https://github.com/Krateus-Dynamics",
      "https://x.com/KrateusDynamics",
      "https://www.youtube.com/@KrateusDynamics",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Krateus Dynamics",
    alternateName: "Krateus Dynamic Solutions",
    url: siteUrl,
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable} font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <main className="min-h-screen bg-background">
          <Header />
          {children}
          <Footer />
          <ScrollReveal />
        </main>
      </body>
    </html>
  );
}
