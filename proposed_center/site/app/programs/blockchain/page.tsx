import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blockchain | Center for Technology Management",
};

export default function BlockchainPage() {
  return (
    <>
      <section className="relative h-64 flex items-end">
        <Image src="/course-blockchain.jpg" alt="Blockchain" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#002868]/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-10 w-full">
          <span className="text-xs uppercase tracking-widest text-[#b9975b] font-sans">Certificate Program</span>
          <h1 className="text-3xl font-semibold text-white mt-2">Blockchain</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        <section>
          <p className="text-xl text-gray-800 leading-relaxed border-l-4 border-[#b9975b] pl-6 italic font-serif">
            Gain actionable insights into how blockchain is revolutionizing industries — from healthcare
            and finance to media, cybersecurity, and enterprise systems — while learning to connect its
            core mechanics to real-world business transformation.
          </p>
        </section>

        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">Course overview</p>
          <p className="text-gray-700 font-sans leading-relaxed text-base">
            Explore how blockchain is reshaping global industries in this comprehensive course. You'll
            build a strong foundation in blockchain fundamentals before diving into its strategic use
            across healthcare, finance, media, cybersecurity, logistics, and enterprise systems.
          </p>
          <p className="text-gray-700 font-sans leading-relaxed text-base mt-4">
            Through a practical lens, the course bridges core blockchain mechanics with real-world impact,
            offering insight into IT infrastructure, analytics, and business workflows. Whether you're
            examining technical architectures or discovering groundbreaking applications, you'll learn
            how to drive transformation using blockchain technology.
          </p>
        </section>

        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">Why this course</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Industry-Relevant Content", body: "Real-world applications across multiple sectors — not just crypto." },
              { title: "Strategic Focus", body: "Connect blockchain mechanics to leadership decisions and business transformation." },
              { title: "Expert Instruction", body: "Taught alongside industry mentors with direct blockchain deployment experience." },
            ].map((v) => (
              <div key={v.title} className="border-t-2 border-[#b9975b] pt-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{v.title}</h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed">{v.body}</p>
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
