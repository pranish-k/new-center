import { readFileSync } from "fs";
import path from "path";
import FadeIn from "@/components/FadeIn";
import MentorsGrid from "./MentorsGrid";

export const metadata = {
  title: "Mentors | Center for Technology Management",
};

export default function MentorsPage() {
  const jsonPath = path.join(process.cwd(), "..", "data", "mentors", "mentors.json");
  const mentorsData = JSON.parse(readFileSync(jsonPath, "utf-8"));
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1D4F91] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-28">
          <span className="block w-6 h-0.5 bg-[#b9975b] mb-3" />
          <p className="text-[11px] uppercase tracking-[0.15em] text-white/70 mb-6">
            Industry Mentors
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-normal leading-[1.1] tracking-tight max-w-2xl">
            230+ Senior Leaders.<br />One-on-One.
          </h1>
          <p className="mt-6 text-[15px] text-white/75 max-w-xl leading-[1.7]">
            Every student is matched with an experienced executive who provides personalized
            guidance, professional access, and real-world perspective throughout the program.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <FadeIn>
          <MentorsGrid mentors={mentorsData} />
        </FadeIn>
      </div>
    </>
  );
}
