"use client";

import { useEffect, useRef, useState } from "react";
import MentorCard from "@/components/MentorCard";
import type { Mentor } from "@/lib/mentor-utils";

const HOLD_MS = 6000; // time a group stays on screen
const FADE_MS = 500; // must match the duration-[500ms] class below

/**
 * Rotating four-up mentor row.
 *
 * This is the site's fifth animation, above the four-animation budget in
 * DESIGN.md §11 / UX.md §3.6. It is documented in both files. The rules that
 * keep it honest:
 *  - `prefers-reduced-motion` disables rotation entirely; the first four stay.
 *  - Rotation pauses on hover and whenever focus is inside the row, so a card
 *    never changes under the pointer or moves a link out from under the keyboard.
 *  - An explicit pause control is offered (WCAG 2.2.2).
 *  - The first group is always rendered first, so server and client agree.
 */
export default function FeaturedMentors({ groups }: { groups: Mentor[][] }) {
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(true);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reduced, setReduced] = useState(true); // assume reduced until we know
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const rotating = groups.length > 1 && !reduced && !paused && !hovered;

  useEffect(() => {
    if (!rotating) return;
    const tick = setInterval(() => {
      setShown(false);
      fadeTimer.current = setTimeout(() => {
        setIndex((i) => (i + 1) % groups.length);
        setShown(true);
      }, FADE_MS);
    }, HOLD_MS);
    return () => {
      clearInterval(tick);
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    };
  }, [rotating, groups.length]);

  const current = groups[index] ?? groups[0] ?? [];
  const canRotate = groups.length > 1 && !reduced;

  return (
    <div>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setHovered(true)}
        onBlurCapture={() => setHovered(false)}
      >
        <div
          className={`grid grid-cols-2 gap-6 transition-opacity duration-[500ms] ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transition-none sm:grid-cols-4 ${
            shown ? "opacity-100" : "opacity-0"
          }`}
        >
          {current.map((m) => (
            <MentorCard key={m.id} mentor={m} compact />
          ))}
        </div>
      </div>

      {canRotate ? (
        <div className="mt-6 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#6b6b6b] transition-colors hover:text-[#002868]"
          >
            {paused ? "Resume" : "Pause"}
          </button>
          <span aria-hidden="true" className="flex gap-1.5">
            {groups.map((_, i) => (
              <span
                key={i}
                className={`block h-0.5 w-6 transition-colors duration-300 ${
                  i === index ? "bg-[#b9975b]" : "bg-[#e2e0dc]"
                }`}
              />
            ))}
          </span>
        </div>
      ) : null}
    </div>
  );
}
