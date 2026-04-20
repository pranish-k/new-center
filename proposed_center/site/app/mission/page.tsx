import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Mission & Vision | Center for Technology Management",
};

export default function MissionPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#002868] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-blue-300 font-sans mb-3">About the Center</p>
          <h1 className="text-4xl font-semibold max-w-xl">Mission &amp; Vision</h1>
          <p className="mt-4 text-blue-200 font-sans text-base max-w-xl leading-relaxed">
            We believe that talent, technology, and leadership — aligned — can transform any organization.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-20">
        {/* Mission */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">Mission</p>
          <p className="text-2xl leading-relaxed text-gray-800 border-l-4 border-[#b9975b] pl-8 italic font-serif">
            To enable executives to use technology to address strategic challenges of business
            and to advance their knowledge through collaboration with industry leaders, faculty, and students.
          </p>
        </section>

        <hr className="border-gray-100" />

        {/* Vision */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">Vision</p>
          <div className="space-y-5 text-gray-700 font-sans leading-relaxed text-base">
            <p>
              We envision a future where organizations meet disruption with agility, lead
              confidently through technological change, and cultivate talent to drive sustained
              innovation.
            </p>
            <p>
              As market conditions grow increasingly unpredictable, our vision is to empower
              leaders with the adaptability and foresight needed to respond to rapid shifts in
              both economic and technological fields. In this evolving digital landscape, staying
              ahead requires not just awareness of emerging technologies but a commitment to
              continuously learning, experimenting, and implementing at scale.
            </p>
            <p className="text-gray-900 font-medium">
              We believe that talent is at the heart of organizational resilience.{" "}
              <span className="font-normal text-gray-700">
                To that end, our vision includes enabling leaders to rethink how they attract,
                develop, and retain their workforce by adopting models of work that inspire
                creativity, support lifelong learning, and encourage bold thinking.
              </span>
            </p>
            <p>
              By aligning strategy, technology, and people, we strive to shape the next
              generation of transformative leadership.
            </p>
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* Values */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">Our approach</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Experiential Learning",
                body: "Immersive on-ground residencies, applied capstone projects, and real-world mentorship put theory directly into practice.",
              },
              {
                title: "Industry-Led Mentorship",
                body: "Over 230 senior executives from global companies serve as mentors — providing guidance, critique, and real-world context.",
              },
              {
                title: "Inclusive Talent Development",
                body: "Through our partnership with WOS, we extend leadership development to underserved communities, broadening who gets a seat at the table.",
              },
            ].map((v) => (
              <div key={v.title} className="border-t-2 border-[#b9975b] pt-6">
                <h3 className="font-semibold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* Media center image */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">In the media</p>
          <div className="relative overflow-hidden rounded-sm shadow-md">
            <Image
              src="/media-center.jpg"
              alt="Dr. Langer in media appearances and podcasts"
              width={900}
              height={400}
              className="w-full object-cover max-h-64"
            />
            <div className="absolute inset-0 bg-[#002868]/60 flex items-end p-8">
              <div>
                <p className="text-white font-semibold text-lg">"The Art of Digital Leadership"</p>
                <p className="text-blue-200 text-sm font-sans mt-1">Podcast with Dr. Art Langer — on AI, leadership, and the future of work</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/leadership"
            className="bg-[#002868] text-white px-7 py-3 text-sm font-sans font-semibold hover:bg-[#001a4d] transition-colors"
          >
            Meet Dr. Langer
          </Link>
          <Link
            href="/programs"
            className="border border-[#002868] text-[#002868] px-7 py-3 text-sm font-sans font-semibold hover:bg-[#002868]/5 transition-colors"
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </>
  );
}
