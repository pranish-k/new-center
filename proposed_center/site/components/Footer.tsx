import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-[#002868]">
            Center for Technology Management
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Columbia University Teachers College
          </p>
          <p className="text-xs text-gray-400 mt-3">
            Transitioning from Northeastern University · Established by Dr. Art Langer
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm font-sans text-gray-600">
          <Link href="/" className="hover:text-[#002868]">Home</Link>
          <Link href="/mission" className="hover:text-[#002868]">Mission & Vision</Link>
          <Link href="/programs" className="hover:text-[#002868]">Programs</Link>
          <Link href="/contact" className="hover:text-[#002868]">Contact</Link>
        </nav>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-400 font-sans">
        © {new Date().getFullYear()} Center for Technology Management, Columbia University Teachers College.
        Prototype — content sourced from TMDL at Northeastern University.
      </div>
    </footer>
  );
}
