import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  Divider,
  Eyebrow,
  InteriorHero,
  PrimaryButton,
  SecondaryButton,
} from "@/components/Brand";

export const metadata = {
  title: "Mission & Vision | Center for Technology Management",
};

export default function MissionPage() {
  return (
    <>
      <InteriorHero
        eyebrow="About the Center"
        title="Mission & Vision"
        subtitle="We believe that talent, technology, and leadership — aligned — can transform any organization."
      />

      <div className="max-w-3xl mx-auto px-6 py-20 space-y-20">

        {/* Mission */}
        <FadeIn>
          <Eyebrow label="Mission" />
          <blockquote className="border-l-[3px] border-[#b9975b] pl-6 -mt-4">
            <p className="font-serif italic text-2xl text-[#111111] leading-[1.5]">
              To enable executives to use technology to address strategic challenges of business
              and to advance their knowledge through collaboration with industry leaders, faculty, and students.
            </p>
          </blockquote>
        </FadeIn>

        <Divider />

        {/* Vision */}
        <FadeIn>
          <Eyebrow label="Vision" />
          <div className="space-y-5 text-[#6b6b6b] leading-[1.7] text-[15px] -mt-4">
            <p>
              We envision a future where organizations meet disruption with agility, lead
              confidently through technological change, and cultivate talent to drive sustained
              innovation.
            </p>
            <p>
              As market conditions grow increasingly unpredictable, our vision is to empower
              leaders with the adaptability and foresight needed to respond to rapid shifts in
              both economic and technological fields. In this evolving digital landscape, staying
              ahead requires not just awareness of emerging technologies but a commitment to
              continuously learning, experimenting, and implementing at scale.
            </p>
            <p>
              <span className="text-[#111111] font-medium">We believe that talent is at the heart of organizational resilience.</span>{" "}
              To that end, our vision includes enabling leaders to rethink how they attract,
              develop, and retain their workforce by adopting models of work that inspire
              creativity, support lifelong learning, and encourage bold thinking.
            </p>
            <p>
              By aligning strategy, technology, and people, we strive to shape the next
              generation of transformative leadership.
            </p>
          </div>
        </FadeIn>

        <Divider />

        {/* Values */}
        <FadeIn>
          <Eyebrow label="Our Approach" />
          <div className="grid md:grid-cols-3 gap-8 -mt-4">
            {[
              {
                title: "Experiential Learning",
                body: "Immersive on-ground residencies, applied capstone projects, and real-world mentorship put theory directly into practice.",
              },
              {
                title: "Industry-Led Mentorship",
                body: "Over 230 senior executives from global companies serve as mentors — providing guidance, critique, and real-world context.",
              },
              {
                title: "Inclusive Talent Development",
                body: "Through our partnership with WOS, we extend leadership development to underserved communities, broadening who gets a seat at the table.",
              },
            ].map((v, i) => (
              <FadeIn key={v.title} delay={i * 80}>
                <div className="group h-full border-t-2 border-[#b9975b] bg-[#f7f6f3] p-6 transition-transform duration-[250ms] ease-out hover:-translate-y-[3px]">
                  <h3 className="font-semibold text-[#111111] mb-3 text-[15px]">{v.title}</h3>
                  <p className="text-[15px] text-[#6b6b6b] leading-[1.7]">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        <Divider />

        {/* Media */}
        <FadeIn>
          <Eyebrow label="In the Media" />
          <div className="relative overflow-hidden -mt-4">
            <Image
              src="/media-center.jpg"
              alt="Dr. Langer in media appearances and podcasts"
              width={768}
              height={400}
              className="w-full object-cover max-h-64"
            />
            <div className="absolute inset-0 bg-[#0a1628]/60 flex items-end p-8">
              <div>
                <p className="text-white font-serif text-xl">&ldquo;The Art of Digital Leadership&rdquo;</p>
                <p className="text-white/75 text-[13px] mt-1">Podcast with Dr. Art Langer — on AI, leadership, and the future of work</p>
              </div>
            </div>
          </div>

          <p className="mt-8 mb-4 text-[11px] uppercase tracking-[0.15em] text-[#6b6b6b] font-medium">
            Listen on
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {
                name: "Apple Podcasts",
                src: "/podcasts/apple-podcasts.png",
                href: "https://podcasts.apple.com/us/podcast/the-art-of-digital-leadership/id1716402093",
              },
              {
                name: "Spotify",
                src: "/podcasts/spotify.png",
                href: "https://open.spotify.com/show/39ScayETE3a6HOUyUoQOTL",
              },
              {
                name: "Amazon Music",
                src: "/podcasts/amazon-music.png",
                href: "https://www.amazon.com/dp/B0CJZHK753",
              },
              {
                name: "Google Podcasts",
                src: "/podcasts/google-podcasts.png",
                href: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5wb2RldGl6ZS5jb20vcnNzLzBzejJSQlUxaA==",
              },
            ].map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Listen on ${p.name}`}
                className="block transition-transform duration-[250ms] ease-out hover:-translate-y-[3px]"
              >
                <Image
                  src={p.src}
                  alt={`Listen on ${p.name}`}
                  width={600}
                  height={300}
                  className="h-auto w-full object-contain"
                />
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="flex flex-wrap gap-4">
          <PrimaryButton href="/leadership">Meet Dr. Langer</PrimaryButton>
          <SecondaryButton href="/programs">Explore Programs</SecondaryButton>
        </FadeIn>
      </div>
    </>
  );
}
