import FadeIn from "@/components/FadeIn";
import {
  Divider,
  Eyebrow,
  InteriorHero,
  PrimaryButton,
  SecondaryButton,
} from "@/components/Brand";

export const metadata = {
  title: "Database Platform Design and Innovation | Center for Technology Management",
};

export default function DatabasePlatformPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Certificate Program"
        title="Database Platform Design and Innovation"
        subtitle="Bridge business goals and technical implementation by mastering data-platform concepts for architecture, analytics, and innovation teams."
      />

      <div className="mx-auto max-w-4xl space-y-20 px-6 py-20">
        <FadeIn>
          <blockquote className="pull-quote">
            <p>
              Build shared language across business, technology, and analytics teams
              to make stronger platform and data decisions.
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn>
          <Eyebrow label="Course overview" />
          <div className="-mt-4 space-y-4 text-[15px] leading-[1.7] text-[#6b6b6b]">
            <p>
              This course aligns cross-functional teams around essential data
              technology principles used in architecture planning, analytics
              integration, and infrastructure strategy.
            </p>
            <p>
              Participants learn to evaluate options with confidence across platform
              design, governance, and implementation trade-offs in modern data-driven
              organizations.
            </p>
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="Why this course" />
          <div className="-mt-4 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Cross-functional alignment",
                body: "Bridge communication and decision-making between business, analytics, and technical stakeholders.",
              },
              {
                title: "Strategic decision support",
                body: "Build a practical understanding of data technologies used in planning and delivery.",
              },
              {
                title: "Foundation for innovation",
                body: "Establish the knowledge base required for scalable, data-centric transformation initiatives.",
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
