// All landing page text lives here. Edit this file to change content.

export const profile = {
  name: "Maksym Koptiaev",
  role: "Data Analyst · Unity / Fullstack Developer",
  tagline:
    "Data analyst with a software development background: 4 years of commercial development and the last six months in data analytics.",
};

export const about = [
  "Data analyst with a software development background: 4 years of commercial development across the full lifecycle and the last six months in data analytics.",
  "Actively use AI agents in daily work and understand how to set up processes and organize workflows around them.",
  "Strong technical background in client-server architecture, integrations and databases. Used to being the link between clients, designers and developers: clarifying requirements, describing solutions and taking part in technical decision-making.",
];

export const keySkills = [
  "Active use of AI agents; understanding of AI-driven processes and how to build workflows around them.",
  "Writing technical tasks, functional specifications and algorithm descriptions.",
  "Business process modeling (Activity Diagram).",
  "Integration design (REST/SOAP) and preparation of mapping documents.",
  "Solid understanding of client-server architecture, HTTP/REST, XML, JSON and frontend/backend interaction.",
  "Design and optimization of service and database architectures.",
  "Familiar with ERP systems, several business domains and the relationships between company processes.",
  "Work in Agile/Scrum teams; daily communication with clients, designers, developers and QA.",
];

export const skills: { group: string; items: string[] }[] = [
  { group: "AI", items: ["AI agents and assistants"] },
  { group: "Analysis & documentation", items: ["Jira", "Excel", "draw.io"] },
  { group: "Process modeling", items: ["UML Activity Diagram"] },
  { group: "Integrations", items: ["REST", "SOAP", "WebSockets", "Postman", "JSON", "XML"] },
  { group: "Databases", items: ["PostgreSQL (SQL)", "Prisma", "TypeORM", "Firebase"] },
  {
    group: "Development",
    items: ["Node.js", "Nest.js", "Express", "React", "Unity", "C#", "Docker", "Git"],
  },
];

export const experience: {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}[] = [
  {
    company: "Enter Influence Marketing",
    role: "Data Analyst",
    period: "04.2026 – Present",
    highlights: [
      "Collected, cleaned and analyzed data on influencer marketing campaigns to evaluate their performance.",
      "Prepared regular reports and dashboards on key metrics for the team and clients.",
      "Gathered and clarified reporting requirements from managers and stakeholders and turned them into clear tasks.",
      "Automated routine data collection and reporting, including with AI agents.",
      "Documented data sources, metrics and calculation logic.",
    ],
  },
  {
    company: "Freelance",
    role: "Back-end Developer",
    period: "04.2025 – 09.2025",
    highlights: [
      "Designed, developed, and maintained backend architectures for applications.",
      "Automated build and deployment processes using Git-based CI/CD pipelines.",
      "Collaborated with the QA team, analyzed root causes of issues, and promptly resolved defects in services and system modules.",
    ],
  },
  {
    company: "HumanIT",
    role: "Unity Developer",
    period: "06.2024 – 04.2025",
    highlights: [
      "Participated in the full-cycle development of game projects in collaboration with a designer.",
      "Developed interactions between backend services and client-side application components.",
      "Created and improved prototypes for testing gameplay mechanics.",
      "Collaborated with international clients and participated in technical decision-making.",
      "Used English daily for communication and documentation.",
    ],
  },
  {
    company: "Beatshapers",
    role: "Unity Developer",
    period: "01.2023 – 05.2024",
    highlights: [
      "Developed multiple game prototypes for testing mechanics and validating concepts.",
      "Rapidly implemented MVPs and core gameplay systems.",
      "Collaborated with designers in the iterative improvement of prototypes.",
    ],
  },
  {
    company: "Olimp Digital",
    role: "Unity Developer",
    period: "10.2021 – 10.2022",
    highlights: [
      "Participated in the full-cycle development of game projects in collaboration with a designer.",
      "Worked with international clients.",
      "Used English for professional communication and documentation.",
    ],
  },
];

export const education: { title: string; place: string; period: string }[] = [
  { title: "Fullstack Developer (Node.js, React)", place: "Genius Space", period: "10.2025 – 03.2026" },
  {
    title: "Master's Degree in Cybersecurity and Information Protection",
    place: "Polissia National University",
    period: "2023 – 2024",
  },
  {
    title: "Bachelor's Degree in Software Engineering",
    place: "Zhytomyr Polytechnic State University",
    period: "2020 – 2023",
  },
];

export const languages: { name: string; level: string }[] = [
  { name: "Ukrainian", level: "Native" },
  { name: "English", level: "B2" },
];

export const contacts: { label: string; value: string; href: string }[] = [
  { label: "Email", value: "maks.koptyaev75@gmail.com", href: "mailto:maks.koptyaev75@gmail.com" },
  { label: "Phone", value: "+38 (096) 49-84-208", href: "tel:+380964984208" },
  { label: "Telegram", value: "@Drak0sh1k", href: "https://t.me/Drak0sh1k" },
];
