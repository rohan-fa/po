import Contact from "../components/Contact";
import HomePage from "../components/HomePage";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";


export default function Home() {
  return (
    <div>
      <HomePage />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </div>
  );
}
