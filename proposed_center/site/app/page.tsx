import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import MentorCard from "@/components/MentorCard";
import {
  ArrowLink,
  Divider,
  Eyebrow,
  GhostButton,
  GoldButton,
  NavyFeatureCard,
  PullQuote,
  StatsBar,
  TintedCard,
} from "@/components/Brand";
import { INSTITUTION } from "@/lib/brand";
import { getFeaturedMentors } from "@/lib/mentors";

const stats = [
  { value: "230+", label: "Industry Mentors" },
  { value: "15+", label: "Countries Represented" },
  { value: "300+", label: "Student Projects" },
  { value: "25+", label: "Years of Leadership" },
];

// Workshops sit alongside the topic certificates, labelled honestly by tag.
// The Digital Leadership Experience is the flagship and is featured on its own above.
const programsAndCertificates = [
  { tag: "Workshop", name: "AI & Machine Learning Leadership", slug: "ai-ml-workshop", image: "/program-tech.jpg", line: "Build a practical AI/ML implementation roadmap in 3.5 days.", cta: "View workshop" },
  { tag: "Workshop", name: "Break the Frame", slug: "break-the-frame", image: "/program-leadership.jpg", line: "Question assumptions and turn ideas into testable experiments.", cta: "View workshop" },
  { tag: "Certificate", name: "Blockchain", slug: "blockchain", image: "/course-blockchain.jpg", line: "Strategic frameworks for enterprise adoption.", cta: "Read syllabus" },
  { tag: "Certificate", name: "Cybersecurity: Policy & Practice", slug: "cybersecurity-policy", image: "/course-cybersecurity.jpg", line: "Build incident response playbooks for the C-suite.", cta: "Read syllabus" },
  { tag: "Certificate", name: "Managing AR, VR & the Metaverse", slug: "metaverse", image: "/program-metaverse.jpg", line: "Lead the next layer of customer experience.", cta: "Read syllabus" },
  { tag: "Certificate", name: "Smart City Initiatives", slug: "smart-city", image: "/hero-city.jpg", line: "Public-private patterns for connected infrastructure.", cta: "Read syllabus" },
];

const researchStrands = [
  {
    title: "Workforce Opportunity Services",
    body: "Research on workforce development and pathways from underserved communities into technology careers.",
    href: "/research#wos",
  },
  {
    title: "Corporate Partners",
    body: "Partner organizations that co-design research, masterclasses, and applied learning with the Center.",
    href: "/research#partners",
  },
  {
    title: "Projects & Publications",
    body: "Applied projects with partner organizations, feeding published research and the Journal of Reflective Practice.",
    href: "/research#projects",
  },
  {
    title: "CxO Masterclass",
    body: "Curated senior-executive sessions co-designed with partners and facilitated by leading experts.",
    href: "/research#masterclass",
  },
];

const partnerLogos = [
  { src: "/logo-microsoft.png", alt: "Microsoft" },
  { src: "/logo-ibm.png", alt: "IBM" },
  { src: "/logo-jpmorgan.png", alt: "JPMorgan Chase" },
  { src: "/logo-goldman.png", alt: "Goldman Sachs" },
  { src: "/logo-deloitte.png", alt: "Deloitte" },
  { src: "/logo-boeing.png", alt: "Boeing" },
  { src: "/logo-amex.png", alt: "American Express" },
  { src: "/logo-aws.png", alt: "Amazon Web Services" },
  { src: "/logo-xerox.png", alt: "Xerox" },
];

