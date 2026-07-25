"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function GlassButton({
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
}: GlassButtonProps) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{
        y: -3,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.25,
      }}
      className={cn(
        `
        group
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden

        rounded-2xl

        border
        border-white/10

        bg-white/5
        dark:bg-white/[0.04]

        px-6
        py-3

        font-medium
        text-foreground

        backdrop-blur-xl

        transition-all
        duration-300

        shadow-[0_8px_30px_rgba(0,0,0,0.18)]

        hover:border-cyan-400/40
        hover:shadow-[0_18px_45px_rgba(34,211,238,0.18)]
        `,
        className
      )}
    >
      <span
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-white/15
          via-transparent
          to-transparent
        "
      />

      <span
        className="
          absolute
          left-1/2
          top-1/2

          h-0
          w-0

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-400/20

          blur-3xl

          transition-all
          duration-500

          group-hover:h-40
          group-hover:w-40
        "
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}