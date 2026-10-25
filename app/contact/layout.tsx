import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ title: "Contact Us", description: "Contact Krateus Dynamic Solutions for web development, SEO, cloud and Agri-Tech software in Bengaluru and Mulbagal. We reply within 1\u20132 business days.", path: "/contact" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
