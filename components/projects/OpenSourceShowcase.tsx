"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/fadein";

export const OpenSourceShowcase = () => {
  const projects = [
    {
      title: "Ruff (Astral)",
      repo: "astral-sh/ruff",
      description:
        "Contributed to high-performance Python linter and formatter tooling written in Rust, improving linter accuracy and developer workflows.",
      badge: "Merged PRs",
      link: "https://github.com/astral-sh/ruff/pulls?q=is%3Apr+state%3Aclosed+author%3AJkhall81",
      tags: ["Rust", "Python Tooling", "Linter"],
    },
    {
      title: "Ansible Lint Core",
      repo: "ansible/ansible-lint",
      description:
        "Resolved runtime pathing issues, environmental isolation bugs with uv, cache directory fixes, and linter speed optimizations across Python infra-as-code automation tooling.",
      badge: "Merged PRs",
      link: "https://github.com/ansible/ansible-lint/pulls?q=is%3Apr+state%3Aclosed+author%3AJkhall81",
      tags: ["Python", "Ansible", "CI/CD", "Tooling"],
    },
    {
      title: "Ansible VS Code Extension",
      repo: "ansible/vscode-ansible",
      description:
        "Contributed fixes and enhancements to the official Ansible VS Code extension, improving developer experience, syntax validation, and toolchain integration.",
      badge: "Merged PRs",
      link: "https://github.com/ansible/vscode-ansible/pulls?q=is%3Apr+state%3Aclosed+author%3AJkhall81",
      tags: ["TypeScript", "VS Code API", "Developer Tools"],
    },
    {
      title: "Apache Airflow",
      repo: "apache/airflow",
      description:
        "Upstream contributions to core data orchestration workflows, pipeline stability, and framework maintenance for large-scale distributed task management.",
      badge: "Merged PRs",
      link: "https://github.com/apache/airflow/pulls?q=is%3Apr+state%3Aclosed+author%3AJkhall81",
      tags: ["Python", "Data Engineering", "Orchestration"],
    },
  ];

  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full max-w-5xl mx-auto"
    >
      <div className="w-full p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 space-y-8 backdrop-blur-sm">
        {/* Card Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
              // Ecosystem & Tooling Upstream
            </span>
            <h2 className="text-3xl font-bold text-white mt-1">
              Open Source Contributions
            </h2>
          </div>
          <Link
            href="https://github.com/Jkhall81"
            target="_blank"
            className="px-4 py-2 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition"
          >
            GitHub Profile ↗
          </Link>
        </div>

        {/* Overview */}
        <p className="text-gray-300 text-base leading-relaxed">
          Active contributor to core developer tooling, linter ecosystems, and
          data orchestration infrastructure used by engineering teams worldwide.
        </p>

        {/* Grid of PR Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.repo}
              className="p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-purple-400 font-semibold truncate max-w-[180px]">
                    // {proj.repo}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {proj.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{proj.title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={proj.link}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 transition"
                >
                  View Contributions on GitHub ↗
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
