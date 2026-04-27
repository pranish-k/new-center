"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/mission", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/mentors", label: "Mentors" },
  { href: "/leadership", label: "Leadership" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center border-b border-[#e2e0dc] bg-white">
      <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="wordmark text-[10px] tracking-[0.18em] text-[#6b6b6b]">
            Columbia University · Teachers College
          </span>
          <span className="wordmark wordmark--bold mt-0.5 text-[15px] text-[#002868]">
            Center for Technology Management
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(`${l.href}/`);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`border-b-2 border-transparent pb-0.5 text-sm text-[#111111] transition-colors hover:text-[#002868] ${
                  active ? "border-[#b9975b]" : ""
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="border border-[#002868] bg-[#002868] px-4 py-1.5 text-sm font-medium text-white transition-colors hover:border-[#001a4d] hover:bg-[#001a4d]"
          >
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden text-[#111111]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
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

      <div
        className={`fixed inset-0 top-16 z-40 flex flex-col gap-8 bg-white px-8 pt-12 md:hidden
          transition-[opacity,visibility] duration-[250ms] ease-out
          ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-3xl font-serif text-[#111111]"
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="w-fit border border-[#002868] bg-[#002868] px-5 py-2 text-xl font-semibold text-white"
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
