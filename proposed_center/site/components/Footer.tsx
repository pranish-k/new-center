import Link from "next/link";
import Image from "next/image";
import { CENTER_FULL, INSTITUTION, PARENT_INSTITUTE } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="border-t border-[#e2e0dc] bg-[#f7f6f3] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <p className="wordmark text-[10px] tracking-[0.18em] text-[#6b6b6b] mb-1">Teachers College · Columbia University</p>
          <p className="text-[14px] leading-[1.35] text-[#002868] font-medium max-w-xs">
            {CENTER_FULL}
          </p>
          <p className="text-xs text-[#6b6b6b] mt-4 leading-relaxed">
            Part of the {PARENT_INSTITUTE}.<br />
            Established by Dr. Art Langer.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Image
              src="/wos-logo.png"
              alt="Workforce Opportunity Services"
              width={80}
              height={35}
              className="object-contain opacity-60"
            />
            <span className="text-xs text-[#6b6b6b]">Partner Organization</span>
          </div>
        </div>

        <nav className="flex flex-col gap-2.5 text-sm text-[#6b6b6b]">
          <p className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] mb-1">Site</p>
          <Link href="/mission" className="hover:text-[#002868] transition-colors">About</Link>
          <Link href="/programs" className="hover:text-[#002868] transition-colors">Programs</Link>
          <Link href="/mentors" className="hover:text-[#002868] transition-colors">Mentors</Link>
          <Link href="/research" className="hover:text-[#002868] transition-colors">Research</Link>
          <Link href="/contact" className="hover:text-[#002868] transition-colors">Contact</Link>
        </nav>

        <nav className="flex flex-col gap-2.5 text-sm text-[#6b6b6b]">
          <p className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] mb-1">Programs</p>
          <Link href="/programs" className="hover:text-[#002868] transition-colors">All Programs</Link>
          <Link href="/programs#executive" className="hover:text-[#002868] transition-colors">Executive Programs</Link>
          <Link href="/contact" className="hover:text-[#002868] transition-colors">Contact Us</Link>
        </nav>
      </div>

      <div className="border-t border-[#e2e0dc] py-4 text-center text-xs text-[#6b6b6b]">
        &copy; {new Date().getFullYear()} {CENTER_FULL} — {INSTITUTION}.
      </div>
    </footer>
  );
}
