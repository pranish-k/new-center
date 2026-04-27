import FadeIn from "@/components/FadeIn";
import {
  Divider,
  Eyebrow,
  InteriorHero,
  PrimaryButton,
  SecondaryButton,
} from "@/components/Brand";

export const metadata = {
  title: "Raising Capital | Center for Technology Management",
};

export default function RaisingCapitalPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Certificate Program"
        title="Raising Capital"
        subtitle="Learn practical funding strategies for ventures and intrapreneurial initiatives, from business-model framing to investor-ready pitch delivery."
      />

      <div className="mx-auto max-w-4xl space-y-20 px-6 py-20">
        <FadeIn>
          <blockquote className="pull-quote">
            <p>
              Build a compelling venture narrative and secure the right capital
              pathway for growth.
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn>
          <Eyebrow label="Course overview" />
          <div className="-mt-4 space-y-4 text-[15px] leading-[1.7] text-[#6b6b6b]">
            <p>
              The course explores practical approaches to launching new ventures,
              whether as a founder or an internal innovation leader.
            </p>
            <p>
              Participants use cross-disciplinary perspectives from finance, strategy,
              law, and market analysis, then conclude with a pitch reviewed by
              entrepreneurs, investors, and senior operators.
            </p>
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="Why this course" />
          <div className="-mt-4 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Startup and intrapreneur focus",
                body: "Apply funding strategy whether launching independently or innovating inside an organization.",
              },
              {
                title: "Investor-ready pitch development",
                body: "Craft and deliver clear venture narratives using proven frameworks and feedback loops.",
              },
              {
                title: "Mentorship from practitioners",
                body: "Refine plans with guidance from venture capitalists, founders, and C-level executives.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-[#b9975b] pt-6">
                <h3 className="mb-3 text-[15px] font-semibold text-[#111111]">{item.title}</h3>
                <p className="text-[15px] leading-[1.7] text-[#6b6b6b]">{item.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="flex flex-wrap gap-4">
          <PrimaryButton href="/contact">Enroll / Learn More</PrimaryButton>
          <SecondaryButton href="/programs">All Programs</SecondaryButton>
        </FadeIn>
      </div>
    </>
  );
}
