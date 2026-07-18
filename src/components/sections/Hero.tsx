"use client";

import { RotatingText } from "@/components/ui/RotatingText";
import { Magnetic } from "@/components/ui/Magnetic";

const roles = [
  "Full-Stack Developer",
  "Data Analyst",
  "Aspiring Data Scientist",
];

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <p className="mb-4 font-mono text-sm text-accent">Hi, my name is</p>
      <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
        Varun Walia
      </h1>
      <p className="mt-4 text-2xl font-medium text-muted-foreground sm:text-3xl">
        <RotatingText words={roles} />
      </p>
      <p className="mt-6 max-w-xl text-muted-foreground">
        Building real-world web applications and data analytics projects, on
        the path to Data Science.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Magnetic>
          <a
            href="#projects"
            className="inline-block rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href="#contact"
            className="inline-block rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:bg-secondary"
          >
            Contact Me
          </a>
        </Magnetic>
      </div>
    </section>
  );
}