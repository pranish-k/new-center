export const metadata = {
  title: "Mission & Vision | Center for Technology Management",
};

export default function MissionPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Page header */}
      <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-3">
        About the Center
      </p>
      <h1 className="text-3xl font-semibold text-[#002868] mb-12">
        Mission &amp; Vision
      </h1>

      {/* Mission */}
      <section className="mb-14">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-4">
          Mission
        </h2>
        <p className="text-lg leading-relaxed text-gray-800 border-l-4 border-[#b9975b] pl-6 italic">
          To enable executives to use technology to address strategic challenges
          of business and to advance their knowledge through collaboration with
          industry leaders, faculty, and students.
        </p>
      </section>

      <hr className="border-gray-200 mb-14" />

      {/* Vision */}
      <section className="mb-14">
        <h2 className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">
          Vision
        </h2>
        <div className="space-y-5 text-gray-700 font-sans leading-relaxed text-base">
          <p>
            We envision a future where organizations meet disruption with
            agility, lead confidently through technological change, and
            cultivate talent to drive sustained innovation.
          </p>
          <p>
            As market conditions grow increasingly unpredictable, our vision is
            to empower leaders with the adaptability and foresight needed to
            respond to rapid shifts in both economic and technological fields.
            In this evolving digital landscape, staying ahead requires not just
            awareness of emerging technologies but a commitment to continuously
            learning, experimenting, and implementing at scale.
          </p>
          <p>
            <strong className="text-gray-900">
              We believe that talent is at the heart of organizational
              resilience.
            </strong>{" "}
            To that end, our vision includes enabling leaders to rethink how
            they attract, develop, and retain their workforce by adopting models
            of work that inspire creativity, support lifelong learning, and
            encourage bold thinking.
          </p>
          <p>
            By aligning strategy, technology, and people, we strive to shape
            the next generation of transformative leadership.
          </p>
        </div>
      </section>

      <hr className="border-gray-200 mb-14" />

      {/* About Dr. Langer */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-6">
          Leadership
        </h2>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Dr. Arthur M. Langer — Director
        </h3>
        <div className="space-y-4 text-gray-700 font-sans leading-relaxed text-sm">
          <p>
            The Center is led by Dr. Arthur M. Langer, Associate Vice Provost
            and Professor of Practice. A renowned leader in his field, Dr.
            Langer most recently served as Director of the Center for
            Technology Management, Professor of Professional Practice, and
            Academic Director of the MS in Technology Management programs at
            Columbia University. He also served on the faculty of the
            Department of Organization and Leadership at the Graduate School of
            Education (Teachers College).
          </p>
          <p>
            He is the author of numerous books including{" "}
            <em>
              Analysis and Design of Next Generation Software Architectures:
              5G, IoT, Blockchain and Quantum Computing
            </em>{" "}
            (2020),{" "}
            <em>
              Strategic Information Technology: Best Practices to Drive Digital
              Transformation
            </em>{" "}
            (2nd Ed., 2018), and{" "}
            <em>Information Technology and Organizational Learning</em> (3rd
            Ed., 2018).
          </p>
          <p>
            Dr. Langer is also Chairman and Founder of{" "}
            <strong>Workforce Opportunity Services</strong>, a 501(c)(3)
            nonprofit that prepares talent from underserved communities,
            including veterans, for careers in technology.
          </p>
        </div>
      </section>
    </div>
  );
}
