import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Mission & Vision | Center for Technology Management",
};

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="mb-8">
      <span className="block w-6 h-0.5 bg-[#b9975b] mb-3" />
      <p className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] font-medium">{label}</p>
    </div>
  );
}

export default function MissionPage() {
  return (
    <>
      {/* Dark typographic hero */}
      <section className="bg-[#0a1628] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-28">
          <span className="block w-6 h-0.5 bg-[#b9975b] mb-3" />
          <p className="text-[11px] uppercase tracking-[0.15em] text-blue-300/60 mb-6">About the Center</p>
          <h1 className="text-5xl md:text-6xl font-serif font-normal leading-[1.1] tracking-tight max-w-2xl">
            Mission &amp; Vision
          </h1>
          <p className="mt-6 text-[15px] text-blue-200/70 max-w-xl leading-[1.7]">
            We believe that talent, technology, and leadership — aligned — can transform any organization.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-20 space-y-20">

        {/* Mission — pull quote treatment */}
        <section>
          <Eyebrow label="Mission" />
          <blockquote className="border-l-[3px] border-[#b9975b] pl-6 -mt-4">
            <p className="font-serif italic text-2xl text-[#111111] leading-[1.5]">
              To enable executives to use technology to address strategic challenges of business
              and to advance their knowledge through collaboration with industry leaders, faculty, and students.
            </p>
          </blockquote>
        </section>

        <hr className="border-0 border-t border-[#e2e0dc]" />

        {/* Vision */}
        <section>
          <Eyebrow label="Vision" />
          <div className="space-y-5 text-[#6b6b6b] leading-[1.7] text-[15px] -mt-4">
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
            <p>
              <span className="text-[#111111] font-medium">We believe that talent is at the heart of organizational resilience.</span>{" "}
              To that end, our vision includes enabling leaders to rethink how they attract,
              develop, and retain their workforce by adopting models of work that inspire
              creativity, support lifelong learning, and encourage bold thinking.
            </p>
            <p>
              By aligning strategy, technology, and people, we strive to shape the next
              generation of transformative leadership.
            </p>
          </div>
        </section>

        <hr className="border-0 border-t border-[#e2e0dc]" />

        {/* Values */}
        <section>
          <Eyebrow label="Our Approach" />
          <div className="grid md:grid-cols-3 gap-8 -mt-4">
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
                <h3 className="font-semibold text-[#111111] mb-3 text-[15px]">{v.title}</h3>
                <p className="text-[15px] text-[#6b6b6b] leading-[1.7]">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-0 border-t border-[#e2e0dc]" />

        {/* Media — no rounded corners, no shadow */}
        <section>
          <Eyebrow label="In the Media" />
          <div className="relative overflow-hidden -mt-4">
            <Image
              src="/media-center.jpg"
              alt="Dr. Langer in media appearances and podcasts"
              width={768}
              height={400}
              className="w-full object-cover max-h-64"
            />
            <div className="absolute inset-0 bg-[#0a1628]/60 flex items-end p-8">
              <div>
                <p className="text-white font-serif text-xl">"The Art of Digital Leadership"</p>
                <p className="text-blue-200/70 text-[13px] mt-1">Podcast with Dr. Art Langer — on AI, leadership, and the future of work</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/leadership"
            className="bg-[#002868] text-white px-7 py-3 text-sm font-semibold hover:bg-[#001a4d] transition-colors"
          >
            Meet Dr. Langer
          </Link>
          <Link
            href="/programs"
            className="border border-[#002868] text-[#002868] px-7 py-3 text-sm font-semibold hover:bg-[#002868]/5 transition-colors"
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </>
  );
}
