import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  ArrowLink,
  Eyebrow,
  GoldButton,
  NavyFeatureCard,
  PhotoLedCard,
  PullQuote,
  StatsBar,
  TintedCard,
} from "@/components/Brand";

const stats = [
  { value: "230+", label: "Industry Mentors" },
  { value: "15+", label: "Countries Represented" },
  { value: "300+", label: "Student Projects" },
  { value: "25+", label: "Years of Leadership" },
];

const flagship = {
  tag: "Master's Degree",
  title: "MS in Strategic Technology Leadership",
  body: "A 30-credit hybrid program combining immersive on-ground residencies, one-on-one industry mentoring, and a 6-credit applied capstone project drawn from the student's own organization.",
  href: "/programs/ms-strategic-technology-leadership",
  image: "/session-classroom.jpg",
  meta: [
    { label: "Format", value: "Hybrid" },
    { label: "Credits", value: "30" },
    { label: "Mentors", value: "230+" },
  ],
};

const executivePrograms = [
  {
    tag: "Executive Program",
    title: "Digital Leadership Experience",
    description:
      "A flexible 6–12 month program for executives and board members navigating complex digital transformation initiatives.",
    href: "/programs/digital-leadership",
    image: "/program-mentoring.jpg",
  },
  {
    tag: "Workshop",
    title: "AI & Machine Learning Leadership",
    description:
      "A 3.5-day immersive workshop helping senior leaders build practical AI/ML implementation roadmaps.",
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
  { name: "Managing AR, VR & the Metaverse", slug: "metaverse", image: "/program-metaverse.jpg", line: "Lead the next layer of customer experience." },
  { name: "Smart City Initiatives", slug: "smart-city", image: "/hero-city.jpg", line: "Public-private patterns for connected infrastructure." },
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
  return (
    <>
      {/* Homepage hero — bold marketing, gold italic emphasis, gold CTA, director caption overlay. */}
      <section className="relative overflow-hidden bg-[#002868] text-white">
        <span className="absolute left-0 top-0 h-1 w-1/3 bg-[#b9975b]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-8 py-24 md:grid-cols-[1.05fr_1fr] md:py-32">
          <div>
            <span className="mb-4 block h-0.5 w-8 bg-[#b9975b]" />
            <p className="wordmark mb-7 text-[11px] tracking-[0.18em] text-white/70">
              Columbia University · Teachers College
            </p>
            <h1 className="m-0 font-serif text-[52px] font-normal leading-[1.02] tracking-[-0.02em] md:text-[76px]">
              Lead the next era of{" "}
              <em className="not-italic font-serif italic text-[#b9975b]">technology</em>{" "}
              &amp;
              <br className="hidden md:block" /> digital transformation.
            </h1>
            <p className="mt-7 max-w-md text-[17px] leading-[1.6] text-white/85">
              A graduate department for executives navigating disruption — with a master&rsquo;s degree,
              executive programs, and topic certificates taught by faculty and 230+ industry mentors.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <GoldButton href="/programs">Explore Programs &rarr;</GoldButton>
              <Link
                href="/contact"
                className="inline-block border border-white/50 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                Request Information
              </Link>
            </div>
          </div>

          <div className="relative h-[420px] md:-mr-8 md:h-[520px]">
            <Image
              src="/art-langer-collage.jpg"
              alt="Dr. Art Langer teaching, presenting, and at WOS graduation"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-6 left-6 right-6 border-l-[3px] border-[#b9975b] bg-[#0a1628]/85 px-5 py-4 text-white">
              <p className="m-0 mb-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white/70">
                Director
              </p>
              <p className="m-0 font-serif text-lg">Dr. Arthur M. Langer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transition banner — tight rhythm */}
      <section className="border-b border-[#e2e0dc] bg-[#f7f6f3]">
        <div className="mx-auto flex max-w-7xl items-start gap-4 px-8 py-5">
          <span className="mt-0.5 flex-shrink-0 text-base font-bold text-[#b9975b]">&rarr;</span>
          <p className="text-sm leading-relaxed text-[#6b6b6b]">
            <strong className="text-[#111111]">In transition.</strong> The Center is moving from Northeastern University to{" "}
            <strong className="text-[#111111]">Columbia University Teachers College</strong> under the continued leadership of Dr. Art Langer.
          </p>
        </div>
      </section>

      {/* Stats — navy band, dark variant per reference */}
      <FadeIn>
        <StatsBar stats={stats} dark />
      </FadeIn>

      {/* Programs — flagship feature card + 3 supporting */}
      <FadeIn className="bg-white">
        <div className="mx-auto max-w-7xl px-8 pb-10 pt-32">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <Eyebrow label="What we offer" />
              <h2 className="-mt-2 m-0 font-serif text-[44px] font-normal leading-tight tracking-[-0.015em] text-[#111111]">
                Programs for every stage of leadership.
              </h2>
            </div>
            <div className="hidden md:block">
              <ArrowLink href="/programs">View all programs</ArrowLink>
            </div>
          </div>

          <div className="mb-8">
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
          </div>

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
      </FadeIn>

      {/* Topic certificates strip on cream */}
      <FadeIn className="bg-[#f7f6f3]">
        <div className="mx-auto max-w-7xl px-8 py-24">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <Eyebrow label="Topic certificates" />
              <h2 className="-mt-2 m-0 max-w-2xl font-serif text-[36px] font-normal leading-tight tracking-[-0.01em] text-[#111111]">
                Deep-dive certificates, taught by faculty who built the field.
              </h2>
            </div>
            <div className="hidden md:block">
              <ArrowLink href="/programs">All certificates</ArrowLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
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
              <Link
                href="/leadership"
                className="inline-block border border-white/50 px-7 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-white/15"
              >
                About Dr. Langer
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Student voices — pull quote treatment */}
      <FadeIn className="mx-auto max-w-6xl px-6 py-20">
        <Eyebrow label="Student voices" />
        <h2 className="-mt-2 mb-12 m-0 font-serif text-3xl font-normal leading-tight text-[#111111]">
          What our graduates say
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          <FadeIn>
            <PullQuote
              quote="I got really lucky when I found this program. I realized that I actually had stronger ambitions to move up the ladder."
              name="Lee D."
              role="MS Graduate, Class of 2025"
            />
          </FadeIn>
          <FadeIn delay={80}>
            <PullQuote
              quote="Everything I learned, the perspectives I gained, and the connections I built have been invaluable."
              name="Boris F."
              role="MS Graduate, Class of 2025"
            />
          </FadeIn>
        </div>
        <div className="mt-10">
          <ArrowLink href="/experience">Read student stories</ArrowLink>
        </div>
      </FadeIn>

      {/* Partner logos */}
      <FadeIn className="border-t border-[#e2e0dc] py-14">
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

      {/* WOS partnership */}
      <FadeIn className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-center gap-12 border border-[#e2e0dc] p-10 md:flex-row md:p-14">
          <div className="flex-1">
            <Eyebrow label="Strategic Partnership" />
            <h2 className="-mt-2 mb-5 m-0 font-serif text-3xl font-normal leading-tight text-[#111111]">
              Workforce Opportunity Services
            </h2>
            <p className="mb-4 max-w-xl text-[15px] leading-[1.7] text-[#6b6b6b]">
              Founded by Dr. Langer, WOS is a nonprofit that identifies talent from underserved
              communities — including veterans — and prepares them for high-impact careers in
              technology. WOS acts as an outsourcing partner for major corporations, placing
              trained professionals as software engineers, analysts, and more.
            </p>
            <p className="max-w-xl text-[15px] leading-[1.7] text-[#6b6b6b]">
              WOS will partner with the new Columbia department, creating a unique pipeline that
              connects executive education with workforce development.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col items-center gap-4">
            <Image
              src="/wos-logo.png"
              alt="Workforce Opportunity Services"
              width={180}
              height={80}
              className="object-contain"
            />
            <span className="border border-dashed border-[#e2e0dc] px-4 py-2 text-center text-xs text-[#6b6b6b]">
              Partnership details coming soon
            </span>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
