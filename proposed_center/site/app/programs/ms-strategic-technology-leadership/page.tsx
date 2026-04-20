import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "MS in Strategic Technology Leadership | Center for Technology Management",
};

const coreCoures = [
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

export default function MSPage() {
  return (
    <>
      <section className="bg-[#002868] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="text-xs uppercase tracking-widest text-[#b9975b] font-sans">Master's Degree</span>
            <h1 className="text-4xl font-semibold mt-3 mb-4">MS in Strategic Technology Leadership</h1>
            <p className="text-blue-200 font-sans text-base leading-relaxed max-w-lg">
              A 30-credit graduate degree for directors and senior managers with C-suite aspirations
              — combining academic rigor, real-world mentorship, and immersive residency experiences.
            </p>
            <div className="flex gap-4 mt-8 flex-wrap">
              <Link href="/contact" className="bg-white text-[#002868] px-7 py-3 text-sm font-semibold font-sans hover:bg-blue-50 transition-colors">
                Request Information
              </Link>
              <Link href="/programs" className="border border-white text-white px-7 py-3 text-sm font-semibold font-sans hover:bg-white/10 transition-colors">
                All Programs
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 md:w-80">
            <Image
              src="/session-classroom.jpg"
              alt="MS program classroom"
              width={400}
              height={280}
              className="w-full object-cover rounded-sm shadow-xl"
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-100 pb-16">
          {[
            { stat: "30", label: "Credit Hours" },
            { stat: "230+", label: "Industry Mentors" },
            { stat: "3", label: "Immersive Residencies" },
            { stat: "6", label: "Credit Applied Project" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-semibold text-[#002868]">{s.stat}</p>
              <p className="text-sm text-gray-500 font-sans mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Why */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">Why this program</p>
          <div className="grid md:grid-cols-3 gap-8">
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
            ].map((v) => (
              <div key={v.title} className="border-t-2 border-[#b9975b] pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">Curriculum</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Core Courses</h3>
              <ul className="space-y-3">
                {coreCoures.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-gray-700 font-sans">
                    <span className="text-[#b9975b] mt-0.5 flex-shrink-0">—</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Elective Topics</h3>
              <ul className="space-y-3">
                {electives.map((e) => (
                  <li key={e} className="flex gap-3 text-sm text-gray-700 font-sans">
                    <span className="text-[#b9975b] mt-0.5 flex-shrink-0">—</span>
                    {e}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 font-sans mt-4">New topics proposed in response to market developments.</p>
            </div>
          </div>
        </section>

        {/* Residency */}
        <section className="bg-gray-50 border border-gray-200 p-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-3">Experiential Learning</p>
          <h2 className="text-xl font-semibold text-[#002868] mb-4">Immersive Residencies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-sm text-gray-600 font-sans leading-relaxed">
              The program requires participation in three on-ground residencies, each four days in length.
              Residencies deepen your knowledge of market dynamics, strategic planning, and operations
              management while building a lasting global peer network alongside faculty and mentors.
            </p>
            <Image
              src="/session-lecture.jpg"
              alt="Residency session"
              width={400}
              height={250}
              className="w-full object-cover h-48"
            />
          </div>
        </section>

        {/* Admission */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">Admission Requirements</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Online application",
              "Essay / Personal statement",
              "University transcripts",
              "Two letters of recommendation",
              "Resume / CV",
              "Online interview",
              "Optional GMAT/GRE",
              "TOEFL, IELTS, or Duolingo (international students)",
            ].map((req) => (
              <div key={req} className="border border-gray-200 px-4 py-3 text-sm text-gray-700 font-sans">
                {req}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#002868] text-white p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Ready to start your leadership journey?</h2>
            <p className="text-blue-200 font-sans text-sm">Contact us to learn more about the MS program.</p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-[#002868] px-7 py-3 text-sm font-semibold font-sans hover:bg-blue-50 transition-colors flex-shrink-0"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
