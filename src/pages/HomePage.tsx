import { AboutSection } from "../components/AboutSection";
import { BenefitsSection } from "../components/BenefitsSection";
import { DailyUseSection } from "../components/DailyUseSection";
import { FinalCTA } from "../components/FinalCTA";
import { FlavorsSection } from "../components/FlavorsSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { IngredientMarquee } from "../components/IngredientMarquee";
import { IngredientsSection } from "../components/IngredientsSection";
import { Navbar } from "../components/Navbar";
import { PredatorSection } from "../components/PredatorSection";
import { ResourcesSection } from "../components/ResourcesSection";

/**
 * Web principal — informacional / brand building. Construye la marca
 * Cransh Energy: marca → valor → confianza. El único punto de conversión
 * a lead es la sección "Recursos", que dirige a /guia.
 */
export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <IngredientMarquee />
        <IngredientsSection />
        <FlavorsSection />
        <BenefitsSection />
        <DailyUseSection />
        <ResourcesSection />
        <PredatorSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
