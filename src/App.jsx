import "./App.css";
import { Navbar } from "./components/Navbar";
import { PresentationSection } from "./components/PresentationSection";
import { ObjetivesSection } from "./components/ObjetivesSection";
import { FeaturedSection } from "./components/FeaturedSection";
import { ContactSection } from "./components/ContactSection";
import { FormSection } from "./components/FormSection";

function App() {
  return (
    <>
      <Navbar />
      <PresentationSection />
      <ObjetivesSection />
      <FeaturedSection />
      <ContactSection />
      <FormSection />
    </>
  );
}

export default App;
