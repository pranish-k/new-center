import FadeIn from "@/components/FadeIn";
import {
  Divider,
  Eyebrow,
  InteriorHero,
  PrimaryButton,
  SecondaryButton,
} from "@/components/Brand";

export const metadata = {
  title: "Managing AR, VR & the Metaverse | Center for Technology Management",
};

export default function MetaversePage() {
  return (
    <>
      <InteriorHero
        eyebrow="Certificate Program"
        title="Managing AR, VR & the Metaverse"
        subtitle="Explore metaverse foundations, industry applications, and practical design challenges shaping immersive digital experiences."
      />

      <div className="mx-auto max-w-4xl space-y-20 px-6 py-20">
        <FadeIn>
          <blockquote className="pull-quote">
            <p>
              Understand where immersive technologies are today and where they are
              heading across business, culture, and product innovation.
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn>
          <Eyebrow label="Course overview" />
          <div className="-mt-4 space-y-4 text-[15px] leading-[1.7] text-[#6b6b6b]">
            <p>
              The course traces the evolution of AR, VR, and alternate digital
              realities while connecting their technical foundations to strategic
              leadership decisions.
            </p>
            <p>
              Participants use transmedia storytelling and guided concept work to
              design metaverse opportunities tailored to a chosen industry context.
            </p>
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="Topics covered" />
          <div className="-mt-4 grid gap-4 sm:grid-cols-2">
            {[
              "Origins and evolution of the metaverse",
              "Current AR/VR technologies and projected advancements",
              "Metaverse applications across industries",
              "Design and infrastructure challenges",
              "Transmedia storytelling and user behavior",
              "Concepting and pitching immersive experiences",
            ].map((item) => (
              <div key={item} className="border border-[#e2e0dc] px-5 py-4 text-[15px] leading-[1.7] text-[#6b6b6b]">
                {item}
              </div>
            ))}
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="Why this course" />
          <div className="-mt-4 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "End-to-end exploration",
                body: "Follow the metaverse from early foundations to current and emerging applications.",
              },
              {
                title: "Cross-industry relevance",
                body: "Evaluate practical use cases across retail, gaming, design, media, and more.",
              },
              {
                title: "Hands-on concept development",
                body: "Apply course methods to build and present industry-specific immersive ideas.",
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
