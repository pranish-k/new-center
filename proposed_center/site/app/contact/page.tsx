import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Contact | Center for Technology Management",
};

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="mb-8">
      <span className="block w-6 h-0.5 bg-[#b9975b] mb-3" />
      <p className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] font-medium">{label}</p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Dark typographic hero — not wrapped */}
      <section className="bg-[#0a1628] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-28">
          <span className="block w-6 h-0.5 bg-[#b9975b] mb-3" />
          <p className="text-[11px] uppercase tracking-[0.15em] text-blue-300/60 mb-6">Get in touch</p>
          <h1 className="text-5xl md:text-6xl font-serif font-normal leading-[1.1] tracking-tight max-w-2xl">
            Contact Us
          </h1>
          <p className="mt-6 text-[15px] text-blue-200/70 max-w-xl leading-[1.7]">
            We welcome inquiries about programs, partnerships, and the Center's transition to Columbia.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Address */}
          <FadeIn>
            <Eyebrow label="Address" />
            <address className="not-italic text-[15px] text-[#6b6b6b] leading-[1.7] space-y-1 -mt-4">
              <p className="font-semibold text-[#111111]">
                Center for Technology Management and Digital Leadership
              </p>
              <p>Columbia University Teachers College</p>
              <p className="mt-4 text-[13px] italic">
                Previously at: Northeastern University, 360 Huntington Avenue,
                Boston, MA 02115
              </p>
            </address>

            <div className="mt-8 space-y-3 text-[15px] text-[#6b6b6b]">
              <p className="flex gap-3">
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] mt-0.5 w-12 flex-shrink-0">Email</span>
                <a
                  href="mailto:tmdl@northeastern.edu"
                  className="text-[#002868] hover:underline"
                >
                  tmdl@northeastern.edu
                </a>
              </p>
              <p className="flex gap-3">
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] mt-0.5 w-12 flex-shrink-0">Phone</span>
                617.373.2000
              </p>
            </div>
          </FadeIn>

          {/* Note */}
          <FadeIn delay={80}>
            <Eyebrow label="Note" />
            <div className="text-[15px] text-[#6b6b6b] leading-[1.7] space-y-4 -mt-4">
              <p className="font-semibold text-[#111111]">
                This is a prototype site.
              </p>
              <p>
                The Center is currently in transition from Northeastern University
                to Columbia University Teachers College. Contact details for the new
                Columbia department will be updated once the transition is complete.
              </p>
              <p>
                In the meantime, reach out via the email above or visit the{" "}
                <a
                  href="https://www.tc.columbia.edu"
                  className="text-[#002868] underline hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Teachers College website
                </a>{" "}
                for current information.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
