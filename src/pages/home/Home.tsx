import Button from "../../components/button/Button";
import ArchitectureSection from "./sections/ArchitectureSection";
import FeaturesSection from "./sections/FeaturesSection";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import ProjectStatusSection from "./sections/ProjectStatusSection";
import TechnicalHighlightsSection from "./sections/TechnicalHighlightsSection";
import TechStackSection from "./sections/TechStackSection";

function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <TechnicalHighlightsSection />
      <ArchitectureSection />
      <TechStackSection />
      <ProjectStatusSection />
      <Footer />
    </main>
  );
}

export default Home;
