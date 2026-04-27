import FadeIn from "@/components/FadeIn";
import {
  Divider,
  Eyebrow,
  InteriorHero,
  PrimaryButton,
  SecondaryButton,
} from "@/components/Brand";

export const metadata = {
  title: "Smart City Initiatives & Business Opportunities | Center for Technology Management",
};

export default function SmartCityPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Certificate Program"
        title="Smart City Initiatives & Business Opportunities"
        subtitle="Lead urban innovation projects that address transportation, energy, and infrastructure while creating sustainable business value."
      />

      <div className="mx-auto max-w-4xl space-y-20 px-6 py-20">
        <FadeIn>
          <blockquote className="pull-quote">
            <p>
              Discover how emerging technologies can improve city life while opening
              practical new opportunities for organizations and communities.
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn>
          <Eyebrow label="Course overview" />
          <div className="-mt-4 space-y-4 text-[15px] leading-[1.7] text-[#6b6b6b]">
            <p>
              This course examines real smart-city initiatives and the leadership
              decisions that determine long-term viability and adoption.
            </p>
            <p>
              Participants evaluate technology, governance, and business-model choices
              through practical exercises centered on measurable public and economic
              impact.
            </p>
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="Why this course" />
          <div className="-mt-4 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Real-world urban challenges",
                body: "Work with practical scenarios in transportation, energy, infrastructure, and service delivery.",
              },
              {
                title: "Sustainable innovation focus",
                body: "Balance quality-of-life outcomes with resilience, sustainability, and long-term execution.",
              },
              {
                title: "Business-centric lens",
                body: "Connect public-sector innovation with viable strategy, partnership, and organizational outcomes.",
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
