import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Break the Frame | Center for Technology Management",
};

export default function BreakTheFramePage() {
  return (
    <>
      <section className="bg-[#002868] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <span className="text-xs uppercase tracking-widest text-[#b9975b] font-sans">Workshop</span>
          <h1 className="text-4xl font-semibold mt-3 mb-4">Break the Frame</h1>
          <p className="text-blue-200 font-sans text-xl leading-relaxed max-w-2xl italic">
            "Designing What Doesn't Yet Exist"
          </p>
          <p className="text-blue-200 font-sans text-base leading-relaxed max-w-xl mt-4">
            A creative playshop for curious minds ready to unlearn, rethink, and rebuild.
            Not a workshop filled with slides and theory — a space where design, strategy,
            and storytelling collide.
          </p>
          <Link href="/contact" className="inline-block mt-8 bg-white text-[#002868] px-7 py-3 text-sm font-semibold font-sans hover:bg-blue-50 transition-colors">
            Register Interest
          </Link>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* What happens */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">What happens in the playshop</p>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              {[
                "Question the assumptions that hold your team back",
                "Reframe challenges into creative opportunities",
                "Translate ideas into small, testable experiments",
                "Leave with real prototypes, clear next steps, and new energy for what's ahead",
              ].map((item) => (
                <div key={item} className="flex gap-4 text-gray-700 font-sans text-base">
                  <span className="text-[#b9975b] text-xl mt-0.5 flex-shrink-0">→</span>
                  {item}
                </div>
              ))}
            </div>
            <Image
              src="/program-leadership.jpg"
              alt="Break the Frame workshop"
              width={500}
              height={340}
              className="w-full object-cover h-64 rounded-sm shadow-md"
            />
          </div>
        </section>

        {/* Why it's different */}
        <section className="bg-gray-50 border border-gray-200 p-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">Why it's different</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Creative Sprint",
                body: "Ideas get permission to breathe, bend, and break. Through hands-on exercises and rapid prototyping, participants move from 'What is' to 'What if.'",
              },
              {
                title: "Storytelling Journey",
                body: "Participants explore story design — learning how to turn insights into narratives that inspire action. Where creative confidence meets communication power.",
              },
              {
                title: "Tangible Outcomes",
                body: "Expect moments of laughter, challenge, and reflection — and leave with real prototypes, a clear next-step plan, and renewed creative energy.",
              },
            ].map((v) => (
              <div key={v.title} className="border-t-2 border-[#b9975b] pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Instructor */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">Meet the instructor</p>
          <div className="border border-gray-200 p-8 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#002868] mb-1">Lyle H. Sandler</h3>
              <p className="text-sm text-[#b9975b] font-sans mb-4">Designer · Storyteller · Anthropologist</p>
              <p className="text-sm text-gray-600 font-sans leading-relaxed mb-3">
                Lyle helps organizations reimagine how people connect with ideas, data, and environments.
                With a background in theatre, film, and design from Hofstra University and the American
                Film Institute, he has led creative transformation at global firms including Aon Corporation
                and NCR, weaving narrative thinking into strategic design.
              </p>
              <p className="text-sm text-gray-600 font-sans leading-relaxed">
                Author of <em>Universal Principles of Storytelling for Designers</em> (Rockport, 2025),
                Lyle's practice blurs the lines between art, business, and human behavior.
              </p>
            </div>
          </div>
        </section>

        {/* Who */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">Who should join</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              "Leaders who want to spark innovation within their teams",
              "Designers and strategists seeking fresh perspectives",
              "Professionals ready to explore what could be",
            ].map((r) => (
              <div key={r} className="border border-gray-200 px-6 py-5 text-sm text-gray-700 font-sans leading-relaxed">
                {r}
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#002868] text-white p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">"Imagination isn't a luxury — it's your next advantage."</h2>
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
