import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { Divider, Eyebrow, GoldButton, InteriorHero } from "@/components/Brand";

export const metadata = {
  title: "Research | Teachers College",
};

const books = [
  {
    title:
      "Analysis and Design of Next-Generation Software Architectures: 5G, IoT, Blockchain, and Quantum Computing",
    publisher: "Springer Publishing, 2020",
  },
  {
    title: "Strategic Information Technology: Best Practices to Drive Digital Transformation",
    publisher: "John Wiley & Sons, 2018 (second edition)",
  },
  {
    title:
      "Information Technology and Organizational Learning: Managing Behavioral Change in the Digital Age",
    publisher: "CRC Press, 2017 (third edition)",
  },
  {
    title: "Guide to Software Development: Designing and Managing the Life Cycle",
    publisher: "Springer-Verlag, 2016 (second edition)",
  },
];

const articles = [
  {
    title: "Discovering talent in disadvantaged communities",
    where: "Youth, education and work. University of Groningen Press, 2015",
  },
  {
    title:
      "Employing young talent from underserved populations: Designing flexible organizational process for assimilation and productivity",
    where: "Journal of Organization Design (1), 2, 2013",
  },
  {
    title: "Mentoring nontraditional undergraduate students: A case study in higher education",
    where: "International Journal of Mentoring & Tutoring (18), 1, 2010",
  },
  {
    title: "Measuring self-esteem through reflective writing: Essential factors in workforce development",
    where: "Journal of Reflective Practice (10), 1, 2009",
  },
];

const masterclassPoints = [
  "Co-designed with corporate members to reflect their business priorities",
  "Facilitated by leading experts from faculty and the mentor network",
  "Bring together senior leaders, clients, and partners in one room",
  "Serve both leadership development and business development",
];

