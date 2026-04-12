import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gigamike Solutions – Michael Gerard Galon",
  description:
    "I build scalable web apps and AI-powered systems that grow businesses. Full-stack development, APIs, CRM, Stripe, AWS and AI solutions.",
  metadataBase: new URL("https://gigamike.net"),
  openGraph: {
    title: "Gigamike Solutions – Michael Gerard Galon",
    description:
      "Full-stack developer and software craftsman building scalable web apps and AI-powered systems that grow businesses.",
    url: "https://gigamike.net",
    siteName: "Gigamike Solutions",
    type: "website",
  },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/certifications", label: "Certifications" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/now", label: "Now" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
        <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-20">
          <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Gigamike Solutions logo"
                width={42}
                height={42}
                priority
                className="h-10 w-10 object-contain"
              />
              <span className="text-sm font-mono uppercase tracking-[0.25em] text-slate-700">
                Gigamike Solutions
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#255c8f] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-2 inline-flex items-center rounded-full border border-[#255c8f]/80 bg-[#255c8f] px-4 py-1.5 text-[11px] font-medium text-white shadow-sm hover:bg-[#1e4b77] hover:border-[#1e4b77] whitespace-nowrap transition-colors"
              >
                Let&apos;s build something
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
            {children}
          </div>
        </main>

        <footer className="border-t border-slate-200 bg-white/95">
          <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} Gigamike Solutions. All rights
              reserved.
            </p>
            <p className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#255c8f]" />
              I build scalable web apps and AI-powered systems that grow
              businesses.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
