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
  title: "Break the Frame | Center for Technology Management",
};

export default function BreakTheFramePage() {
  return (
    <>
      <InteriorHero
        eyebrow="Workshop"
        title="Break the Frame"
        subtitle="Designing what doesn't yet exist: a creative playshop for leaders ready to unlearn, rethink, and rebuild."
      />

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        <FadeIn className="grid items-start gap-10 md:grid-cols-2">
          <blockquote className="pull-quote -mt-1">
            <p className="font-serif text-2xl italic leading-[1.5] text-[#111111]">
              In a world obsessed with efficiency, Break the Frame is a creative pause button.
            </p>
          </blockquote>
          <Image
            src="/program-leadership.jpg"
            alt="Break the Frame workshop session"
            width={560}
            height={360}
            className="h-64 w-full object-cover"
          />
        </FadeIn>

        <FadeIn>
          <Eyebrow label="What happens in the playshop" />
          <div className="-mt-4 grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-5">
              {[
                "Question the assumptions that hold your team back",
                "Reframe challenges into creative opportunities",
                "Translate ideas into small, testable experiments",
                "Leave with real prototypes, clear next steps, and new energy for what's ahead",
              ].map((item) => (
                <div key={item} className="flex gap-4 text-[15px] leading-[1.7] text-[#6b6b6b]">
                  <span className="text-[#b9975b] text-xl mt-0.5 flex-shrink-0">→</span>
                  {item}
                </div>
              ))}
            </div>
            <p className="text-[15px] leading-[1.7] text-[#6b6b6b]">
              Through hands-on exercises, storytelling, and rapid prototyping, participants move from
              &ldquo;what is&rdquo; to &ldquo;what if&rdquo; and leave with practical momentum to build immediately.
            </p>
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="Why it&apos;s different" />
          <div className="-mt-4 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Creative Sprint",
                body: "Ideas get permission to breathe, bend, and break. Through hands-on exercises and rapid prototyping, participants move from 'What is' to 'What if.'",
              },
              {
                title: "Storytelling Journey",
                body: "Participants explore story design — learning how to turn insights into narratives that inspire action. Where creative confidence meets communication power.",
              },
              {
                title: "Tangible Outcomes",
                body: "Expect moments of laughter, challenge, and reflection — and leave with real prototypes, a clear next-step plan, and renewed creative energy.",
              },
            ].map((v) => (
              <div key={v.title} className="border-t-2 border-[#b9975b] pt-6">
                <h3 className="mb-3 text-[15px] font-semibold text-[#111111]">{v.title}</h3>
                <p className="text-[15px] leading-[1.7] text-[#6b6b6b]">{v.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="Meet the instructor" />
          <div className="-mt-4 flex flex-col gap-8 border border-[#e2e0dc] p-8 md:flex-row">
            <div className="flex-1">
              <h3 className="mb-1 text-2xl font-serif text-[#111111]">Lyle H. Sandler</h3>
              <p className="mb-4 text-[11px] uppercase tracking-[0.15em] text-[#b9975b]">Designer · Storyteller · Anthropologist</p>
              <p className="mb-3 text-[15px] leading-[1.7] text-[#6b6b6b]">
                Lyle helps organizations reimagine how people connect with ideas, data, and environments.
                With a background in theatre, film, and design from Hofstra University and the American
                Film Institute, he has led creative transformation at global firms including Aon Corporation
                and NCR, weaving narrative thinking into strategic design.
              </p>
              <p className="text-[15px] leading-[1.7] text-[#6b6b6b]">
                Author of <em>Universal Principles of Storytelling for Designers</em> (Rockport, 2025),
                Lyle&apos;s practice blurs the lines between art, business, and human behavior.
              </p>
            </div>
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="Who should join" />
          <div className="-mt-4 grid gap-4 sm:grid-cols-3">
            {[
              "Leaders who want to spark innovation within their teams",
              "Designers and strategists seeking fresh perspectives",
              "Professionals ready to explore what could be",
            ].map((r) => (
              <div key={r} className="border border-[#e2e0dc] px-6 py-5 text-sm leading-relaxed text-[#6b6b6b]">
                {r}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="flex flex-wrap items-center justify-between gap-6 border border-[#e2e0dc] bg-[#f7f6f3] p-10 md:p-12">
          <div className="max-w-xl">
            <h2 className="mb-2 text-2xl font-serif">&ldquo;Imagination isn&apos;t a luxury — it&apos;s your next advantage.&rdquo;</h2>
            <p className="text-[15px] text-[#6b6b6b]">Contact us for workshop dates and registration.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href="/contact">Contact Us</PrimaryButton>
            <SecondaryButton href="/programs">All Programs</SecondaryButton>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
