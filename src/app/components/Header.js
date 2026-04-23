"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  const handleClick = () => setOpen(false);

  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleSection) {
        setActive(visibleSection.target.id);
      }
    },
    {
      threshold: [0.4, 0.6, 0.8],
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  const linkClass = (id) =>
    `text-white transition ${
      active === id ? "text-[#888888] underline underline-offset-8" : ""
    } hover:text-[#888888]`;

  return (
    <header className="flex items-center justify-between px-5 py-4 relative bg-transparent">

      
      <div className="text-white font-bold text-xl">
        Web Developer <span className="text-[#cf1247]">/</span>
      </div>

      
      <button
        className="text-white text-2xl md:hidden z-50"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

    
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

    
      <nav
        className={`
          fixed top-0 left-0 h-full w-[70%] bg-black z-50
          flex flex-col gap-8 p-10 pt-24
          transform transition-transform duration-300 ease-in-out
          md:static md:flex md:flex-row md:h-auto md:w-auto md:p-0 md:gap-8 md:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <a href="#about" onClick={handleClick} className={linkClass("about")}>
          About
        </a>

        <a href="#experience" onClick={handleClick} className={linkClass("experience")}>
          Experience
        </a>


        <a href="#projects" onClick={handleClick} className={linkClass("projects")}>
          Projects
        </a>

        <a href="#contact" onClick={handleClick} className={linkClass("contact")}>
          Contact
        </a>
      </nav>

    </header>
  );
}