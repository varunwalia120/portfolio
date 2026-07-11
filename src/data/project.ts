// src/data/projects.ts

import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "covid19-india-impact-analysis",
    title: "COVID-19 India Impact Analysis",
    description:
      "A multi-page interactive dashboard analyzing India's COVID-19 trajectory across cases, vaccination rollout, and government policy response, built by stitching together four disparate public datasets into a single clean analytical pipeline.",
    problemSolved:
      "Public COVID-19 data for India was scattered across incompatible sources (covid19india.org, OWID, OxCGRT) with mismatched granularity, inconsistent state naming, and no unified view connecting case trends to policy timing and vaccination coverage. This project builds a single pipeline and dashboard that lets a user explore all three together.",
    techStack: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy"],
    keyFeatures: [
      "Multi-source data stitching across four covid19india.org CSVs, OWID national data, and the OxCGRT policy stringency dataset",
      "Multi-page interactive dashboard with dedicated views for case trends, vaccination progress, and policy overlay",
      "Wave-by-wave analysis with corrected date boundaries for India's COVID waves",
      "State-level vaccination coverage analysis, including transparent handling of small UTs exceeding 100% coverage",
    ],
    challenges: [
      "Reconciling four data sources with different update frequencies and state-naming conventions into one clean schema",
      "Hardcoding RGI/UIDAI 2022 population estimates over Census 2011 figures to correctly handle Telangana's split and the Dadra & Nagar Haveli–Daman & Diu merger",
      "Documenting small-UT vaccination coverage exceeding 100% as a real data characteristic (commuter/migrant vaccination) rather than treating it as a pipeline bug",
    ],
    githubUrl: "https://github.com/varunwalia120/covid19-india-impact-analysis",
    liveUrl:
      "https://covid19-india-impact-analysis-2ayutn8qxhkupagnmrxhgi.streamlit.app/Policy_Overlay",
    imageUrl: "/projects/covid19-dashboard.png",
    featured: true,
  },
  {
    id: "loksabha-2024-analysis",
    title: "Lok Sabha 2024 General Election Analysis",
    description:
      "An end-to-end election analytics project covering data extraction from the Election Commission of India, a MySQL-backed relational schema, and a published Tableau dashboard exploring results across all constituencies.",
    problemSolved:
      "Official ECI election data is released in malformed, inconsistently structured XLS files that are unfit for direct analysis. This project builds a reliable pipeline from raw ECI files to a queryable database to a public interactive dashboard.",
    techStack: ["MySQL", "Python", "SQLAlchemy", "Tableau Public"],
    keyFeatures: [
      "Full pipeline from raw ECI XLS files to a structured MySQL database",
      "Composite primary key design to correctly handle non-unique constituency names across states",
      "Published interactive Tableau Public dashboard for exploring constituency-level results",
    ],
    challenges: [
      "Malformed ECI XLS files required LibreOffice-based conversion before they could be parsed reliably",
      "MySQL Workbench's row import cap forced a SQLAlchemy-based import workaround",
      "Constituency names repeat across states, requiring composite primary keys instead of simple name-based uniqueness",
      "State name mismatches between ECI data and standard naming conventions had to be reconciled manually",
    ],
    githubUrl: "https://github.com/varunwalia120/loksabha_2024-analysis",
    liveUrl:
      "https://public.tableau.com/app/profile/varun.walia6110/viz/LokSabha2024GeneralElectionAnalysis/LokSabha2024GeneralElectionAnalysis",
    imageUrl: "/projects/loksabha-dashboard.png",
    featured: true,
  },
  {
    id: "blogs-medium-clone",
    title: "Blogs — Medium Clone",
    description:
      "A full-stack blogging platform inspired by Medium, with a deployed frontend and a serverless backend, later hardened through a dedicated security audit.",
    problemSolved:
      "Recreate a production-style blogging platform end to end — authentication, post creation, and a clean reading experience — then treat it as a real codebase by auditing and fixing the security issues a first pass typically leaves behind.",
    techStack: ["React", "Node.js", "Hono", "Cloudflare Workers", "MongoDB", "Prisma", "Tailwind CSS"],
    keyFeatures: [
      "User authentication and post creation/editing flows",
      "Frontend deployed on Vercel, backend deployed on Cloudflare Workers",
      "Dark mode and UI polish pass",
    ],
    challenges: [
      "Ran a self-directed code audit and fixed an authentication bypass",
      "Replaced plaintext password storage with proper hashing",
      "Added missing ownership checks so users could only modify their own posts",
    ],
    githubUrl: "https://github.com/varunwalia120/Blogs-Medium",
    liveUrl: "https://blogs-medium-eight.vercel.app/signup",
    imageUrl: "/projects/blogs-medium.png",
    featured: true,
  },
  {
    id: "gst-calculator",
    title: "GST Calculator",
    description:
      "A GST calculator built for a trial task, styled with an Indian 'chalan' (receipt) aesthetic to make a routine calculation tool feel purpose-built.",
    problemSolved:
      "Built as a trial/assessment task to demonstrate rapid, focused delivery of a working utility with a distinct visual identity, rather than a generic form-and-output calculator.",
    techStack: ["Next.js", "Tailwind CSS"],
    keyFeatures: [
      "GST calculation logic with a custom chalan-style receipt UI",
      "Built and delivered quickly as a trial assessment task",
    ],
    challenges: [
      "Balancing a fast turnaround with a distinctive, non-generic visual design",
    ],
    githubUrl: "https://github.com/varunwalia120/GST_Calculator",
    imageUrl: "/projects/gst-calculator.png",
    featured: false,
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    description:
      "A full-stack Student Management System with a clean dashboard for adding and viewing student records — the first full-stack project in my portfolio.",
    problemSolved:
      "Build a working CRUD-driven dashboard to manage student data (name, roll number, branch, year) through a responsive interface, establishing the MERN-stack foundation used in later projects.",
    techStack: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    keyFeatures: [
      "Add and view student details (full name, roll number, branch, year)",
      "Clean, responsive dashboard interface",
      "REST API backend built with Express and MongoDB",
    ],
    challenges: [
      "First full-stack project — establishing the React + Express + MongoDB workflow from scratch",
    ],
    githubUrl: "https://github.com/varunwalia120/Project-1",
    imageUrl: "/projects/student-management.png",
    featured: false,
  },
];