import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

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
    href: "/programs/ms-strategic-technology-leadership",
    image: "/session-classroom.jpg",
  },
  {
    tag: "Executive Program",
    title: "Digital Leadership Experience",
    description:
      "A flexible 6–12 month program for executives and board members navigating complex digital transformation initiatives.",
    href: "/programs/digital-leadership",
    image: "/program-mentoring.jpg",
  },
  {
    tag: "Workshop",
    title: "AI & Machine Learning Leadership",
    description:
      "A 3.5-day immersive workshop helping senior leaders build practical AI/ML implementation roadmaps for their organizations.",
    href: "/programs/ai-ml-workshop",
    image: "/program-tech.jpg",
  },
  {
    tag: "Certificates",
    title: "Topic-Focused Certificates",
    description:
      "Deep-dive programs in Blockchain, Cybersecurity, the Experience Economy, Metaverse, Smart Cities, and more.",
    href: "/programs",
    image: "/course-cybersecurity.jpg",
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

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="mb-8">
      <span className="block w-6 h-0.5 bg-[#b9975b] mb-3" />
      <p className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] font-medium">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero — not wrapped in FadeIn (above the fold) */}
      <section className="bg-[#0a1628] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 z-10">
            <span className="block w-6 h-0.5 bg-[#b9975b] mb-3" />
            <p className="text-[11px] uppercase tracking-[0.15em] text-blue-300/60 mb-6">
              Columbia University · Teachers College
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-normal leading-[1.1] tracking-tight max-w-xl">
              Center for Technology Management and Digital Leadership
            </h1>
            <p className="mt-6 text-[15px] text-blue-200/70 max-w-lg leading-[1.7]">
              Preparing experienced leaders to meet disruption with agility,
              drive digital transformation, and shape the future of work.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="bg-white text-[#002868] px-7 py-3 text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Programs
              </Link>
              <Link
                href="/leadership"
                className="border border-white/40 text-white px-7 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Meet Dr. Langer
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-[460px] md:-mr-6">
            <Image
              src="/art-langer-collage.jpg"
              alt="Dr. Art Langer teaching and presenting"
              width={460}
              height={340}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Transition banner — not wrapped (just below hero, visible immediately) */}
      <section className="border-b border-[#e2e0dc]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-start gap-4">
          <span className="text-[#b9975b] font-bold text-base mt-0.5 flex-shrink-0">→</span>
          <p className="text-sm text-[#6b6b6b] leading-relaxed">
            <strong className="text-[#111111]">In transition.</strong> The Center is moving from Northeastern University to{" "}
            <strong className="text-[#111111]">Columbia University Teachers College</strong> under the continued leadership of Dr. Art Langer.
          </p>
        </div>
      </section>

      {/* Stats — staggered FadeIn per item */}
      <FadeIn className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 80}>
              <div className="text-center">
                <p className="text-4xl font-serif font-normal text-[#002868]">{s.value}</p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] mt-2">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>

      <hr className="border-0 border-t border-[#e2e0dc] max-w-6xl mx-auto" />

      {/* Programs — image-first cards with hover translate */}
      <FadeIn className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <Eyebrow label="What we offer" />
            <h2 className="text-3xl font-serif font-normal text-[#111111] leading-tight -mt-4">Programs</h2>
          </div>
          <Link href="/programs" className="group hidden md:flex items-center gap-1 text-sm text-[#002868] underline hover:no-underline">
            View all
            <span className="inline-block transition-transform duration-[200ms] ease-out group-hover:translate-x-[3px]">→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <FadeIn key={p.title} delay={i * 60}>
              <Link
                href={p.href}
                className="group border border-[#e2e0dc] overflow-hidden flex flex-col
                  hover:border-[#002868] hover:-translate-y-0.5
                  transition-[border-color,transform] duration-[250ms] ease-out"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#b9975b] mb-2">{p.tag}</p>
                  <h3 className="text-[18px] font-semibold text-[#111111] leading-snug mb-3 group-hover:text-[#002868] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[15px] text-[#6b6b6b] leading-[1.7] flex-1">{p.description}</p>
                  <p className="text-sm font-semibold text-[#002868] mt-5 flex items-center gap-1">
                    Learn more
                    <span className="inline-block transition-transform duration-[200ms] ease-out group-hover:translate-x-[3px]">→</span>
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </FadeIn>

      {/* Pull quote */}
      <FadeIn className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-shrink-0">
            <Image
              src="/art-langer.jpg"
              alt="Dr. Art Langer"
              width={180}
              height={180}
              className="object-cover w-36 h-36 md:w-44 md:h-44"
            />
          </div>
          <div>
            <blockquote className="border-l-[3px] border-[#b9975b] pl-6">
              <p className="font-serif italic text-xl md:text-2xl text-[#111111] leading-[1.5] max-w-2xl">
                "By harnessing the power of hands-on experience and tailored mentorship,
                the Center empowers its network of learners to practice agility in a
                tech-driven world."
              </p>
              <p className="mt-5 text-[13px] text-[#6b6b6b]">
                — <strong className="text-[#111111]">Dr. Arthur M. Langer</strong>, Director &amp; Professor of Practice
              </p>
            </blockquote>
            <div className="pl-6 mt-5">
              <Link href="/leadership" className="group flex items-center gap-1 text-sm text-[#002868] underline hover:no-underline w-fit">
                About Dr. Langer
                <span className="inline-block transition-transform duration-[200ms] ease-out group-hover:translate-x-[3px]">→</span>
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>

      <hr className="border-0 border-t border-[#e2e0dc] max-w-6xl mx-auto" />

      {/* Testimonials */}
      <FadeIn className="max-w-6xl mx-auto px-6 py-20">
        <Eyebrow label="Student voices" />
        <h2 className="text-3xl font-serif font-normal text-[#111111] leading-tight mb-12 -mt-4">What our graduates say</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 80}>
              <blockquote className="border-l-[3px] border-[#b9975b] pl-6">
                <p className="font-serif italic text-xl text-[#111111] leading-[1.5]">"{t.quote}"</p>
                <p className="mt-4 text-[13px] text-[#6b6b6b]">
                  — <strong className="text-[#111111]">{t.name}</strong>, {t.role}
                </p>
              </blockquote>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/experience" className="group flex items-center gap-1 text-sm text-[#002868] underline hover:no-underline w-fit">
            Read student stories
            <span className="inline-block transition-transform duration-[200ms] ease-out group-hover:translate-x-[3px]">→</span>
          </Link>
        </div>
      </FadeIn>

      {/* Partner logos */}
      <FadeIn className="border-t border-[#e2e0dc] py-14">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] text-center mb-10">
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
                className="object-contain grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 h-10 w-auto"
              />
            ))}
          </div>
        </div>
      </FadeIn>

      {/* WOS Partnership */}
      <FadeIn className="max-w-6xl mx-auto px-6 py-20">
        <div className="border border-[#e2e0dc] p-10 md:p-14 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <Eyebrow label="Strategic Partnership" />
            <h2 className="text-3xl font-serif font-normal text-[#111111] leading-tight mb-5 -mt-4">
              Workforce Opportunity Services
            </h2>
            <p className="text-[15px] text-[#6b6b6b] leading-[1.7] max-w-xl mb-4">
              Founded by Dr. Langer, WOS is a nonprofit that identifies talent from underserved
              communities — including veterans — and prepares them for high-impact careers in
              technology. WOS acts as an outsourcing partner for major corporations, placing
              trained professionals as software engineers, analysts, and more.
            </p>
            <p className="text-[15px] text-[#6b6b6b] leading-[1.7] max-w-xl">
              WOS will partner with the new Columbia department, creating a unique pipeline
              that connects executive education with workforce development.
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
            <span className="text-xs text-[#6b6b6b] border border-dashed border-[#e2e0dc] px-4 py-2 text-center">
              Partnership details coming soon
            </span>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
