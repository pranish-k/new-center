import Link from "next/link";

const programs = [
  {
    title: "MS in Strategic Technology Leadership",
    description:
      "A 30-credit master's program at the D'Amore-McKim School of Business, combining residencies, mentorship, and an applied capstone project.",
    href: "/programs",
  },
  {
    title: "Digital Leadership Experience",
    description:
      "A flexible 6–12 month program for executives, board members, and entrepreneurs navigating complex digital transformation.",
    href: "/programs",
  },
  {
    title: "AI & Machine Learning Leadership Workshop",
    description:
      "An immersive 3.5-day workshop helping senior leaders understand AI/ML methodologies and build implementation roadmaps.",
    href: "/programs",
  },
  {
    title: "Executive Certificates",
    description:
      "Focused programs in Blockchain, Cybersecurity, Database Innovation, the Experience Economy, and more.",
    href: "/programs",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#002868] text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-widest text-blue-300 mb-4 font-sans">
            Columbia University · Teachers College
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight max-w-2xl">
            Center for Technology Management and Digital Leadership
          </h1>
          <p className="mt-6 text-lg text-blue-100 max-w-xl leading-relaxed font-sans font-light">
            Through innovative courses, workshops, and rigorous degree programs,
            we create agile leaders ready to meet disruption with confidence.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 font-sans">
            <Link
              href="/programs"
              className="bg-white text-[#002868] px-6 py-3 text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Programs
            </Link>
            <Link
              href="/mission"
              className="border border-white text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Transition notice */}
      <section className="bg-[#b9975b]/10 border-y border-[#b9975b]/30">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-start gap-4">
          <span className="text-[#b9975b] text-xl mt-0.5">→</span>
          <p className="text-sm text-gray-700 font-sans leading-relaxed">
            <strong className="text-gray-900">In transition.</strong> The Center
            for Technology Management and Digital Leadership is moving from
            Northeastern University to Columbia University Teachers College,
            under the continued leadership of{" "}
            <Link href="/programs#art-langer" className="underline text-[#002868]">
              Dr. Art Langer
            </Link>
            . This site represents the prototype of the new Columbia department.
          </p>
        </div>
      </section>

      {/* Programs preview */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold text-[#002868] mb-2">Programs</h2>
        <p className="text-gray-500 font-sans text-sm mb-10">
          Designed for experienced professionals navigating the digital economy.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="border border-gray-200 p-6 hover:border-[#002868] hover:shadow-sm transition-all group"
            >
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#002868] mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 font-sans leading-relaxed">
                {p.description}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/programs"
            className="text-sm font-sans text-[#002868] underline hover:no-underline"
          >
            View all programs →
          </Link>
        </div>
      </section>

      {/* WOS placeholder */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-3">
              Partnership
            </p>
            <h2 className="text-2xl font-semibold text-[#002868] mb-3">
              Workforce Opportunity Services
            </h2>
            <p className="text-sm text-gray-600 font-sans leading-relaxed max-w-lg">
              Dr. Langer is also the founder of Workforce Opportunity Services
              (WOS), a nonprofit that prepares talent from underserved
              communities — including veterans — for careers in technology. WOS
              will partner with the new Columbia department; details of the
              integration are being finalized.
            </p>
          </div>
          <div className="flex-shrink-0 border border-dashed border-gray-300 p-6 text-center w-56">
            <p className="text-xs text-gray-400 font-sans">
              WOS partnership details coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <blockquote className="border-l-4 border-[#b9975b] pl-8 max-w-2xl">
          <p className="text-xl text-gray-800 leading-relaxed italic">
            "By harnessing the power of hands-on experience and tailored
            mentorship, the Center empowers its network of learners to practice
            agility in a tech-driven world."
          </p>
          <footer className="mt-4 text-sm text-gray-500 font-sans not-italic">
            — Dr. Art Langer, Director
          </footer>
        </blockquote>
      </section>
    </>
  );
}
