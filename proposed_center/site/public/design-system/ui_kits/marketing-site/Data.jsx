// Static content used across pages. Real data, lifted from public TMDL site where possible,
// otherwise plausible placeholders flagged with [tbd].

const PROGRAMS_FEATURE = {
  slug: "ms-strategic-tech-leadership",
  tag: "Master's Degree · 30 credits",
  title: "MS in Strategic Technology Leadership",
  description: "A 30-credit hybrid degree combining residencies, mentor pairings, and an applied capstone.",
  body: "The flagship offering. A two-year hybrid Master of Science designed for working professionals — in-person residencies in Boston, London, and New York; one-on-one mentorship with industry executives; and a 6-credit capstone project drawn from your own organization.",
  image: "../../assets/photos/session-classroom.jpg",
  meta: [
    { label: "Format",    value: "Hybrid · 3 residencies" },
    { label: "Length",    value: "24 months" },
    { label: "Capstone",  value: "6 credits, applied" },
    { label: "Cohort",    value: "~25 students" },
  ],
};

const PROGRAMS_EXEC = [
  { slug: "digital-leadership-experience", tag: "Executive Program",
    title: "Digital Leadership Experience",
    description: "A flexible 6–12 month program for executives navigating digital transformation.",
    image: "../../assets/photos/program-mentoring.jpg" },
  { slug: "ai-ml-leadership", tag: "Workshop",
    title: "AI &amp; Machine Learning Leadership",
    description: "A 3.5-day immersive for senior leaders building AI/ML implementation roadmaps.",
    image: "../../assets/photos/program-tech.jpg" },
  { slug: "break-the-frame", tag: "Workshop",
    title: "Break the Frame",
    description: "A creative “playshop” for leaders ready to question assumptions and reframe challenges.",
    image: "../../assets/photos/session-lecture.jpg" },
];

const CERTIFICATES = [
  { slug: "blockchain", name: "Blockchain",
    image: "../../assets/photos/course-blockchain.jpg",
    line: "Strategic mechanics across finance, healthcare, and enterprise systems." },
  { slug: "cybersecurity-policy", name: "Cybersecurity: Policy &amp; Practice",
    image: "../../assets/photos/course-cybersecurity.jpg",
    line: "Governance, risk, and policy frameworks for senior leadership." },
  { slug: "cybersecurity-threats", name: "Cybersecurity: Threats &amp; Defenses",
    image: "../../assets/photos/course-threats.jpg",
    line: "Hands-on threat modeling and response playbooks." },
  { slug: "database-platforms", name: "Database Platform Design",
    image: "../../assets/photos/program-tech.jpg",
    line: "Architecture decisions for analytics, scale, and resilience." },
  { slug: "ar-vr-metaverse", name: "Managing AR, VR &amp; the Metaverse",
    image: "../../assets/photos/program-metaverse.jpg",
    line: "From spatial computing pilots to enterprise rollout." },
  { slug: "smart-cities", name: "Smart City Initiatives",
    image: "../../assets/photos/hero-city.jpg",
    line: "Public-private models for urban technology programs." },
  { slug: "experience-economy", name: "The Experience Economy",
    image: "../../assets/photos/session-dinner.jpg",
    line: "Designing differentiated value through service and experience design." },
  { slug: "data-analytics", name: "Data Management &amp; Analytics",
    image: "../../assets/photos/media-center.jpg",
    line: "From governance to insight: analytics that hold up at the C-suite." },
];

const MENTORS = [
  { slug: "sherry-aaholm", name: "Sherry Aaholm",
    title: "Chief Digital Officer", company: "Cummins Inc.",
    industry: "Manufacturing", focus: "C-Level Management",
    location: "Indianapolis, IN, United States" },
  { slug: "tej-anand", name: "Tej Anand",
    title: "Clinical Professor", company: "Robert H. Smith School of Business",
    industry: "Higher Education / Analytics", focus: "Data Management &amp; Analytics",
    location: "College Park, MD, United States" },
  { slug: "leesa-soulodre", name: "Leesa Soulodre",
    title: "General Partner", company: "R³i Ventures",
    industry: "Venture Capital", focus: "New Business Ventures",
    location: "Singapore" },
  { slug: "carolyne-kenyon", name: "Carolyne Kenyon",
    title: "Executive Coach &amp; Advisor", company: "Independent",
    industry: "Leadership Development", focus: "Executive Coaching",
    location: "London, United Kingdom" },
  { slug: "mark-hutchison", name: "Mark Hutchison",
    title: "Former Global Vice President", company: "Oracle",
    industry: "Enterprise Software", focus: "Go-to-Market Strategy",
    location: "London, United Kingdom" },
  { slug: "robert-duncan", name: "Robert Duncan",
    title: "Chief Information Officer", company: "Boeing (former)",
    industry: "Aerospace &amp; Defense", focus: "IT Transformation",
    location: "Seattle, WA, United States" },
  { slug: "likhit-wagle", name: "Likhit Wagle",
    title: "Global Industry General Manager", company: "IBM",
    industry: "Banking &amp; Financial Markets", focus: "Industry Strategy",
    location: "London, United Kingdom" },
  { slug: "anita-rao", name: "Anita Rao",
    title: "VP of Engineering", company: "JPMorgan Chase",
    industry: "Financial Services", focus: "Platform Engineering",
    location: "New York, NY, United States" },
  { slug: "david-chen", name: "David Chen",
    title: "Head of Product", company: "Microsoft Cloud",
    industry: "Enterprise Software", focus: "Product Leadership",
    location: "Redmond, WA, United States" },
];

const FACULTY = [
  { slug: "art-langer", name: "Dr. Arthur M. Langer", role: "Director · Professor of Practice",
    photo: "../../assets/photos/art-langer.jpg",
    line: "Founding Director of the Center; previously at Columbia and Northeastern. Author of 7 books on technology management." },
  { slug: "tej-anand-faculty", name: "Tej Anand", role: "Academic Director, Blockchain Business Imperative",
    photo: null,
    line: "Clinical Professor at the University of Maryland; Director of the Deloitte Initiative on AI and Learning." },
  { slug: "leesa-soulodre-faculty", name: "Leesa Soulodre", role: "Faculty, New Business Ventures",
    photo: null,
    line: "Venture investor and former corporate strategist; teaches the venture-formation residency in London." },
];

const PARTNER_LOGOS = ["microsoft","ibm","jpmorgan","goldman","deloitte","boeing","amex","aws","xerox"]
  .map((n) => ({ src: `../../assets/logos/logo-${n}.png`, alt: n }));

Object.assign(window, {
  PROGRAMS_FEATURE, PROGRAMS_EXEC, CERTIFICATES, MENTORS, FACULTY, PARTNER_LOGOS,
});
