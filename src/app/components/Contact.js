"use client"
import { motion } from "framer-motion"
import { FiGithub, FiMail, FiTwitter, FiDownload } from "react-icons/fi"

const socials = [
  {
    label: "Email",
    value: "successasokere@gmail.com",
    href: "mailto:successasokere@gmail.com",
    icon: <FiMail size={18} />,
  },
  {
    label: "GitHub",
    value: "github.com/Lah-deh",
    href: "https://github.com/Lah-deh",
    icon: <FiGithub size={18} />,
  },
  {
    label: "Twitter / X",
    value: "@Tifecodes",
    href: "https://x.com/Tifecodes",
    icon: <FiTwitter size={18} />,
  },
]

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0d0d0d] px-6 py-20 md:px-16 lg:px-24">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-xl"
      >
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
          Contact<span className="text-[#cf1247]">.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="border border-[#cf1247]/20 rounded-xl p-4 hover:border-[#cf1247]/50 transition-colors">
            <p className="text-[#cf1247] text-[11px] font-semibold uppercase tracking-widest mb-2">
              Open to Work
            </p>
            <p className="text-white text-sm font-medium mb-1">Remote Roles & Internships</p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Looking for frontend roles where I can ship real work from day one.
            </p>
          </div>

          <div className="border border-white/10 rounded-xl p-4 hover:border-[#cf1247]/50 transition-colors">
            <p className="text-[#cf1247] text-[11px] font-semibold uppercase tracking-widest mb-2">
              Collaboration
            </p>
            <p className="text-white text-sm font-medium mb-1">Projects & Freelance</p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Got a product idea or need a frontend dev? Let&apos;s build something.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-10">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 group"
            >
              <span className="text-[#cf1247] group-hover:scale-110 transition-transform">
                {s.icon}
              </span>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">{s.label}</p>
                <p className="text-white text-sm font-medium group-hover:text-[#cf1247] transition-colors">
                  {s.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          
          <a
            href="mailto:successasokere@gmail.com"
            className="bg-[#cf1247] text-white font-bold px-8 py-3 rounded-full text-sm hover:bg-[#a50e39] transition-colors"
          >
            Send me an email
          </a>

          <a
            href="/Asokere Success Cv.pdf"
            download
            className="flex items-center gap-2 border border-white/20 text-gray-400 font-bold px-6 py-3 rounded-full text-sm hover:border-white/50 hover:text-white transition-colors"
          >
            <FiDownload size={14} /> Download CV
          </a>

        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-gray-600 text-xs mt-20 font-mono"
      >
        Built by Asokere Success Boluwatife · {new Date().getFullYear()}
      </motion.p>

    </section>
  )
}

export default Contact