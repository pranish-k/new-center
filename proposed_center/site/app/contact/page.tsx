import FadeIn from "@/components/FadeIn";
import { Eyebrow, InteriorHero } from "@/components/Brand";

export const metadata = {
  title: "Contact | Center for Technology Management",
};

export default function ContactPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Get in touch"
        title="Contact Us"
        subtitle="We welcome inquiries about programs, partnerships, and the Center's transition to Columbia."
      />

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
                  href="mailto:[email here]"
                  className="text-[#002868] hover:underline"
                >
                  [email here]
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
