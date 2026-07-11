export interface Project {
  id: string;
  title: string;
  description: string;
  problemSolved: string;
  techStack: string[];
  keyFeatures: string[];
  challenges: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
  icon?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: "internship" | "freelance" | "volunteer";
  startDate: string;
  endDate: string | "Present";
  description: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  cgpa?: string;
  startYear: number;
  endYear: number;
  coursework?: string[];
  achievements?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}