import FadeIn from "@/components/FadeIn";
import {
  Divider,
  Eyebrow,
  InteriorHero,
  PrimaryButton,
  SecondaryButton,
} from "@/components/Brand";

export const metadata = {
  title: "Cybersecurity: Threats and Defenses | Center for Technology Management",
};

export default function CybersecurityThreatsPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Certificate Program"
        title="Cybersecurity: Threats and Defenses"
        subtitle="Understand modern attack vectors and design defense-in-depth strategies that improve enterprise resilience."
      />

      <div className="mx-auto max-w-4xl space-y-20 px-6 py-20">
        <FadeIn>
          <blockquote className="pull-quote">
            <p>
              From ransomware to advanced persistent threats, learn how leadership,
              architecture, and operational readiness work together under pressure.
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn>
          <Eyebrow label="Course overview" />
          <div className="-mt-4 space-y-4 text-[15px] leading-[1.7] text-[#6b6b6b]">
            <p>
              The course focuses on modern attack vectors including APTs, ransomware,
              and social engineering. Participants examine both tactical controls and
              long-term security architecture planning.
            </p>
            <p>
              You&apos;ll analyze how organizational structure, governance, and executive
              decision-making influence threat response and overall security maturity.
            </p>
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="Designed for" />
          <div className="-mt-4 grid gap-4 sm:grid-cols-3">
            {[
              "Chief Information Officers",
              "Chief Information Security Officers",
              "Chief Risk Officers",
              "Senior Security Professionals",
              "IT Directors",
              "Aspiring Security Leaders",
            ].map((item) => (
              <div key={item} className="border border-[#e2e0dc] px-5 py-4 text-sm font-semibold text-[#111111]">
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
                title: "Real-world threat focus",
                body: "Study contemporary attack patterns and practical defensive responses used in critical environments.",
              },
              {
                title: "Defense-in-depth planning",
                body: "Apply layered strategy and architecture principles that reduce risk across systems.",
              },
              {
                title: "Career advancement",
                body: "Build strategic and technical fluency valued across security leadership roles.",
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
