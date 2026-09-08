import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import FeaturedMentors from "@/components/FeaturedMentors";
import {
  ArrowLink,
  Eyebrow,
  GhostButton,
  GoldButton,
  NavyFeatureCard,
  PullQuote,
  StatsBar,
  TintedCard,
} from "@/components/Brand";
import { INSTITUTION } from "@/lib/brand";
import { getFeaturedMentorGroups } from "@/lib/mentors";

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

// Research activities, stacked vertically with the media panel on the left.
// The panel handles four shapes so logos of very different proportions sit
// together cleanly: Nutanix is 7.7:1, FieldAI 1.9:1, a journal cover 0.7:1.
type StrandMedia =
  | { kind: "photo"; src: string; alt: string }
  | { kind: "logo"; src: string; alt: string }
  | { kind: "cover"; src: string; alt: string }
  | { kind: "logos"; items: { src: string; alt: string; cap: string; w: number; h: number }[] }
  | { kind: "pending"; note: string };

const researchStrands: {
  title: string;
  body: string;
  href: string;
  media: StrandMedia;
}[] = [
  {
    title: "Workforce Opportunity Services",
    body: "Research on workforce development and the pathways that carry talent from underserved communities into technology careers. WOS places trained professionals with major corporations; the Center studies what makes those placements hold.",
    href: "/research#wos",
    media: { kind: "logo", src: "/wos-logo.png", alt: "Workforce Opportunity Services" },
  },
  {
    title: "Corporate Partners",
    body: "Partner organizations co-design research, masterclasses, and applied learning with the Center, giving faculty and students real organizational settings for assessment and action research.",
    href: "/research#partners",
    media: {
      kind: "logos",
      items: [
        { src: "/logo-nutanix.png", alt: "Nutanix", cap: "max-h-8 md:max-h-9", w: 1066, h: 138 },
        { src: "/logo-fieldai.png", alt: "FieldAI", cap: "max-h-12 md:max-h-14", w: 2000, h: 1047 },
      ],
    },
  },
  {
    title: "Projects & Publications",
    body: "Applied projects run inside partner organizations feed published research, nine books, and the International Journal of Reflective Practice, edited at Columbia by Dr. Langer.",
    href: "/research#projects",
    media: {
      kind: "cover",
      src: "/journal-reflective-practice.png",
      alt: "Reflective Practice journal, International and Multidisciplinary Perspectives",
    },
  },
  {
    title: "CxO Masterclass",
    body: "Curated senior-executive sessions built around a single problem, facilitated by leading experts and designed with the partner organization that hosts them.",
    href: "/research#masterclass",
    media: {
      kind: "photo",
      src: "/research-masterclass.png",
      alt: "Dr. Arthur M. Langer presenting at a Center session",
    },
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
  const mentorGroups = getFeaturedMentorGroups();

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
            <StatsBar stats={stats} ruled />
          </div>

          <div className="mt-10">
            <FeaturedMentors groups={mentorGroups} />
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
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
            {partnerLogos.map((l) => (
              <Image
                key={l.alt}
                src={l.src}
                alt={l.alt}
                width={180}
                height={80}
                className="h-12 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:h-16"
              />
            ))}
          </div>
        </div>
      </FadeIn>

      {/* What we offer — one flagship program at hero scale, full-bleed. */}
      <FadeIn className="bg-white">
        <div className="mx-auto max-w-7xl px-8 pt-28">
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
        </div>
        <NavyFeatureCard
          feature
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

      {/* Workshops & topic certificates */}
      <FadeIn className="bg-white">
        <div className="mx-auto max-w-7xl px-8 pb-24 pt-28">
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

          <div className="mt-16 border-t border-[#e2e0dc]">
            {researchStrands.map((s, i) => (
              <FadeIn key={s.title} delay={i * 40}>
                <article className="grid items-start gap-8 border-b border-[#e2e0dc] py-12 md:grid-cols-[340px_1fr] md:gap-14">
                  {/* Media panel — photo, single logo, multiple logos, a
                      publication cover, or a marked gap awaiting an asset */}
                  <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden border border-[#e2e0dc] bg-white">
                    {s.media.kind === "photo" ? (
                      <Image
                        src={s.media.src}
                        alt={s.media.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 340px"
                      />
                    ) : s.media.kind === "logo" ? (
                      <Image
                        src={s.media.src}
                        alt={s.media.alt}
                        fill
                        className="object-contain p-10"
                        sizes="(max-width: 768px) 100vw, 340px"
                      />
                    ) : s.media.kind === "cover" ? (
                      <Image
                        src={s.media.src}
                        alt={s.media.alt}
                        fill
                        className="object-contain p-6"
                        sizes="(max-width: 768px) 100vw, 340px"
                      />
                    ) : s.media.kind === "logos" ? (
                      // Each logo keeps its own height cap, so a very wide mark
                      // and a squarer one read at the same optical weight.
                      <div className="flex w-full flex-col items-center justify-center gap-7 px-10 py-8">
                        {s.media.items.map((l) => (
                          <Image
                            key={l.alt}
                            src={l.src}
                            alt={l.alt}
                            width={l.w}
                            height={l.h}
                            className={`h-auto w-auto max-w-[75%] object-contain ${l.cap}`}
                          />
                        ))}
                      </div>
                    ) : (
                      <span className="absolute inset-4 flex items-center justify-center border border-dashed border-[#e2e0dc] px-4 text-center text-[11px] font-medium uppercase tracking-[0.15em] text-[#6b6b6b]">
                        {s.media.note}
                      </span>
                    )}
                  </div>

                  <div className="md:pt-2">
                    <span className="mb-4 block h-0.5 w-8 bg-[#b9975b]" />
                    <h3 className="m-0 mb-4 font-serif text-[24px] font-normal leading-snug text-[#111111]">
                      {s.title}
                    </h3>
                    <p className="m-0 mb-6 max-w-xl text-[15px] leading-[1.7] text-[#6b6b6b]">
                      {s.body}
                    </p>
                    <ArrowLink href={s.href} ariaLabel={`Read more about ${s.title}`}>
                      Read more
                    </ArrowLink>
                  </div>
                </article>
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
