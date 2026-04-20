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

export default function LeadershipPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#002868] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-blue-300 font-sans mb-3">Leadership</p>
          <h1 className="text-4xl font-semibold">Dr. Arthur M. Langer</h1>
          <p className="text-blue-200 font-sans mt-2">Director · Professor of Practice · Columbia University Teachers College</p>
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
              className="rounded-sm shadow-xl object-cover w-56 h-56 md:w-64 md:h-64"
            />
            <div className="mt-5 space-y-2 text-sm font-sans text-gray-600">
              <p>📍 Columbia University, New York</p>
              <p>📚 7 Published Books</p>
              <p>🏛 Former: Northeastern University</p>
            </div>
          </div>
          <div className="flex-1 space-y-5 text-gray-700 font-sans leading-relaxed text-base">
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
            <blockquote className="border-l-4 border-[#b9975b] pl-6 italic text-gray-800 mt-6">
              "By harnessing the power of hands-on experience and tailored mentorship,
              the Center empowers its network of learners to practice agility in a
              tech-driven world."
            </blockquote>
          </div>
        </div>

        <hr className="border-gray-100 mb-20" />

        {/* Collage */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">In action</p>
          <Image
            src="/art-langer-collage.jpg"
            alt="Dr. Langer teaching, presenting, and at WOS graduation"
            width={900}
            height={506}
            className="w-full rounded-sm shadow-md"
          />
          <p className="text-xs text-gray-400 font-sans mt-3 text-center">
            Dr. Langer in classroom sessions, executive workshops, and at a WOS graduation ceremony
          </p>
        </div>

        <hr className="border-gray-100 mb-20" />

        {/* Books */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-8">Selected publications</p>
          <div className="grid md:grid-cols-2 gap-5">
            {books.map((b) => (
              <div key={b.title} className="border border-gray-200 p-6 flex gap-4">
                <div className="flex-shrink-0 w-1 bg-[#b9975b] rounded-full" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm leading-snug">{b.title}</p>
                  <p className="text-xs text-gray-500 font-sans mt-1">{b.subtitle}</p>
                  <p className="text-xs text-gray-400 font-sans mt-2">{b.publisher} · {b.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-100 mb-20" />

        {/* WOS */}
        <div className="flex flex-col md:flex-row gap-10 items-center bg-gray-50 border border-gray-200 p-10 rounded-sm">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-3">Nonprofit Leadership</p>
            <h2 className="text-xl font-semibold text-[#002868] mb-3">Workforce Opportunity Services</h2>
            <p className="text-sm text-gray-600 font-sans leading-relaxed">
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
        <div className="flex gap-4 flex-wrap mt-14">
          <Link
            href="/programs"
            className="bg-[#002868] text-white px-7 py-3 text-sm font-sans font-semibold hover:bg-[#001a4d] transition-colors"
          >
            Explore Programs
          </Link>
          <Link
            href="/contact"
            className="border border-[#002868] text-[#002868] px-7 py-3 text-sm font-sans font-semibold hover:bg-[#002868]/5 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}
