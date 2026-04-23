import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Experience from "./components/Experience";
import Formation from "./components/Formation";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; 

const page = () => {
  return (
    <div>
      <Header />
    <Hero />
    <Experience />
    <Formation />
    <Projects />
    <Contact />
    </div>
  )
}

export default page