// Footer — sitemap, partner mark, copyright row.
const Footer = () => (
  <footer style={{ borderTop: "1px solid #e2e0dc", background: "#f7f6f3", marginTop: 80 }}>
    <div style={{ maxWidth: 1152, margin: "0 auto", padding: "48px 24px",
                  display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 40 }}>
      <div>
        <p style={{
          fontFamily: '"Trajan Pro", Georgia, serif', fontSize: 10,
          textTransform: "uppercase", letterSpacing: "0.18em", color: "#6b6b6b",
          margin: "0 0 4px",
        }}>
          Columbia University · Teachers College
        </p>
        <p style={{
          fontFamily: '"Trajan Pro", Georgia, serif', fontWeight: 700,
          fontSize: 15, letterSpacing: "0.06em", color: "#002868",
          textTransform: "uppercase", margin: 0,
        }}>
          Center for Strategic Learning and Leadership for the Digital Age
        </p>
        <p style={{ fontSize: 12, color: "#6b6b6b", marginTop: 16, lineHeight: 1.6 }}>
          Established by Dr. Art Langer.
        </p>
        <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 12 }}>
          <img src="../../assets/logos/wos-logo.png" alt="WOS" style={{ height: 32, opacity: 0.6 }} />
          <span style={{ fontSize: 12, color: "#6b6b6b" }}>Partner Organization</span>
        </div>
      </div>

      {[
        { label: "Site",     items: ["About", "Leadership", "Student Experience"] },
        { label: "Programs", items: ["All Programs", "MS Degree", "Executive Programs", "Contact Us"] },
      ].map((col) => (
        <nav key={col.label} style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: "#6b6b6b" }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: "#6b6b6b", margin: "0 0 4px" }}>
            {col.label}
          </p>
          {col.items.map((i) => (
            <a key={i} href="#" style={{ color: "#6b6b6b", textDecoration: "none" }}>{i}</a>
          ))}
        </nav>
      ))}
    </div>

    <div style={{ borderTop: "1px solid #e2e0dc", padding: "16px 0", textAlign: "center", fontSize: 12, color: "#6b6b6b" }}>
      © {new Date().getFullYear()} Center for Strategic Learning and Leadership for the Digital Age, Columbia University Teachers College.
      Prototype — content sourced from TMDL at Northeastern University.
    </div>
  </footer>
);

Object.assign(window, { Footer });
