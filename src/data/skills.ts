import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", proficiency: 85 },
      { name: "JavaScript", proficiency: 85 },
      { name: "TypeScript", proficiency: 75 },
      { name: "SQL", proficiency: 80 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", proficiency: 85 },
      { name: "Next.js", proficiency: 80 },
      { name: "Tailwind CSS", proficiency: 85 },
      { name: "HTML/CSS", proficiency: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", proficiency: 75 },
      { name: "Hono", proficiency: 65 },
      { name: "Cloudflare Workers", proficiency: 65 },
      { name: "Prisma", proficiency: 70 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", proficiency: 80 },
      { name: "MongoDB", proficiency: 70 },
      { name: "SQLAlchemy", proficiency: 50 },
    ],
  },
  {
    category: "Data Analytics",
    skills: [
      { name: "Pandas", proficiency: 80 },
      { name: "NumPy", proficiency: 75 },
      { name: "Streamlit", proficiency: 75 },
      { name: "Plotly", proficiency: 75 },
      { name: "Tableau", proficiency: 75 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", proficiency: 80 },
      { name: "GitHub", proficiency: 80 },
      { name: "VS Code", proficiency: 90 },
    ],
  },
];