export default function ResearchPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Research"
        title="Research on how organizations learn and change"
        subtitle="Applied research carried out with partner organizations: on workforce development, technology adoption, and the practice of reflective leadership."
      />

      <div className="mx-auto max-w-3xl px-6 pt-14 pb-28">
        {/* Workforce Opportunity Services */}
        <FadeIn>
          <section id="wos" className="scroll-mt-28">
            <Eyebrow label="Workforce Opportunity Services" />
            <h2 className="m-0 mb-6 font-serif text-[28px] font-normal leading-tight text-[#111111] md:text-[36px]">
              Pathways into technology careers
            </h2>
            <div className="space-y-5 text-[15px] leading-[1.7] text-[#6b6b6b]">
              <p>
                Founded by Dr. Langer, Workforce Opportunity Services is a nonprofit that
                identifies talent from underserved communities — including veterans — and
                prepares them for high-impact careers in technology. WOS acts as an
                outsourcing partner for major corporations, placing trained professionals
                as software engineers, analysts, and more.
              </p>
              <p>
                The Center&rsquo;s research examines what makes these pathways work: how
                organizations assimilate talent from nontraditional backgrounds, how
                mentorship changes retention, and how flexible organizational processes
                turn early-career hires into productive contributors.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Image
                src="/wos-logo.png"
                alt="Workforce Opportunity Services"
                width={160}
                height={70}
                className="object-contain"
              />
              <span className="border border-dashed border-[#e2e0dc] px-4 py-2 text-xs text-[#6b6b6b]">
                Partnership details coming soon
              </span>
            </div>
          </section>
        </FadeIn>

        <Divider />

        {/* Corporate partners */}
        <FadeIn>
          <section id="partners" className="scroll-mt-28">
            <Eyebrow label="Corporate Partners" />
            <h2 className="m-0 mb-6 font-serif text-[28px] font-normal leading-tight text-[#111111] md:text-[36px]">
              Research and learning, co-designed
            </h2>
            <div className="space-y-5 text-[15px] leading-[1.7] text-[#6b6b6b]">
              <p>
                Corporate partnership is a platform that aligns business innovation with
                leadership development. Partners get direct access to emerging talent and
                tailored learning pathways; the Center gets real organizational settings in
                which to conduct assessments and action research.
              </p>
              <p>Partnership typically includes:</p>
              <ul className="space-y-2.5 pl-0">
                {[
                  "Access to a network of future-ready professionals and industry leaders",
                  "Tailored learning and development pathways for employees",
                  "Opportunities to mentor and engage with graduate students",
                  "Member-only events, forums, and innovation showcases",
                  "Faculty-led research collaborations",
                ].map((b) => (
                  <li key={b} className="flex gap-3 list-none">
                    <span className="mt-[13px] h-px w-3 flex-shrink-0 bg-[#b9975b]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <span className="inline-block border border-dashed border-[#e2e0dc] px-4 py-2 text-xs text-[#6b6b6b]">
                Partner list to be confirmed
              </span>
            </div>
          </section>
        </FadeIn>

        <Divider />

        {/* Projects and publications */}
        <FadeIn>
          <section id="projects" className="scroll-mt-28">
            <Eyebrow label="Projects & Publications" />
            <h2 className="m-0 mb-6 font-serif text-[28px] font-normal leading-tight text-[#111111] md:text-[36px]">
              Applied projects, published findings
            </h2>
            <p className="mb-10 text-[15px] leading-[1.7] text-[#6b6b6b]">
              Student and faculty projects are run inside partner organizations, and the
              findings feed published research. Over 300 student projects have been
              completed to date.
            </p>

            <p className="m-0 mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6b6b6b]">
              Selected books
            </p>
            <ul className="m-0 mb-10 space-y-5 p-0">
              {books.map((b) => (
                <li key={b.title} className="list-none border-l-[3px] border-[#e2e0dc] pl-5">
                  <p className="m-0 font-serif text-[17px] italic leading-[1.4] text-[#111111]">
                    {b.title}
                  </p>
                  <p className="m-0 mt-1.5 text-[13px] text-[#6b6b6b]">{b.publisher}</p>
                </li>
              ))}
            </ul>

            <p className="m-0 mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6b6b6b]">
              Selected articles
            </p>
            <ul className="m-0 mb-10 space-y-5 p-0">
              {articles.map((a) => (
                <li key={a.title} className="list-none border-l-[3px] border-[#e2e0dc] pl-5">
                  <p className="m-0 text-[15px] leading-[1.5] text-[#111111]">{a.title}</p>
                  <p className="m-0 mt-1.5 text-[13px] text-[#6b6b6b]">{a.where}</p>
                </li>
              ))}
            </ul>

            <p className="m-0 mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6b6b6b]">
              Journal
            </p>
            <p className="m-0 text-[15px] leading-[1.7] text-[#6b6b6b]">
              <a
                href="https://www.tandfonline.com/toc/crep20/current"
                className="font-serif text-[17px] italic text-[#002868] underline decoration-[#b9975b] underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Journal of Reflective Practice
              </a>
              <br />
              Taylor &amp; Francis Group. Edited by Dr. Arthur M. Langer, Columbia University.
            </p>
          </section>
        </FadeIn>

        <Divider />

        {/* CxO masterclass */}
        <FadeIn>
          <section id="masterclass" className="scroll-mt-28">
            <Eyebrow label="CxO Masterclass" />
            <h2 className="m-0 mb-6 font-serif text-[28px] font-normal leading-tight text-[#111111] md:text-[36px]">
              Senior-executive sessions
            </h2>
            <p className="mb-8 text-[15px] leading-[1.7] text-[#6b6b6b]">
              Masterclasses convene senior executives around a single problem, in an
              environment built for candid discussion rather than presentation. Each is
              designed with the partner organization that hosts it.
            </p>
            <ul className="m-0 space-y-3 p-0 text-[15px] leading-[1.7] text-[#6b6b6b]">
              {masterclassPoints.map((p) => (
                <li key={p} className="flex gap-3 list-none">
                  <span className="mt-[13px] h-px w-3 flex-shrink-0 bg-[#b9975b]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>
      </div>

      {/* Closing prompt */}
      <section className="bg-[#002868] text-white">
        <div className="mx-auto max-w-3xl px-8 py-24 text-center">
          <span className="mx-auto mb-6 block h-0.5 w-8 bg-[#b9975b]" />
          <p className="m-0 font-serif text-2xl leading-[1.4] md:text-[28px]">
            Interested in partnering on research with the Center?
          </p>
          <div className="mt-9 flex justify-center">
            <GoldButton href="/contact">Get in touch &rarr;</GoldButton>
          </div>
        </div>
      </section>
    </>
  );
}
