import Link from "next/link";

export const metadata = {
  title: "Programs | Center for Technology Management",
};

const degreePrograms = [
  {
    title: "MS in Strategic Technology Leadership",
    tag: "Master's Degree",
    description:
      "A 30-credit MS in Management with Concentration in Strategic Technology Leadership at the D'Amore-McKim School of Business. Combines 5 core courses, 9 elective credits, 3 on-ground residencies, and a 6-credit applied master's project.",
    highlights: [
      "3 for-credit residencies (Boston & London)",
      "One-on-one industry mentoring",
      "Online and in-person hybrid format",
      "Core areas: AI/ML, Digital Strategy, Cybersecurity, Analytics",
    ],
  },
];

const executivePrograms = [
  {
    title: "Digital Leadership Experience",
    tag: "Executive Program",
    description:
      "A flexible 6–12 month program for executives, board members, entrepreneurs, and post-career professionals. Combines a customized learning plan, expert-led faculty sessions, one-on-one mentoring from 230+ industry leaders, and an applied capstone project.",
    highlights: [
      "Flexible 6, 9, or 12 month formats",
      "Personalized curriculum designed with academic directors",
      "Access to 230+ accomplished industry mentors",
      "Outcome-focused: digital business plans, social initiatives",
    ],
  },
  {
    title: "AI & Machine Learning Leadership Workshop",
    tag: "Workshop",
    description:
      "A 3.5-day immersive workshop for executives and senior leaders exploring the strategic application of AI and ML. Participants leave with actionable plans for both their business unit and enterprise-wide strategy.",
    highlights: [
      "Understand primary AI/ML methodologies and best use cases",
      "Apply AI/ML thinking to critical business problems",
      "Develop an implementation roadmap with change management plan",
      "Small cohort, hands-on format",
    ],
  },
  {
    title: "Break the Frame",
    tag: "Workshop",
    description:
      "A creative 'playshop' for leaders ready to question assumptions, reframe challenges as opportunities, and translate ideas into testable experiments. Facilitated by innovation practitioners.",
    highlights: [
      "Unlearn conventional problem-solving frames",
      "Build creative confidence and ideation skills",
      "Translate insights into actionable experiments",
    ],
  },
];

const certificatePrograms = [
  "Blockchain",
  "Cybersecurity: Policy and Practice",
  "Cybersecurity: Threats and Defenses",
  "Database Platform Design and Innovation",
  "How to Lead in the Experience Economy",
  "Managing AR, VR & the Metaverse",
  "Raising Capital",
  "Smart City Initiatives & Business Opportunities",
  "Quantitative Derivatives Pricing & Risk Modeling",
];

type Program = {
  title: string;
  tag: string;
  description: string;
  highlights: string[];
};

function ProgramCard({ p }: { p: Program }) {
  return (
    <div className="border border-gray-200 p-8">
      <span className="text-xs uppercase tracking-widest text-[#b9975b] font-sans">
        {p.tag}
      </span>
      <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-3">
        {p.title}
      </h3>
      <p className="text-sm text-gray-600 font-sans leading-relaxed mb-5">
        {p.description}
      </p>
      <ul className="space-y-1">
        {p.highlights.map((h) => (
          <li key={h} className="text-sm text-gray-700 font-sans flex gap-2">
            <span className="text-[#b9975b] mt-0.5">—</span>
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-3">
        What we offer
      </p>
      <h1 className="text-3xl font-semibold text-[#002868] mb-4">Programs</h1>
      <p className="text-gray-500 font-sans text-sm max-w-xl mb-16 leading-relaxed">
        Designed for experienced professionals — from emerging managers to
        C-suite executives — who need to lead effectively in a technology-driven
        world.
      </p>

      {/* Degree */}
      <section className="mb-16">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6 pb-3 border-b border-gray-100">
          Degree Programs
        </h2>
        <div className="grid gap-6">
          {degreePrograms.map((p) => (
            <ProgramCard key={p.title} p={p} />
          ))}
        </div>
      </section>

      {/* Executive */}
      <section className="mb-16">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6 pb-3 border-b border-gray-100">
          Executive &amp; Professional Programs
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {executivePrograms.map((p) => (
            <ProgramCard key={p.title} p={p} />
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="mb-16">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6 pb-3 border-b border-gray-100">
          Certificate &amp; Topic Programs
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {certificatePrograms.map((name) => (
            <div
              key={name}
              className="border border-gray-200 px-4 py-3 text-sm text-gray-700 font-sans"
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* Residencies */}
      <section className="bg-[#002868] text-white p-10">
        <p className="text-xs uppercase tracking-widest text-blue-300 font-sans mb-3">
          Experiential Learning
        </p>
        <h2 className="text-xl font-semibold mb-3">Residencies</h2>
        <p className="text-blue-100 font-sans text-sm leading-relaxed max-w-xl">
          Immersive four-day residencies in Boston and London take learning
          beyond the classroom into real-world environments — serving as living
          case studies. Students test ideas, practice leadership, and build a
          global peer network alongside faculty and industry mentors.
        </p>
        <div className="mt-6 flex gap-6 text-sm font-sans text-blue-200">
          <span>Boston — Fall &amp; Spring</span>
          <span>London — Annual</span>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 text-center">
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
  );
}
