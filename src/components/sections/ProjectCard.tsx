"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "@/types";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ delay: index * 0.08 }}
      className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-shadow duration-300 hover:border-accent/50 hover:shadow-[0_0_24px_-6px_hsl(var(--accent)/0.35)]"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              <GithubIcon size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="mb-4 flex-1 text-sm text-muted-foreground">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <details className="text-sm">
        <summary className="cursor-pointer text-accent">
          Problem, features & challenges
        </summary>
        <div className="mt-3 space-y-3 text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Problem: </span>
            {project.problemSolved}
          </p>
          <div>
            <span className="font-medium text-foreground">
              Key features:
            </span>
            <ul className="mt-1 list-inside list-disc space-y-1">
              {project.keyFeatures.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-medium text-foreground">Challenges:</span>
            <ul className="mt-1 list-inside list-disc space-y-1">
              {project.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </details>
    </motion.div>
  );
}