import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Managing AR, VR & the Metaverse | Center for Technology Management",
};

export default function MetaversePage() {
  return (
    <>
      <section className="relative h-64 flex items-end">
        <Image src="/program-metaverse.jpg" alt="AR VR Metaverse" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#002868]/65" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-10 w-full">
          <span className="text-xs uppercase tracking-widest text-[#b9975b] font-sans">Certificate Program</span>
          <h1 className="text-3xl font-semibold text-white mt-2">Managing AR, VR & the Metaverse</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        <section>
          <p className="text-xl text-gray-800 leading-relaxed border-l-4 border-[#b9975b] pl-6 italic font-serif">
            Step into the evolving world of the metaverse — explore its origins, current applications,
            and future potential across industries from marketing and retail to product design and gaming.
          </p>
        </section>

        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">Course overview</p>
          <div className="space-y-4 text-gray-700 font-sans leading-relaxed text-base">
            <p>
              This course explores the foundations of the metaverse and its growing influence on
              technology, society, and business. It examines the historical evolution and convergence
              of augmented reality (AR), virtual reality (VR), and alternate digital realities, as well
              as their potential to shape immersive, connected experiences.
            </p>
            <p>
              Using transmedia storytelling as a guiding framework, participants will investigate how
              these technologies influence human interaction and open up new creative and commercial
              opportunities. Through guided exercises, you'll conceptualize metaverse experiences
              tailored to a specific industry of your choice.
            </p>
          </div>
        </section>

        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">Topics covered</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Origins and evolution of the metaverse",
              "Current AR/VR technologies and projected advancements",
              "Metaverse applications across industries",
              "Design and infrastructure challenges",
              "Transmedia storytelling and human interaction",
              "Conceptualizing and pitching metaverse experiences",
            ].map((item) => (
              <div key={item} className="border border-gray-200 px-5 py-4 flex gap-3 text-sm text-gray-700 font-sans">
                <span className="text-[#b9975b] flex-shrink-0">—</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <div className="flex gap-4 flex-wrap">
          <Link href="/contact" className="bg-[#002868] text-white px-7 py-3 text-sm font-sans font-semibold hover:bg-[#001a4d] transition-colors">
            Enroll / Learn More
          </Link>
          <Link href="/programs" className="border border-[#002868] text-[#002868] px-7 py-3 text-sm font-sans font-semibold hover:bg-[#002868]/5 transition-colors">
            All Programs
          </Link>
        </div>
      </div>
    </>
  );
}
