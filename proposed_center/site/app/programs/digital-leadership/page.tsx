import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Digital Leadership Experience | Center for Technology Management",
};

export default function DigitalLeadershipPage() {
  return (
    <>
      <section className="bg-[#002868] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="text-xs uppercase tracking-widest text-[#b9975b] font-sans">Executive Program</span>
            <h1 className="text-4xl font-semibold mt-3 mb-4">Digital Leadership Experience</h1>
            <p className="text-blue-200 font-sans text-base leading-relaxed max-w-lg">
              A flexible 6–12 month program designed for busy executives ready to lead complex
              digital transformation initiatives — combining faculty instruction with one-on-one
              mentoring from 230+ industry leaders.
            </p>
            <Link href="/contact" className="inline-block mt-8 bg-white text-[#002868] px-7 py-3 text-sm font-semibold font-sans hover:bg-blue-50 transition-colors">
              Explore Your Opportunities
            </Link>
          </div>
          <div className="flex-shrink-0 md:w-80">
            <Image
              src="/program-mentoring.jpg"
              alt="Mentoring session"
              width={400}
              height={280}
              className="w-full object-cover rounded-sm shadow-xl"
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* Who */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">Who should apply</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["C-Level Executives", "Entrepreneurs & Intrapreneurs", "Board Members", "Post-career Professionals", "Innovation Leaders", "Senior Directors & VPs"].map((role) => (
              <div key={role} className="border border-gray-200 px-6 py-5 text-sm font-semibold text-gray-800 font-sans">
                {role}
              </div>
            ))}
          </div>
        </section>

        {/* Program Structure */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">Program structure</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0 border border-gray-200">
            {[
              { step: "1", title: "Customized Learning Plan", body: "Work with academic directors to design your curriculum around your goals." },
              { step: "2", title: "Expert-Led Sessions", body: "Engage with faculty on cutting-edge digital topics." },
              { step: "3", title: "One-on-One Mentoring", body: "Receive guidance from experienced industry leaders in your field." },
              { step: "4", title: "Applied Project Work", body: "Develop a concrete, actionable plan for your digital initiative." },
              { step: "5", title: "Networking", body: "Connect with a diverse global cohort of technology leaders." },
            ].map((s, i) => (
              <div key={s.step} className={`p-6 ${i < 4 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""}`}>
                <p className="text-3xl font-semibold text-[#002868]/20 mb-3">{s.step}</p>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-gray-500 font-sans leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">Key benefits</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                "Personalized education plan tailored to your busy schedule",
                "Guidance from our network of 230+ accomplished industry mentors",
                "Flexible program lengths: 6, 9, or 12 months",
                "Outcome-focused projects such as digital business plans or social good initiatives",
              ].map((b) => (
                <div key={b} className="flex gap-3 text-sm text-gray-700 font-sans">
                  <span className="text-[#b9975b] mt-0.5 flex-shrink-0">—</span>
                  {b}
                </div>
              ))}
            </div>
            <Image
              src="/session-class2.jpg"
              alt="Program session"
              width={400}
              height={280}
              className="w-full object-cover h-56"
            />
          </div>
        </section>

        {/* Project Objectives */}
        <section>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">Sample project objectives</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Strategic Digital Transformation", body: "Develop comprehensive plans for organizational change at the enterprise level." },
              { title: "Social Impact Initiatives", body: "Design technology-driven solutions for societal challenges." },
              { title: "Entrepreneurial Ventures", body: "Create and launch innovative digital businesses or internal ventures." },
              { title: "Personal Legacy Projects", body: "Shape impactful digital initiatives aligned with your expertise and goals." },
            ].map((obj) => (
              <div key={obj.title} className="border border-gray-200 p-6 flex gap-4">
                <div className="flex-shrink-0 w-1 bg-[#b9975b] rounded-full" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{obj.title}</p>
                  <p className="text-sm text-gray-500 font-sans leading-relaxed">{obj.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#002868] text-white p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Ready to shape your digital leadership legacy?</h2>
            <p className="text-blue-200 font-sans text-sm">Contact us to discuss your goals and find the right fit.</p>
          </div>
          <Link href="/contact" className="bg-white text-[#002868] px-7 py-3 text-sm font-semibold font-sans hover:bg-blue-50 transition-colors flex-shrink-0">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