export default function Home() {
  const featuredMentors = getFeaturedMentors();

  return (
    <>
      {/* Homepage hero — bold marketing, gold italic emphasis, gold CTA, director caption overlay. */}
      <section className="relative overflow-hidden bg-[#002868] text-white">
        <span className="absolute left-0 top-0 h-1 w-1/3 bg-[#b9975b]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-8 py-24 md:grid-cols-[1.05fr_1fr] md:py-32">
          <div>
            <span className="mb-4 block h-0.5 w-8 bg-[#b9975b]" />
            <p className="wordmark mb-7 text-[11px] tracking-[0.18em] text-white/70">
              Teachers College · Columbia University
            </p>
            <h1 className="m-0 font-serif text-[44px] font-normal leading-[1.04] tracking-[-0.02em] md:text-[64px]">
              Lead the next era of{" "}
              <em className="not-italic font-serif italic text-[#b9975b]">AI</em>{" "}
              &amp; digital transformation.
            </h1>
            <p className="mt-7 max-w-md text-[16px] leading-[1.65] text-white/85">
              A graduate department for executives navigating disruption — with
              executive programs and topic certificates taught by faculty and 230+ industry mentors.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <GoldButton href="/programs">Explore Programs &rarr;</GoldButton>
              <GhostButton href="/contact">Request Information</GhostButton>
            </div>
          </div>

          <div className="relative aspect-[4/3] md:-mr-8 md:aspect-auto md:h-[520px]">
            <Image
              src="/hero-teachers-college.jpg"
              alt={INSTITUTION}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-6 left-6 right-6 border-l-[3px] border-[#b9975b] bg-[#0a1628]/85 px-5 py-4 text-white">
              <p className="m-0 font-serif text-lg">{INSTITUTION}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry mentor network — the Center's core proof. Stats float on white
          so the navy hero is not immediately followed by a second dark band. */}
      <FadeIn className="bg-white">
        <div className="mx-auto max-w-7xl px-8 py-24">
          <div className="max-w-2xl">
            <Eyebrow label="Industry mentor network" />
            <h2 className="m-0 font-serif text-[30px] font-normal leading-tight tracking-[-0.015em] text-[#111111] md:text-[36px]">
              A mentor network, not a guest lecture list.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.7] text-[#6b6b6b]">
              Every student is matched one-to-one with a practicing senior executive.
              Our mentors are chief information officers, chief digital officers, and
              chief executives who work through real problems alongside the people they
              mentor, and stay connected long after the program ends.
            </p>
          </div>

          <div className="mt-14">
            <StatsBar stats={stats} />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {featuredMentors.map((m, i) => (
              <FadeIn key={m.id} delay={i * 40}>
                <MentorCard mentor={m} compact />
              </FadeIn>
            ))}
          </div>

          <div className="mt-10">
            <ArrowLink href="/mentors">Meet all 230+ mentors</ArrowLink>
          </div>
        </div>
      </FadeIn>

      {/* Partner logos — cream band */}
      <FadeIn className="border-y border-[#e2e0dc] bg-[#f7f6f3] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-10 text-center text-[11px] font-medium uppercase tracking-[0.15em] text-[#6b6b6b]">
            Our students and mentors come from
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partnerLogos.map((l) => (
              <Image
                key={l.alt}
                src={l.src}
                alt={l.alt}
                width={110}
                height={50}
                className="h-10 w-auto object-contain opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </FadeIn>

      {/* What we offer — one flagship program, featured on its own. */}
      <FadeIn className="bg-white">
        <div className="mx-auto max-w-7xl px-8 pb-24 pt-28">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <Eyebrow label="What we offer" />
              <h2 className="m-0 max-w-2xl font-serif text-[30px] font-normal leading-tight tracking-[-0.015em] text-[#111111] md:text-[36px]">
                Our flagship executive program.
              </h2>
            </div>
            <div className="hidden md:block">
              <ArrowLink href="/programs">View all programs</ArrowLink>
            </div>
          </div>

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
        </div>
      </FadeIn>

      {/* Workshops & topic certificates */}
      <FadeIn className="bg-white">
        <div className="mx-auto max-w-7xl px-8 pb-24">
          <Divider className="my-0 mb-20" />
          <div className="mb-10 flex items-end justify-between">
            <div>
              <Eyebrow label="Workshops & certificates" />
              <h2 className="m-0 max-w-2xl font-serif text-[28px] font-normal leading-tight tracking-[-0.01em] text-[#111111] md:text-[36px]">
                Shorter formats, taught by faculty who built the field.
              </h2>
            </div>
            <div className="hidden md:block">
              <ArrowLink href="/programs">All programs and certificates</ArrowLink>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {programsAndCertificates.map((c, i) => (
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
      </FadeIn>

      {/* Research activities — four strands, typographic, linking into /research */}
      <FadeIn className="border-y border-[#e2e0dc] bg-[#f7f6f3]">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="max-w-2xl">
            <Eyebrow label="Research activities" />
            <h2 className="m-0 font-serif text-[28px] font-normal leading-tight tracking-[-0.01em] text-[#111111] md:text-[36px]">
              Research carried out with partners, in practice.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.7] text-[#6b6b6b]">
              The Center studies how organizations learn and change as technology
              reshapes them, through applied projects with partner organizations
              rather than from a distance.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {researchStrands.map((s, i) => (
              <FadeIn key={s.title} delay={i * 40}>
                <div className="flex h-full flex-col">
                  <span className="mb-4 block h-0.5 w-8 bg-[#b9975b]" />
                  <h3 className="m-0 mb-3 text-[18px] font-semibold leading-snug text-[#111111]">
                    {s.title}
                  </h3>
                  <p className="m-0 mb-5 flex-1 text-[15px] leading-[1.7] text-[#6b6b6b]">
                    {s.body}
                  </p>
                  <ArrowLink href={s.href} ariaLabel={`Read more about ${s.title}`}>
                    Read more
                  </ArrowLink>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-14">
            <ArrowLink href="/research">Explore our research</ArrowLink>
          </div>
        </div>
      </FadeIn>

      {/* Director quote on full-bleed photo band — feature rhythm */}
      <FadeIn>
        <section
          className="relative bg-cover bg-center px-8 py-32 md:py-36"
          style={{ backgroundImage: "url(/session-classroom.jpg)" }}
        >
          <div className="absolute inset-0 bg-[#002868]/85" />
          <div className="relative mx-auto max-w-3xl text-white">
            <span className="mb-6 block h-0.5 w-8 bg-[#b9975b]" />
            <blockquote className="m-0">
              <p className="m-0 font-serif text-[28px] font-normal italic leading-[1.3] md:text-[36px]">
                &ldquo;By harnessing hands-on experience and tailored mentorship, the Center empowers
                learners to practice agility in a tech-driven world.&rdquo;
              </p>
              <p className="mt-7 text-[13px] text-white/80">
                &mdash; <strong className="font-semibold text-white">Dr. Arthur M. Langer</strong>, Director
              </p>
            </blockquote>
            <div className="mt-7">
              <GhostButton href="/leadership">About Dr. Langer</GhostButton>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Student voices — pull quote treatment */}
      <FadeIn className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow label="Student voices" />
        <h2 className="mb-12 m-0 font-serif text-[28px] font-normal leading-tight text-[#111111] md:text-[36px]">
          What our graduates say
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          <FadeIn>
            <PullQuote
              quote="I got really lucky when I found this program. I realized that I actually had stronger ambitions to move up the ladder."
              name="Lee D."
              role="Program Graduate, Class of 2025"
            />
          </FadeIn>
          <FadeIn delay={80}>
            <PullQuote
              quote="Everything I learned, the perspectives I gained, and the connections I built have been invaluable."
              name="Boris F."
              role="Program Graduate, Class of 2025"
            />
          </FadeIn>
        </div>
        <div className="mt-10">
          <ArrowLink href="/experience">Read student stories</ArrowLink>
        </div>
      </FadeIn>
    </>
  );
}
