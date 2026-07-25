"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  number: string;
  title: string;
  subtitle?: string;
}

export function SectionTitle({
  number,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14"
    >
      <span
        className="
          inline-flex
          rounded-full
          border
          border-accent/20
          bg-accent/10
          px-4
          py-1

          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]

          text-accent
        "
      >
        {number}
      </span>

      <h2
        className="
          mt-5

          text-4xl
          font-extrabold
          tracking-tight

          md:text-5xl
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            mt-4
            max-w-2xl
            text-muted-foreground
            leading-8
          "
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}