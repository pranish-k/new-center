import FadeIn from "@/components/FadeIn";
import {
  Eyebrow,
  GoldButton,
  InteriorHero,
  NavyFeatureCard,
  TintedCard,
} from "@/components/Brand";

export const metadata = {
  title: "Programs | Teachers College",
};

const workshopsAndCertificates = [
  { tag: "Workshop", name: "AI & Machine Learning Leadership", slug: "ai-ml-workshop", image: "/program-tech.jpg", line: "A 3.5-day immersive workshop. Leave with an AI/ML implementation roadmap and change management plan.", cta: "View workshop" },
  { tag: "Workshop", name: "Break the Frame", slug: "break-the-frame", image: "/program-leadership.jpg", line: "A creative playshop for leaders ready to question assumptions and translate ideas into testable experiments.", cta: "View workshop" },
  { tag: "Certificate", name: "Blockchain", slug: "blockchain", image: "/course-blockchain.jpg", line: "Strategic frameworks for enterprise adoption.", cta: "Read syllabus" },
  { tag: "Certificate", name: "Cybersecurity: Policy & Practice", slug: "cybersecurity-policy", image: "/course-cybersecurity.jpg", line: "Build incident response playbooks for the C-suite.", cta: "Read syllabus" },
  { tag: "Certificate", name: "Cybersecurity: Threats & Defenses", slug: "cybersecurity-threats", image: "/course-threats.jpg", line: "Examine modern threats and defense architectures.", cta: "Read syllabus" },
  { tag: "Certificate", name: "Database Platform Design", slug: "database-platform", image: "/program-tech.jpg", line: "Architect platforms for analytics and scale.", cta: "Read syllabus" },
  { tag: "Certificate", name: "Lead in the Experience Economy", slug: "experience-economy", image: "/program-leadership.jpg", line: "Design for human experience as a business asset.", cta: "Read syllabus" },
  { tag: "Certificate", name: "Managing AR, VR & the Metaverse", slug: "metaverse", image: "/program-metaverse.jpg", line: "Lead the next layer of customer experience.", cta: "Read syllabus" },
  { tag: "Certificate", name: "Raising Capital", slug: "raising-capital", image: "/program-mentoring.jpg", line: "Capital strategy for technology-driven ventures.", cta: "Read syllabus" },
  { tag: "Certificate", name: "Smart City Initiatives", slug: "smart-city", image: "/hero-city.jpg", line: "Public-private patterns for connected infrastructure.", cta: "Read syllabus" },
  { tag: "Certificate", name: "Quantitative Derivatives Pricing", slug: "quant-derivatives", image: "/program-tech.jpg", line: "Pricing and risk modeling for senior decision-makers.", cta: "Read syllabus" },
];

export default function ProgramsPage() {
  return (
    <>
      <InteriorHero
        eyebrow="What we offer"
        title="Programs for every stage of leadership"
        subtitle="Executive workshops and topic certificates — designed for professionals leading in technology-driven environments."
      />

      {/* Executive & Professional — single flagship feature card on cream */}
      <section className="bg-[#f7f6f3]">
        <div className="mx-auto max-w-7xl px-8 pt-24 pb-28" id="executive">
          <FadeIn>
            <Eyebrow label="Executive & Professional" />
          </FadeIn>
          <FadeIn>
            <NavyFeatureCard
              eyebrow="Flagship program"
              title="Digital Leadership Experience"
              body="A flexible 6–12 month program for executives, board members, entrepreneurs, and post-career professionals. Combines a customized learning plan, expert-led faculty sessions, and an applied capstone."
              meta={[
                { label: "Format", value: "6–12 months, flexible" },
                { label: "Audience", value: "Executives & board members" },
                { label: "Includes", value: "1:1 industry mentor" },
              ]}
              image="/program-mentoring.jpg"
              imageAlt="Digital Leadership Experience"
              ctaLabel="Explore the program"
              href="/programs/digital-leadership"
            />
          </FadeIn>
        </div>
      </section>

      {/* Workshops & topic certificates — TintedCard grid on white */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <FadeIn>
            <Eyebrow label="Workshops & Topic Certificates" />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {workshopsAndCertificates.map((c, i) => (
              <FadeIn key={c.slug} delay={i * 40}>
                <TintedCard
                  href={`/programs/${c.slug}`}
                  image={c.image}
                  imageAlt={c.name}
                  tag={c.tag}
                  name={c.name}
                  line={c.line}
                  cta={c.cta}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Closing prompt — feature spacing */}
      <section className="bg-[#002868] text-white">
        <div className="mx-auto max-w-3xl px-8 py-24 text-center">
          <span className="mx-auto mb-6 block h-0.5 w-8 bg-[#b9975b]" />
          <p className="m-0 font-serif text-2xl leading-[1.4] md:text-[28px]">
            Not sure which program fits? We&rsquo;ll match you to the right one.
          </p>
          <div className="mt-9 flex justify-center">
            <GoldButton href="/contact">Request Information &rarr;</GoldButton>
          </div>
        </div>
      </section>
    </>
  );
}
