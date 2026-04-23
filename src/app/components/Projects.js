"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiGithub, FiExternalLink } from "react-icons/fi"

const projects = [
  {
    title: "Stelcity",
    description:
      "Full e-commerce storefront for a skincare brand. Built with Next.js and Tailwind, SEO optimised, reusable component structure.",
    tech: ["Next.js", "Tailwind CSS", "SEO"],
    live: "https://www.stelcity.com",
    github: "",
    tag: "Freelance",
  },
  {
    title: "PhisGuard",
    description:
      "Anti-phishing Chrome extension that surfaces real-time alerts in the browser, integrated with a backend detection API.",
    tech: ["JavaScript", "HTML", "CSS", "Chrome API"],
    live: "https://phis-guard-jade.vercel.app",
    github: "",
    tag: "Project",
  },
  {
    title: "Smart Material",
    description:
      "Frontend for an AI tool that recommends construction materials based on user input. Designed for non-technical users.",
    tech: ["React", "JavaScript", "CSS"],
    live: "https://apwen-frontend-1.onrender.com",
    github: "",
    tag: "Project",
  },
 
]

const PER_PAGE = 2

const Projects = () => {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(projects.length / PER_PAGE)
  const current = projects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <section id="projects" className="bg-[#0d0d0d] px-6  md:px-16 lg:px-24">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-white text-3xl sm:text-4xl font-bold mb-10"
      >
        Projects<span className="text-[#cf1247]">.</span>
      </motion.h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10"
        >
          {current.map((project, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-white/10 rounded-2xl p-5 flex flex-col gap-3 hover:border-[#cf1247]/50 transition-colors duration-300 h-60"
            >
              <div>
                <span className="text-[#cf1247] text-[10px] font-semibold uppercase tracking-widest">
                  {project.tag}
                </span>
                <h3 className="text-white text-lg font-bold mt-1">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-[10px] text-[#cf1247] border border-[#cf1247]/30 rounded-full px-2.5 py-0.5 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-white/5">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white text-xs transition-colors"
                  >
                    <FiGithub size={13} />
                    Code
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-[#cf1247] text-xs transition-colors"
                  >
                    <FiExternalLink size={13} />
                    Live
                  </a>
                )}

              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="px-4 py-1.5 rounded-full border border-white/10 text-gray-400 text-xs font-medium hover:border-[#cf1247]/50 hover:text-[#cf1247] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ← Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-7 h-7 rounded-full text-xs font-bold transition-colors ${
              page === i
                ? "bg-[#cf1247] text-white"
                : "border border-white/10 text-gray-400 hover:border-[#cf1247]/50 hover:text-[#cf1247]"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={page === totalPages - 1}
          className="px-4 py-1.5 rounded-full border border-white/10 text-gray-400 text-xs font-medium hover:border-[#cf1247]/50 hover:text-[#cf1247] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>

    </section>
  )
}

export default Projects