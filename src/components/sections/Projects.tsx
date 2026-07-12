"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 font-mono text-sm text-accent"
      >
        03 — Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mb-12 text-3xl font-bold sm:text-4xl"
      >
        What I Built
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {others.length > 0 && (
        <>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 mt-16 text-xl font-bold"
          >
            More Projects
          </motion.h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {others.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i + featured.length}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}