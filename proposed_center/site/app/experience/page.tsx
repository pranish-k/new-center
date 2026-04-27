import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  Divider,
  Eyebrow,
  InteriorHero,
  PrimaryButton,
  SecondaryButton,
} from "@/components/Brand";

export const metadata = {
  title: "Student Experience | Center for Technology Management",
};

const testimonials = [
  {
    quote:
      "I got really lucky when I found this program. I realized that I actually had stronger ambitions to move up the ladder.",
    name: "Lee D.",
    role: "MS Graduate, Class of 2025",
    context: "Transitioned from individual contributor to leadership track at Vaisala",
  },
  {
    quote:
      "I just wanted to say how much I appreciate the experience of completing my master's degree. Everything I learned, the perspectives I gained, and the connections I built have been invaluable.",
    name: "Boris F.",
    role: "MS Graduate, Class of 2025",
    context: "International Residency cohort",
  },
];

const stories = [
  {
    name: "Joe Varnas",
    company: "S&P Global",
    title: "When Traditional Strategy Planning Became the Problem",
    summary:
      "As a rising executive at S&P Global, Joe's default approach was comprehensive 3–5 year roadmaps. TMDL helped him discover that in fast-moving environments, traditional strategic planning can itself become the obstacle — and gave him the tools to lead differently.",
  },
  {
    name: "Lee Doyle",
    company: "Vaisala",
    title: "When It Came Time to Think Bigger",
    summary:
      "Lee was perfectly content as an individual contributor after eight years in technical sales. The program gave him both the skills and the confidence to pursue leadership — something he hadn't previously imagined for himself.",
  },
];

const residencyHighlights = [
  {
    location: "Flagship Residency",
    description:
      "Our signature residency brings together cohorts of senior executives for four days of immersive learning, case studies, and peer exchange alongside faculty and mentors.",
    detail: "Fall & Spring sessions · 4 days",
    image: "/session-classroom.jpg",
  },
  {
    location: "International Residency",
    description:
      "Our international residency provides a global context for digital leadership with mentors drawn from across the UK, Europe, Middle East, and Africa.",
    detail: "Annual session · 4 days",
    image: "/session-lecture.jpg",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <InteriorHero
        eyebrow="Student Experience"
        title="Real leaders. Real transformation."
        subtitle="Our students are experienced professionals who come to accelerate — not just learn. Here's what they found."
      />

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* Testimonials — pull quote treatment */}
        <section>
          <FadeIn>
            <Eyebrow label="What graduates say" />
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12 -mt-4">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 80}>
                <blockquote className="border-l-[3px] border-[#b9975b] pl-6">
                  <p className="font-serif italic text-xl text-[#111111] leading-[1.5]">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-4 text-[13px] text-[#6b6b6b]">
                    — <strong className="text-[#111111]">{t.name}</strong>, {t.role}
                  </p>
                  <p className="text-[12px] text-[#b9975b] mt-1">{t.context}</p>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </section>

        <Divider />

        {/* Student stories */}
        <section>
          <FadeIn>
            <Eyebrow label="Student Stories" />
          </FadeIn>
          <div className="-mt-4">
            {stories.map((s, i) => (
              <FadeIn key={s.name} delay={i * 80}>
                <div>
                  <div className="flex flex-col md:flex-row gap-8 py-10">
                    <div className="flex-shrink-0 md:w-48">
                      <p className="font-semibold text-[#111111] text-sm">{s.name}</p>
                      <p className="text-[12px] text-[#b9975b] mt-1">{s.company}</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-[#111111] mb-3">{s.title}</h3>
                      <p className="text-[15px] text-[#6b6b6b] leading-[1.7]">{s.summary}</p>
                    </div>
                  </div>
                  {i < stories.length - 1 && (
                    <hr className="border-0 border-t border-[#e2e0dc]" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <Divider />

        {/* Residencies */}
        <section>
          <FadeIn>
            <Eyebrow label="Experiential Learning" />
            <h2 className="text-3xl font-serif font-normal text-[#111111] leading-tight mb-10 -mt-4">Residencies</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-10">
            {residencyHighlights.map((r, i) => (
              <FadeIn key={r.location} delay={i * 80}>
                <div>
                  <Image
                    src={r.image}
                    alt={r.location}
                    width={500}
                    height={300}
                    className="w-full object-cover h-56 mb-6"
                  />
                  <h3 className="text-xl font-semibold text-[#111111] mb-1">{r.location}</h3>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#b9975b] mb-4">{r.detail}</p>
                  <p className="text-[15px] text-[#6b6b6b] leading-[1.7]">{r.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <Divider />

        {/* Who should apply */}
        <section>
          <FadeIn>
            <Eyebrow label="Who this is for" />
          </FadeIn>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 -mt-4">
            {[
              "C-Level Executives",
              "Senior Directors & VPs",
              "Entrepreneurs & Intrapreneurs",
              "Board Members",
              "Post-career Professionals",
              "Innovation Leaders",
            ].map((role, i) => (
              <FadeIn key={role} delay={i * 50}>
                <div className="border border-[#e2e0dc] px-6 py-5 text-sm font-semibold text-[#111111]">
                  {role}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <FadeIn className="flex flex-wrap gap-4 pt-4">
          <PrimaryButton href="/programs">Explore Programs</PrimaryButton>
          <SecondaryButton href="/contact">Contact Us</SecondaryButton>
        </FadeIn>
      </div>
    </>
  );
}
