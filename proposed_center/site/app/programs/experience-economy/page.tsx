import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "How to Lead in the Experience Economy | Center for Technology Management",
};

export default function ExperienceEconomyPage() {
  return (
    <>
      <section className="relative h-64 flex items-end">
        <Image src="/program-leadership.jpg" alt="Experience Economy" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#002868]/65" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-10 w-full">
          <span className="text-xs uppercase tracking-widest text-[#b9975b] font-sans">Certificate Program</span>
          <h1 className="text-3xl font-semibold text-white mt-2">How to Lead in the Experience Economy</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        <section>
          <p className="text-xl text-gray-800 leading-relaxed border-l-4 border-[#b9975b] pl-6 italic font-serif">
            Master the art of staging meaningful, memorable experiences that deepen customer engagement,
            build brand loyalty, and unlock new sources of economic value in today's experience-driven marketplace.
          </p>
        </section>

        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">Course overview</p>
          <div className="space-y-4 text-gray-700 font-sans leading-relaxed text-base">
            <p>
              This course empowers you to drive business growth by designing customer experiences that
              go beyond traditional offerings. You'll learn how organizations can engage customers
              emotionally and economically by staging experiences that resonate deeply and deliver
              lasting value.
            </p>
            <p>
              Through real-world strategies and frameworks, you'll explore how to enhance customer
              journeys, strengthen brand identity, and create transformative interactions. The course
              also delves into how digital technologies can be leveraged to blur the line between real
              and virtual, elevating experiences in innovative ways.
            </p>
          </div>
        </section>

        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">What you'll learn</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Design customer experiences that deliver economic value",
              "Strengthen brand identity through transformative interactions",
              "Leverage digital technologies to blur real and virtual experiences",
              "Apply experience economy frameworks to B2C and B2B contexts",
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
