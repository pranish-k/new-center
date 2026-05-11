// Page bodies. Routes: home, mission, programs, programDetail, certs, certDetail,
// leadership, facultyDetail, mentors, mentorProfile, contact.

// ---------- HOME -----------------------------------------------------------
const Home = ({ go, openProgram }) => {
  const stats = [
    { value: "230+", label: "Industry Mentors" },
    { value: "15+",  label: "Countries Represented" },
    { value: "300+", label: "Student Projects" },
    { value: "25+",  label: "Years of Leadership" },
  ];
  return (
    <>
      <HomeHero go={go} />

      {/* Transition strip */}
      <section style={{ background: "#f7f6f3", borderBottom: "1px solid #e2e0dc" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 32px",
                      display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ color: "#b9975b", fontWeight: 700 }}>→</span>
          <p style={{ fontSize: 14, color: "#6b6b6b", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "#111" }}>In transition.</strong> Moving from Northeastern University to{" "}
            <strong style={{ color: "#111" }}>Columbia University Teachers College</strong>, under the continued leadership of Dr. Art Langer.
          </p>
        </div>
      </section>

      {/* Stats on navy band */}
      <StatsBar stats={stats} dark />

      {/* Programs section — feature card + 3 supporting */}
      <section style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "120px 32px 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
            <div>
              <Eyebrow label="What we offer" />
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: 44, color: "#111",
                           fontWeight: 400, margin: 0, letterSpacing: "-0.015em", marginTop: -8 }}>
                Programs for every stage of leadership.
              </h2>
            </div>
            <ArrowLink onClick={() => go("programs")}>View all programs</ArrowLink>
          </div>

          <div style={{ marginBottom: 32 }}>
            <NavyFeatureCard
              eyebrow={PROGRAMS_FEATURE.tag}
              title={PROGRAMS_FEATURE.title}
              body={PROGRAMS_FEATURE.body}
              ctaLabel="Explore the MS"
              meta={PROGRAMS_FEATURE.meta.slice(0, 3)}
              image={PROGRAMS_FEATURE.image}
              onClick={() => openProgram(PROGRAMS_FEATURE.slug)} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {PROGRAMS_EXEC.map((p) => (
              <PhotoLedCard key={p.slug} p={p} onClick={() => openProgram(p.slug)} />
            ))}
          </div>
        </div>
      </section>

      {/* Certificate strip on cream */}
      <section style={{ background: "#f7f6f3" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
            <div>
              <Eyebrow label="Topic certificates" />
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, color: "#111",
                           fontWeight: 400, margin: 0, letterSpacing: "-0.01em", marginTop: -8 }}>
                Deep-dive certificates, taught by faculty who built the field.
              </h2>
            </div>
            <ArrowLink onClick={() => go("programs")}>All certificates</ArrowLink>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {CERTIFICATES.slice(0, 4).map((c) => (
              <TintedCard key={c.slug} c={{ ...c, tag: "Certificate" }}
                onClick={() => go("certDetail", c.slug)} />
            ))}
          </div>
        </div>
      </section>

      {/* Director quote on full-bleed photo band */}
      <section style={{ position: "relative", padding: "140px 32px",
                        backgroundImage: "url(../../assets/photos/session-classroom.jpg)",
                        backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,40,104,0.85)" }} />
        <div style={{ position: "relative", maxWidth: 880, margin: "0 auto", color: "#fff" }}>
          <span style={{ display: "block", width: 32, height: 2, background: "#b9975b", marginBottom: 24 }} />
          <blockquote style={{ margin: 0 }}>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 36, lineHeight: 1.3,
                        margin: 0, fontWeight: 400, fontStyle: "italic" }}>
              "By harnessing hands-on experience and tailored mentorship, the Center empowers learners to practice agility in a tech-driven world."
            </p>
            <p style={{ marginTop: 28, fontSize: 13, color: "rgba(255,255,255,0.8)" }}>
              — <strong style={{ color: "#fff", fontWeight: 600 }}>Dr. Arthur M. Langer</strong>, Director
            </p>
          </blockquote>
          <div style={{ marginTop: 28 }}>
            <button onClick={() => go("leadership")} style={{
              background: "transparent", border: "1px solid rgba(255,255,255,0.5)",
              color: "#fff", padding: "12px 26px", fontSize: 13, fontWeight: 600,
              cursor: "pointer", fontFamily: "inherit",
            }}>About Dr. Langer</button>
          </div>
        </div>
      </section>

      <PartnerStrip logos={PARTNER_LOGOS} />
    </>
  );
};

