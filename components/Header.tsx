"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "./icons";

const services = [
  { label: "Web Development & SEO", href: "/services/web-development" },
  { label: "Cloud Computing", href: "/services/cloud-computing" },
  { label: "Cyber Security", href: "/services/cyber-security" },
  { label: "Application Development", href: "/services/application-development" },
  { label: "IT Consulting", href: "/services/it-consulting" },
];

const technologies = [
  { label: "Machine Learning", href: "/technologies/machine-learning" },
  { label: "Embedded Systems", href: "/technologies/embedded-systems" },
  { label: "Testing", href: "/technologies/testing" },
  { label: "Full Stack Technology", href: "/technologies/full-stack" },
  { label: "Cloud DevOps", href: "/technologies/cloud-devops" },
];

const linkClass = "text-sm font-medium text-muted-foreground transition-colors hover:text-primary";

function Dropdown({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link
        href={href}
        aria-expanded={open}
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </Link>
      {open && (
        <div className="absolute left-0 top-full z-50 pt-3">
          <div className="min-w-56 rounded-xl border border-border bg-white p-2 shadow-lg">
            {items.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {i.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMobile(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled || mobile ? "border-b border-border bg-white/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={close}>
          <div className="flex h-8 w-9 items-center justify-center rounded-lg bg-primary">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Krateus Dynamic Logo" className="h-9 w-auto object-contain" />
          </div>
          <span className="font-[var(--font-jakarta)] text-base font-bold tracking-tight text-foreground sm:text-lg">
            Krateus<span className="text-primary"> Dynamic</span>
          </span>
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          <Dropdown label="Services" href="/#services" items={services} />
          <Dropdown label="Technologies" href="/#technologies" items={technologies} />
          <Link href="/about" className={linkClass}>About</Link>
          <Link href="/contact" className={linkClass}>Contact</Link>
        </div>
        <button className="lg:hidden" aria-label="Toggle menu" onClick={() => setMobile((v) => !v)}>
          {mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {mobile && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-border px-6 pb-6 lg:hidden">
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Services</p>
          {services.map((i) => (
            <Link key={i.href} href={i.href} onClick={close} className="block py-2 text-sm text-foreground">
              {i.label}
            </Link>
          ))}
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Technologies</p>
          {technologies.map((i) => (
            <Link key={i.href} href={i.href} onClick={close} className="block py-2 text-sm text-foreground">
              {i.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col border-t border-border pt-2">
            <Link href="/about" onClick={close} className="py-2 text-sm font-medium text-foreground">About</Link>
            <Link href="/contact" onClick={close} className="py-2 text-sm font-medium text-foreground">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
