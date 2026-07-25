"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassBadge } from "@/components/ui/GlassBadge";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Skills() {
  return (
    <section
      id="skills"
      className="section-container py-28"
    >
      <SectionTitle
        number="02"
        title="What I Work With"
        subtitle="A collection of technologies, frameworks, and tools I use to build modern web applications and data-driven products."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
          >
            <GlassCard className="h-full p-8">
              <h3 className="mb-6 text-xl font-bold">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <GlassBadge
                    key={skill.name}
                    className="hover:scale-105"
                  >
                    {skill.name}
                  </GlassBadge>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}