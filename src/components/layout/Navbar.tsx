"use client";

import { Moon, Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center px-4"
    >
      <nav
        className="
          relative
          flex
          h-16
          w-full
          max-w-5xl
          items-center
          justify-between
          overflow-hidden
          rounded-full

          border
          border-white/20

          bg-white/10
          dark:bg-neutral-900/40

          backdrop-blur-2xl

          shadow-[0_10px_40px_rgba(0,0,0,0.25)]

          ring-1
          ring-white/10

          px-8

          transition-all
          duration-300
        "
      >
        {/* Glass Highlight */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-full
            bg-gradient-to-b
            from-white/20
            via-white/5
            to-transparent
          "
        />

        {/* Soft Glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-32
            w-44
            -translate-x-1/2
            rounded-full
            bg-cyan-400/10
            blur-3xl
          "
        />

        {/* Logo */}
        <a href="#home" className="relative z-10">
          <span
            className="
              bg-gradient-to-r
              from-cyan-400
              via-sky-400
              to-blue-500
              bg-clip-text
              text-xl
              font-bold
              tracking-wide
              text-transparent
            "
          >
            VW
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  relative
                  z-10

                  rounded-full

                  px-4
                  py-2

                  text-sm
                  font-medium

                  text-muted-foreground

                  transition-all
                  duration-300

                  hover:scale-105
                  hover:bg-white/15
                  hover:text-white
                  hover:shadow-lg
                  hover:shadow-cyan-500/10

                  after:absolute
                  after:bottom-0
                  after:left-1/2
                  after:h-px
                  after:w-0
                  after:-translate-x-1/2
                  after:bg-cyan-400
                  after:transition-all
                  after:duration-300

                  hover:after:w-3/4
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="relative z-10 flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-gradient-to-br
              from-white/15
              to-white/5

              backdrop-blur-xl

              transition-all
              duration-300

              hover:scale-110
              hover:rotate-12
              hover:shadow-lg
              hover:shadow-cyan-500/20
            "
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-gradient-to-br
              from-white/15
              to-white/5

              backdrop-blur-xl

              transition-all
              duration-300

              hover:scale-110
              hover:rotate-12
              hover:shadow-lg
              hover:shadow-cyan-500/20

              md:hidden
            "
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <ul
          className="
            absolute
            top-20
            w-[92%]

            rounded-3xl

            border
            border-white/10

            bg-neutral-900/60

            backdrop-blur-3xl

            shadow-2xl

            p-6

            md:hidden
          "
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="
                  block
                  rounded-xl
                  px-4
                  py-3

                  text-sm

                  text-muted-foreground

                  transition-all
                  duration-300

                  hover:bg-white/10
                  hover:text-white
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.header>
  );
}