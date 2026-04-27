import FadeIn from "@/components/FadeIn";
import {
  Eyebrow,
  GoldButton,
  InteriorHero,
  NavyFeatureCard,
  PhotoLedCard,
  TintedCard,
} from "@/components/Brand";

export const metadata = {
  title: "Programs | Center for Technology Management",
};

const flagship = {
  tag: "Master's Degree",
  title: "MS in Strategic Technology Leadership",
  body: "A 30-credit MS in Management with Concentration in Strategic Technology Leadership. Five core courses, nine elective credits, immersive on-ground residencies, and a 6-credit applied master's project drawn from the student's own organization.",
  href: "/programs/ms-strategic-technology-leadership",
  image: "/session-classroom.jpg",
  meta: [
    { label: "Format", value: "Hybrid" },
    { label: "Credits", value: "30" },
    { label: "Residencies", value: "3" },
    { label: "Mentors", value: "230+" },
  ],
};

const executivePrograms = [
  {
    tag: "Executive Program",
    title: "Digital Leadership Experience",
    description:
      "A flexible 6–12 month program for executives, board members, entrepreneurs, and post-career professionals. Combines a customized learning plan, expert-led faculty sessions, and an applied capstone.",
    href: "/programs/digital-leadership",
    image: "/program-mentoring.jpg",
  },
  {
    tag: "Workshop",
    title: "AI & Machine Learning Leadership",
    description:
      "A 3.5-day immersive workshop for executives exploring the strategic application of AI and ML. Participants leave with implementation roadmaps and change management plans.",
    href: "/programs/ai-ml-workshop",
    image: "/program-tech.jpg",
  },
  {
    tag: "Workshop",
    title: "Break the Frame",
    description:
      "A creative playshop for leaders ready to question assumptions, reframe challenges, and translate ideas into testable experiments.",
    href: "/programs/break-the-frame",
    image: "/program-leadership.jpg",
  },
];

const certificates = [
  { name: "Blockchain", slug: "blockchain", image: "/course-blockchain.jpg", line: "Strategic frameworks for enterprise adoption." },
  { name: "Cybersecurity: Policy & Practice", slug: "cybersecurity-policy", image: "/course-cybersecurity.jpg", line: "Build incident response playbooks for the C-suite." },
  { name: "Cybersecurity: Threats & Defenses", slug: "cybersecurity-threats", image: "/course-threats.jpg", line: "Examine modern threats and defense architectures." },
  { name: "Database Platform Design", slug: "database-platform", image: "/program-tech.jpg", line: "Architect platforms for analytics and scale." },
  { name: "Lead in the Experience Economy", slug: "experience-economy", image: "/program-leadership.jpg", line: "Design for human experience as a business asset." },
  { name: "Managing AR, VR & the Metaverse", slug: "metaverse", image: "/program-metaverse.jpg", line: "Lead the next layer of customer experience." },
  { name: "Raising Capital", slug: "raising-capital", image: "/program-mentoring.jpg", line: "Capital strategy for technology-driven ventures." },
  { name: "Smart City Initiatives", slug: "smart-city", image: "/hero-city.jpg", line: "Public-private patterns for connected infrastructure." },
  { name: "Quantitative Derivatives Pricing", slug: "quant-derivatives", image: "/program-tech.jpg", line: "Pricing and risk modeling for senior decision-makers." },
];

export default function ProgramsPage() {
  return (
    <>
      <InteriorHero
        eyebrow="What we offer"
        title="Programs for every stage of leadership"
        subtitle="From the flagship master's degree to short executive workshops and topic certificates — designed for professionals leading in technology-driven environments."
      />

      {/* Flagship — NavyFeatureCard, the one feature CTA per page */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-8 pb-12 pt-20">
          <FadeIn>
            <Eyebrow label="The flagship" />
          </FadeIn>
          <FadeIn>
            <NavyFeatureCard
              eyebrow={flagship.tag}
              title={flagship.title}
              body={flagship.body}
              ctaLabel="Explore the MS"
              href={flagship.href}
              image={flagship.image}
              imageAlt="Flagship master's program classroom"
              meta={flagship.meta}
            />
          </FadeIn>
        </div>
      </section>

      {/* Executive & Professional — PhotoLedCard grid on cream */}
      <section className="bg-[#f7f6f3]">
        <div className="mx-auto max-w-7xl px-8 py-20" id="executive">
          <FadeIn>
            <Eyebrow label="Executive & Professional" />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {executivePrograms.map((p, i) => (
              <FadeIn key={p.title} delay={i * 60}>
                <PhotoLedCard
                  href={p.href}
                  image={p.image}
                  imageAlt={p.title}
                  tag={p.tag}
                  title={p.title}
                  description={p.description}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Topic Certificates — TintedCard grid on white */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <FadeIn>
            <Eyebrow label="Topic Certificates" />
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {certificates.map((c, i) => (
              <FadeIn key={c.slug} delay={i * 40}>
                <TintedCard
                  href={`/programs/${c.slug}`}
                  image={c.image}
                  imageAlt={c.name}
                  name={c.name}
                  line={c.line}
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
