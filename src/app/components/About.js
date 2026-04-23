"use client"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="bg-[#0d0d0d] px-6 pt-12  md:px-16 lg:px-24">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
          About<span className="text-[#cf1247]">.</span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
          I&apos;m a Frontend developer focused on building fast, responsive web products
          with React and Next.js. I&apos;ve shipped a live e-commerce storefront,
          built a Chrome extension, and worked on a SaaS product.
        </p>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
          I care about clean component architecture, performance, and interfaces
          that work for real users. Open to remote frontend roles and freelance
          projects where I can contribute from day one.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { label: "Projects Shipped", value: "4+" },
            { label: "Stack", value: "React / Next.js" },
            { label: "Status", value: "Open to Work ✓" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="border border-[#cf1247]/30 rounded-lg p-3"
            >
              <p className="text-[#cf1247] text-[11px] font-semibold uppercase tracking-wider mb-1">
                {item.label}
              </p>
              <p className="text-white text-sm font-medium">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}

export default About