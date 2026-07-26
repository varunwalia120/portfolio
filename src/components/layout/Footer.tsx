"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  ArrowUp,
  Mail,
  BookOpen,
  Code2,
} from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
  <footer
    className="
      relative
      overflow-hidden
      border-t
      border-white/10
      py-20
    "
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
          h-[700px]
          w-[700px]
          rounded-full
          bg-blue-500/5
          blur-[180px]
        "
      />
    </div>

    <div className="mx-auto max-w-6xl px-6">
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-10
          backdrop-blur-xl
        "
      >
        {/* Card Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-28
            -top-28
            h-72
            w-72
            rounded-full
            bg-blue-500/8
            blur-[120px]
          "
        />

        <div className="relative z-10">
  <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

    {/* Left Side */}

    <div className="max-w-md">
      <a
        href="#home"
        className="
          inline-block
          text-3xl
          font-bold
          tracking-tight
          text-accent
          transition-transform
          duration-300
          hover:scale-105
        "
      >
        VW
      </a>

      <p
        className="
          mt-5
          leading-8
          text-muted-foreground
        "
      >
        Full-Stack Developer, Data Analyst and aspiring Data Scientist
        passionate about building beautiful digital products with modern web
        technologies.
      </p>
    </div>

    {/* Right Side */}

    <div className="flex flex-col gap-8 lg:items-end">

      {/* Navigation */}

      <ul className="flex flex-wrap gap-7">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="
                text-sm
                text-muted-foreground
                transition-all
                duration-300
                hover:text-accent
              "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
        {/* Social Icons */}

<div className="flex items-center gap-4">

  {/* GitHub */}

  <a
    href="https://github.com/varunwalia120"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-white/[0.04]
      text-muted-foreground
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-accent/30
      hover:bg-accent/10
      hover:text-accent
      hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
    "
  >
    <FaGithub size={18} />
  </a>

  {/* LinkedIn */}

  <a
    href="https://www.linkedin.com/in/varun-walia120/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-white/[0.04]
      text-muted-foreground
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-accent/30
      hover:bg-accent/10
      hover:text-accent
      hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
    "
  >
    <FaLinkedin size={18} />
  </a>

  {/* Email */}

  <a
    href="mailto:varunwalia608@gmail.com"
    className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-white/[0.04]
      text-muted-foreground
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-accent/30
      hover:bg-accent/10
      hover:text-accent
      hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
    "
  >
    <Mail size={18} />
  </a>

  {/* Medium */}

  <a
    href="https://medium.com/@varunwalia608"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-white/[0.04]
      text-muted-foreground
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-accent/30
      hover:bg-accent/10
      hover:text-accent
      hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
    "
  >
    <BookOpen size={18} />
  </a>

  {/* LeetCode */}

  <a
    href="https://leetcode.com/u/JbazyknAEo/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-white/[0.04]
      text-muted-foreground
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-accent/30
      hover:bg-accent/10
      hover:text-accent
      hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
    "
  >
    <Code2 size={18} />
  </a>

</div>
      
    </div>
  </div>
</div>
          {/* Bottom Bar */}

        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Varun Walia. Crafted with Next.js,
              TypeScript, Tailwind CSS & Framer Motion.
            </p>

            <div className="flex items-center gap-5">
              <span className="hidden text-sm text-muted-foreground md:block">
                Designed & Developed by Varun Walia
              </span>

              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-muted-foreground
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-accent/30
                  hover:bg-accent/10
                  hover:text-accent
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]
                "
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
}