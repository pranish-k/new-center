import { readFileSync } from "fs";
import path from "path";
import { Suspense } from "react";
import MentorsGrid from "./MentorsGrid";
import { InteriorHero } from "@/components/Brand";

export const metadata = {
  title: "Mentors | Center for Technology Management",
};

export default function MentorsPage() {
  const jsonPath = path.join(process.cwd(), "..", "data", "mentors", "mentors.json");
  const mentorsData = JSON.parse(readFileSync(jsonPath, "utf-8"));
  return (
    <>
      <InteriorHero
        eyebrow="Industry Mentors"
        title="230+ Senior Leaders. One-on-One."
        subtitle="Every student is matched with an experienced executive who provides personalized guidance, professional access, and real-world perspective throughout the program."
      />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <Suspense fallback={null}>
          <MentorsGrid mentors={mentorsData} />
        </Suspense>
      </div>
    </>
  );
}
