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
  title: "AI & ML Leadership Workshop | Center for Technology Management",
};

const agenda = [
  {
    day: "Day 1",
    sessions: [
      "Participant introductions and identification of key AI/ML challenges at the business unit and enterprise levels",
      "Review of core AI/ML methods from both technical and strategic business perspectives",
    ],
  },
  {
    day: "Day 2",
    sessions: [
      "Development of business unit-level AI/ML implementation plans using provided templates",
      "Group feedback and collaborative review of individual plans",
    ],
  },
  {
    day: "Day 3",
    sessions: [
      "Team-based planning to address enterprise-wide challenges using AI/ML",
      "Presentation and review of team strategies for organization-level implementation",
    ],
  },
  {
    day: "Day 4",
    sessions: [
      "Final discussions on plan implementation with focus on execution and change management",
      "Summary and closing reflections",
    ],
  },
];

export default function AIMLWorkshopPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Workshop · 3.5 days"
        title="AI & Machine Learning Leadership Workshop"
        subtitle="An immersive workshop for executives and senior leaders exploring strategic AI/ML application, with actionable plans for both business units and enterprise strategy."
      />

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        <FadeIn className="grid items-start gap-10 md:grid-cols-2">
          <blockquote className="pull-quote -mt-1">
            <p className="font-serif text-2xl italic leading-[1.5] text-[#111111]">
              Understand the methods, apply them to real business challenges, and leave with an implementation roadmap.
            </p>
          </blockquote>
          <Image
            src="/program-tech.jpg"
            alt="AI workshop cohort"
            width={560}
            height={360}
            className="h-64 w-full object-cover"
          />
        </FadeIn>

        <FadeIn>
          <Eyebrow label="Workshop objectives" />
          <div className="-mt-4 grid gap-8 md:grid-cols-3">
            {[
              { title: "Understand AI/ML", body: "Learn the primary AI/ML methodologies and their best use cases across industries." },
              { title: "Apply Strategically", body: "Apply AI/ML thinking to solve critical issues within a business unit and enterprise context." },
              { title: "Build a Roadmap", body: "Develop an implementation roadmap including leadership and change management considerations." },
            ].map((o) => (
              <div key={o.title} className="border-t-2 border-[#b9975b] pt-6">
                <h3 className="mb-3 text-[15px] font-semibold text-[#111111]">{o.title}</h3>
                <p className="text-[15px] leading-[1.7] text-[#6b6b6b]">{o.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="Agenda" />
          <div className="-mt-4 grid gap-6 md:grid-cols-2">
            {agenda.map((d) => (
              <div key={d.day} className="border border-[#e2e0dc] p-6">
                <p className="mb-4 text-[11px] uppercase tracking-[0.15em] text-[#b9975b]">{d.day}</p>
                <ul className="space-y-3">
                  {d.sessions.map((s) => (
                    <li key={s} className="flex gap-3 text-[15px] leading-[1.7] text-[#6b6b6b]">
                      <span className="text-[#b9975b] mt-0.5 flex-shrink-0">—</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        <Divider />

        <FadeIn>
          <Eyebrow label="Who should attend" />
          <div className="-mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {["C-Suite Executives", "Senior Directors & VPs", "Chief Information Officers", "Chief Digital Officers", "Strategy Leaders", "Innovation Teams"].map((r) => (
              <div key={r} className="border border-[#e2e0dc] px-5 py-4 text-sm font-semibold text-[#111111]">
                {r}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="flex flex-wrap items-center justify-between gap-6 border border-[#e2e0dc] bg-[#f7f6f3] p-10 md:p-12">
          <div className="max-w-xl">
            <h2 className="mb-2 text-2xl font-serif">Bring AI strategy into your organization</h2>
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
