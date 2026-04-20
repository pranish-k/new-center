import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Leadership | Center for Technology Management",
};

const books = [
  {
    title: "Analysis and Design of Next Generation Software Architectures",
    subtitle: "5G, IoT, Blockchain and Quantum Computing",
    year: "2020",
    publisher: "Springer",
  },
  {
    title: "Strategic Information Technology: Best Practices to Drive Digital Transformation",
    subtitle: "2nd Edition, with Lyle Yorks",
    year: "2018",
    publisher: "Wiley",
  },
  {
    title: "Information Technology and Organizational Learning",
    subtitle: "3rd Edition",
    year: "2018",
    publisher: "CRC Press",
  },
  {
    title: "Guide to Software Development: Designing and Managing the Life Cycle",
    subtitle: "2nd Edition",
    year: "2016",
    publisher: "Springer",
  },
];

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="mb-8">
      <span className="block w-6 h-0.5 bg-[#b9975b] mb-3" />
      <p className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] font-medium">{label}</p>
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <>
      {/* Dark typographic hero */}
      <section className="bg-[#0a1628] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-28">
          <span className="block w-6 h-0.5 bg-[#b9975b] mb-3" />
          <p className="text-[11px] uppercase tracking-[0.15em] text-blue-300/60 mb-6">Leadership</p>
          <h1 className="text-5xl md:text-6xl font-serif font-normal leading-[1.1] tracking-tight max-w-2xl">
            Dr. Arthur M. Langer
          </h1>
          <p className="mt-4 text-[15px] text-blue-200/70 max-w-xl leading-[1.7]">
            Director · Professor of Practice · Columbia University Teachers College
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Bio section */}
        <div className="flex flex-col md:flex-row gap-14 mb-20">
          <div className="flex-shrink-0">
            <Image
              src="/art-langer.jpg"
              alt="Dr. Arthur M. Langer"
              width={260}
              height={260}
              className="object-cover w-56 h-56 md:w-64 md:h-64"
            />
            <div className="mt-5 space-y-1.5 text-[13px] text-[#6b6b6b]">
              <p>Columbia University, New York</p>
              <p>7 Published Books</p>
              <p>Former: Northeastern University</p>
            </div>
          </div>

          <div className="flex-1 space-y-5 text-[#6b6b6b] leading-[1.7] text-[15px]">
            <p>
              Dr. Arthur M. Langer is a world-renowned authority on technology management,
              digital transformation, and organizational learning. He leads the Center for
              Technology Management and Digital Leadership, currently in transition from
              Northeastern University to Columbia University Teachers College.
            </p>
            <p>
              Prior to Northeastern, Dr. Langer served as Director of the Center for Technology
              Management at Columbia University, where he was also Professor of Professional
              Practice, Academic Director of the MS in Technology Management programs, and
              a faculty member in the Department of Organization and Leadership at Teachers
              College — the institution he now returns to.
            </p>
            <p>
              His research spans software architecture, digital transformation strategy,
              IT organizational integration, mentoring, and workforce development for
              underserved populations. He has consulted with corporations and universities
              across the globe on technology, staff development, and curriculum design.
            </p>
            <p>
              Before entering academia, Dr. Langer was Executive Director of Computer Support
              Services at Coopers &amp; Lybrand, General Manager and Partner of Software Plus,
              and President of Macco Software.
            </p>
            <blockquote className="border-l-[3px] border-[#b9975b] pl-6 mt-8">
              <p className="font-serif italic text-xl text-[#111111] leading-[1.5]">
                "By harnessing the power of hands-on experience and tailored mentorship,
                the Center empowers its network of learners to practice agility in a
                tech-driven world."
              </p>
            </blockquote>
          </div>
        </div>

        <hr className="border-0 border-t border-[#e2e0dc] mb-20" />

        {/* Collage */}
        <div className="mb-20">
          <Eyebrow label="In action" />
          <Image
            src="/art-langer-collage.jpg"
            alt="Dr. Langer teaching, presenting, and at WOS graduation"
            width={900}
            height={506}
            className="w-full"
          />
          <p className="text-[12px] text-[#6b6b6b] mt-3 text-center">
            Dr. Langer in classroom sessions, executive workshops, and at a WOS graduation ceremony
          </p>
        </div>

        <hr className="border-0 border-t border-[#e2e0dc] mb-20" />

        {/* Books */}
        <div className="mb-20">
          <Eyebrow label="Selected Publications" />
          <div className="grid md:grid-cols-2 gap-5 -mt-4">
            {books.map((b) => (
              <div key={b.title} className="border border-[#e2e0dc] p-6 flex gap-4">
                <div className="flex-shrink-0 w-0.5 bg-[#b9975b]" />
                <div>
                  <p className="font-semibold text-[#111111] text-sm leading-snug">{b.title}</p>
                  <p className="text-[12px] text-[#6b6b6b] mt-1">{b.subtitle}</p>
                  <p className="text-[12px] text-[#6b6b6b] mt-2">{b.publisher} · {b.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-0 border-t border-[#e2e0dc] mb-20" />

        {/* WOS */}
        <div className="flex flex-col md:flex-row gap-10 items-center border border-[#e2e0dc] p-10 mb-14">
          <div className="flex-1">
            <Eyebrow label="Nonprofit Leadership" />
            <h2 className="text-3xl font-serif font-normal text-[#111111] leading-tight mb-5 -mt-4">
              Workforce Opportunity Services
            </h2>
            <p className="text-[15px] text-[#6b6b6b] leading-[1.7]">
              Dr. Langer is Chairman and Founder of Workforce Opportunity Services (WOS),
              a 501(c)(3) nonprofit that identifies talent from underserved communities —
              including veterans — and trains them for careers in technology. WOS partners
              with major corporations, placing graduates as software engineers, analysts,
              and technical professionals. WOS will partner with the new Columbia department
              to extend the reach of technology leadership education.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/wos-logo.png"
              alt="Workforce Opportunity Services"
              width={160}
              height={70}
              className="object-contain"
            />
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/programs"
            className="bg-[#002868] text-white px-7 py-3 text-sm font-semibold hover:bg-[#001a4d] transition-colors"
          >
            Explore Programs
          </Link>
          <Link
            href="/contact"
            className="border border-[#002868] text-[#002868] px-7 py-3 text-sm font-semibold hover:bg-[#002868]/5 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}
