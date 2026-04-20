import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cybersecurity: Threats and Defenses | Center for Technology Management",
};

export default function CybersecurityThreatsPage() {
  return (
    <>
      <section className="relative h-64 flex items-end">
        <Image src="/course-threats.jpg" alt="Cybersecurity Threats" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#002868]/75" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-10 w-full">
          <span className="text-xs uppercase tracking-widest text-[#b9975b] font-sans">Certificate Program</span>
          <h1 className="text-3xl font-semibold text-white mt-2">Cybersecurity: Threats and Defenses</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        <section>
          <p className="text-xl text-gray-800 leading-relaxed border-l-4 border-[#b9975b] pl-6 italic font-serif">
            Understand how today's most critical cyber threats — from ransomware to APTs — are reshaping
            the digital battlefield, and learn how to design resilient defense strategies that safeguard
            your organization at every level.
          </p>
        </section>

        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">Course overview</p>
          <div className="space-y-4 text-gray-700 font-sans leading-relaxed text-base">
            <p>
              In a world where digital conflicts mirror traditional ones, organizations face sophisticated
              threats targeting critical infrastructure, operations, and data. This course focuses on
              defending against modern attack vectors such as advanced persistent threats (APT),
              ransomware, and social engineering.
            </p>
            <p>
              Built around a defense-in-depth framework, the course blends hands-on tactics with
              long-term planning for secure system architectures. You'll learn how real-world incidents,
              business models, and leadership decisions affect organizational readiness and security posture.
            </p>
          </div>
        </section>

        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">Designed for</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {["Chief Information Officers", "Chief Information Security Officers", "Chief Risk Officers", "Senior Security Professionals", "IT Directors", "Aspiring Security Leaders"].map((r) => (
              <div key={r} className="border border-gray-200 px-5 py-4 text-sm font-semibold text-gray-800 font-sans">
                {r}
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
