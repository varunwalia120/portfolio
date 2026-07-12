"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 font-mono text-sm text-accent"
      >
        02 — Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mb-12 text-3xl font-bold sm:text-4xl"
      >
        What I Work With
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.05 }}
            className="rounded-lg border border-border bg-card p-6"
          >
            <h3 className="mb-4 font-mono text-sm text-muted-foreground">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}