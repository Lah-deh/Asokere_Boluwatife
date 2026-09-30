"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Era Connects",
    date: "July 2026 – September 2026",
    points: [
      "Developed features for the Era Marketplace Admin Dashboard using React and Tailwind CSS.",
      "Built responsive interfaces for seller management and marketplace administration.",
      "Integrated frontend components with backend APIs.",
      "Collaborated with developers using Git and GitHub to deliver production-ready features.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Cocobase",
    date: "Jan 2026 – May 2026",
    points: [
      "Maintained and improved the Cocobase documentation site built with Mintlify and Docusaurus.",
      "Refactored layouts and components to improve structure and consistency across pages.",
    ],
  },
  {
    role: "Freelance Frontend Developer",
    company: "Stelcity",
    date: "Mar 2026 – Apr 2026",
    points: [
      "Built the full e-commerce storefront using Next.js and Tailwind CSS, achieving a 97/100 Lighthouse performance score and 100/100 SEO score on mobile.",
      "Implemented SEO best practices including semantic HTML, metadata, and Open Graph.",
      "Structured reusable components so the client could scale without needing a developer for every update.",
    ],
  },
]

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#0d0d0d] px-6 pt-20 pb-10 md:px-16 lg:px-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-white text-3xl sm:text-4xl font-bold mb-12"
      >
        Experience<span className="text-[#cf1247]">.</span>
      </motion.h2>

      <div className="flex flex-col gap-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative flex gap-6 pb-12"
          >
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#cf1247] mt-1 shrink-0" />

              {i < experiences.length - 1 && (
                <div className="w-px flex-1 bg-[#cf1247]/20 mt-2" />
              )}
            </div>

            <div className="flex-1 pb-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-white font-bold text-lg">
                    {exp.role}
                  </h3>

                  <span className="text-[#cf1247] text-sm font-medium">
                    {exp.company}
                  </span>
                </div>

                <span className="text-gray-500 text-xs sm:text-sm font-mono shrink-0">
                  {exp.date}
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                {exp.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-gray-400 text-sm leading-relaxed"
                  >
                    <span className="text-[#cf1247] mt-1 shrink-0">
                      ▸
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience

