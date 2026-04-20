import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Programs | Center for Technology Management",
};

const degreePrograms = [
  {
    title: "MS in Strategic Technology Leadership",
    tag: "Master's Degree",
    slug: "ms-strategic-technology-leadership",
    description:
      "A 30-credit MS in Management with Concentration in Strategic Technology Leadership. Combines 5 core courses, 9 elective credits, immersive on-ground residencies, and a 6-credit applied master's project.",
    highlights: [
      "For-credit immersive residencies",
      "One-on-one industry mentoring",
      "Online and in-person hybrid format",
      "Core areas: AI/ML, Digital Strategy, Cybersecurity, Analytics",
    ],
    image: "/session-classroom.jpg",
  },
];

const executivePrograms = [
  {
    title: "Digital Leadership Experience",
    tag: "Executive Program",
    slug: "digital-leadership",
    description:
      "A flexible 6–12 month program for executives, board members, entrepreneurs, and post-career professionals. Combines a customized learning plan, expert-led faculty sessions, one-on-one mentoring from 230+ industry leaders, and an applied capstone project.",
    highlights: [
      "Flexible 6, 9, or 12 month formats",
      "Personalized curriculum designed with academic directors",
      "Access to 230+ accomplished industry mentors",
      "Outcome-focused: digital business plans, social initiatives",
    ],
    image: "/program-mentoring.jpg",
  },
  {
    title: "AI & Machine Learning Leadership Workshop",
    tag: "Workshop",
    slug: "ai-ml-workshop",
    description:
      "A 3.5-day immersive workshop for executives and senior leaders exploring the strategic application of AI and ML. Participants leave with actionable plans for both their business unit and enterprise-wide strategy.",
    highlights: [
      "Understand primary AI/ML methodologies and best use cases",
      "Apply AI/ML thinking to critical business problems",
      "Develop an implementation roadmap with change management plan",
      "Small cohort, hands-on format",
    ],
    image: "/program-tech.jpg",
  },
  {
    title: "Break the Frame",
    tag: "Workshop",
    slug: "break-the-frame",
    description:
      "A creative 'playshop' for leaders ready to question assumptions, reframe challenges as opportunities, and translate ideas into testable experiments. Facilitated by innovation practitioners.",
    highlights: [
      "Unlearn conventional problem-solving frames",
      "Build creative confidence and ideation skills",
      "Translate insights into actionable experiments",
    ],
    image: "/program-leadership.jpg",
  },
];

const certificatePrograms = [
  { name: "Blockchain", slug: "blockchain", image: "/course-blockchain.jpg" },
  { name: "Cybersecurity: Policy and Practice", slug: "cybersecurity-policy", image: "/course-cybersecurity.jpg" },
  { name: "Cybersecurity: Threats and Defenses", slug: "cybersecurity-threats", image: "/course-threats.jpg" },
  { name: "Database Platform Design and Innovation", slug: "database-platform", image: "/program-tech.jpg" },
  { name: "How to Lead in the Experience Economy", slug: "experience-economy", image: "/program-leadership.jpg" },
  { name: "Managing AR, VR & the Metaverse", slug: "metaverse", image: "/program-metaverse.jpg" },
  { name: "Raising Capital", slug: "raising-capital", image: "/program-mentoring.jpg" },
  { name: "Smart City Initiatives & Business Opportunities", slug: "smart-city", image: "/hero-city.jpg" },
  { name: "Quantitative Derivatives Pricing & Risk Modeling", slug: "quant-derivatives", image: "/program-tech.jpg" },
];

type Program = {
  title: string;
  tag: string;
  slug: string;
  description: string;
  highlights: string[];
  image: string;
};

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="mb-8">
      <span className="block w-6 h-0.5 bg-[#b9975b] mb-3" />
      <p className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] font-medium">{label}</p>
    </div>
  );
}

