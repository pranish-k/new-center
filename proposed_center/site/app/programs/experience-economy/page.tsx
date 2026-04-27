import FadeIn from "@/components/FadeIn";
import {
  Divider,
  Eyebrow,
  InteriorHero,
  PrimaryButton,
  SecondaryButton,
} from "@/components/Brand";

export const metadata = {
  title: "How to Lead in the Experience Economy | Center for Technology Management",
};

export default function ExperienceEconomyPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Certificate Program"
        title="How to Lead in the Experience Economy"
        subtitle="Master the design of meaningful customer experiences that build loyalty, deepen engagement, and generate sustainable value."
      />

      <div className="mx-auto max-w-4xl space-y-20 px-6 py-20">
        <FadeIn>
          <blockquote className="pull-quote">
            <p>
              Move beyond products and services to design experiences that customers
              remember, value, and return to.
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn>
          <Eyebrow label="Course overview" />
          <div className="-mt-4 space-y-4 text-[15px] leading-[1.7] text-[#6b6b6b]">
            <p>
              This course develops practical frameworks for staging customer
              experiences that create emotional and economic value in both B2C and B2B
              settings.
            </p>
            <p>
              Participants learn how to strengthen customer journeys, sharpen brand
              differentiation, and combine digital and physical touchpoints to create
              more compelling experiences.
            </p>
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="What you'll learn" />
          <div className="-mt-4 grid gap-4 sm:grid-cols-2">
            {[
              "Design customer experiences that deliver economic value",
              "Strengthen brand identity through transformative interactions",
              "Leverage digital technologies to blend real and virtual experience",
              "Apply experience-economy frameworks across business contexts",
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
                title: "Strategic experience design",
                body: "Develop immersive, coherent experiences that generate measurable customer and business value.",
              },
              {
                title: "Authenticity and differentiation",
                body: "Learn to shape brand perception and outperform conventional campaign-led engagement.",
              },
              {
                title: "Digital-physical fusion",
                body: "Use technology to create hybrid interactions that feel seamless and memorable.",
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
