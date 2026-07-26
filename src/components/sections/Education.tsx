"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

import { education } from "@/data/education";

export function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-28"
    >
      {/* Ambient Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            h-[850px]
            w-[850px]
            rounded-full
            bg-blue-500/5
            blur-[220px]
          "
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Section Label */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-mono text-sm text-accent"
        >
          05 — Education
        </motion.p>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16 text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Academic Background
        </motion.h2>

        <div className="space-y-10">
          {education.map((item, index) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="group relative"
            >
              {/* Education Card */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-accent/30
                  hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]
                "
              >
                {/* Card Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-72
                    w-72
                    rounded-full
                    bg-blue-500/0
                    blur-[120px]
                    transition-all
                    duration-500
                    group-hover:bg-blue-500/15
                  "
                />

                <div className="relative z-10">
                                    {/* Header */}

                  <div className="mb-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <GraduationCap
                          size={22}
                          className="text-accent"
                        />

                        <h3 className="text-2xl font-bold">
                          {item.degree}
                        </h3>
                      </div>

                      <span
                        className="
                          inline-flex
                          rounded-full
                          bg-accent/10
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-accent
                        "
                      >
                        {item.institution}
                      </span>
                    </div>

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-muted-foreground
                      "
                    >
                      <Calendar
                        size={16}
                        className="text-accent"
                      />

                      <span>
                        {item.startYear} — {item.endYear}
                      </span>
                    </div>
                  </div>

                  {/* CGPA */}

                  {item.cgpa && (
                    <div
                      className="
                        mb-8
                        inline-flex
                        rounded-full
                        border
                        border-accent/20
                        bg-accent/10
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-accent
                      "
                    >
                      CGPA: {item.cgpa}
                    </div>
                  )}

                  {/* Highlights */}

                  {item.achievements.length > 0 && (
                    <div>
                      <h4
                        className="
                          mb-5
                          text-sm
                          font-semibold
                          uppercase
                          tracking-[0.25em]
                          text-accent
                        "
                      >
                        Highlights
                      </h4>

                      <ul className="space-y-5">
                        {item.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="
                              flex
                              items-start
                              gap-4
                              text-muted-foreground
                            "
                          >
                            <span
                              className="
                                mt-2
                                h-2
                                w-2
                                rounded-full
                                bg-accent
                                shadow-[0_0_8px_rgba(59,130,246,0.5)]
                              "
                            />

                            <span className="leading-7">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}