function ProgramCard({ p, delay = 0 }: { p: Program; delay?: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="group border border-[#e2e0dc] overflow-hidden flex flex-col
        hover:border-[#002868] hover:-translate-y-0.5
        transition-[border-color,transform] duration-[250ms] ease-out h-full">
        <div className="relative h-48 overflow-hidden">
          <Image src={p.image} alt={p.title} fill className="object-cover" />
        </div>
        <div className="p-8 flex flex-col flex-1">
          <p className="text-[11px] uppercase tracking-[0.15em] text-[#b9975b] mb-2">{p.tag}</p>
          <h3 className="text-[19px] font-semibold text-[#111111] leading-snug mb-3">{p.title}</h3>
          <p className="text-[15px] text-[#6b6b6b] leading-[1.7] mb-5">{p.description}</p>
          <ul className="space-y-1.5 mb-6 flex-1">
            {p.highlights.map((h) => (
              <li key={h} className="text-[15px] text-[#6b6b6b] flex gap-2">
                <span className="text-[#b9975b] mt-0.5 flex-shrink-0">—</span>
                {h}
              </li>
            ))}
          </ul>
          <Link
            href={`/programs/${p.slug}`}
            className="group/link flex items-center gap-1 text-sm font-semibold text-[#002868] hover:underline w-fit"
          >
            Learn more
            <span className="inline-block transition-transform duration-[200ms] ease-out group-hover/link:translate-x-[3px]">→</span>
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}

export default function ProgramsPage() {
  return (
    <>
      {/* Dark typographic hero — not wrapped */}
      <section className="bg-[#1D4F91] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-28">
          <span className="block w-6 h-0.5 bg-[#b9975b] mb-3" />
          <p className="text-[11px] uppercase tracking-[0.15em] text-white/70 mb-6">What we offer</p>
          <h1 className="text-5xl md:text-6xl font-serif font-normal leading-[1.1] tracking-tight max-w-2xl">
            Programs for every stage of leadership
          </h1>
          <p className="mt-6 text-[15px] text-white/75 max-w-xl leading-[1.7]">
            Designed for experienced professionals — from emerging managers to C-suite executives —
            who need to lead effectively in a technology-driven world.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* Degree programs */}
        <section>
          <FadeIn>
            <Eyebrow label="Degree Programs" />
          </FadeIn>
          <div className="grid gap-6 -mt-4">
            {degreePrograms.map((p, i) => (
              <ProgramCard key={p.title} p={p} delay={i * 60} />
            ))}
          </div>
        </section>

        <hr className="border-0 border-t border-[#e2e0dc]" />

        {/* Executive & professional */}
        <section id="executive">
          <FadeIn>
            <Eyebrow label="Executive & Professional Programs" />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 -mt-4">
            {executivePrograms.map((p, i) => (
              <ProgramCard key={p.title} p={p} delay={i * 60} />
            ))}
          </div>
        </section>

        <hr className="border-0 border-t border-[#e2e0dc]" />

        {/* Certificate grid — photo cards */}
        <section>
          <FadeIn>
            <Eyebrow label="Certificate & Topic Programs" />
          </FadeIn>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 -mt-4">
            {certificatePrograms.map((c, i) => (
              <FadeIn key={c.name} delay={i * 40}>
                <Link
                  href={`/programs/${c.slug}`}
                  className="group relative overflow-hidden h-44 flex items-end block"
                >
                  <Image src={c.image} alt={c.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[#0a1628]/55 group-hover:bg-[#0a1628]/45 transition-colors" />
                  <p className="relative z-10 text-white text-sm font-semibold px-5 pb-5 leading-snug">
                    {c.name}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>

        <hr className="border-0 border-t border-[#e2e0dc]" />

        {/* Residencies */}
        <FadeIn>
          <Eyebrow label="Experiential Learning" />
          <h2 className="text-3xl font-serif font-normal text-[#111111] leading-tight mb-10 -mt-4">Immersive Residencies</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Image
                src="/session-classroom.jpg"
                alt="Residency classroom session"
                width={500}
                height={300}
                className="w-full object-cover h-52 mb-6"
              />
              <p className="text-[15px] text-[#6b6b6b] leading-[1.7]">
                Four-day immersive residencies bring cohorts of senior executives together for
                intensive learning, case studies, and peer exchange alongside faculty and mentors.
                Residencies serve as living case studies — students test ideas, practice leadership,
                and build a global peer network.
              </p>
            </div>
            <div>
              <Image
                src="/session-dinner.jpg"
                alt="Residency cohort dinner"
                width={500}
                height={300}
                className="w-full object-cover h-52 mb-6"
              />
              <p className="text-[15px] text-[#6b6b6b] leading-[1.7]">
                Beyond the classroom, residencies include structured networking events, guest
                speakers from local industry, and cohort dinners that build the lasting
                professional relationships our graduates return to again and again.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn className="text-center pt-4">
          <p className="text-[15px] text-[#6b6b6b] mb-6">
            Interested in a program? Reach out to learn more.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#002868] text-white px-8 py-3 text-sm font-semibold hover:bg-[#001a4d] transition-colors"
          >
            Contact Us
          </Link>
        </FadeIn>
      </div>
    </>
  );
}
