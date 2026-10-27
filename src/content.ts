// All landing page text lives here. Edit this file to change content.

export const profile = {
  name: "Maksym Koptiaev",
  role: "Business / Data Analyst · Unity / Fullstack Developer",
  tagline:
    "Data analyst with a software development background — I connect clients, designers and developers.",
  cvPdf: "/M.Koptiaev_CV_ENG.pdf", // file lives in public/
};

export const about = [
  "Data analyst with a software development background: 4 years of commercial development across the full lifecycle and the last six months in data analytics.",
  "I actively use AI agents in daily work and know how to set up processes and workflows around them.",
  "Strong technical background in client-server architecture, integrations and databases. Used to clarifying requirements, describing solutions and taking part in technical decisions.",
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Analysis", items: ["Specifications", "Activity diagrams", "Mapping docs", "TODO"] },
  { group: "Integrations", items: ["REST", "SOAP", "JSON", "XML"] },
  { group: "Development", items: ["Unity / C#", "TODO"] },
  { group: "Tools", items: ["AI agents", "Git", "TODO"] },
];

export const experience: {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}[] = [
  { company: "TODO Company", role: "TODO Role", period: "20XX — now", highlights: ["TODO achievement"] },
];

export const projects: { title: string; description: string; href?: string }[] = [
  { title: "TODO Project", description: "Short description.", href: "#" },
];

export const contacts: { label: string; value: string; href: string }[] = [
  { label: "Email", value: "maks.koptyaev75@gmail.com", href: "mailto:maks.koptyaev75@gmail.com" },
  { label: "Telegram", value: "@Drak0sh1k", href: "https://t.me/Drak0sh1k" },
  { label: "GitHub", value: "TODO", href: "#" },
  { label: "LinkedIn", value: "TODO", href: "#" },
];
