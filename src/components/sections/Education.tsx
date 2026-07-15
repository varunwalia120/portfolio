"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 font-mono text-sm text-accent"
      >
        05 — Education
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mb-12 text-3xl font-bold sm:text-4xl"
      >
        Academic Background
      </motion.h2>

      <div className="space-y-8">
        {education.map((item, index) => (
          <motion.div
            key={item.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-lg border border-border bg-card p-6"
          >
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-bold">{item.degree}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                {item.startYear} — {item.endYear}
              </span>
            </div>
            <p className="mb-4 text-sm text-accent">{item.institution}</p>

            {item.cgpa && (
              <p className="mb-4 text-sm text-muted-foreground">
                CGPA: <span className="text-foreground">{item.cgpa}</span>
              </p>
            )}

            {item.achievements && item.achievements.length > 0 && (
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                {item.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}