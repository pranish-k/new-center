// Heroes
//   HomeHero      : bold marketing hero — large display type, gold rule, dual CTA, photo bleeds right.
//   InteriorHero  : compact dark band for non-home pages.
//   ProgramHero   : large interior hero with overlapping photo card on the right (program detail pages).

const HomeHero = ({ go }) => (
  <section style={{ background: "#002868", color: "#fff", overflow: "hidden", position: "relative" }}>
    {/* gold accent bar at top */}
    <span style={{ position: "absolute", left: 0, top: 0, height: 4, width: "100%",
                   background: "linear-gradient(90deg, #b9975b 0, #b9975b 33%, transparent 33%)" }} />
    <div style={{
      maxWidth: 1280, margin: "0 auto", padding: "120px 32px 100px",
      display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 56, alignItems: "center",
    }}>
      <div>
        <span style={{ display: "block", width: 32, height: 2, background: "#b9975b", marginBottom: 18 }} />
        <p style={{ fontFamily: '"Trajan Pro", Georgia, serif',
                    fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em",
                    color: "rgba(255,255,255,0.7)", margin: "0 0 28px", fontWeight: 400 }}>
          Columbia University · Teachers College
        </p>
        <h1 style={{
          fontFamily: "Georgia, serif", fontWeight: 400, margin: 0,
          fontSize: 76, lineHeight: 1.02, letterSpacing: "-0.02em",
        }}>
          Lead the next era of <em style={{ color: "#b9975b", fontStyle: "italic" }}>technology</em> &amp;
          <br/>digital transformation.
        </h1>
        <p style={{ marginTop: 28, fontSize: 17, color: "rgba(255,255,255,0.82)",
                    maxWidth: 480, lineHeight: 1.6 }}>
          A graduate department for executives navigating disruption — with master's degrees,
          executive programs, and topic certificates taught by faculty and 230+ industry mentors.
        </p>
        <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 14 }}>
          <button onClick={() => go("programs")}
            style={{ background: "#b9975b", color: "#0a1628", border: 0,
                     padding: "16px 32px", fontSize: 14, fontWeight: 600,
                     letterSpacing: "0.02em", cursor: "pointer", fontFamily: "inherit" }}>
            Explore Programs →
          </button>
          <button onClick={() => go("contact")}
            style={{ background: "transparent", color: "#fff",
                     border: "1px solid rgba(255,255,255,0.5)",
                     padding: "15px 31px", fontSize: 14, fontWeight: 600,
                     cursor: "pointer", fontFamily: "inherit" }}>
            Request Information
          </button>
        </div>
      </div>
      <div style={{ position: "relative", marginRight: -32, height: 520 }}>
        <img src="../../assets/photos/art-langer-collage.jpg" alt=""
             style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
                      objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", bottom: 24, left: 24, right: 24,
                      background: "rgba(10,22,40,0.85)", padding: "18px 22px",
                      borderLeft: "3px solid #b9975b", color: "#fff" }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em",
                      color: "rgba(255,255,255,0.7)", margin: "0 0 4px", fontWeight: 500 }}>
            Director
          </p>
          <p style={{ fontFamily: "Georgia, serif", fontSize: 18, margin: 0 }}>
            Dr. Arthur M. Langer
          </p>
        </div>
      </div>
    </div>
  </section>
);

const InteriorHero = ({ eyebrow, title, sub }) => (
  <section style={{ background: "#002868", color: "#fff", position: "relative" }}>
    <span style={{ position: "absolute", left: 0, top: 0, height: 3, width: 80, background: "#b9975b" }} />
    <div style={{ maxWidth: 1152, margin: "0 auto", padding: "96px 24px 88px" }}>
      <p style={{ fontFamily: '"Trajan Pro", Georgia, serif',
                  fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em",
                  color: "rgba(255,255,255,0.7)", margin: "0 0 24px" }}>
        {eyebrow}
      </p>
      <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 400, margin: 0,
                   fontSize: 56, lineHeight: 1.08, letterSpacing: "-0.015em", maxWidth: 820 }}>
        {title}
      </h1>
      {sub && (
        <p style={{ marginTop: 24, fontSize: 16, color: "rgba(255,255,255,0.78)",
                    maxWidth: 600, lineHeight: 1.65 }}>
          {sub}
        </p>
      )}
    </div>
  </section>
);

const ProgramHero = ({ eyebrow, title, sub, image, meta = [] }) => (
  <section style={{ background: "#002868", color: "#fff", position: "relative", paddingBottom: 80 }}>
    <span style={{ position: "absolute", left: 0, top: 0, height: 3, width: 80, background: "#b9975b" }} />
    <div style={{
      maxWidth: 1280, margin: "0 auto", padding: "88px 32px 0",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "end",
    }}>
      <div style={{ paddingBottom: 32 }}>
        <p style={{ fontFamily: '"Trajan Pro", Georgia, serif',
                    fontSize: 11, textTransform: "uppercase", letterSpacing: "0.18em",
                    color: "#b9975b", margin: "0 0 20px", fontWeight: 700 }}>
          {eyebrow}
        </p>
        <h1 style={{ fontFamily: "Georgia, serif", fontWeight: 400, margin: 0,
                     fontSize: 56, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          {title}
        </h1>
        {sub && (
          <p style={{ marginTop: 22, fontSize: 16, color: "rgba(255,255,255,0.85)",
                      maxWidth: 480, lineHeight: 1.6 }}>
            {sub}
          </p>
        )}
        {meta.length > 0 && (
          <div style={{ display: "flex", gap: 36, marginTop: 36, flexWrap: "wrap",
                        borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 22 }}>
            {meta.map((m) => (
              <div key={m.label}>
                <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em",
                            color: "#b9975b", margin: "0 0 4px", fontWeight: 600 }}>{m.label}</p>
                <p style={{ fontSize: 14, color: "#fff", margin: 0, fontWeight: 500 }}>{m.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{ marginBottom: -80, height: 480, position: "relative" }}>
        <img src={image} alt="" style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
          boxShadow: "0 20px 50px -20px rgba(0,0,0,0.5)",
        }}/>
      </div>
    </div>
  </section>
);

Object.assign(window, { HomeHero, InteriorHero, ProgramHero });
