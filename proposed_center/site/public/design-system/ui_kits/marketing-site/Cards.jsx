// Card vocabulary for the Center site.
// Three deliberate variants used by purpose:
//   - PhotoLedCard : marquee items (programs, residencies). Photo top, off-white content block below.
//   - TintedCard   : uniform grid items (certificates, topics). Cream fill, gold rule, no photo.
//   - NavyFeatureCard : the ONE feature CTA per page. Deep navy fill, gold accent, white type.
//   - MentorCard   : directory portrait card (monogram or photo + name + role + meta).
// Plus shared bits: StatsBar, PartnerStrip, PullQuote, MonogramTile.

// ----- PhotoLedCard --------------------------------------------------------
const PhotoLedCard = ({ p, onClick, ratio = 0.62 }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(p); }}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit",
         background: "#f7f6f3", overflow: "hidden", height: "100%",
         transform: hover ? "translateY(-3px)" : "translateY(0)",
         boxShadow: hover ? "0 12px 32px -16px rgba(10,22,40,0.25)" : "0 4px 14px -10px rgba(10,22,40,0.10)",
         transition: "transform .3s, box-shadow .3s",
       }}>
      <div style={{ position: "relative", paddingTop: `${ratio * 100}%`, overflow: "hidden", background: "#1D4F91" }}>
        <img src={p.image} alt={p.title}
             style={{
               position: "absolute", inset: 0, width: "100%", height: "100%",
               objectFit: "cover", display: "block",
               transform: hover ? "scale(1.04)" : "scale(1)", transition: "transform .6s ease",
             }} />
      </div>
      <div style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em",
                    color: "#b9975b", margin: "0 0 10px", fontWeight: 600 }}>{p.tag}</p>
        <h3 style={{ fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 400,
                     color: "#111", lineHeight: 1.25, margin: "0 0 10px", letterSpacing: "-0.005em" }}>
          {p.title}
        </h3>
        <p style={{ fontSize: 14, color: "#6b6b6b", lineHeight: 1.55, margin: 0, flex: 1 }}>
          {p.description}
        </p>
        <p style={{ fontSize: 13, fontWeight: 600, color: "#002868", margin: "20px 0 0",
                    letterSpacing: "0.02em" }}>
          Learn more <span style={{ display: "inline-block",
            transform: hover ? "translateX(4px)" : "none", transition: "transform .25s" }}>→</span>
        </p>
      </div>
    </a>
  );
};

// ----- TintedCard ----------------------------------------------------------
// Photo header + cream content block. Used in certificate / topic grids.
// Distinct border + drop shadow so cards read separately even on a cream page.
const TintedCard = ({ c, onClick }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(c); }}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         display: "flex", flexDirection: "column", height: "100%", textDecoration: "none",
         color: "inherit", background: "#fff",
         border: "1px solid #e2e0dc",
         transform: hover ? "translateY(-3px)" : "none",
         boxShadow: hover
           ? "0 14px 32px -16px rgba(10,22,40,0.22)"
           : "0 2px 6px -2px rgba(10,22,40,0.06)",
         borderColor: hover ? "#002868" : "#e2e0dc",
         transition: "transform .25s, box-shadow .25s, border-color .25s",
         overflow: "hidden",
       }}>
      {c.image && (
        <div style={{ position: "relative", paddingTop: "62%", overflow: "hidden", background: "#1D4F91" }}>
          <img src={c.image} alt=""
               style={{
                 position: "absolute", inset: 0, width: "100%", height: "100%",
                 objectFit: "cover", display: "block",
                 transform: hover ? "scale(1.04)" : "scale(1)", transition: "transform .6s ease",
               }} />
        </div>
      )}
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column",
                    flex: 1, position: "relative", borderTop: c.image ? "2px solid #b9975b" : "none" }}>
        {!c.image && (
          <span style={{ position: "absolute", top: 0, left: 22, right: 22, height: 2, background: "#b9975b" }} />
        )}
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em",
                    color: "#6b6b6b", margin: "8px 0 12px", fontWeight: 500 }}>{c.tag || "Certificate"}</p>
        <h4 style={{ fontFamily: "Georgia, serif", fontSize: 19, fontWeight: 400, color: "#111",
                     lineHeight: 1.25, margin: "0 0 10px" }}>
          {c.name}
        </h4>
        {c.line && (
          <p style={{ fontSize: 13, color: "#6b6b6b", lineHeight: 1.55, margin: 0, flex: 1 }}>
            {c.line}
          </p>
        )}
        <p style={{ fontSize: 12, fontWeight: 600, color: "#002868", margin: "20px 0 0",
                    letterSpacing: "0.02em" }}>
          Read syllabus <span style={{ display: "inline-block",
            transform: hover ? "translateX(3px)" : "none", transition: "transform .2s" }}>→</span>
        </p>
      </div>
    </a>
  );
};

