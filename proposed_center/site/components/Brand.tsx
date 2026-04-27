import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export function Eyebrow({
  label,
  dark = false,
  className = "",
}: {
  label: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-8 ${className}`.trim()}>
      <span className="block h-0.5 w-6 bg-[#b9975b]" />
      <p
        className={`mt-3 text-[11px] font-medium uppercase tracking-[0.15em] ${
          dark ? "text-white/70" : "text-[#6b6b6b]"
        }`}
      >
        {label}
      </p>
    </div>
  );
}

export function InteriorHero({
  eyebrow,
  title,
  subtitle,
  actions,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="relative bg-[#002868] text-white">
      <span className="absolute left-0 top-0 h-[3px] w-20 bg-[#b9975b]" />
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <p className="wordmark wordmark--bold mb-6 text-[11px] tracking-[0.18em] text-white/70">
          {eyebrow}
        </p>
        <h1 className="max-w-2xl text-5xl font-normal leading-[1.08] tracking-tight md:text-[56px]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-xl text-[15px] leading-[1.7] text-white/75">{subtitle}</p>
        ) : null}
        {actions ? <div className="mt-10 flex flex-wrap gap-4">{actions}</div> : null}
      </div>
    </section>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return <hr className={`my-16 border-0 border-t border-[#e2e0dc] ${className}`.trim()} />;
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="group inline-flex w-fit items-center gap-1 text-sm text-[#002868] underline hover:no-underline">
      {children}
      <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-[3px]">
        &rarr;
      </span>
    </Link>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block bg-[#002868] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#001a4d]"
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block border border-[#002868] bg-[#f7f6f3] px-7 py-3 text-sm font-semibold text-[#002868] transition-colors hover:bg-[#002868] hover:text-white"
    >
      {children}
    </Link>
  );
}

// Gold accent CTA — use sparingly (1 per page max). Dark text on gold for AA.
export function GoldButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block bg-[#b9975b] px-8 py-4 text-sm font-semibold tracking-[0.02em] text-[#0a1628] transition-colors hover:bg-[#a8864a]"
    >
      {children}
    </Link>
  );
}

// ProgramHero — large interior hero with overlapping photo card on the right (program detail pages).
export function ProgramHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  meta = [],
  actions,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  meta?: { label: string; value: string }[];
  actions?: ReactNode;
}) {
  return (
    <section className="relative bg-[#002868] pb-20 text-white">
      <span className="absolute left-0 top-0 h-[3px] w-20 bg-[#b9975b]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-14 px-8 pt-20 md:grid-cols-2 md:pt-24">
        <div className="pb-8">
          <p className="wordmark wordmark--bold mb-5 text-[11px] tracking-[0.18em] text-[#b9975b]">
            {eyebrow}
          </p>
          <h1 className="m-0 font-serif text-[44px] font-normal leading-[1.05] tracking-tight md:text-[56px]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-md text-[16px] leading-[1.6] text-white/85">{subtitle}</p>
          ) : null}
          {meta.length > 0 ? (
            <div className="mt-9 flex flex-wrap gap-9 border-t border-white/15 pt-5">
              {meta.map((m) => (
                <div key={m.label}>
                  <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#b9975b]">
                    {m.label}
                  </p>
                  <p className="m-0 mt-1 text-sm font-medium text-white">{m.value}</p>
                </div>
              ))}
            </div>
          ) : null}
          {actions ? <div className="mt-8 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
        <div className="relative -mb-20 h-[380px] md:h-[480px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

// NavyFeatureCard — the ONE bold feature CTA per page (flagship MS, etc.).
export function NavyFeatureCard({
  eyebrow,
  title,
  body,
  ctaLabel,
  href,
  image,
  imageAlt = "",
  meta = [],
}: {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  href: string;
  image?: string;
  imageAlt?: string;
  meta?: { label: string; value: string }[];
}) {
  return (
    <Link
      href={href}
      className={`group relative grid bg-[#002868] text-white no-underline overflow-hidden ${
        image ? "md:grid-cols-[1.1fr_1fr]" : "grid-cols-1"
      }`}
    >
      <div className="relative px-10 py-12 md:px-14 md:py-14">
        <span className="mb-5 block h-0.5 w-8 bg-[#b9975b]" />
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.15em] text-white/75">
          {eyebrow}
        </p>
        <h2 className="m-0 mb-5 font-serif text-3xl font-normal leading-[1.15] tracking-tight md:text-4xl">
          {title}
        </h2>
        <p className="m-0 mb-7 max-w-md text-[15px] leading-[1.65] text-white/85">{body}</p>
        {meta.length > 0 ? (
          <div className="mb-7 flex flex-wrap gap-8">
            {meta.map((m) => (
              <div key={m.label}>
                <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#b9975b]">
                  {m.label}
                </p>
                <p className="m-0 mt-1 text-sm font-medium text-white">{m.value}</p>
              </div>
            ))}
          </div>
        ) : null}
        <span className="inline-flex items-center gap-2 bg-[#b9975b] px-7 py-3 text-[13px] font-semibold tracking-[0.02em] text-[#0a1628]">
          {ctaLabel}
          <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-[3px]">
            &rarr;
          </span>
        </span>
      </div>
      {image ? (
        <div className="relative min-h-[260px] md:min-h-[380px]">
          <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
        </div>
      ) : null}
    </Link>
  );
}

