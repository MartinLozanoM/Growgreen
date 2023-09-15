import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarPagination } from "./components/Navbar";
import { PresentationSection } from "./components/PresentationSection";
import { ObjetivesSection } from "./components/ObjetivesSection";
import { FeaturedSection } from "./components/FeaturedSection";
import FormSection from "./components/FormSection.jsx";
import { Footer } from "./components/Footer.jsx";
import { AboutSection } from "./components/AboutSection.jsx";

function App() {
  return (
    <>
      <NavbarPagination />
      <PresentationSection />
      <AboutSection />
      <ObjetivesSection />
      <FeaturedSection />
      <FormSection />
      <Footer />
    </>
  );
}

export default App;
