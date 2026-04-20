import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <p className="text-sm font-semibold text-[#002868]">Center for Technology Management</p>
          <p className="text-xs text-gray-500 mt-1">Columbia University Teachers College</p>
          <p className="text-xs text-gray-400 mt-3 leading-relaxed">
            Transitioning from Northeastern University.<br />
            Established by Dr. Art Langer.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Image
              src="/wos-logo.png"
              alt="Workforce Opportunity Services"
              width={80}
              height={35}
              className="object-contain opacity-70"
            />
            <span className="text-xs text-gray-400 font-sans">Partner Organization</span>
          </div>
        </div>
        <nav className="flex flex-col gap-2 text-sm font-sans text-gray-600">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Site</p>
          <Link href="/" className="hover:text-[#002868]">Home</Link>
          <Link href="/mission" className="hover:text-[#002868]">Mission & Vision</Link>
          <Link href="/leadership" className="hover:text-[#002868]">Leadership</Link>
          <Link href="/experience" className="hover:text-[#002868]">Student Experience</Link>
        </nav>
        <nav className="flex flex-col gap-2 text-sm font-sans text-gray-600">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Programs</p>
          <Link href="/programs" className="hover:text-[#002868]">All Programs</Link>
          <Link href="/programs#ms" className="hover:text-[#002868]">MS Degree</Link>
          <Link href="/programs#executive" className="hover:text-[#002868]">Executive Programs</Link>
          <Link href="/contact" className="hover:text-[#002868]">Contact Us</Link>
        </nav>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-400 font-sans">
        © {new Date().getFullYear()} Center for Technology Management, Columbia University Teachers College.
        Prototype — content sourced from TMDL at Northeastern University.
      </div>
    </footer>
  );
}
