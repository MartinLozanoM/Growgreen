import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarPagination } from "./components/Navbar";
import { PresentationSection } from "./components/PresentationSection";
import { ObjetivesSection } from "./components/ObjetivesSection";
import { FeaturedSection } from "./components/FeaturedSection";
import FormSection from "./components/FormSection";
import { Footer } from "./components/Footer";
import { ContactSection } from "./components/ContactSection";
import { AboutSection } from "./components/AboutSection";

function App() {
  return (
    <>
      <NavbarPagination />
      <PresentationSection />
      <AboutSection/>
      <ObjetivesSection />
      <FeaturedSection />
      <ContactSection />
      <FormSection/>
      
      <Footer/>
    </>
  );
}

export default App;
