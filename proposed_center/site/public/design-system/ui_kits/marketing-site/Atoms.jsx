// Shared atoms used across the kit. Exposed via window for cross-script access.

const Eyebrow = ({ label, onDark = false }) => (
  <div style={{ marginBottom: 16 }}>
    <span style={{ display: "block", width: 24, height: 2, background: "#b9975b", marginBottom: 12 }} />
    <p style={{
      fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em",
      color: onDark ? "rgba(255,255,255,0.7)" : "#6b6b6b",
      fontWeight: 500, margin: 0,
    }}>{label}</p>
  </div>
);

const Button = ({ children, variant = "primary", onClick, href }) => {
  const base = {
    display: "inline-block", fontSize: 14, fontWeight: 600,
    padding: "12px 28px", textDecoration: "none", cursor: "pointer",
    border: 0, fontFamily: "inherit", transition: "background .25s, color .25s",
  };
  const styles = {
    primary:    { ...base, background: "#002868", color: "#fff" },
    onDark:     { ...base, background: "#fff", color: "#002868" },
    // Secondary on light: warm off-white fill (--c-off-white) with navy stroke. Never empty/transparent.
    outline:    { ...base, background: "#f7f6f3", color: "#002868", border: "1px solid #002868", padding: "11px 27px" },
    outlineOnDark: { ...base, background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.6)", padding: "11px 27px" },
    // Gold accent — use sparingly (1 per page max). Dark text on gold for AA.
    gold:       { ...base, background: "#b9975b", color: "#0a1628" },
  };
  const Tag = href ? "a" : "button";
  return <Tag style={styles[variant]} href={href} onClick={onClick}>{children}</Tag>;
};

const ArrowLink = ({ children, onClick, color = "#002868" }) => (
  <a href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(); }}
     style={{ color, fontSize: 14, fontWeight: 600, textDecoration: "underline" }}>
    {children} <span style={{ display: "inline-block" }}>→</span>
  </a>
);

const Hr = () => <hr style={{ border: 0, borderTop: "1px solid #e2e0dc", margin: "64px 0" }} />;

Object.assign(window, { Eyebrow, Button, ArrowLink, Hr });
