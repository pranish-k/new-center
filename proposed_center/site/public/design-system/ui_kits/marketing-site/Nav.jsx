// Top navigation — sticky white bar, two-line wordmark, 3 links + Contact pill, gold underline = active.
const Nav = ({ current, go }) => {
  const links = [
    { id: "mission",    label: "About" },
    { id: "programs",   label: "Programs" },
    { id: "mentors",    label: "Mentors" },
    { id: "leadership", label: "Leadership" },
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50, background: "#fff", height: 64,
      borderBottom: "1px solid #e2e0dc", display: "flex", alignItems: "center",
    }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", width: "100%",
                    display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }}
           style={{ display: "flex", flexDirection: "column", lineHeight: 1.25, textDecoration: "none" }}>
          <span style={{
            fontFamily: '"Trajan Pro", Georgia, serif', fontSize: 10,
            textTransform: "uppercase", letterSpacing: "0.18em", color: "#6b6b6b",
          }}>
            Columbia University · Teachers College
          </span>
          <span style={{
            fontFamily: '"Trajan Pro", Georgia, serif', fontWeight: 700,
            fontSize: 15, letterSpacing: "0.06em", color: "#002868",
            textTransform: "uppercase", marginTop: 2,
          }}>
            Center for Technology Management
          </span>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map((l) => {
            const active = current === l.id;
            return (
              <a key={l.id} href="#" onClick={(e) => { e.preventDefault(); go(l.id); }}
                 style={{
                   fontSize: 14, color: "#111", textDecoration: "none",
                   paddingBottom: 2,
                   borderBottom: active ? "2px solid #b9975b" : "2px solid transparent",
                 }}>
                {l.label}
              </a>
            );
          })}
          <a href="#" onClick={(e) => { e.preventDefault(); go("contact"); }}
             onMouseEnter={(e) => { e.currentTarget.style.background = "#001a4d"; e.currentTarget.style.borderColor = "#001a4d"; }}
             onMouseLeave={(e) => { e.currentTarget.style.background = "#002868"; e.currentTarget.style.borderColor = "#002868"; }}
             style={{
               fontSize: 14, fontWeight: 500, color: "#fff",
               background: "#002868", border: "1px solid #002868",
               padding: "6px 16px", textDecoration: "none",
               transition: "background .2s, border-color .2s",
             }}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

Object.assign(window, { Nav });
