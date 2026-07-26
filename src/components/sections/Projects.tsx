"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      <SectionTitle
        number="03"
        title="Featured Projects"
        subtitle="A selection of full-stack applications and data analytics projects that showcase production-ready development, clean architecture, and real-world problem solving."
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-14 grid gap-8 lg:grid-cols-2"
      >
        {featured.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </motion.div>

      {others.length > 0 && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-24 mb-10"
          >
            <h3 className="text-2xl font-bold text-foreground">
              More Projects
            </h3>

            <p className="mt-2 max-w-2xl text-muted-foreground">
              Additional projects covering web development, backend
              engineering, and data analytics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 lg:grid-cols-2"
          >
            {others.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </motion.div>
        </>
      )}
    </section>
  );
}