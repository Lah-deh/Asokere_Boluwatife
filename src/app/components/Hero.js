"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const skills = ["REACT", "NEXT.JS", "JAVASCRIPT", "TAILWIND", "CSS", "HTML", "FIGMA", "GIT", "SEO", "DOCUSAURUS"]

const Hero = () => {
  return (
    <>
      <section className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center px-6 md:flex-row md:justify-between md:px-16 lg:px-24 gap-12">

        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
            Hii, I&apos;m Boluwatife<span className="text-[#cf1247]">.</span>
          </h1>

          <h2 className="text-[#cf1247] text-2xl sm:text-3xl lg:text-4xl font-bold mt-1">
            Frontend Dev
          </h2>

          <p className="text-gray-400 mt-4 max-w-md text-sm sm:text-base leading-relaxed">
            I build fast, responsive interfaces with React and Next.js.
            Clean code, good UX, real products.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="bg-[#cf1247] text-white font-bold px-6 py-2.5 rounded-full text-sm hover:bg-[#a50e39] transition-colors"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="border border-[#cf1247] text-[#cf1247] font-bold px-6 py-2.5 rounded-full text-sm hover:bg-[#cf1247]/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 shrink-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-sm">
            <Image
              src="/Boluwatife.png"
              alt="Asokere Success Boluwatife"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

      </section>

      <div className="bg-[#0d0d0d] border-y border-[#cf1247]/20 py-3 my-5 overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <span key={i} className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase">
              {skill} <span className="text-[#cf1247]">/</span>
            </span>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Hero