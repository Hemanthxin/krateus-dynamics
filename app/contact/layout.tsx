import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Krateus Dynamic Solutions \u2014 email us directly or send a message through our contact form.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
