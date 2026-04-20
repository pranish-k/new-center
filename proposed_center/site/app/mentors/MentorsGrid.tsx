"use client";

import Image from "next/image";
import { useState, useMemo } from "react";

type Mentor = {
  id: number;
  slug: string;
  name: string;
  title: string;
  company: string;
  industry: string;
  focus: string;
  location: string;
  linkedin: string;
  bio: string;
  image: string;
};

function splitValues(val: string): string[] {
  return val
    .split(",")
    .map((s) => s.trim().replace(/&amp;/g, "&"))
    .filter(Boolean);
}

function uniqueSorted(vals: string[]): string[] {
  return Array.from(new Set(vals)).sort();
}

function FilterSelect({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] uppercase tracking-[0.15em] text-[#6b6b6b] font-medium">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-[#e2e0dc] bg-white text-[#111111] text-sm px-3 py-2 pr-8 appearance-none focus:outline-none focus:border-[#002868] cursor-pointer"
      >
        <option value="">All</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function MentorCard({ mentor }: { mentor: Mentor }) {
  const [expanded, setExpanded] = useState(false);
  const hasPhoto = Boolean(mentor.image);
  const imgSrc = hasPhoto ? `/mentors/${mentor.image.replace("images/", "")}` : null;

  return (
    <div className="border border-[#e2e0dc] flex flex-col h-full">
        <div className="flex gap-4 p-5">
          <div className="flex-shrink-0 w-16 h-16 bg-[#f5f4f2] overflow-hidden">
            {imgSrc ? (
              <Image
                src={imgSrc}
                alt={mentor.name}
                width={64}
                height={64}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#b9975b] text-lg font-serif">
                {mentor.name.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-[#111111] text-sm leading-snug">{mentor.name}</p>
            {mentor.title && (
              <p className="text-[12px] text-[#6b6b6b] mt-0.5 leading-snug">{mentor.title}</p>
            )}
            {mentor.company && (
              <p className="text-[12px] text-[#b9975b] mt-0.5">{mentor.company}</p>
            )}
          </div>
        </div>

        <div className="px-5 pb-2 flex flex-wrap gap-1.5">
          {splitValues(mentor.industry).map((ind) => (
            <span
              key={ind}
              className="text-[10px] uppercase tracking-[0.1em] text-[#6b6b6b] border border-[#e2e0dc] px-2 py-0.5"
            >
              {ind}
            </span>
          ))}
        </div>

        {mentor.location && (
          <p className="px-5 pb-3 text-[11px] text-[#6b6b6b]">{mentor.location}</p>
        )}

        {mentor.bio && (
          <div className="px-5 pb-4 mt-auto border-t border-[#e2e0dc] pt-3">
            <p
              className={`text-[13px] text-[#6b6b6b] leading-[1.65] ${
                expanded ? "" : "line-clamp-3"
              }`}
            >
              {mentor.bio}
            </p>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="text-[11px] uppercase tracking-[0.1em] text-[#002868] mt-2 hover:text-[#b9975b] transition-colors"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          </div>
        )}

        {mentor.linkedin && (
          <div className="px-5 pb-4">
            <a
              href={mentor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-[0.1em] text-[#6b6b6b] hover:text-[#002868] transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        )}
      </div>
  );
}

export default function MentorsGrid({ mentors }: { mentors: Mentor[] }) {
  const [industryFilter, setIndustryFilter] = useState("");
  const [focusFilter, setFocusFilter] = useState("");
  const [search, setSearch] = useState("");

  const allIndustries = useMemo(
    () => uniqueSorted(mentors.flatMap((m) => splitValues(m.industry))),
    [mentors]
  );
  const allFocus = useMemo(
    () => uniqueSorted(mentors.flatMap((m) => splitValues(m.focus))),
    [mentors]
  );

  const filtered = useMemo(() => {
    return mentors.filter((m) => {
      if (industryFilter && !splitValues(m.industry).includes(industryFilter)) return false;
      if (focusFilter && !splitValues(m.focus).includes(focusFilter)) return false;
      if (search) {
        const q = search.toLowerCase();
        if (
          !m.name.toLowerCase().includes(q) &&
          !m.company.toLowerCase().includes(q) &&
          !m.title.toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [mentors, industryFilter, focusFilter, search]);

  return (
    <div>
      {/* Filter bar */}
      <div className="border-b border-[#e2e0dc] py-6 mb-10">
        <div className="flex flex-col md:flex-row gap-4 md:items-end">
          <div className="flex flex-col gap-1 flex-1 max-w-xs">
            <label className="text-[10px] uppercase tracking-[0.15em] text-[#6b6b6b] font-medium">
              Search
            </label>
            <input
              type="text"
              placeholder="Name, company, or title"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-[#e2e0dc] bg-white text-[#111111] text-sm px-3 py-2 focus:outline-none focus:border-[#002868] placeholder:text-[#bbb]"
            />
          </div>
          <FilterSelect
            label="Industry"
            options={allIndustries}
            value={industryFilter}
            onChange={setIndustryFilter}
          />
          <FilterSelect
            label="Focus Area"
            options={allFocus}
            value={focusFilter}
            onChange={setFocusFilter}
          />
          {(industryFilter || focusFilter || search) && (
            <button
              onClick={() => {
                setIndustryFilter("");
                setFocusFilter("");
                setSearch("");
              }}
              className="text-[11px] uppercase tracking-[0.1em] text-[#6b6b6b] hover:text-[#111111] transition-colors self-end pb-2.5"
            >
              Clear filters
            </button>
          )}
        </div>
        <p className="text-[12px] text-[#6b6b6b] mt-4">
          {filtered.length} of {mentors.length} mentors
        </p>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center text-[#6b6b6b] text-sm">
          No mentors match the current filters.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((m) => (
            <MentorCard key={m.id} mentor={m} />
          ))}
        </div>
      )}
    </div>
  );
}