// PhotoLedCard — marquee card. Photo top, off-white content block, larger serif H3.
export function PhotoLedCard({
  href,
  image,
  imageAlt = "",
  tag,
  title,
  description,
  ratio = 0.62,
}: {
  href: string;
  image: string;
  imageAlt?: string;
  tag: string;
  title: string;
  description: string;
  ratio?: number;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col bg-[#f7f6f3] text-[#111111] no-underline transition-transform duration-[250ms] ease-out hover:-translate-y-[3px]"
    >
      <div
        className="relative w-full overflow-hidden bg-[#1D4F91]"
        style={{ paddingTop: `${ratio * 100}%` }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#b9975b]">
          {tag}
        </p>
        <h3 className="m-0 mb-3 font-serif text-[22px] font-normal leading-[1.25] tracking-[-0.005em] text-[#111111]">
          {title}
        </h3>
        <p className="m-0 flex-1 text-sm leading-[1.55] text-[#6b6b6b]">{description}</p>
        <p className="mt-5 text-[13px] font-semibold tracking-[0.02em] text-[#002868]">
          Learn more{" "}
          <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-[3px]">
            &rarr;
          </span>
        </p>
      </div>
    </Link>
  );
}

// TintedCard — uniform certificate/topic grid item. Photo header + cream content block + gold rule.
export function TintedCard({
  href,
  image,
  imageAlt = "",
  tag = "Certificate",
  name,
  line,
}: {
  href: string;
  image?: string;
  imageAlt?: string;
  tag?: string;
  name: string;
  line?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden border border-[#e2e0dc] bg-white text-[#111111] no-underline transition-[transform,border-color] duration-[250ms] ease-out hover:-translate-y-[3px] hover:border-[#002868]"
    >
      {image ? (
        <div className="relative w-full overflow-hidden bg-[#1D4F91]" style={{ paddingTop: "62%" }}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      ) : null}
      <div
        className={`relative flex flex-1 flex-col px-6 py-5 ${
          image ? "border-t-2 border-[#b9975b]" : ""
        }`}
      >
        {!image ? (
          <span className="absolute left-6 right-6 top-0 h-0.5 bg-[#b9975b]" />
        ) : null}
        <p className="mb-3 mt-2 text-[11px] font-medium uppercase tracking-[0.15em] text-[#6b6b6b]">
          {tag}
        </p>
        <h4 className="m-0 mb-2.5 font-serif text-[19px] font-normal leading-[1.25] text-[#111111]">
          {name}
        </h4>
        {line ? (
          <p className="m-0 flex-1 text-[13px] leading-[1.55] text-[#6b6b6b]">{line}</p>
        ) : null}
        <p className="mt-5 text-xs font-semibold tracking-[0.02em] text-[#002868]">
          Read syllabus{" "}
          <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-[3px]">
            &rarr;
          </span>
        </p>
      </div>
    </Link>
  );
}

// StatsBar — 4 numbers across. Serif navy on light, white on navy when dark.
export function StatsBar({
  stats,
  dark = false,
}: {
  stats: { value: string; label: string }[];
  dark?: boolean;
}) {
  return (
    <div className={dark ? "bg-[#002868] text-white" : "text-[#111111]"}>
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className={`m-0 font-serif text-[44px] font-normal leading-none ${
                  dark ? "text-white" : "text-[#002868]"
                }`}
              >
                {s.value}
              </p>
              <p
                className={`m-0 mt-3 text-[11px] font-medium uppercase tracking-[0.15em] ${
                  dark ? "text-white/70" : "text-[#6b6b6b]"
                }`}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// PullQuote — 3px gold left rule, Georgia italic.
export function PullQuote({
  quote,
  name,
  role,
  large = false,
}: {
  quote: string;
  name?: string;
  role?: string;
  large?: boolean;
}) {
  return (
    <blockquote className="m-0 border-l-[3px] border-[#b9975b] pl-6">
      <p
        className={`m-0 max-w-2xl font-serif font-normal italic leading-[1.5] text-[#111111] ${
          large ? "text-2xl md:text-[26px]" : "text-xl"
        }`}
      >
        &ldquo;{quote}&rdquo;
      </p>
      {name ? (
        <p className="mt-4 text-[13px] text-[#6b6b6b]">
          &mdash; <strong className="font-semibold text-[#111111]">{name}</strong>
          {role ? `, ${role}` : null}
        </p>
      ) : null}
    </blockquote>
  );
}
