import FadeIn from "@/components/FadeIn";
import { Eyebrow, InteriorHero } from "@/components/Brand";
import { CENTER_FULL, INSTITUTION } from "@/lib/brand";

export const metadata = {
  title: "Contact | Teachers College",
};

export default function ContactPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Get in touch"
        title="Contact Us"
        subtitle="We welcome inquiries about programs, partnerships, and research collaboration."
      />

      <div className="max-w-3xl mx-auto px-6 pt-14 pb-28">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Address */}
          <FadeIn>
            <Eyebrow label="Address" />
            <h2 className="sr-only">Address and contact details</h2>
            <address className="not-italic text-[15px] text-[#6b6b6b] leading-[1.7] space-y-1">
              <p className="font-semibold text-[#111111]">
                {CENTER_FULL}
              </p>
              <p>{INSTITUTION}</p>
            </address>

            <div className="mt-8 space-y-3 text-[15px] text-[#6b6b6b]">
              <p className="flex gap-3">
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] mt-0.5 w-12 flex-shrink-0">Email</span>
                <span className="border border-dashed border-[#e2e0dc] px-3 py-1 text-[13px]">
                  Contact email to be confirmed
                </span>
              </p>
            </div>
          </FadeIn>

          {/* Note */}
          <FadeIn delay={80}>
            <Eyebrow label="Note" />
            <h2 className="sr-only">About this site</h2>
            <div className="text-[15px] text-[#6b6b6b] leading-[1.7] space-y-4">
              <p className="font-semibold text-[#111111]">
                This is a prototype site.
              </p>
              <p>
                Contact details for the {INSTITUTION} department will be updated
                as they are confirmed.
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
