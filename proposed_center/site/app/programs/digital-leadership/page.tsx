import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  Divider,
  Eyebrow,
  PrimaryButton,
  ProgramHero,
  SecondaryButton,
} from "@/components/Brand";

export const metadata = {
  title: "Digital Leadership Experience | Center for Technology Management",
};

export default function DigitalLeadershipPage() {
  return (
    <>
      <ProgramHero
        eyebrow="Executive Program"
        title="Digital Leadership Experience"
        subtitle="A flexible 6–12 month program for executives, board members, entrepreneurs, and post-career professionals navigating complex digital transformation initiatives."
        image="/program-mentoring.jpg"
        imageAlt="Executive mentoring session"
        meta={[
          { label: "Length", value: "6–12 months" },
          { label: "Format", value: "Personalized" },
          { label: "Mentors", value: "230+" },
        ]}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20 mt-24">
        <FadeIn className="grid items-start gap-10 md:grid-cols-2">
          <blockquote className="pull-quote -mt-1">
            <p className="font-serif text-2xl italic leading-[1.5] text-[#111111]">
              Develop advanced digital leadership skills through a flexible, personalized 6–12 month journey.
            </p>
          </blockquote>
          <Image
            src="/program-mentoring.jpg"
            alt="Executive mentoring session"
            width={560}
            height={360}
            className="h-64 w-full object-cover"
          />
        </FadeIn>

        <FadeIn>
          <Eyebrow label="Who should apply" />
          <div className="-mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {["C-Level Executives", "Entrepreneurs & Intrapreneurs", "Board Members", "Post-career Professionals", "Innovation Leaders", "Senior Directors & VPs"].map((role) => (
              <div key={role} className="border border-[#e2e0dc] px-6 py-5 text-sm font-semibold text-[#111111]">
                {role}
              </div>
            ))}
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="Program structure" />
          <div className="-mt-4 grid gap-0 border border-[#e2e0dc] md:grid-cols-2 lg:grid-cols-5">
            {[
              { step: "1", title: "Customized Learning Plan", body: "Work with academic directors to design your curriculum around your goals." },
              { step: "2", title: "Expert-Led Sessions", body: "Engage with faculty on emerging digital topics drawn from current practice." },
              { step: "3", title: "One-on-One Mentoring", body: "Receive guidance from experienced industry leaders in your field." },
              { step: "4", title: "Applied Project Work", body: "Develop a concrete, actionable plan for your digital initiative." },
              { step: "5", title: "Networking", body: "Connect with a diverse global cohort of technology leaders." },
            ].map((s, i) => (
              <div key={s.step} className={`p-6 ${i < 4 ? "border-b border-[#e2e0dc] md:border-b-0 md:border-r" : ""}`}>
                <p className="mb-3 text-3xl font-serif text-[#002868]/20">{s.step}</p>
                <h3 className="mb-2 text-sm font-semibold text-[#111111]">{s.title}</h3>
                <p className="text-[13px] leading-[1.65] text-[#6b6b6b]">{s.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="Key benefits" />
          <div className="-mt-4 grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              {[
                "Personalized education plan tailored to your busy schedule",
                "Guidance from our network of 230+ accomplished industry mentors",
                "Flexible program lengths: 6, 9, or 12 months",
                "Outcome-focused projects such as digital business plans or social good initiatives",
              ].map((b) => (
                <div key={b} className="flex gap-3 text-[15px] leading-[1.7] text-[#6b6b6b]">
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
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="Sample project objectives" />
          <div className="-mt-4 grid gap-5 sm:grid-cols-2">
            {[
              { title: "Strategic Digital Transformation", body: "Develop comprehensive plans for organizational change at the enterprise level." },
              { title: "Social Impact Initiatives", body: "Design technology-driven solutions for societal challenges." },
              { title: "Entrepreneurial Ventures", body: "Create and launch innovative digital businesses or internal ventures." },
              { title: "Personal Legacy Projects", body: "Shape impactful digital initiatives aligned with your expertise and goals." },
            ].map((obj) => (
              <div key={obj.title} className="flex gap-4 border border-[#e2e0dc] p-6">
                <div className="h-auto w-0.5 flex-shrink-0 bg-[#b9975b]" />
                <div>
                  <p className="mb-1 text-sm font-semibold text-[#111111]">{obj.title}</p>
                  <p className="text-[13px] leading-[1.65] text-[#6b6b6b]">{obj.body}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="flex flex-wrap items-center justify-between gap-6 border border-[#e2e0dc] bg-[#f7f6f3] p-10 md:p-12">
          <div className="max-w-xl">
            <h2 className="mb-2 text-2xl font-serif">Ready to shape your digital leadership legacy?</h2>
            <p className="text-[15px] text-[#6b6b6b]">Contact us to discuss your goals and find the right fit.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href="/contact">Contact Us</PrimaryButton>
            <SecondaryButton href="/programs">All Programs</SecondaryButton>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
