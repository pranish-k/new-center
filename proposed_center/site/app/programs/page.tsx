import Link from "next/link";
import Image from "next/image";

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

function ProgramCard({ p }: { p: Program }) {
  return (
    <div className="border border-gray-200 overflow-hidden flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#002868]/40" />
        <span className="absolute top-4 left-4 text-xs uppercase tracking-widest text-white/90 font-sans bg-[#002868]/60 px-2 py-1">
          {p.tag}
        </span>
      </div>
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">{p.title}</h3>
        <p className="text-sm text-gray-600 font-sans leading-relaxed mb-5">{p.description}</p>
        <ul className="space-y-1 mb-6 flex-1">
          {p.highlights.map((h) => (
            <li key={h} className="text-sm text-gray-700 font-sans flex gap-2">
              <span className="text-[#b9975b] mt-0.5">—</span>
              {h}
            </li>
          ))}
        </ul>
        <Link
          href={`/programs/${p.slug}`}
          className="text-sm font-semibold font-sans text-[#002868] hover:underline"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#002868] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-blue-300 font-sans mb-3">What we offer</p>
          <h1 className="text-4xl font-semibold max-w-xl">Programs for every stage of leadership</h1>
          <p className="mt-4 text-blue-200 font-sans text-base max-w-xl leading-relaxed">
            Designed for experienced professionals — from emerging managers to C-suite executives —
            who need to lead effectively in a technology-driven world.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* Degree */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6 pb-3 border-b border-gray-100">
            Degree Programs
          </p>
          <div className="grid gap-6">
            {degreePrograms.map((p) => (
              <ProgramCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        {/* Executive */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6 pb-3 border-b border-gray-100">
            Executive &amp; Professional Programs
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {executivePrograms.map((p) => (
              <ProgramCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6 pb-3 border-b border-gray-100">
            Certificate &amp; Topic Programs
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certificatePrograms.map((c) => (
              <Link
                key={c.name}
                href={`/programs/${c.slug}`}
                className="group relative border border-gray-200 overflow-hidden h-36 flex items-end"
              >
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[#002868]/60 group-hover:bg-[#002868]/70 transition-colors" />
                <p className="relative z-10 text-white text-sm font-semibold font-sans p-4 leading-snug">
                  {c.name}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Residencies — generic, no location names */}
        <section className="bg-[#002868] text-white p-10">
          <p className="text-xs uppercase tracking-widest text-blue-300 font-sans mb-3">Experiential Learning</p>
          <h2 className="text-xl font-semibold mb-3">Immersive Residencies</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div>
              <Image
                src="/session-classroom.jpg"
                alt="Residency classroom session"
                width={500}
                height={300}
                className="w-full object-cover h-48 mb-4"
              />
              <p className="text-blue-100 font-sans text-sm leading-relaxed">
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
                className="w-full object-cover h-48 mb-4"
              />
              <p className="text-blue-100 font-sans text-sm leading-relaxed">
                Beyond the classroom, residencies include structured networking events, guest
                speakers from local industry, and cohort dinners that build the lasting
                professional relationships our graduates return to again and again.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-500 font-sans text-sm mb-4">
            Interested in a program? Reach out to learn more.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#002868] text-white px-8 py-3 text-sm font-sans font-semibold hover:bg-[#001a4d] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
