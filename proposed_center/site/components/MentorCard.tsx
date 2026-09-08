import Image from "next/image";
import Link from "next/link";
import { decodeEntities, mentorImageSrc, splitValues, type Mentor } from "@/lib/mentor-utils";

// Presentational only (no hooks), so both the client mentors grid and the
// server-rendered home page can use the same card.
export default function MentorCard({
  mentor,
  compact = false,
}: {
  mentor: Mentor;
  compact?: boolean;
}) {
  const imgSrc = mentorImageSrc(mentor);
  const name = decodeEntities(mentor.name);
  const title = decodeEntities(mentor.title);
  const company = decodeEntities(mentor.company);
  const industries = splitValues(mentor.industry);
  const visibleIndustries = industries.slice(0, 2);
  const extraIndustries = industries.length - visibleIndustries.length;

  return (
    <Link
      href={`/mentors/${mentor.slug}`}
      className="group flex h-full flex-col border border-[#e2e0dc] border-t-[3px] border-t-[#b9975b] bg-white text-[#111111] no-underline transition-all duration-[250ms] ease-out hover:-translate-y-[3px] hover:border-[#002868]"
    >
      <div className="relative w-full aspect-[1/1] bg-[#f7f6f3] overflow-hidden">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={name}
            fill
            sizes={
              compact
                ? "(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            }
            className="object-contain transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[#b9975b] text-5xl font-serif">
            {name.charAt(0)}
          </div>
        )}
      </div>

      <div
        className={`flex flex-1 flex-col text-center items-center ${compact ? "p-4" : "p-5"}`}
      >
        <h3
          className={`m-0 font-normal font-serif leading-[1.2] text-[#111111] transition-colors duration-[200ms] group-hover:text-[#002868] group-hover:underline decoration-[#b9975b] decoration-1 underline-offset-[6px] ${
            compact ? "text-[17px]" : "text-[22px]"
          }`}
        >
          {name}
        </h3>
        {title && (
          <p
            className={`mt-2 text-[#6b6b6b] leading-[1.5] line-clamp-2 ${
              compact ? "text-[12.5px]" : "text-[13.5px]"
            }`}
          >
            {title}
          </p>
        )}
        {company && (
          <p
            className={`mt-1 font-medium text-[#b9975b] line-clamp-1 ${
              compact ? "text-[12.5px]" : "text-[13.5px]"
            }`}
          >
            {company}
          </p>
        )}

        {/* The compact variant drops the industry chips, location and hover
            affordance: the home row is a taster, the grid is the browsing tool. */}
        {!compact && visibleIndustries.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
            {visibleIndustries.map((ind) => (
              <span
                key={ind}
                className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#002868] bg-[#002868]/[0.06] px-2.5 py-1"
              >
                {ind}
              </span>
            ))}
            {extraIndustries > 0 && (
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#002868] bg-[#002868]/[0.06] px-2.5 py-1">
                +{extraIndustries}
              </span>
            )}
          </div>
        )}

        {!compact && mentor.location && (
          <p className="mt-auto pt-3 text-[13px] text-[#6b6b6b]">
            <span className="text-[#b9975b] mr-1.5">&bull;</span>
            {mentor.location}
          </p>
        )}

        {!compact && (
          <p className="mt-3 text-[11px] uppercase tracking-[0.15em] text-[#b9975b] font-semibold opacity-0 transition-opacity duration-[200ms] group-hover:opacity-100">
            View profile &rarr;
          </p>
        )}
      </div>
    </Link>
  );
}
