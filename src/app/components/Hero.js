"use client"
import Image from "next/image"
import { motion, useMotionValue, animate } from "framer-motion"
import { FiDownload } from "react-icons/fi"
import { useEffect, useRef } from "react"

const skills = ["REACT", "NEXT.JS", "JAVASCRIPT", "TAILWIND", "CSS", "HTML", "FIGMA", "GIT", "SEO", "DOCUSAURUS"]

const SkillTicker = () => {
  const x = useMotionValue(0)
  const containerRef = useRef(null)

  useEffect(() => {
    let frame
    const speed = 0.5

    const loop = () => {
      const current = x.get()
      const width = containerRef.current?.scrollWidth / 2 || 0

      if (width) {
        if (Math.abs(current) >= width) {
          x.set(0)
        } else {
          x.set(current - speed)
        }
      }

      frame = requestAnimationFrame(loop)
    }

    frame = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frame)
  }, [x])

  return (
    <div className="bg-[#0d0d0d] border-y border-[#cf1247]/20 py-3 overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex gap-8 whitespace-nowrap cursor-grab active:cursor-grabbing"
        style={{ x }}
        drag="x"
        dragElastic={0.1}
        dragMomentum={false}
      >
        {[...skills, ...skills].map((skill, i) => (
          <span
            key={i}
            className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase select-none"
          >
            {skill} <span className="text-[#cf1247]">/</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

const Hero = () => {
  return (
    <>
      <section className="bg-[#0d0d0d] flex flex-col items-center justify-center px-6 pt-10 pb-16 lg:flex-row lg:justify-between lg:px-24 lg:pt-24 lg:pb-16 gap-12">

        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left w-full"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
            Hi, I&apos;m Boluwatife<span className="text-[#cf1247]">.</span>
          </h1>

          <h2 className="text-[#cf1247] text-2xl sm:text-3xl lg:text-4xl font-bold mt-1">
            Frontend Dev
          </h2>

          <p className="text-gray-400 mt-4 max-w-md text-sm sm:text-base leading-relaxed">
            I build fast, responsive interfaces with React and Next.js.
            Clean code, good UX, real products.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-8 w-full max-w-md lg:max-w-none">

            <a
              href="#projects"
              className="text-center bg-[#cf1247] text-white font-bold px-4 py-2.5 rounded-full text-sm hover:bg-[#a50e39] transition-colors"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="text-center border border-[#cf1247] text-[#cf1247] font-bold px-4 py-2.5 rounded-full text-sm hover:bg-[#cf1247]/10 transition-colors"
            >
              Contact Me
            </a>

            <a
              href="/Asokere Success Cv.pdf"
              download
              className="col-span-2 lg:col-span-1 flex items-center justify-center gap-2 border border-white/20 text-gray-400 font-bold px-4 py-2.5 rounded-full text-sm hover:border-white/50 hover:text-white transition-colors"
            >
              <FiDownload size={14} /> Download CV
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

      <SkillTicker />
    </>
  )
}

export default Hero