// ----- NavyFeatureCard -----------------------------------------------------
// The ONE bold feature card per page (Master's degree on /programs, Apply CTA on home, etc).
const NavyFeatureCard = ({ eyebrow, title, body, ctaLabel, onClick, image, meta = [] }) => (
  <a href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(); }}
     style={{
       display: "grid", gridTemplateColumns: image ? "1.1fr 1fr" : "1fr",
       background: "#002868", color: "#fff", textDecoration: "none",
       overflow: "hidden", position: "relative",
     }}>
    <div style={{ padding: "56px 56px 48px", position: "relative" }}>
      <span style={{ display: "block", width: 32, height: 2, background: "#b9975b", marginBottom: 18 }} />
      <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.75)", margin: "0 0 18px", fontWeight: 500 }}>{eyebrow}</p>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 400,
                   lineHeight: 1.15, margin: "0 0 18px", letterSpacing: "-0.01em" }}>
        {title}
      </h2>
      <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: 1.65,
                  margin: "0 0 28px", maxWidth: 420 }}>
        {body}
      </p>
      {meta.length > 0 && (
        <div style={{ display: "flex", gap: 32, marginBottom: 28, flexWrap: "wrap" }}>
          {meta.map((m) => (
            <div key={m.label}>
              <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em",
                          color: "#b9975b", margin: "0 0 4px", fontWeight: 600 }}>{m.label}</p>
              <p style={{ fontSize: 14, color: "#fff", margin: 0, fontWeight: 500 }}>{m.value}</p>
            </div>
          ))}
        </div>
      )}
      <span style={{
        display: "inline-block", background: "#b9975b", color: "#0a1628",
        padding: "12px 28px", fontSize: 13, fontWeight: 600, letterSpacing: "0.02em",
      }}>
        {ctaLabel} →
      </span>
    </div>
    {image && (
      <div style={{ position: "relative", minHeight: 380, overflow: "hidden" }}>
        <img src={image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    )}
  </a>
);

// ----- MonogramTile --------------------------------------------------------
// Used as a placeholder until real mentor headshots are imported.
// Deterministic palette per name so the directory feels designed, not random.
const MonogramTile = ({ name, size = 80 }) => {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map((n) => n[0]).join("").toUpperCase();
  // hash → palette index
  const palettes = [
    { bg: "#002868", fg: "#f7f6f3" },
    { bg: "#1D4F91", fg: "#f7f6f3" },
    { bg: "#0a1628", fg: "#b9975b" },
    { bg: "#f7f6f3", fg: "#002868" },
    { bg: "#b9975b", fg: "#0a1628" },
  ];
  let h = 0; for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const p = palettes[h % palettes.length];
  return (
    <div style={{
      width: size, height: size, background: p.bg, color: p.fg,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: '"Trajan Pro", Georgia, serif', fontWeight: 700,
      fontSize: size * 0.36, letterSpacing: "0.04em", flexShrink: 0,
    }}>
      {initials}
    </div>
  );
};

