import { Suspense } from "react";
import MentorsGrid from "./MentorsGrid";
import { InteriorHero } from "@/components/Brand";
import { getMentors } from "@/lib/mentors";

export const metadata = {
  title: "Mentors | Teachers College",
};

export default function MentorsPage() {
  const mentorsData = getMentors();
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
