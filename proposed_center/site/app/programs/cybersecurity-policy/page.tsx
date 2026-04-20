import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cybersecurity: Policy and Practice | Center for Technology Management",
};

export default function CybersecurityPolicyPage() {
  return (
    <>
      <section className="relative h-64 flex items-end">
        <Image src="/course-cybersecurity.jpg" alt="Cybersecurity Policy" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#002868]/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-10 w-full">
          <span className="text-xs uppercase tracking-widest text-[#b9975b] font-sans">Certificate Program</span>
          <h1 className="text-3xl font-semibold text-white mt-2">Cybersecurity: Policy and Practice</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        <section>
          <p className="text-xl text-gray-800 leading-relaxed border-l-4 border-[#b9975b] pl-6 italic font-serif">
            Equip leaders with the tools and strategies needed to build and implement a cybersecurity
            strategy, secure executive buy-in, and develop a cyber playbook for responding to
            real-world security incidents.
          </p>
        </section>

        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">Course overview</p>
          <div className="space-y-4 text-gray-700 font-sans leading-relaxed text-base">
            <p>
              This course examines the real-world challenges that CISOs and executive leaders face in
              establishing cyber-resilient organizations. You'll begin with foundational elements of a
              cybersecurity strategy — covering risk models, control frameworks, incident response
              approaches, and navigating complex threats that often have no clear solution.
            </p>
            <p>
              The course also emphasizes the role of executive leadership and corporate governance in
              aligning security goals with broader organizational resilience. An immersive simulation
              places you in the shoes of leaders like CEO, CFO, and COO during a cyber crisis, helping
              you understand the urgency and decision-making required.
            </p>
            <p>
              You'll walk away with a tangible playbook and a strategic lens for managing cybersecurity
              at the leadership level.
            </p>
          </div>
        </section>

        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">What you'll build</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "A real-world cybersecurity response playbook",
              "Risk model and control framework for your organization",
              "Executive communication strategy for cyber events",
              "Crisis simulation experience as C-suite decision-maker",
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
