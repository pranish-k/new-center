"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const PAGE_SIZE = 21;

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

function parseLocation(loc: string): { city: string; state: string; country: string } {
  const parts = loc.split(",").map((s) => s.trim()).filter(Boolean);
  if (parts.length >= 3) return { city: parts[0], state: parts[1], country: parts[2] };
  if (parts.length === 2) return { city: parts[0], state: "", country: parts[1] };
  if (parts.length === 1) return { city: "", state: "", country: parts[0] };
  return { city: "", state: "", country: "" };
}

function getPageNumbers(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "…")[] = [1];
  const left = Math.max(2, current - 1);
  const right = Math.min(total - 1, current + 1);
  if (left > 2) pages.push("…");
  for (let p = left; p <= right; p++) pages.push(p);
  if (right < total - 1) pages.push("…");
  pages.push(total);
  return pages;
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
        className="border border-[#e2e0dc] bg-white text-[#111111] text-sm px-3 py-2.5 pr-8 appearance-none focus:outline-none focus:border-[#002868] cursor-pointer"
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

function ActiveChip({ label, value, onClear }: { label: string; value: string; onClear: () => void }) {
  return (
    <span className="inline-flex items-center gap-2 border border-[#e2e0dc] bg-white px-3 py-1 text-[12px] text-[#111111]">
      <span className="text-[#6b6b6b]">{label}:</span>
      <span className="font-medium">{value}</span>
      <button
        type="button"
        onClick={onClear}
        aria-label={`Clear ${label} filter`}
        className="ml-1 text-[#6b6b6b] hover:text-[#002868] transition-colors leading-none"
      >
        &times;
      </button>
    </span>
  );
}

