export const profile = {
  name: "Divyansh Chaudhary",
  role: "Frontend Software Engineer",
  location: "Gurugram, India",
  phone: "7037740869",
  phoneHref: "tel:+917037740869",
  email: "chdivyansh9@gmail.com",
  emailHref: "mailto:chdivyansh9@gmail.com",
  availability: "Open to work · Ready to relocate anywhere in India",
  links: {
    linkedin: "https://www.linkedin.com/in/divyansh-chaudhary-58476b195/",
    github: "https://github.com/Divyansh-chaudhary",
    leetcode: "https://leetcode.com/u/divyanshchaudhary/",
    resumeDrive:
      "https://drive.google.com/file/d/1uj3UV7dDyfzVtMw757QW4rhCwF9fAarE/view",
  },
} as const;

export const experience = [
  {
    company: "Deutsche Telekom Digital Labs",
    location: "Gurugram, Haryana",
    role: "Frontend Software Engineer",
    period: "Nov 2023 – Present",
    highlights: [
      "Architected micro-frontend modules with Vue.js, TypeScript, and Single-SPA for independent deployments across product teams on a large-scale telecom platform.",
      "Contributing to **MAVI** (agent call-center platform) and **OneAppWeb** (customer self-care web) as separate product surfaces at Deutsche Telekom.",
      "Redesigned the MAVI agent dashboard UI, cutting average customer query resolution time by **25%** through clearer hierarchy and responsive layouts.",
      "Raised unit test coverage by **35%** with Vitest, reducing production regressions and improving release confidence.",
      "Owned features end-to-end — requirements, UI implementation, code review, and deployment — in cross-functional Agile sprints.",
    ],
  },
  {
    company: "Oodles Technology Pvt. Ltd.",
    location: "India",
    role: "Frontend Software Engineer",
    period: "Sep 2021 – Nov 2023",
    highlights: [
      "Shipped **4+** production apps with React.js and Vue.js serving up to **5,000+** users per product.",
      "Built a Redux Toolkit state architecture and reusable component library that reduced duplication and shortened onboarding time.",
      "Integrated REST APIs for data-driven dashboards and wallet/payment flows with real-time UI updates.",
      "Wrote Jest unit tests, maintained GitLab CI/CD pipelines, and authored technical documentation.",
    ],
  },
] as const;

export const projects = [
  {
    name: "MAVI",
    tagline: "Deutsche Telekom · Agent Call-Center Platform",
    stack: ["Vue.js", "TypeScript", "Single-SPA", "Vitest"],
    description:
      "Internal call-center application used by **18,000+** agents to resolve customer queries with real-time insights and search — supporting **1.8 million+** monthly calls. Rebuilt agent dashboard UX and micro-frontend modules; cut query resolution time by **25%** and raised Vitest coverage by **35%**.",
  },
  {
    name: "OneAppWeb",
    tagline: "Deutsche Telekom · Customer Self-Care Web",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Web channel of the OneApp ecosystem — customer self-care across Deutsche Telekom NatCos (contracts, billing, orders, support). Built with Next.js, TypeScript, and Tailwind CSS as a multi-tenant, multi-market frontend alongside the OneApp mobile platform.",
  },
  {
    name: "DISTINCT",
    tagline: "NFT Marketplace",
    stack: ["React.js", "Redux", "REST APIs"],
    description:
      "NFT listing and trading platform with Polygon wallet integration, CMS-backed content, and real-time wallet state sync — supporting **5,000+** asset transactions.",
  },
  {
    name: "LEWK",
    tagline: "Creator Monetization Dashboard",
    stack: ["React.js", "Redux", "Node.js"],
    description:
      "Dashboard enabling **1,000+** creators to track earnings and generate token-based revenue, with reusable analytics components on REST APIs.",
  },
  {
    name: "Crypviser",
    tagline: "Token Swap Platform",
    stack: ["React.js", "Redux"],
    description:
      "Crypto token swap platform with multilingual (i18n) support and multi-wallet integration for a global user base.",
  },
] as const;

export const skills = [
  {
    label: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    label: "Frontend",
    items: [
      "Vue.js",
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Pinia",
      "TanStack Query",
      "GraphQL",
      "Single-SPA",
      "Micro-Frontends",
      "SSR",
      "Hooks",
    ],
  },
  {
    label: "UI & Styling",
    items: [
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "BEM",
      "Responsive Design",
      "CSS-in-JS",
    ],
  },
  {
    label: "Testing & Tools",
    items: ["Vitest", "Jest", "Git", "GitHub", "GitLab", "GitLab CI/CD"],
  },
  {
    label: "Backend & Data",
    items: ["Node.js", "REST APIs", "MongoDB", "Firebase"],
  },
  {
    label: "Practices",
    items: ["Agile/Scrum", "Code Reviews", "Technical Documentation"],
  },
] as const;

export const education = {
  school: "Chaudhary Charan Singh University",
  location: "Meerut, India",
  degree: "Bachelor of Computer Applications (BCA)",
  period: "2018 – 2021",
} as const;
