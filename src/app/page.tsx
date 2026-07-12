import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <section
        id="home"
        className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <p className="mb-4 font-mono text-sm text-accent">
          Hi, my name is
        </p>
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Varun Walia
        </h1>
        <p className="mt-4 text-2xl font-medium text-muted-foreground sm:text-3xl">
          Full-Stack Developer & Data Analyst
        </p>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Building real-world web applications and data analytics projects,
          on the path to Data Science.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:bg-secondary"
          >
            Contact Me
          </a>
        </div>
      </section>
      <Navbar />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}