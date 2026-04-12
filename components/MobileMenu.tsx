"use client";

import { useState } from "react";
import Link from "next/link";

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

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md hover:bg-slate-100 transition"
      >
        <span
          className={`block h-0.5 w-5 bg-slate-700 transition-all duration-200 origin-center ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-slate-700 transition-all duration-200 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-slate-700 transition-all duration-200 origin-center ${
            open ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 right-0 top-full border-t border-slate-200 bg-white shadow-md z-30">
          <nav className="mx-auto max-w-5xl px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-[#255c8f] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center rounded-full bg-[#255c8f] px-5 py-2 text-sm font-medium text-white hover:bg-[#1e4b77] transition"
            >
              Let&apos;s build something
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
