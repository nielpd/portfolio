import About from "./components/About/AboutMeComponent";
import Contact from "./components/Contact/ContactComponent";
import SocialLinks from "./components/Contact/SocialComponent";
import Footer from "./components/Footer/FooterComponent";
import Hero from "./components/Hero/HeroComponent";
import Projects from "./components/projects/ProjectComponent";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-12">
      <div id="hero" className="w-full"><Hero /></div>
      <div id="projects"><Projects /></div>
      <div id="about"><About /></div>
      <div id="contact"><Contact /></div>
      <SocialLinks />
      <Footer />
    </div>
  );
}
