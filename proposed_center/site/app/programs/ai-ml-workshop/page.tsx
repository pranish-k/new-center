import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "AI & ML Leadership Workshop | Center for Technology Management",
};

const agenda = [
  {
    day: "Day 1",
    sessions: [
      "Participant introductions and identification of key AI/ML challenges at the business unit and enterprise levels",
      "Review of core AI/ML methods from both technical and strategic business perspectives",
    ],
  },
  {
    day: "Day 2",
    sessions: [
      "Development of business unit-level AI/ML implementation plans using provided templates",
      "Group feedback and collaborative review of individual plans",
    ],
  },
  {
    day: "Day 3",
    sessions: [
      "Team-based planning to address enterprise-wide challenges using AI/ML",
      "Presentation and review of team strategies for organization-level implementation",
    ],
  },
  {
    day: "Day 4",
    sessions: [
      "Final discussions on plan implementation with focus on execution and change management",
      "Summary and closing reflections",
    ],
  },
];

export default function AIMLWorkshopPage() {
  return (
    <>
      <section className="bg-[#002868] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="text-xs uppercase tracking-widest text-[#b9975b] font-sans">Workshop · 3.5 Days</span>
            <h1 className="text-4xl font-semibold mt-3 mb-4">AI & Machine Learning Leadership Workshop</h1>
            <p className="text-blue-200 font-sans text-base leading-relaxed max-w-lg">
              An immersive workshop for executives and senior leaders exploring the strategic application
              of AI and ML — leave with actionable plans for your business unit and your enterprise.
            </p>
            <Link href="/contact" className="inline-block mt-8 bg-white text-[#002868] px-7 py-3 text-sm font-semibold font-sans hover:bg-blue-50 transition-colors">
              Register Interest
            </Link>
          </div>
          <div className="flex-shrink-0 md:w-80">
            <Image
              src="/program-tech.jpg"
              alt="AI workshop"
              width={400}
              height={280}
              className="w-full object-cover rounded-sm shadow-xl"
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* Objectives */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">Workshop objectives</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Understand AI/ML", body: "Learn the primary AI/ML methodologies and their best use cases across industries." },
              { title: "Apply Strategically", body: "Apply AI/ML thinking to solve critical issues within a business unit and enterprise context." },
              { title: "Build a Roadmap", body: "Develop an implementation roadmap including leadership and change management considerations." },
            ].map((o) => (
              <div key={o.title} className="border-t-2 border-[#b9975b] pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">{o.title}</h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Agenda */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">Agenda</p>
          <div className="grid md:grid-cols-2 gap-6">
            {agenda.map((d) => (
              <div key={d.day} className="border border-gray-200 p-6">
                <p className="text-xs uppercase tracking-widest text-[#b9975b] font-sans mb-4">{d.day}</p>
                <ul className="space-y-3">
                  {d.sessions.map((s) => (
                    <li key={s} className="flex gap-3 text-sm text-gray-700 font-sans">
                      <span className="text-[#b9975b] mt-0.5 flex-shrink-0">—</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Who */}
        <section className="bg-gray-50 border border-gray-200 p-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">Who should attend</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["C-Suite Executives", "Senior Directors & VPs", "Chief Information Officers", "Chief Digital Officers", "Strategy Leaders", "Innovation Teams"].map((r) => (
              <div key={r} className="bg-white border border-gray-200 px-5 py-4 text-sm font-semibold text-gray-800 font-sans">
                {r}
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#002868] text-white p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Bring AI strategy into your organization</h2>
            <p className="text-blue-200 font-sans text-sm">Contact us for workshop dates and registration.</p>
          </div>
          <Link href="/contact" className="bg-white text-[#002868] px-7 py-3 text-sm font-semibold font-sans hover:bg-blue-50 transition-colors flex-shrink-0">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
