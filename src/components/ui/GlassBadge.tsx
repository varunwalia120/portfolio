"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassBadgeProps {
  children: ReactNode;
  className?: string;
}

export function GlassBadge({
  children,
  className,
}: GlassBadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex
        items-center
        gap-2

        rounded-full

        border
        border-white/10

        bg-white/5
        dark:bg-white/[0.04]

        px-4
        py-2

        text-sm
        font-medium

        backdrop-blur-xl

        shadow-sm

        transition-all
        duration-300

        hover:border-accent/40
        hover:bg-white/10
        hover:shadow-lg
        `,
        className
      )}
    >
      {children}
    </span>
  );
}