// ---------- PROGRAMS index -------------------------------------------------
const Programs = ({ go, openProgram }) => (
  <>
    <InteriorHero eyebrow="What we offer" title="Programs for every stage of leadership"
      sub="From flagship master's degrees to short executive workshops and topic certificates — designed for professionals leading in technology-driven environments." />
    <div style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px 40px" }}>
        <Eyebrow label="The flagship" />
        <NavyFeatureCard
          eyebrow={PROGRAMS_FEATURE.tag} title={PROGRAMS_FEATURE.title}
          body={PROGRAMS_FEATURE.body} ctaLabel="Explore the MS"
          meta={PROGRAMS_FEATURE.meta} image={PROGRAMS_FEATURE.image}
          onClick={() => openProgram(PROGRAMS_FEATURE.slug)} />
      </div>
    </div>

    <div style={{ background: "#f7f6f3" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px" }}>
        <Eyebrow label="Executive &amp; Professional" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 8 }}>
          {PROGRAMS_EXEC.map((p) => (
            <PhotoLedCard key={p.slug} p={p} onClick={() => openProgram(p.slug)} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px" }}>
        <Eyebrow label="Topic Certificates" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 8 }}>
          {CERTIFICATES.map((c) => (
            <TintedCard key={c.slug} c={{ ...c, tag: "Certificate" }}
              onClick={() => go("certDetail", c.slug)} />
          ))}
        </div>
      </div>
    </div>

    <section style={{ background: "#002868", color: "#fff" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "80px 32px", textAlign: "center" }}>
        <span style={{ display: "block", width: 32, height: 2, background: "#b9975b", margin: "0 auto 22px" }} />
        <p style={{ fontFamily: "Georgia, serif", fontSize: 28, margin: 0, lineHeight: 1.4 }}>
          Not sure which program fits? We&rsquo;ll match you to the right one.
        </p>
        <button onClick={() => go("contact")} style={{
          marginTop: 32, background: "#b9975b", color: "#0a1628", border: 0,
          padding: "14px 30px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
        }}>Request Information →</button>
      </div>
    </section>
  </>
);

// ---------- PROGRAM DETAIL -------------------------------------------------
const ProgramDetail = ({ slug, go, openProgram }) => {
  const all = [PROGRAMS_FEATURE, ...PROGRAMS_EXEC];
  const p = all.find((x) => x.slug === slug) || PROGRAMS_FEATURE;
  return (
    <>
      <ProgramHero
        eyebrow={p.tag} title={p.title} sub={p.body || p.description}
        image={p.image} meta={p.meta || []} />
      <div style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "120px 32px 80px",
                      display: "grid", gridTemplateColumns: "2fr 1fr", gap: 56 }}>
          <div>
            <Eyebrow label="Overview" />
            <p style={{ fontSize: 17, color: "#111", lineHeight: 1.65, marginTop: 8 }}>
              {p.body || p.description}
            </p>
            <p style={{ fontSize: 15, color: "#6b6b6b", lineHeight: 1.7, marginTop: 16 }}>
              The program convenes a small cohort of working professionals — typically C-suite, VP, and director-level
              leaders — across three on-ground residencies and ongoing virtual sessions. Each student is paired with
              an industry mentor for the duration. The capstone is drawn from the student&rsquo;s own organization,
              producing a portable strategic asset rather than a hypothetical paper.
            </p>
            <Hr />
            <Eyebrow label="What you&rsquo;ll do" />
            <ul style={{ marginTop: 8, padding: 0, listStyle: "none" }}>
              {[
                "Three immersive residencies in Boston, London, and New York",
                "One-on-one mentorship with a paired industry executive for the duration",
                "An applied capstone project drawn from your own organization (6 credits)",
                "Ongoing virtual sessions with faculty and visiting practitioners",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: 14, padding: "14px 0",
                                         borderTop: "1px solid #e2e0dc", fontSize: 15, color: "#111", lineHeight: 1.55 }}>
                  <span style={{ color: "#b9975b", fontWeight: 700, marginTop: 2 }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside style={{ background: "#f7f6f3", padding: "32px 28px", height: "fit-content",
                          borderTop: "2px solid #b9975b" }}>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em",
                        color: "#6b6b6b", fontWeight: 600, margin: "0 0 18px" }}>At a glance</p>
            {(p.meta || []).map((m) => (
              <div key={m.label} style={{ borderTop: "1px solid #e2e0dc", padding: "14px 0" }}>
                <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em",
                            color: "#b9975b", margin: "0 0 4px", fontWeight: 600 }}>{m.label}</p>
                <p style={{ fontSize: 15, color: "#111", margin: 0, fontWeight: 500 }}>{m.value}</p>
              </div>
            ))}
            <button onClick={() => go("contact")} style={{
              width: "100%", marginTop: 22, background: "#002868", color: "#fff",
              border: 0, padding: "14px 0", fontSize: 13, fontWeight: 600,
              cursor: "pointer", fontFamily: "inherit",
            }}>Request Information →</button>
          </aside>
        </div>
      </div>

      <div style={{ background: "#f7f6f3", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow label="Other programs" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 8 }}>
            {all.filter((x) => x.slug !== p.slug).slice(0, 3).map((x) => (
              <PhotoLedCard key={x.slug} p={x} onClick={() => openProgram(x.slug)} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// ---------- CERTIFICATE DETAIL ---------------------------------------------
const CertificateDetail = ({ slug, go }) => {
  const c = CERTIFICATES.find((x) => x.slug === slug) || CERTIFICATES[0];
  return (
    <>
      <InteriorHero eyebrow="Topic Certificate" title={c.name.replace(/&amp;/g, "&")} sub={c.line} />
      <div style={{ background: "#fff" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "80px 32px" }}>
          <Eyebrow label="What you&rsquo;ll learn" />
          <p style={{ fontSize: 16, color: "#111", lineHeight: 1.7, marginTop: 8 }}>
            A focused, multi-week program that builds practical fluency in {c.name.replace(/&amp;/g, "&").toLowerCase()} — from foundational mechanics to enterprise-scale rollout. Designed for senior leaders who need
            to make architecture-level decisions, not write code.
          </p>
          <Hr />
          <Eyebrow label="Format" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 8 }}>
            {[
              { l: "Length", v: "6 weeks" },
              { l: "Format", v: "Hybrid · async + live" },
              { l: "Cohort", v: "20–30 leaders" },
            ].map((m) => (
              <div key={m.l} style={{ background: "#f7f6f3", padding: "20px 22px", borderTop: "2px solid #b9975b" }}>
                <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em",
                            color: "#b9975b", margin: 0, fontWeight: 600 }}>{m.l}</p>
                <p style={{ fontSize: 16, color: "#111", margin: "6px 0 0", fontWeight: 500 }}>{m.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: "#f7f6f3", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <Eyebrow label="More certificates" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 8 }}>
            {CERTIFICATES.filter((x) => x.slug !== c.slug).slice(0, 4).map((x) => (
              <TintedCard key={x.slug} c={{ ...x, tag: "Certificate" }}
                onClick={() => go("certDetail", x.slug)} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// ---------- LEADERSHIP / MISSION / CONTACT ---------------------------------
const Leadership = ({ go, openFaculty }) => (
  <>
    <InteriorHero eyebrow="Leadership" title="Faculty &amp; Director"
      sub="A graduate department led by working academics and industry practitioners." />
    <div style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 32px" }}>
        <Eyebrow label="Director" />
        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 48,
                       alignItems: "start", marginTop: 8, background: "#f7f6f3" }}>
          <div>
            <img src="../../assets/photos/art-langer.jpg" alt="Dr. Langer"
                 style={{ width: "100%", height: 360, objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ padding: "32px 32px 32px 0" }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 400,
                         margin: 0, color: "#111", letterSpacing: "-0.01em" }}>
              Dr. Arthur M. Langer
            </h2>
            <p style={{ fontSize: 13, color: "#b9975b", textTransform: "uppercase",
                        letterSpacing: "0.15em", margin: "8px 0 22px", fontWeight: 600 }}>
              Director · Professor of Practice
            </p>
            <p style={{ fontSize: 15, color: "#111", lineHeight: 1.7, margin: "0 0 14px" }}>
              World-renowned authority on technology management, digital transformation, and organizational learning. Founding Director of the Center.
            </p>
            <p style={{ fontSize: 14, color: "#6b6b6b", lineHeight: 1.7, margin: "0 0 22px" }}>
              Previously: Director of the Center for Technology Management at Columbia University; Professor of Professional Practice; Academic Director of the MS in Technology Management programs. Author of seven books on technology and learning.
            </p>
            <ArrowLink onClick={() => openFaculty("art-langer")}>Read full biography</ArrowLink>
          </div>
        </div>
      </div>
    </div>

    <div style={{ background: "#f7f6f3" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px" }}>
        <Eyebrow label="Faculty &amp; Academic Directors" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 8 }}>
          {FACULTY.slice(1).map((f) => (
            <a key={f.slug} href="#" onClick={(e) => { e.preventDefault(); openFaculty(f.slug); }}
               style={{ background: "#fff", padding: 24, textDecoration: "none", color: "inherit",
                        borderTop: "2px solid #b9975b", display: "flex", flexDirection: "column", gap: 14 }}>
              <MonogramTile name={f.name} size={64} />
              <div>
                <h4 style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 400, margin: 0, color: "#111" }}>{f.name}</h4>
                <p style={{ fontSize: 12, color: "#b9975b", textTransform: "uppercase", letterSpacing: "0.12em",
                            margin: "6px 0 12px", fontWeight: 600 }}>{f.role}</p>
                <p style={{ fontSize: 13, color: "#6b6b6b", lineHeight: 1.55, margin: 0 }}>{f.line}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </>
);

const FacultyDetail = ({ slug, go }) => {
  const f = FACULTY.find((x) => x.slug === slug) || FACULTY[0];
  return (
    <>
      <InteriorHero eyebrow="Faculty" title={f.name} sub={f.role} />
      <div style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 32px",
                      display: "grid", gridTemplateColumns: "320px 1fr", gap: 56, alignItems: "start" }}>
          <div>
            {f.photo
              ? <img src={f.photo} alt={f.name} style={{ width: "100%", height: 360, objectFit: "cover", display: "block" }} />
              : <MonogramTile name={f.name} size={320} />}
            <div style={{ marginTop: 18, fontSize: 13, color: "#6b6b6b", lineHeight: 1.8 }}>
              <p style={{ margin: "0 0 4px", color: "#b9975b", textTransform: "uppercase",
                          letterSpacing: "0.12em", fontSize: 11, fontWeight: 600 }}>Affiliations</p>
              <p style={{ margin: 0 }}>Center for Technology Management<br/>Columbia University Teachers College</p>
            </div>
          </div>
          <div>
            <Eyebrow label="Biography" />
            <p style={{ fontSize: 16, color: "#111", lineHeight: 1.7, marginTop: 8 }}>
              {f.line}
            </p>
            <p style={{ fontSize: 15, color: "#6b6b6b", lineHeight: 1.7, marginTop: 14 }}>
              [Full biography to be added once faculty rosters are finalized for the Columbia transition.]
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// ---------- MENTORS index --------------------------------------------------
const Mentors = ({ openMentor }) => {
  const [filter, setFilter] = React.useState("All");
  const industries = ["All", ...Array.from(new Set(MENTORS.map((m) => m.industry.replace(/&amp;/g, "&").split("/")[0].trim()))).slice(0, 6)];
  const list = filter === "All" ? MENTORS : MENTORS.filter((m) => m.industry.replace(/&amp;/g, "&").startsWith(filter));
  return (
    <>
      <InteriorHero eyebrow="Industry network" title="230+ mentors. One pairing per student."
        sub="Each student is matched with a mentor for the duration of their program — working executives across manufacturing, finance, healthcare, software, and the public sector." />
      <div style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 32px 80px" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32, paddingBottom: 24,
                        borderBottom: "1px solid #e2e0dc" }}>
            {industries.map((i) => (
              <button key={i} onClick={() => setFilter(i)} style={{
                background: filter === i ? "#002868" : "#f7f6f3",
                color: filter === i ? "#fff" : "#111",
                border: 0, padding: "8px 16px", fontSize: 12, fontWeight: 500,
                cursor: "pointer", fontFamily: "inherit",
                textTransform: "uppercase", letterSpacing: "0.1em",
              }}>{i}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {list.map((m) => (
              <MentorCard key={m.slug} m={m} onClick={() => openMentor(m.slug)} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// ---------- MENTOR PROFILE -------------------------------------------------
const MentorProfile = ({ slug, go, openMentor }) => {
  const m = MENTORS.find((x) => x.slug === slug) || MENTORS[0];
  const others = MENTORS.filter((x) => x.slug !== m.slug).slice(0, 3);
  return (
    <>
      {/* Slim eyebrow band on navy */}
      <section style={{ background: "#002868", color: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 32px" }}>
          <a href="#" onClick={(e) => { e.preventDefault(); go("mentors"); }}
             style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, textDecoration: "none",
                      textTransform: "uppercase", letterSpacing: "0.15em" }}>
            ← All Mentors
          </a>
        </div>
      </section>
      {/* Editorial split: photo left, header info right */}
      <section style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 32px",
                      display: "grid", gridTemplateColumns: "0.85fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            {m.photo
              ? <img src={m.photo} alt={m.name} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block" }} />
              : <div style={{ aspectRatio: "1/1", width: "100%", display: "flex" }}>
                  <MonogramTile name={m.name} size={420} />
                </div>}
          </div>
          <div style={{ paddingTop: 20 }}>
            <span style={{ display: "block", width: 32, height: 2, background: "#b9975b", marginBottom: 16 }} />
            <p style={{ fontFamily: '"Trajan Pro", Georgia, serif', fontSize: 11,
                        textTransform: "uppercase", letterSpacing: "0.18em", color: "#b9975b",
                        margin: "0 0 18px", fontWeight: 700 }}>Industry Mentor</p>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: 56, fontWeight: 400,
                         margin: 0, color: "#111", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              {m.name}
            </h1>
            <p style={{ fontSize: 18, color: "#111", margin: "16px 0 4px", fontWeight: 500 }}>
              {m.title}
            </p>
            <p style={{ fontSize: 16, color: "#6b6b6b", margin: 0 }}>
              {m.company}
            </p>

            <div style={{ marginTop: 36, borderTop: "1px solid #e2e0dc" }}>
              {[
                { label: "Industry",     value: m.industry },
                { label: "Focus Areas",  value: m.focus },
                { label: "Location",     value: m.location },
              ].map((row) => (
                <div key={row.label} style={{
                  display: "grid", gridTemplateColumns: "160px 1fr", gap: 16,
                  padding: "16px 0", borderBottom: "1px solid #e2e0dc",
                }}>
                  <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em",
                              color: "#b9975b", margin: 0, fontWeight: 600, paddingTop: 2 }}>
                    {row.label}
                  </p>
                  <p style={{ fontSize: 15, color: "#111", margin: 0, fontWeight: 500 }}
                     dangerouslySetInnerHTML={{ __html: row.value }} />
                </div>
              ))}
            </div>

            <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
              <button onClick={() => go("contact")} style={{
                background: "#002868", color: "#fff", border: 0, padding: "12px 26px",
                fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
              }}>Request a Pairing →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Bio placeholder section — bios will live here */}
      <section style={{ background: "#f7f6f3" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "80px 32px" }}>
          <Eyebrow label="Biography" />
          <p style={{ fontSize: 16, color: "#111", lineHeight: 1.75, marginTop: 8 }}>
            [Mentor biography goes here. The Center collects ~250 words on each mentor covering their career arc,
             current focus, and what cohort students will get from working with them. Bios are written by the
             editorial team and reviewed by mentors before publication.]
          </p>
        </div>
      </section>

      {/* Other mentors */}
      <section style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 32px" }}>
          <Eyebrow label="More mentors" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 8 }}>
            {others.map((x) => <MentorCard key={x.slug} m={x} onClick={() => openMentor(x.slug)} />)}
          </div>
        </div>
      </section>
    </>
  );
};

const Mission = () => (
  <>
    <InteriorHero eyebrow="About the Center" title="Mission &amp; Vision"
      sub="We believe that talent, technology, and leadership — aligned — can transform any organization." />
    <div style={{ maxWidth: 768, margin: "0 auto", padding: "80px 32px" }}>
      <Eyebrow label="Mission" />
      <PullQuote large
        quote="To enable executives to use technology to address strategic challenges of business and to advance their knowledge through collaboration with industry leaders, faculty, and students." />
      <Hr />
      <Eyebrow label="Vision" />
      <div style={{ fontSize: 15, color: "#6b6b6b", lineHeight: 1.7, marginTop: 8 }}>
        <p>We envision a future where organizations meet disruption with agility, lead confidently through technological change, and cultivate talent to drive sustained innovation.</p>
        <p><span style={{ color: "#111", fontWeight: 500 }}>Talent is at the heart of organizational resilience.</span> Our vision includes enabling leaders to rethink how they attract, develop, and retain their workforce.</p>
      </div>
    </div>
  </>
);

const Contact = () => (
  <>
    <InteriorHero eyebrow="Get in touch" title="Contact Us"
      sub="We welcome inquiries about programs, partnerships, and the Center&rsquo;s transition to Columbia." />
    <div style={{ maxWidth: 768, margin: "0 auto", padding: "80px 32px",
                  display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
      <div>
        <Eyebrow label="Address" />
        <address style={{ fontStyle: "normal", fontSize: 15, color: "#6b6b6b", lineHeight: 1.7, marginTop: 8 }}>
          <p style={{ color: "#111", fontWeight: 600, margin: "0 0 6px" }}>Center for Technology Management and Digital Leadership</p>
          <p style={{ margin: 0 }}>Columbia University Teachers College</p>
          <p style={{ margin: "16px 0 0", fontSize: 13, fontStyle: "italic" }}>
            Previously at Northeastern University, Boston, MA
          </p>
        </address>
      </div>
      <div>
        <Eyebrow label="Note" />
        <p style={{ fontSize: 15, color: "#111", fontWeight: 600, marginTop: 8 }}>This is a prototype site.</p>
        <p style={{ fontSize: 15, color: "#6b6b6b", lineHeight: 1.7 }}>
          The Center is in transition from Northeastern University to Columbia University Teachers College.
          Contact details for the new department will be updated once the transition is complete.
        </p>
      </div>
    </div>
  </>
);

Object.assign(window, {
  Home, Programs, ProgramDetail, CertificateDetail,
  Leadership, FacultyDetail, Mentors, MentorProfile,
  Mission, Contact,
});
