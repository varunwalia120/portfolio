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

      <div className="relative pl-8">
        {/* Ambient Glow */}

<div className="pointer-events-none absolute inset-0 overflow-visible">
 <div
    className="
absolute
left-1/2
top-1/2
-translate-x-1/2
-translate-y-1/2
h-[600px]
w-[600px]
rounded-full
bg-blue-500/20
blur-[110px]
opacity-30
"
  />
</div>

<div className="space-y-6"></div>
        <div className="absolute left-[3px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />

        {experience.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[calc(2rem-1px)] top-6 h-3.5 w-3.5 rounded-full bg-accent ring-8 ring-background" />

            <div
              className="
    glass rounded-3xl border border-white/10 p-6 backdrop-blur-xl
transition-all duration-500
hover:-translate-y-1
hover:border-accent/20
hover:shadow-[0_0_60px_rgba(59,130,246,0.18)]
  "
            >
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-bold">{item.role}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.startDate} — {item.endDate}
                </span>
              </div>
              <div className="mb-4">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  {item.organization}
                </span>
              </div>
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
