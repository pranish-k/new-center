import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  Divider,
  Eyebrow,
  InteriorHero,
  PrimaryButton,
  SecondaryButton,
} from "@/components/Brand";

export const metadata = {
  title: "Blockchain | Center for Technology Management",
};

export default function BlockchainPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Certificate Program"
        title="Blockchain"
        subtitle="Gain actionable insights into how blockchain is reshaping industries and connect core mechanics to real-world business transformation."
      />

      <div className="mx-auto max-w-4xl space-y-20 px-6 py-20">
        <FadeIn>
          <blockquote className="pull-quote">
            <p>
              Explore how blockchain is revolutionizing healthcare, finance, media,
              cybersecurity, logistics, and enterprise systems.
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn>
          <Eyebrow label="Course overview" />
          <div className="-mt-4 space-y-4 text-[15px] leading-[1.7] text-[#6b6b6b]">
            <p>
              This course builds a strong foundation in blockchain fundamentals and
              progresses into strategic business applications that create measurable
              impact.
            </p>
            <p>
              Through practical frameworks and case-based analysis, participants learn
              how blockchain decisions affect IT infrastructure, analytics, governance,
              and cross-functional operations.
            </p>
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="Why this course" />
          <div className="-mt-4 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Industry-relevant content",
                body: "Apply blockchain principles to healthcare, finance, media, information security, and enterprise systems.",
              },
              {
                title: "From fundamentals to strategy",
                body: "Move from technical basics to leadership-level decisions that drive transformation.",
              },
              {
                title: "Expert-led instruction",
                body: "Learn from experienced academic and industry leaders with real implementation experience.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-[#b9975b] pt-6">
                <h3 className="mb-3 text-[15px] font-semibold text-[#111111]">{item.title}</h3>
                <p className="text-[15px] leading-[1.7] text-[#6b6b6b]">{item.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <Eyebrow label="Meet the course creator" />
          <div className="-mt-4 border border-[#e2e0dc] p-8">
            <h2 className="mb-1 text-2xl font-serif text-[#111111]">Tej Anand</h2>
            <p className="mb-4 text-[11px] uppercase tracking-[0.15em] text-[#b9975b]">
              Clinical Professor · University of Maryland
            </p>
            <p className="text-[15px] leading-[1.7] text-[#6b6b6b]">
              Tej Anand is a clinical professor and academic director for MS in
              Information Systems programs at the Robert H. Smith School of Business.
              He brings deep executive and product leadership experience across AI,
              analytics, and enterprise technology.
            </p>
          </div>
        </FadeIn>

        <FadeIn className="flex flex-wrap gap-4">
          <PrimaryButton href="/contact">Enroll / Learn More</PrimaryButton>
          <SecondaryButton href="/programs">All Programs</SecondaryButton>
          <Link href="/mentors" className="inline-flex items-center text-sm text-[#002868] underline hover:no-underline">
            Meet our mentors
          </Link>
        </FadeIn>
      </div>
    </>
  );
}
