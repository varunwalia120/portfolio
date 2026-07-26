"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassBadge } from "@/components/ui/GlassBadge";
import { SectionTitle } from "@/components/ui/SectionTitle";

const stats = [
  { label: "Projects Shipped", value: 5, suffix: "" },
  { label: "LeetCode Solved", value: 70, suffix: "+" },
  { label: "CGPA", value: 8.5, suffix: "" },
  { label: "NGOs Contributed To", value: 2, suffix: "" },
];

export function About() {
  return (
    <section
      id="about"
      className="section-container py-28"
    >
      <SectionTitle
        number="01"
        title="Who I Am"
        subtitle="Building products at the intersection of full-stack development and data analytics."
      />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <GlassCard className="p-8 md:p-12">
          <div className="mb-8 flex flex-wrap gap-3">
            <GlassBadge>Full Stack Developer</GlassBadge>

            <GlassBadge>Data Analyst</GlassBadge>

            <GlassBadge>React</GlassBadge>

            <GlassBadge>Next.js</GlassBadge>

            <GlassBadge>Python</GlassBadge>
          </div>

          <div className="max-w-3xl space-y-6 text-lg leading-9 text-muted-foreground">
            <p>
              I'm a third-year Information Technology student at Bharati
              Vidyapeeth College of Engineering, GGSIPU, Delhi, building at
              the intersection of full-stack development and data analytics.
            </p>

            <p>
              I enjoy taking projects end-to-end—from messy raw data or a
              blank repository to a polished, production-ready application.
              My work spans election analytics, public health dashboards,
              modern web applications, and scalable backend systems.
            </p>

            <p>
              My long-term goal is to combine software engineering with data
              science to build products that create measurable real-world
              impact.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <GlassCard
                key={stat.label}
                className="p-6 text-center"
              >
                <div className="text-4xl font-bold text-accent">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </GlassCard>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}