// ----- MentorCard ----------------------------------------------------------
// Compact directory card. Photo (or monogram) + name + role + company + meta tags.
const MentorCard = ({ m, onClick }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(m); }}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         display: "flex", gap: 18, padding: 20, background: hover ? "#f7f6f3" : "#fff",
         border: "1px solid #e2e0dc", textDecoration: "none", color: "inherit",
         transition: "background .2s, border-color .2s, transform .25s",
         transform: hover ? "translateY(-2px)" : "none",
         borderColor: hover ? "#002868" : "#e2e0dc", alignItems: "flex-start",
       }}>
      {m.photo
        ? <img src={m.photo} alt={m.name} style={{ width: 80, height: 80, objectFit: "cover", flexShrink: 0 }} />
        : <MonogramTile name={m.name} size={80} />}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: 18,
                     color: "#111", margin: "0 0 4px", lineHeight: 1.2 }}>{m.name}</h4>
        <p style={{ fontSize: 13, color: "#111", margin: "0 0 2px", lineHeight: 1.4 }}>
          {m.title}
        </p>
        <p style={{ fontSize: 13, color: "#6b6b6b", margin: "0 0 12px", lineHeight: 1.4 }}>
          {m.company}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 11,
                      color: "#6b6b6b" }}>
          <span><span style={{ color: "#b9975b", marginRight: 6 }}>·</span>{m.industry}</span>
          <span><span style={{ color: "#b9975b", marginRight: 6 }}>·</span>{m.focus}</span>
          <span><span style={{ color: "#b9975b", marginRight: 6 }}>·</span>{m.location}</span>
        </div>
      </div>
    </a>
  );
};

// ----- StatsBar / PartnerStrip / PullQuote (kept) --------------------------
const StatsBar = ({ stats, dark = false }) => (
  <div style={{ background: dark ? "#002868" : "transparent", color: dark ? "#fff" : "inherit" }}>
    <div style={{ maxWidth: 1152, margin: "0 auto", padding: "56px 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
        {stats.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 44,
                        color: dark ? "#fff" : "#002868", margin: 0, lineHeight: 1, fontWeight: 400 }}>
              {s.value}
            </p>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em",
                        color: dark ? "rgba(255,255,255,0.7)" : "#6b6b6b",
                        margin: "12px 0 0", fontWeight: 500 }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PartnerStrip = ({ logos }) => (
  <div style={{ borderTop: "1px solid #e2e0dc", padding: "56px 0", background: "#fff" }}>
    <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
      <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em",
                  color: "#6b6b6b", textAlign: "center", margin: "0 0 32px", fontWeight: 500 }}>
        Our students and mentors come from
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center",
                    alignItems: "center", gap: 32 }}>
        {logos.map((l) => (
          <img key={l.alt} src={l.src} alt={l.alt}
               style={{ height: 36, width: "auto", objectFit: "contain",
                        filter: "grayscale(1)", opacity: 0.5, transition: "all .25s" }}
               onMouseEnter={(e) => { e.currentTarget.style.filter = "none"; e.currentTarget.style.opacity = 1; }}
               onMouseLeave={(e) => { e.currentTarget.style.filter = "grayscale(1)"; e.currentTarget.style.opacity = 0.5; }} />
        ))}
      </div>
    </div>
  </div>
);

const PullQuote = ({ quote, name, role, large = false }) => (
  <blockquote style={{ borderLeft: "3px solid #b9975b", paddingLeft: 24, margin: 0 }}>
    <p style={{
      fontFamily: "Georgia, serif", fontStyle: "italic", color: "#111",
      fontSize: large ? 26 : 20, lineHeight: 1.5, margin: 0, maxWidth: 640, fontWeight: 400,
    }}>
      "{quote}"
    </p>
    {name && (
      <p style={{ marginTop: 18, fontSize: 13, color: "#6b6b6b" }}>
        — <strong style={{ color: "#111", fontWeight: 600 }}>{name}</strong>
        {role && `, ${role}`}
      </p>
    )}
  </blockquote>
);

// Legacy aliases — old code still imports ProgramCard / CertificateCard
const ProgramCard = PhotoLedCard;
const CertificateCard = TintedCard;

Object.assign(window, {
  PhotoLedCard, TintedCard, NavyFeatureCard, MonogramTile, MentorCard,
  StatsBar, PartnerStrip, PullQuote,
  ProgramCard, CertificateCard,
});
