import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarPagination } from "./components/Navbar";
import { PresentationSection } from "./components/PresentationSection";
import { FeaturedSection } from "./components/FeaturedSection";
import FormSection from "./components/FormSection.jsx";
import { Footer } from "./components/Footer.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { ClientProvider } from "./context/ClientProvider";

function App() {
  return (
    <ClientProvider>
      <NavbarPagination />
      <PresentationSection />
      <AboutSection />
      <FeaturedSection />
      <FormSection />
      <Footer />
    </ClientProvider>
  );
}

export default App;
