"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/mission", label: "About" },
  { href: "/programs", label: "Programs" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white h-16 border-b border-[#e2e0dc] flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b]">
            Columbia University Teachers College
          </span>
          <span className="text-[15px] font-semibold text-[#002868]">
            Center for Technology Management
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-sans text-[#111111] hover:text-[#002868] transition-colors pb-0.5 ${
                  active ? "border-b-2 border-[#b9975b]" : ""
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="text-sm font-sans font-medium text-[#002868] border border-[#002868] px-4 py-1.5 hover:bg-[#002868] hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#111111]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 flex flex-col px-8 pt-12 gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-2xl font-serif text-[#002868]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-2xl font-serif text-[#002868]"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
