import FadeIn from "@/components/FadeIn";
import {
  Divider,
  Eyebrow,
  InteriorHero,
  PrimaryButton,
  SecondaryButton,
} from "@/components/Brand";

export const metadata = {
  title: "Quantitative Derivatives Pricing & Risk Modeling | Center for Technology Management",
};

export default function QuantDerivativesPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Specialized Program"
        title="Quantitative Derivatives Pricing & Risk Modeling"
        subtitle="An advanced, cohort-based program for quantitative finance professionals focused on derivatives pricing, market risk, and production-grade analytics."
      />

      <div className="mx-auto max-w-4xl space-y-20 px-6 py-20">
        <FadeIn>
          <blockquote className="pull-quote">
            <p>
              Build practical expertise in modern derivatives analytics through
              real-world casework, guided exercises, and practitioner-led sessions.
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn>
          <Eyebrow label="Program overview" />
          <div className="-mt-4 space-y-4 text-[15px] leading-[1.7] text-[#6b6b6b]">
            <p>
              The program is designed for professionals with baseline quantitative
              finance exposure who want deeper capability in pricing, risk modeling,
              and analytics implementation.
            </p>
            <p>
              Participants work alongside senior practitioners and engage with
              open-source tooling used by financial institutions for contemporary
              market and credit risk analysis.
            </p>
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="What to expect" />
          <div className="-mt-4 grid gap-4 sm:grid-cols-2">
            {[
              "8-12 hour weekly commitment in a cohort format",
              "Structured modules with live interactive sessions",
              "Case studies with industry experts and quantitative leaders",
              "Applied exercises using contemporary risk analytics methods",
            ].map((item) => (
              <div key={item} className="border border-[#e2e0dc] px-5 py-4 text-[15px] leading-[1.7] text-[#6b6b6b]">
                {item}
              </div>
            ))}
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="Why this program" />
          <div className="-mt-4 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Career acceleration",
                body: "Develop specialized quantitative risk capabilities in a high-demand finance niche.",
              },
              {
                title: "Real practitioner context",
                body: "Learn from experts with deep experience in regulatory and production risk environments.",
              },
              {
                title: "Immediate impact",
                body: "Apply models and methods directly to institutional pricing and risk questions.",
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
          <PrimaryButton href="/contact">Request Program Details</PrimaryButton>
          <SecondaryButton href="/programs">All Programs</SecondaryButton>
        </FadeIn>
      </div>
    </>
  );
}
