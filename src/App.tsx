import { WaitlistProvider } from "./components/WaitlistContext";
import { WaitlistModal } from "./components/WaitlistModal";
import { SiteHeader } from "./components/SiteHeader";
import { HeroSection } from "./components/HeroSection";
import { PlatformSphere } from "./components/PlatformSphere";
import { IntegrationsMarquee } from "./components/IntegrationsMarquee";
import { FeatureSection } from "./components/FeatureSection";
import { ArchitectureSection } from "./components/ArchitectureSection";
import { PrinciplesSection } from "./components/PrinciplesSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection, SiteFooter } from "./components/CTASection";

export default function App() {
  return (
    <WaitlistProvider>
      <div>
        <SiteHeader />
        <main>
          <HeroSection />
          <PlatformSphere />
          <IntegrationsMarquee />
          <FeatureSection />
          <ArchitectureSection />
          <PrinciplesSection />
          <FAQSection />
          <CTASection />
        </main>
        <SiteFooter />
        <WaitlistModal />
      </div>
    </WaitlistProvider>
  );
}
