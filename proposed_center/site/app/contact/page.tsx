export const metadata = {
  title: "Contact | Center for Technology Management",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-3">
        Get in touch
      </p>
      <h1 className="text-3xl font-semibold text-[#002868] mb-12">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Address */}
        <div>
          <h2 className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-5">
            Address
          </h2>
          <address className="not-italic text-sm text-gray-700 font-sans leading-relaxed space-y-1">
            <p className="font-semibold text-gray-900">
              Center for Technology Management and Digital Leadership
            </p>
            <p>Columbia University Teachers College</p>
            <p className="mt-3 text-gray-500 text-xs italic">
              Previously at: Northeastern University, 360 Huntington Avenue,
              Boston, MA 02115
            </p>
          </address>

          <div className="mt-8 space-y-2 text-sm font-sans text-gray-700">
            <p>
              <span className="text-gray-400 mr-2">Email</span>
              <a
                href="mailto:tmdl@northeastern.edu"
                className="text-[#002868] hover:underline"
              >
                tmdl@northeastern.edu
              </a>
            </p>
            <p>
              <span className="text-gray-400 mr-2">Phone</span>
              617.373.2000
            </p>
          </div>
        </div>

        {/* Note */}
        <div className="bg-gray-50 border border-gray-200 p-6 text-sm font-sans text-gray-600 leading-relaxed">
          <p className="font-semibold text-gray-800 mb-3">
            This is a prototype site.
          </p>
          <p>
            The Center is currently in transition from Northeastern University
            to Columbia University Teachers College. Contact details for the new
            Columbia department will be updated once the transition is complete.
          </p>
          <p className="mt-4">
            In the meantime, reach out via the email above or visit the{" "}
            <a
              href="https://www.tc.columbia.edu"
              className="text-[#002868] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Teachers College website
            </a>{" "}
            for current information.
          </p>
        </div>
      </div>
    </div>
  );
}
