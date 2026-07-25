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
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <GlassCard className="overflow-hidden p-0">
        {/* Project Image */}

        <div className="group relative h-72 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            priority={project.featured}
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/80
              via-black/20
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-6
              left-6
              right-6
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                text-white
              "
            >
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content */}

        <div className="space-y-6 p-8">
          <p
            className="
              leading-8
              text-muted-foreground
            "
          >
            {project.description}
          </p>

          {/* Tech Stack */}

          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <GlassBadge
                key={tech}
                className="hover:scale-105"
              >
                {tech}
              </GlassBadge>
            ))}
          </div>

          {/* Action Buttons */}

          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  border
                  border-white/10

                  px-5
                  py-3

                  transition-all

                  hover:border-accent/40
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
                  gap-2

                  rounded-xl

                  bg-accent

                  px-5
                  py-3

                  font-medium
                  text-accent-foreground

                  transition-all

                  hover:scale-105
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
            className="
              flex
              items-center
              gap-2

              font-medium
              text-accent

              transition-colors

              hover:text-accent/80
            "
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
                }}
                className="
                  overflow-hidden

                  rounded-2xl

                  border
                  border-white/10

                  bg-white/5

                  p-6
                "
              >
                <div className="space-y-8">
                  {/* Problem Solved */}

                  <div>
                    <h4 className="mb-3 text-lg font-semibold">
                      Problem Solved
                    </h4>

                    <p className="leading-8 text-muted-foreground">
                      {project.problemSolved}
                    </p>
                  </div>

                  {/* Key Features */}

                  <div>
                    <h4 className="mb-3 text-lg font-semibold">
                      Key Features
                    </h4>

                    <ul className="space-y-3">
                      {project.keyFeatures.map((feature) => (
                        <li
                          key={feature}
                          className="
                            flex
                            items-start
                            gap-3

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
                            "
                          />

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges */}

                  <div>
                    <h4 className="mb-3 text-lg font-semibold">
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