"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 font-mono text-sm text-accent"
      >
        04 — Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mb-12 text-3xl font-bold sm:text-4xl"
      >
        Where I've Contributed
      </motion.h2>

      <div className="relative space-y-10 border-l border-border pl-8">
        {experience.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />

            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-bold">{item.role}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                {item.startDate} — {item.endDate}
              </span>
            </div>
            <p className="mb-3 text-sm text-accent">{item.organization}</p>
            <p className="mb-3 text-sm text-muted-foreground">
              {item.description}
            </p>
            {item.highlights.length > 0 && (
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}