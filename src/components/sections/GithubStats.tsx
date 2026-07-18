"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const GITHUB_USERNAME = "varunwalia120";
const LEETCODE_USERNAME = "varun_walia120";

interface Stats {
  publicRepos: number;
  followers: number;
  totalStars: number;
}

export function GithubStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const userRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        if (!userRes.ok) throw new Error("Failed to fetch user");
        const userData = await userRes.json();

        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
        );
        if (!reposRes.ok) throw new Error("Failed to fetch repos");
        const reposData = await reposRes.json();

        const totalStars = reposData.reduce(
          (sum: number, repo: { stargazers_count: number }) =>
            sum + repo.stargazers_count,
          0
        );

        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          totalStars,
        });
      } catch {
        setError(true);
      }
    }
    fetchStats();
  }, []);

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 font-mono text-sm text-accent"
      >
        07 — GitHub
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mb-4 text-3xl font-bold sm:text-4xl"
      >
        Live From GitHub
      </motion.h2>
      <motion.a
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="mb-10 inline-block text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        @{GITHUB_USERNAME} →
      </motion.a>

      {error ? (
        <p className="text-sm text-muted-foreground">
          Couldn&apos;t load live GitHub data right now — check back later.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { label: "Public Repos", value: stats?.publicRepos },
            { label: "Followers", value: stats?.followers },
            { label: "Total Stars", value: stats?.totalStars },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg border border-border bg-card p-8 text-center"
            >
              <div className="text-4xl font-bold text-accent">
                {stat.value !== undefined ? (
                  <AnimatedCounter value={stat.value} />
                ) : (
                  <span className="inline-block h-10 w-16 animate-pulse rounded bg-secondary" />
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 overflow-hidden rounded-lg border border-border bg-card p-4"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=github-dark&hide_border=true&bg_color=00000000&color=93a1d9&line=6d8de8&point=6d8de8`}
          alt="GitHub contribution activity graph"
          className="w-full"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 flex justify-center overflow-hidden rounded-lg border border-border bg-card p-4"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=baloo2&ext=heatmap`}
          alt="LeetCode stats card"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}