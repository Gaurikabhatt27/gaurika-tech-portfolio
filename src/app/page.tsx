import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="education"><Education /></section>
      <section id="experience"><Experience /></section>
      <section id="certificates"><Certificates /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}