import { readFileSync } from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import { Eyebrow } from "@/components/Brand";

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

function loadMentors(): Mentor[] {
  const jsonPath = path.join(process.cwd(), "..", "data", "mentors", "mentors.json");
  return JSON.parse(readFileSync(jsonPath, "utf-8")) as Mentor[];
}

export function generateStaticParams() {
  return loadMentors().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = loadMentors().find((x) => x.slug === slug);
  if (!m) return { title: "Mentor | Center for Technology Management" };
  return {
    title: `${m.name} | Mentor | Center for Technology Management`,
    description: `${m.title}${m.company ? `, ${m.company}` : ""} — Industry mentor at the Center for Technology Management.`,
  };
}

function decodeHtml(s: string): string {
  return s.replace(/&amp;/g, "&");
}

function splitValues(val: string): string[] {
  return val.split(",").map((s) => decodeHtml(s.trim())).filter(Boolean);
}

export default async function MentorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const all = loadMentors();
  const mentor = all.find((m) => m.slug === slug);
  if (!mentor) notFound();

  const imgSrc = mentor.image
    ? `/mentors/${mentor.image.replace("images/", "")}`
    : null;

  // 3 deterministic "more mentors" — others with overlap on industry, falling back to neighbors.
  const industries = new Set(splitValues(mentor.industry));
  const others = all
    .filter((m) => m.slug !== mentor.slug)
    .map((m) => ({
      m,
      score: splitValues(m.industry).filter((i) => industries.has(i)).length,
    }))
    .sort((a, b) => b.score - a.score || a.m.name.localeCompare(b.m.name))
    .slice(0, 3)
    .map((x) => x.m);

  return (
    <>
      {/* Slim eyebrow band on navy — back link */}
      <section className="bg-[#002868] text-white">
        <div className="mx-auto max-w-7xl px-8 py-7">
          <Link
            href="/mentors"
            className="text-[12px] uppercase tracking-[0.15em] text-white/75 no-underline hover:text-white"
          >
            &larr; All Mentors
          </Link>
        </div>
      </section>

      {/* Editorial split — photo left, name + metadata right */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-8 py-16 md:grid-cols-[0.85fr_1fr]">
          <FadeIn>
            <div className="relative aspect-square w-full bg-[#f5f4f2]">
              {imgSrc ? (
                <Image
                  src={imgSrc}
                  alt={mentor.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-serif text-9xl text-[#b9975b]">
                  {mentor.name.charAt(0)}
                </div>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <div className="pt-5">
              <span className="mb-4 block h-0.5 w-8 bg-[#b9975b]" />
              <p className="wordmark wordmark--bold mb-5 text-[11px] tracking-[0.18em] text-[#b9975b]">
                Industry Mentor
              </p>
              <h1 className="m-0 font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-[#111111] md:text-[56px]">
                {mentor.name}
              </h1>
              {mentor.title && (
                <p className="mt-4 text-lg font-medium text-[#111111]">{mentor.title}</p>
              )}
              {mentor.company && (
                <p className="m-0 text-base text-[#6b6b6b]">{decodeHtml(mentor.company)}</p>
              )}

              <dl className="mt-9 border-t border-[#e2e0dc]">
                {[
                  { label: "Industry", value: mentor.industry },
                  { label: "Focus Areas", value: mentor.focus },
                  { label: "Location", value: mentor.location },
                ]
                  .filter((row) => row.value)
                  .map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-1 gap-2 border-b border-[#e2e0dc] py-4 sm:grid-cols-[160px_1fr] sm:gap-4"
                    >
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#b9975b]">
                        {row.label}
                      </dt>
                      <dd className="m-0 text-[15px] font-medium text-[#111111]">
                        {decodeHtml(row.value)}
                      </dd>
                    </div>
                  ))}
              </dl>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-block bg-[#002868] px-7 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#001a4d]"
                >
                  Request a Pairing &rarr;
                </Link>
                {mentor.linkedin && (
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-[#002868] bg-[#f7f6f3] px-7 py-3 text-[13px] font-semibold text-[#002868] transition-colors hover:bg-[#002868] hover:text-white"
                  >
                    LinkedIn &rarr;
                  </a>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Biography — editorial reading width on cream */}
      <FadeIn className="bg-[#f7f6f3]">
        <div className="mx-auto max-w-3xl px-8 py-20">
          <Eyebrow label="Biography" />
          {mentor.bio ? (
            <p className="-mt-2 text-[16px] leading-[1.75] text-[#111111]">{mentor.bio}</p>
          ) : (
            <p className="-mt-2 text-[15px] leading-[1.75] italic text-[#6b6b6b]">
              Biography will be added once mentor reviews are complete.
            </p>
          )}
        </div>
      </FadeIn>

      {/* More mentors */}
      {others.length > 0 && (
        <FadeIn className="bg-white">
          <div className="mx-auto max-w-7xl px-8 py-20">
            <Eyebrow label="More mentors" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((m) => {
                const oImg = m.image
                  ? `/mentors/${m.image.replace("images/", "")}`
                  : null;
                return (
                  <Link
                    key={m.slug}
                    href={`/mentors/${m.slug}`}
                    className="group flex border border-[#e2e0dc] bg-white p-5 text-[#111111] no-underline transition-[transform,border-color] duration-[250ms] ease-out hover:-translate-y-0.5 hover:border-[#002868]"
                  >
                    <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-[#f5f4f2]">
                      {oImg ? (
                        <Image
                          src={oImg}
                          alt={m.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover object-top"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center font-serif text-lg text-[#b9975b]">
                          {m.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-snug text-[#111111]">{m.name}</p>
                      {m.title && (
                        <p className="mt-0.5 text-[12px] leading-snug text-[#6b6b6b]">{m.title}</p>
                      )}
                      {m.company && (
                        <p className="mt-0.5 text-[12px] text-[#b9975b]">{decodeHtml(m.company)}</p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
}
