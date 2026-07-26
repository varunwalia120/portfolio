"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { Project } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassBadge } from "@/components/ui/GlassBadge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        transition: { duration: 0.25 },
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <GlassCard className="overflow-hidden p-0">
        {/* Project Image */}

        {/* Project Hero */}

<div className="group relative h-80 overflow-hidden rounded-t-3xl">

  {/* Background Image */}

<Image
  src={project.imageUrl}
  alt={project.title}
  fill
  priority={project.featured}
  loading={project.featured ? "eager" : "lazy"}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="
    object-cover
    transition-all
    duration-700
    group-hover:scale-110
    group-hover:brightness-110
  "
/>

  {/* Gradient Overlay */}

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black
      via-black/40
      to-black/5
    "
  />

  {/* Ambient Glow */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      opacity-0
      transition-opacity
      duration-500
      group-hover:opacity-100
    "
  >
    <div
      className="
        absolute
        -right-20
        -top-20
        h-60
        w-60
        rounded-full
        bg-blue-500/15
        blur-[90px]
      "
    />
  </div>

  {/* Top Row */}

  <div className="absolute left-6 right-6 top-6 flex items-center justify-between">

    {/* Project Number */}

    <span
      className="
        rounded-full
        border
        border-white/20
        bg-black/40
        px-4
        py-2
        text-xs
        font-semibold
        tracking-[0.2em]
        text-white
        backdrop-blur-xl
      "
    >
      {String(project.id).padStart(2, "0")}
    </span>

    {project.featured && (
      <span
        className="
          rounded-full
          bg-blue-500/20
          px-4
          py-2
          text-xs
          font-semibold
          tracking-[0.2em]
          text-blue-300
          backdrop-blur-xl
        "
      >
        FEATURED
      </span>
    )}
  </div>

  {/* Bottom Content */}

  <div className="absolute bottom-8 left-8 right-8">

    <h3
      className="
        text-3xl
        font-bold
        tracking-tight
        text-white
      "
    >
      {project.title}
    </h3>

    <p
      className="
        mt-2
        text-sm
        text-white/80
      "
    >
      Modern Web Application
    </p>

  </div>

</div>

        {/* Content */}

        <div className="space-y-8 p-8">

  {/* Description */}

  <p
    className="
      text-[15px]
      leading-8
      text-muted-foreground
    "
  >
    {project.description}
  </p>

  {/* Tech Stack */}

  <div>

    <h4
      className="
        mb-4
        text-xs
        font-semibold
        uppercase
        tracking-[0.22em]
        text-accent
      "
    >
      Technology Stack
    </h4>

    <div className="flex flex-wrap gap-3">
      {project.techStack.map((tech) => (
        <GlassBadge
          key={tech}
          className="
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
        >
          {tech}
        </GlassBadge>
      ))}
    </div>

  </div>

  {/* Buttons */}

  <div className="flex flex-wrap gap-4">

    {project.githubUrl && (
      <Link
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-3
          rounded-xl
          border
          border-white/10
          bg-white/[0.04]
          px-6
          py-3
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-accent/30
          hover:bg-accent/10
        "
      >
        <FolderGit size={18} />
        GitHub
      </Link>
    )}

    {project.liveUrl && (
      <Link
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-3
          rounded-xl
          bg-gradient-to-r
          from-blue-500
          to-blue-600
          px-6
          py-3
          font-medium
          text-white
          shadow-[0_10px_35px_rgba(59,130,246,0.25)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_15px_45px_rgba(59,130,246,0.35)]
        "
      >
        <ExternalLink size={18} />
        Live Demo
      </Link>
    )}

  </div>

          {/* Expand Button */}

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 font-medium text-accent transition-colors hover:text-accent/80"
          >
            {expanded ? (
              <>
                Hide Details
                <ChevronUp size={18} />
              </>
            ) : (
              <>
                View Details
                <ChevronDown size={18} />
              </>
            )}
          </button>

          <AnimatePresence>
                        {expanded && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeInOut",
                }}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-6
                "
              >
                <div className="space-y-8">
                  {/* Problem Solved */}

                  <div>
                    <h4 className="mb-3 text-lg font-semibold text-foreground">
                      Problem Solved
                    </h4>

                    <p className="leading-8 text-muted-foreground">
                      {project.problemSolved}
                    </p>
                  </div>

                  {/* Key Features */}

                  <div>
                    <h4 className="mb-3 text-lg font-semibold text-foreground">
                      Key Features
                    </h4>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {project.keyFeatures.map((feature) => (
                        <div
                          key={feature}
                          className="
                            flex
                            items-start
                            gap-3
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            p-4
                            transition-all
                            hover:border-accent/30
                            hover:bg-accent/5
                          "
                        >
                          <span
                            className="
                              mt-2
                              h-2
                              w-2
                              rounded-full
                              bg-accent
                              shrink-0
                            "
                          />

                          <span className="text-sm leading-7 text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}

                  <div>
                    <h4 className="mb-3 text-lg font-semibold text-foreground">
                      Challenges
                    </h4>

                    <p className="leading-8 text-muted-foreground">
                      {project.challenges}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </GlassCard>
    </motion.div>
  );
}