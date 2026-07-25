import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        relative
        overflow-hidden
        rounded-3xl

        border
        border-white/10

        bg-white/5
        dark:bg-white/[0.03]

        backdrop-blur-2xl

        shadow-[0_10px_40px_rgba(0,0,0,0.25)]

        transition-all
        duration-500
        `,
        hover &&
          `
          hover:-translate-y-2
          hover:border-cyan-400/30
          hover:shadow-[0_20px_60px_rgba(56,189,248,0.18)]
          `,
        className
      )}
    >
      {/* Top Glass Reflection */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          rounded-3xl

          bg-gradient-to-b
          from-white/10
          via-transparent
          to-transparent
        "
      />

      {/* Glow */}
      <div
        className="
          pointer-events-none

          absolute

          -top-20
          left-1/2

          h-40
          w-40

          -translate-x-1/2

          rounded-full

          bg-cyan-400/10

          blur-3xl
        "
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}