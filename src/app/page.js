import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; 
import About from "./components/About.js";

const page = () => {
  return (
    <div>
      <Header />
    <Hero />
    <About/>
    <Experience />
    
    <Projects />
    <Contact />
    </div>
  )
}

export default page