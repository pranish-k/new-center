import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "MS in Strategic Technology Leadership | Center for Technology Management",
};

const coreCourses = [
  "Strategic Advocacy and Global Leadership",
  "Data Mining and Machine Learning for Business",
  "Digital Strategy and Competing in Dynamic, Innovation-Driven Markets",
  "Driving and Managing Performance",
  "Technology and the Law",
];

const electives = [
  "Analytics",
  "Cybersecurity",
  "Sustainability",
  "Metaverse",
  "Entrepreneurship",
];

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="mb-8">
      <span className="block w-6 h-0.5 bg-[#b9975b] mb-3" />
      <p className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] font-medium">{label}</p>
    </div>
  );
}

export default function MSPage() {
  return (
    <>
      {/* Dark typographic hero — not wrapped */}
      <section className="bg-[#0a1628] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-28">
          <span className="block w-6 h-0.5 bg-[#b9975b] mb-3" />
          <p className="text-[11px] uppercase tracking-[0.15em] text-blue-300/60 mb-6">Master's Degree</p>
          <h1 className="text-5xl md:text-6xl font-serif font-normal leading-[1.1] tracking-tight max-w-2xl">
            MS in Strategic Technology Leadership
          </h1>
          <p className="mt-6 text-[15px] text-blue-200/70 max-w-xl leading-[1.7]">
            A 30-credit graduate degree for directors and senior managers with C-suite aspirations
            — combining academic rigor, real-world mentorship, and immersive residency experiences.
          </p>
          <div className="flex gap-4 mt-10 flex-wrap">
            <Link href="/contact" className="bg-white text-[#002868] px-7 py-3 text-sm font-semibold hover:bg-blue-50 transition-colors">
              Request Information
            </Link>
            <Link href="/programs" className="border border-white/40 text-white px-7 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">
              All Programs
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* Stats bar */}
        <FadeIn className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-[#e2e0dc]">
          {[
            { stat: "30", label: "Credit Hours" },
            { stat: "230+", label: "Industry Mentors" },
            { stat: "3", label: "Immersive Residencies" },
            { stat: "6", label: "Credit Applied Project" },
          ].map((s, i) => (
            <FadeIn key={s.label} delay={i * 80}>
              <div className="text-center">
                <p className="text-4xl font-serif font-normal text-[#002868]">{s.stat}</p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] mt-2">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </FadeIn>

        {/* Why this program */}
        <FadeIn>
          <Eyebrow label="Why this program" />
          <div className="grid md:grid-cols-3 gap-8 -mt-4">
            {[
              {
                title: "Real Mentorship",
                body: "You'll be matched with a senior executive mentor from your industry who provides one-on-one guidance throughout your applied project — simulating a real-world senior colleague relationship.",
              },
              {
                title: "Applied Project",
                body: "A 6-credit integrated project spans the full duration of your studies and is directly tied to your professional role. You'll be evaluated by a committee of faculty, your mentor, and a company representative.",
              },
              {
                title: "Hybrid Flexibility",
                body: "The program blends online coursework with immersive on-ground residencies, designed around the reality of busy executive schedules.",
              },
            ].map((v, i) => (
              <FadeIn key={v.title} delay={i * 80}>
                <div className="border-t-2 border-[#b9975b] pt-6">
                  <h3 className="font-semibold text-[#111111] mb-3 text-[15px]">{v.title}</h3>
                  <p className="text-[15px] text-[#6b6b6b] leading-[1.7]">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        <hr className="border-0 border-t border-[#e2e0dc]" />

        {/* Curriculum */}
        <FadeIn>
          <Eyebrow label="Curriculum" />
          <div className="grid md:grid-cols-2 gap-12 -mt-4">
            <div>
              <h3 className="font-semibold text-[#111111] mb-5 text-[15px]">Core Courses</h3>
              <ul className="space-y-3">
                {coreCourses.map((c) => (
                  <li key={c} className="flex gap-3 text-[15px] text-[#6b6b6b] leading-[1.7]">
                    <span className="text-[#b9975b] mt-0.5 flex-shrink-0">—</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#111111] mb-5 text-[15px]">Elective Topics</h3>
              <ul className="space-y-3">
                {electives.map((e) => (
                  <li key={e} className="flex gap-3 text-[15px] text-[#6b6b6b] leading-[1.7]">
                    <span className="text-[#b9975b] mt-0.5 flex-shrink-0">—</span>
                    {e}
                  </li>
                ))}
              </ul>
              <p className="text-[12px] text-[#6b6b6b] mt-5">New topics proposed in response to market developments.</p>
            </div>
          </div>
        </FadeIn>

        <hr className="border-0 border-t border-[#e2e0dc]" />

        {/* Residency */}
        <FadeIn>
          <Eyebrow label="Experiential Learning" />
          <h2 className="text-3xl font-serif font-normal text-[#111111] leading-tight mb-8 -mt-4">Immersive Residencies</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <p className="text-[15px] text-[#6b6b6b] leading-[1.7]">
              The program requires participation in three on-ground residencies, each four days in length.
              Residencies deepen your knowledge of market dynamics, strategic planning, and operations
              management while building a lasting global peer network alongside faculty and mentors.
            </p>
            <Image
              src="/session-lecture.jpg"
              alt="Residency session"
              width={500}
              height={300}
              className="w-full object-cover h-52"
            />
          </div>
        </FadeIn>

        <hr className="border-0 border-t border-[#e2e0dc]" />

        {/* Admission */}
        <FadeIn>
          <Eyebrow label="Admission Requirements" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 -mt-4">
            {[
              "Online application",
              "Essay / Personal statement",
              "University transcripts",
              "Two letters of recommendation",
              "Resume / CV",
              "Online interview",
              "Optional GMAT/GRE",
              "TOEFL, IELTS, or Duolingo (international students)",
            ].map((req, i) => (
              <FadeIn key={req} delay={i * 40}>
                <div className="border border-[#e2e0dc] px-4 py-3 text-[15px] text-[#6b6b6b]">
                  {req}
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-4">
          <div>
            <h2 className="text-2xl font-serif font-normal text-[#111111] mb-1">Ready to start your leadership journey?</h2>
            <p className="text-[15px] text-[#6b6b6b]">Contact us to learn more about the MS program.</p>
          </div>
          <Link
            href="/contact"
            className="bg-[#002868] text-white px-7 py-3 text-sm font-semibold hover:bg-[#001a4d] transition-colors flex-shrink-0"
          >
            Contact Us
          </Link>
        </FadeIn>
      </div>
    </>
  );
}
