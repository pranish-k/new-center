import FadeIn from "@/components/FadeIn";
import {
  Divider,
  Eyebrow,
  InteriorHero,
  PrimaryButton,
  SecondaryButton,
} from "@/components/Brand";

export const metadata = {
  title: "Cybersecurity: Policy and Practice | Center for Technology Management",
};

export default function CybersecurityPolicyPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Certificate Program"
        title="Cybersecurity: Policy and Practice"
        subtitle="Build and implement cybersecurity strategy, secure executive alignment, and develop a practical response playbook for real incidents."
      />

      <div className="mx-auto max-w-4xl space-y-20 px-6 py-20">
        <FadeIn>
          <blockquote className="pull-quote">
            <p>
              Equip leadership teams with the tools to make high-stakes cybersecurity
              decisions under pressure.
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn>
          <Eyebrow label="Course overview" />
          <div className="-mt-4 space-y-4 text-[15px] leading-[1.7] text-[#6b6b6b]">
            <p>
              This course examines the practical challenges CISOs and executive leaders
              face while building cyber-resilient organizations. Participants cover risk
              models, control frameworks, and incident response strategy.
            </p>
            <p>
              An immersive leadership simulation places you in CEO, CFO, and COO roles
              during a cyber crisis, sharpening your ability to coordinate decisions,
              communication, and governance in real time.
            </p>
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="What you'll build" />
          <div className="-mt-4 grid gap-4 sm:grid-cols-2">
            {[
              "A real-world cybersecurity response playbook",
              "Risk model and control framework for your organization",
              "Executive communication plan for cyber events",
              "Leadership simulation experience for crisis response",
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
                title: "Executive-level focus",
                body: "Understand how CISOs, CEOs, CFOs, and boards coordinate during high-risk events.",
              },
              {
                title: "Strategy to execution",
                body: "Move from framework design to response playbook development with implementation discipline.",
              },
              {
                title: "Real-world relevance",
                body: "Apply proven operating patterns used by organizations managing modern cyber risk.",
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
