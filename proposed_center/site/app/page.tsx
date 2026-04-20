import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "230+", label: "Industry Mentors" },
  { value: "15+", label: "Countries Represented" },
  { value: "300+", label: "Student Projects Mentored" },
  { value: "25+", label: "Years of Leadership" },
];

const programs = [
  {
    tag: "Master's Degree",
    title: "MS in Strategic Technology Leadership",
    description:
      "A 30-credit hybrid program combining immersive on-ground residencies, one-on-one industry mentoring, and a 6-credit applied capstone project.",
    href: "/programs",
  },
  {
    tag: "Executive Program",
    title: "Digital Leadership Experience",
    description:
      "A flexible 6–12 month program for executives and board members navigating complex digital transformation initiatives.",
    href: "/programs",
  },
  {
    tag: "Workshop",
    title: "AI & Machine Learning Leadership",
    description:
      "A 3.5-day immersive workshop helping senior leaders build practical AI/ML implementation roadmaps for their organizations.",
    href: "/programs",
  },
  {
    tag: "Certificates",
    title: "Topic-Focused Certificates",
    description:
      "Deep-dive programs in Blockchain, Cybersecurity, the Experience Economy, Metaverse, Smart Cities, and more.",
    href: "/programs",
  },
];

const partnerLogos = [
  { src: "/logo-microsoft.png", alt: "Microsoft" },
  { src: "/logo-ibm.png", alt: "IBM" },
  { src: "/logo-jpmorgan.png", alt: "JPMorgan Chase" },
  { src: "/logo-goldman.png", alt: "Goldman Sachs" },
  { src: "/logo-deloitte.png", alt: "Deloitte" },
  { src: "/logo-boeing.png", alt: "Boeing" },
  { src: "/logo-amex.png", alt: "American Express" },
  { src: "/logo-aws.png", alt: "Amazon Web Services" },
  { src: "/logo-xerox.png", alt: "Xerox" },
];

const testimonials = [
  {
    quote:
      "I got really lucky when I found this program. I realized that I actually had stronger ambitions to move up the ladder.",
    name: "Lee D.",
    role: "MS Graduate, Class of 2025",
  },
  {
    quote:
      "I just wanted to say how much I appreciate the experience. Everything I learned, the perspectives I gained, and the connections I built have been invaluable.",
    name: "Boris F.",
    role: "MS Graduate, Class of 2025",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#002868] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 z-10">
            <p className="text-xs uppercase tracking-widest text-blue-300 mb-4 font-sans">
              Columbia University · Teachers College
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight max-w-xl">
              Center for Technology Management and Digital Leadership
            </h1>
            <p className="mt-6 text-lg text-blue-100 max-w-lg leading-relaxed font-sans font-light">
              Preparing experienced leaders to meet disruption with agility,
              drive digital transformation, and shape the future of work.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 font-sans">
              <Link
                href="/programs"
                className="bg-white text-[#002868] px-7 py-3 text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Programs
              </Link>
              <Link
                href="/leadership"
                className="border border-white/50 text-white px-7 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Meet Dr. Langer
              </Link>
            </div>
          </div>
          {/* Art Langer collage */}
          <div className="flex-shrink-0 w-full md:w-[420px] relative">
            <Image
              src="/art-langer-collage.jpg"
              alt="Dr. Art Langer teaching and presenting"
              width={420}
              height={236}
              className="w-full rounded-sm shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Transition banner */}
      <section className="bg-[#b9975b]/10 border-b border-[#b9975b]/30">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center gap-3">
          <span className="text-[#b9975b] font-bold text-lg">→</span>
          <p className="text-sm text-gray-700 font-sans leading-relaxed">
            <strong className="text-gray-900">In transition.</strong> The Center is moving from Northeastern University to{" "}
            <strong className="text-gray-900">Columbia University Teachers College</strong> under
            the continued leadership of Dr. Art Langer. This site represents the new Columbia department.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-semibold text-[#002868]">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-2">What we offer</p>
            <h2 className="text-2xl font-semibold text-[#002868]">Programs</h2>
          </div>
          <Link href="/programs" className="text-sm font-sans text-[#002868] underline hover:no-underline hidden md:block">
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group border border-gray-200 p-7 hover:border-[#002868] hover:shadow-md transition-all"
            >
              <span className="text-xs uppercase tracking-widest text-[#b9975b] font-sans">{p.tag}</span>
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#002868] mt-2 mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500 font-sans leading-relaxed">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote + headshot */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <Image
              src="/art-langer.jpg"
              alt="Dr. Art Langer"
              width={200}
              height={200}
              className="rounded-full object-cover w-44 h-44 shadow-lg ring-4 ring-white"
            />
          </div>
          <div>
            <blockquote className="text-xl text-gray-800 leading-relaxed italic max-w-2xl border-l-4 border-[#b9975b] pl-8">
              "By harnessing the power of hands-on experience and tailored mentorship,
              the Center empowers its network of learners to practice agility in a
              tech-driven world."
            </blockquote>
            <p className="mt-5 text-sm text-gray-500 font-sans pl-8">
              — <strong className="text-gray-700">Dr. Arthur M. Langer</strong>, Director &amp; Professor of Practice
            </p>
            <div className="pl-8 mt-4">
              <Link href="/leadership" className="text-sm font-sans text-[#002868] underline hover:no-underline">
                About Dr. Langer →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-2">Student voices</p>
        <h2 className="text-2xl font-semibold text-[#002868] mb-10">What our graduates say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-gray-200 p-8">
              <p className="text-gray-700 italic leading-relaxed mb-6">"{t.quote}"</p>
              <p className="text-sm font-semibold text-gray-900 font-sans">{t.name}</p>
              <p className="text-xs text-gray-400 font-sans">{t.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/experience" className="text-sm font-sans text-[#002868] underline hover:no-underline">
            Read student stories →
          </Link>
        </div>
      </section>

      {/* Partner logos */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans text-center mb-10">
            Our students and mentors come from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerLogos.map((l) => (
              <Image
                key={l.alt}
                src={l.src}
                alt={l.alt}
                width={110}
                height={50}
                className="object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 h-10 w-auto"
              />
            ))}
          </div>
        </div>
      </section>

      {/* WOS Partnership */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="border border-gray-200 p-10 md:p-14 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-3">Strategic Partnership</p>
            <h2 className="text-2xl font-semibold text-[#002868] mb-4">
              Workforce Opportunity Services
            </h2>
            <p className="text-sm text-gray-600 font-sans leading-relaxed max-w-xl mb-4">
              Founded by Dr. Langer, WOS is a nonprofit that identifies talent from underserved
              communities — including veterans — and prepares them for high-impact careers in
              technology. WOS acts as an outsourcing partner for major corporations, placing
              trained professionals as software engineers, analysts, and more.
            </p>
            <p className="text-sm text-gray-600 font-sans leading-relaxed max-w-xl">
              WOS will partner with the new Columbia department, creating a unique pipeline
              that connects executive education with workforce development. Details of the
              integration are being finalized.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <Image
              src="/wos-logo.png"
              alt="Workforce Opportunity Services"
              width={180}
              height={80}
              className="object-contain"
            />
            <span className="text-xs font-sans text-gray-400 border border-dashed border-gray-300 px-4 py-2 text-center">
              Partnership details coming soon
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
