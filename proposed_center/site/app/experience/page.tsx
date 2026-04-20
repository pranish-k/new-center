import Link from "next/link";

export const metadata = {
  title: "Student Experience | Center for Technology Management",
};

const testimonials = [
  {
    quote:
      "I got really lucky when I found this program. I realized that I actually had stronger ambitions to move up the ladder.",
    name: "Lee D.",
    role: "MS Graduate, Class of 2025",
    context: "Transitioned from individual contributor to leadership track at Vaisala",
  },
  {
    quote:
      "I just wanted to say how much I appreciate the experience of completing my master's degree. Everything I learned, the perspectives I gained, and the connections I built have been invaluable.",
    name: "Boris F.",
    role: "MS Graduate, Class of 2025",
    context: "London Residency cohort",
  },
];

const stories = [
  {
    name: "Joe Varnas",
    company: "S&P Global",
    title: "When Traditional Strategy Planning Became the Problem",
    summary:
      "As a rising executive at S&P Global, Joe's default approach was comprehensive 3–5 year roadmaps. TMDL helped him discover that in fast-moving environments, traditional strategic planning can itself become the obstacle — and gave him the tools to lead differently.",
  },
  {
    name: "Lee Doyle",
    company: "Vaisala",
    title: "When It Came Time to Think Bigger",
    summary:
      "Lee was perfectly content as an individual contributor after eight years in technical sales. The program gave him both the skills and the confidence to pursue leadership — something he hadn't previously imagined for himself.",
  },
];

const residencyHighlights = [
  {
    location: "Boston",
    description:
      "The flagship residency at Northeastern's Boston campus brings together cohorts of senior executives for four days of immersive learning, case studies, and peer exchange alongside faculty and mentors.",
    detail: "Fall & Spring sessions · 4 days",
  },
  {
    location: "London",
    description:
      "The London residency, based in St. Katharine Docks near the City, provides a European context for digital leadership with mentors from across the UK, Europe, Middle East, and Africa.",
    detail: "Annual session · 4 days",
  },
];

export default function ExperiencePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#002868] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-blue-300 font-sans mb-3">Student Experience</p>
          <h1 className="text-4xl font-semibold max-w-xl">Real leaders. Real transformation.</h1>
          <p className="mt-4 text-blue-200 font-sans text-base max-w-xl leading-relaxed">
            Our students are experienced professionals who come to accelerate — not just learn.
            Here's what they found.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* Testimonials */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">What graduates say</p>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 border border-gray-200 p-8 flex flex-col justify-between">
                <p className="text-gray-800 italic leading-relaxed text-base mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900 font-sans text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400 font-sans">{t.role}</p>
                  <p className="text-xs text-[#b9975b] font-sans mt-1">{t.context}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* Student stories */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">Student stories</p>
          <div className="space-y-8">
            {stories.map((s) => (
              <div key={s.name} className="border border-gray-200 p-8 flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0 md:w-48">
                  <p className="font-semibold text-gray-900">{s.name}</p>
                  <p className="text-xs text-[#b9975b] font-sans mt-1">{s.company}</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#002868] mb-3">{s.title}</h3>
                  <p className="text-sm text-gray-600 font-sans leading-relaxed">{s.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* Residencies */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-3">Experiential learning</p>
          <h2 className="text-2xl font-semibold text-[#002868] mb-10">Residencies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {residencyHighlights.map((r) => (
              <div key={r.location} className="border-t-4 border-[#002868] pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{r.location}</h3>
                <p className="text-xs uppercase tracking-widest text-[#b9975b] font-sans mb-4">{r.detail}</p>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* Who should apply */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">Who this is for</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              "C-Level Executives",
              "Senior Directors & VPs",
              "Entrepreneurs & Intrapreneurs",
              "Board Members",
              "Post-career Professionals",
              "Innovation Leaders",
            ].map((role) => (
              <div
                key={role}
                className="border border-gray-200 px-6 py-5 text-sm font-semibold text-gray-800 font-sans"
              >
                {role}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#002868] text-white p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Ready to take the next step?</h2>
            <p className="text-blue-200 font-sans text-sm">Learn which program is the right fit for you.</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/programs"
              className="bg-white text-[#002868] px-7 py-3 text-sm font-semibold font-sans hover:bg-blue-50 transition-colors"
            >
              Explore Programs
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-7 py-3 text-sm font-semibold font-sans hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
