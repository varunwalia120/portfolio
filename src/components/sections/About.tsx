"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { label: "Projects Shipped", value: 5, suffix: "" },
  { label: "LeetCode Solved", value: 50, suffix: "+" },
  { label: "CGPA", value: 8.5, suffix: "" },
  { label: "NGOs Contributed To", value: 2, suffix: "" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 font-mono text-sm text-accent"
      >
        01 — About
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, }}
        transition={{ delay: 0.1 }}
        className="mb-8 text-3xl font-bold sm:text-4xl"
      >
        Who I Am
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl space-y-4 text-muted-foreground"
      >
        <p>
          I&apos;m a third-year Information Technology student at Bharati
          Vidyapeeth College of Engineering, GGSIPU, Delhi, building at the
          intersection of full-stack development and data analytics.
        </p>
        <p>
          I like taking projects end to end — from messy, malformed raw data
          or a blank repo, through to a working, deployed product. My recent
          work spans election data pipelines, public health dashboards, and
          full-stack web applications, built on a stack of React, Next.js,
          Node.js, Python, and SQL.
        </p>
        <p>
          I&apos;m still exploring exactly where I&apos;ll specialize next,
          but data-driven decision making is the thread running through
          everything I build.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border bg-card p-6 text-center"
          >
            <div className="text-3xl font-bold text-accent">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}