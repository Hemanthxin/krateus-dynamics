import type { Metadata } from "next";

/** Canonical origin. Set NEXT_PUBLIC_SITE_URL in Vercel when a custom domain is attached. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.krateusdynamics.com").replace(/\/$/, "");

export const siteName = "Krateus Dynamics";
export const ogImage = { url: "/og-image.png", width: 1200, height: 630, alt: "Krateus Dynamics Banner" };

export const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/careers", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/services/web-development", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/cloud-computing", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/cyber-security", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/application-development", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/it-consulting", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/technologies/machine-learning", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/technologies/embedded-systems", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/technologies/testing", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/technologies/full-stack", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/technologies/cloud-devops", priority: 0.7, changeFrequency: "monthly" as const },
];

/** Per-page metadata with its own canonical, Open Graph and Twitter card (these replace the layout's, so they repeat the image). */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName,
      locale: "en_IN",
      type: "website",
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage.url] },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteUrl}${it.path}`,
    })),
  };
}

export function serviceLd({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteUrl}${path}`,
    provider: { "@type": "Organization", name: siteName, url: siteUrl },
    areaServed: ["Mulbagal", "Bengaluru", "Karnataka", "India"],
  };
}
