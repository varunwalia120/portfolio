// src/data/experience.ts

import { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "nayepankh-foundation",
    role: "Full-Stack Developer (Volunteer)",
    organization: "NayePankh Foundation",
    type: "volunteer",
    startDate: "2026",
    endDate: "2026",
    description:
      "Built and delivered a full production website for the NGO, along with a technical systems analysis report of their digital presence.",
    highlights: [
      "Built a Next.js website featuring dark mode, animated statistics, and a contact form",
      "Authored a full-stack systems analysis report using ReportLab, delivered as a PDF for the organization",
    ],
  },
  {
    id: "she-can-foundation",
    role: "Technical Volunteer",
    organization: "She Can Foundation",
    type: "volunteer",
    startDate: "2026",
    endDate: "2026",
    description:
      "Built a static website for the NGO, following their specific structural and content requirements.",
    highlights: [
      "Built and delivered a static website using pure HTML and CSS, per the NGO's specified requirements",
    ],
  },
];