function MentorCard({ mentor }: { mentor: Mentor }) {
  const hasPhoto = Boolean(mentor.image);
  const imgSrc = hasPhoto ? `/mentors/${mentor.image.replace("images/", "")}` : null;
  const industries = splitValues(mentor.industry);
  const visibleIndustries = industries.slice(0, 2);
  const extraIndustries = industries.length - visibleIndustries.length;

  return (
    <Link
      href={`/mentors/${mentor.slug}`}
      className="group flex h-full flex-col border border-[#e2e0dc] border-t-2 border-t-[#b9975b] bg-white text-[#111111] no-underline transition-transform duration-[250ms] ease-out hover:-translate-y-[3px]"
    >
      <div className="relative w-full aspect-[4/5] bg-[#f5f4f2] overflow-hidden">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={mentor.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[#b9975b] text-5xl font-serif">
            {mentor.name.charAt(0)}
          </div>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/35 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-serif text-[19px] leading-[1.2] text-[#111111]">{mentor.name}</p>
        {mentor.title && (
          <p className="mt-2 text-[12.5px] text-[#6b6b6b] leading-[1.45] line-clamp-2">
            {mentor.title}
          </p>
        )}
        {mentor.company && (
          <p className="mt-1 text-[12.5px] font-medium text-[#b9975b] truncate">{mentor.company}</p>
        )}

        {visibleIndustries.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {visibleIndustries.map((ind) => (
              <span
                key={ind}
                className="text-[11px] uppercase tracking-[0.1em] text-[#6b6b6b] border border-[#e2e0dc] px-2 py-0.5"
              >
                {ind}
              </span>
            ))}
            {extraIndustries > 0 && (
              <span className="text-[11px] uppercase tracking-[0.1em] text-[#b9975b] border border-[#e2e0dc] px-2 py-0.5">
                +{extraIndustries}
              </span>
            )}
          </div>
        )}

        {mentor.location && (
          <p className="mt-auto pt-3 text-[12px] text-[#6b6b6b]">
            <span className="text-[#b9975b] mr-1.5">&bull;</span>
            {mentor.location}
          </p>
        )}
      </div>
    </Link>
  );
}

function Pagination({
  page,
  totalPages,
  start,
  end,
  filteredTotal,
  grandTotal,
  onChange,
}: {
  page: number;
  totalPages: number;
  start: number;
  end: number;
  filteredTotal: number;
  grandTotal: number;
  onChange: (p: number) => void;
}) {
  if (totalPages <= 1) return null;
  const pages = getPageNumbers(page, totalPages);
  const prevDisabled = page <= 1;
  const nextDisabled = page >= totalPages;

  return (
    <div className="mt-12 flex flex-col items-center gap-3 border-t border-[#e2e0dc] pt-8">
      <div className="flex items-center gap-2 flex-wrap justify-center">
        <button
          type="button"
          disabled={prevDisabled}
          onClick={() => onChange(page - 1)}
          className="h-9 px-3 border border-[#e2e0dc] text-[11px] uppercase tracking-[0.1em] text-[#6b6b6b] hover:border-[#002868] hover:text-[#111111] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#e2e0dc] disabled:hover:text-[#6b6b6b]"
        >
          &lsaquo; Prev
        </button>
        {pages.map((p, i) =>
          p === "…" ? (
            <span
              key={`ellipsis-${i}`}
              className="w-9 h-9 flex items-center justify-center text-[#6b6b6b] text-sm"
            >
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              aria-current={p === page ? "page" : undefined}
              onClick={() => onChange(p)}
              className={
                p === page
                  ? "w-9 h-9 border border-[#002868] bg-[#002868] text-white text-sm flex items-center justify-center"
                  : "w-9 h-9 border border-[#e2e0dc] text-[#111111] text-sm flex items-center justify-center hover:border-[#002868] transition-colors"
              }
            >
              {p}
            </button>
          )
        )}
        <button
          type="button"
          disabled={nextDisabled}
          onClick={() => onChange(page + 1)}
          className="h-9 px-3 border border-[#e2e0dc] text-[11px] uppercase tracking-[0.1em] text-[#6b6b6b] hover:border-[#002868] hover:text-[#111111] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-[#e2e0dc] disabled:hover:text-[#6b6b6b]"
        >
          Next &rsaquo;
        </button>
      </div>
      <p className="text-[12px] text-[#6b6b6b]">
        Showing {start}&ndash;{end} of {filteredTotal}
        {filteredTotal !== grandTotal ? ` (${grandTotal} total)` : ""}
      </p>
    </div>
  );
}

export default function MentorsGrid({ mentors }: { mentors: Mentor[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [industryFilter, setIndustryFilter] = useState("");
  const [focusFilter, setFocusFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [search, setSearch] = useState("");

  const initialPage = (() => {
    const raw = searchParams.get("page");
    if (!raw) return 1;
    const n = parseInt(raw, 10);
    return Number.isFinite(n) && n >= 1 ? n : 1;
  })();
  const [page, setPage] = useState(initialPage);

  const topRef = useRef<HTMLDivElement>(null);

  const allIndustries = useMemo(
    () => uniqueSorted(mentors.flatMap((m) => splitValues(m.industry))),
    [mentors]
  );
  const allFocus = useMemo(
    () => uniqueSorted(mentors.flatMap((m) => splitValues(m.focus))),
    [mentors]
  );
  const allCities = useMemo(
    () =>
      uniqueSorted(
        mentors.map((m) => parseLocation(m.location).city).filter(Boolean)
      ),
    [mentors]
  );
  const allStates = useMemo(
    () =>
      uniqueSorted(
        mentors.map((m) => parseLocation(m.location).state).filter(Boolean)
      ),
    [mentors]
  );
  const allCountries = useMemo(
    () =>
      uniqueSorted(
        mentors.map((m) => parseLocation(m.location).country).filter(Boolean)
      ),
    [mentors]
  );

  const filtered = useMemo(() => {
    return mentors.filter((m) => {
      if (industryFilter && !splitValues(m.industry).includes(industryFilter)) return false;
      if (focusFilter && !splitValues(m.focus).includes(focusFilter)) return false;
      if (cityFilter || stateFilter || countryFilter) {
        const loc = parseLocation(m.location);
        if (cityFilter && loc.city !== cityFilter) return false;
        if (stateFilter && loc.state !== stateFilter) return false;
        if (countryFilter && loc.country !== countryFilter) return false;
      }
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
  }, [mentors, industryFilter, focusFilter, cityFilter, stateFilter, countryFilter, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
    const params = new URLSearchParams(searchParams.toString());
    if (params.has("page")) {
      params.delete("page");
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [industryFilter, focusFilter, cityFilter, stateFilter, countryFilter, search]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const start = filtered.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const end = Math.min(page * PAGE_SIZE, filtered.length);

  const goToPage = (next: number) => {
    const clamped = Math.min(Math.max(1, next), totalPages);
    setPage(clamped);
    const params = new URLSearchParams(searchParams.toString());
    if (clamped > 1) {
      params.set("page", String(clamped));
    } else {
      params.delete("page");
    }
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* Filter bar */}
      <div
        ref={topRef}
        className="border border-[#e2e0dc] bg-[#f7f6f3] px-6 py-7 md:px-8 md:py-8 mb-12 scroll-mt-24"
      >
        <div className="flex items-center justify-between gap-4">
          <p className="wordmark wordmark--bold text-[11px] tracking-[0.18em] text-[#b9975b]">
            Filter Mentors
          </p>
          <p className="text-[12px] text-[#6b6b6b]">
            {filtered.length} of {mentors.length} mentors
          </p>
        </div>
        <div className="mt-3 mb-5 border-t border-[#b9975b]/30" />

        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6b6b6b]"
          >
            <circle cx="9" cy="9" r="6" />
            <path d="m17 17-3.5-3.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search by name, company, or title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-[#e2e0dc] bg-white text-[#111111] text-[15px] pl-10 pr-3 py-3 focus:outline-none focus:border-[#002868] placeholder:text-[#9c9c9c]"
          />
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
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
          <FilterSelect
            label="City"
            options={allCities}
            value={cityFilter}
            onChange={setCityFilter}
          />
          <FilterSelect
            label="State"
            options={allStates}
            value={stateFilter}
            onChange={setStateFilter}
          />
          <FilterSelect
            label="Country"
            options={allCountries}
            value={countryFilter}
            onChange={setCountryFilter}
          />
        </div>

        {(industryFilter ||
          focusFilter ||
          cityFilter ||
          stateFilter ||
          countryFilter ||
          search) && (
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {search && (
              <ActiveChip label="Search" value={search} onClear={() => setSearch("")} />
            )}
            {industryFilter && (
              <ActiveChip
                label="Industry"
                value={industryFilter}
                onClear={() => setIndustryFilter("")}
              />
            )}
            {focusFilter && (
              <ActiveChip label="Focus" value={focusFilter} onClear={() => setFocusFilter("")} />
            )}
            {cityFilter && (
              <ActiveChip label="City" value={cityFilter} onClear={() => setCityFilter("")} />
            )}
            {stateFilter && (
              <ActiveChip label="State" value={stateFilter} onClear={() => setStateFilter("")} />
            )}
            {countryFilter && (
              <ActiveChip
                label="Country"
                value={countryFilter}
                onClear={() => setCountryFilter("")}
              />
            )}
            <button
              onClick={() => {
                setIndustryFilter("");
                setFocusFilter("");
                setCityFilter("");
                setStateFilter("");
                setCountryFilter("");
                setSearch("");
              }}
              className="ml-auto text-[11px] uppercase tracking-[0.1em] text-[#6b6b6b] hover:text-[#111111] transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center text-[#6b6b6b] text-sm">
          No mentors match the current filters.
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((m) => (
              <MentorCard key={m.id} mentor={m} />
            ))}
          </div>
          <Pagination
            page={page}
            totalPages={totalPages}
            start={start}
            end={end}
            filteredTotal={filtered.length}
            grandTotal={mentors.length}
            onChange={goToPage}
          />
        </>
      )}
    </div>
  );
}
