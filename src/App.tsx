import { PasscodeGate } from "./components/PasscodeGate";
import { WaitlistProvider } from "./components/WaitlistContext";
import { WaitlistModal } from "./components/WaitlistModal";
import { SiteHeader } from "./components/SiteHeader";
import { HeroSection } from "./components/HeroSection";
import { RunsEverywhereSection } from "./components/RunsEverywhereSection";
import { PlatformSphere } from "./components/PlatformSphere";
import { IntegrationsMarquee } from "./components/IntegrationsMarquee";
import { FeatureSection } from "./components/FeatureSection";
import { VoiceLongformerSection } from "./components/VoiceLongformerSection";
import { AgentExperienceSection } from "./components/AgentExperienceSection";
import { ArchitectureSection } from "./components/ArchitectureSection";
import { PrinciplesSection } from "./components/PrinciplesSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection, SiteFooter } from "./components/CTASection";

export default function App() {
  return (
    <PasscodeGate>
      <WaitlistProvider>
        <div>
          <SiteHeader />
          <main>
            <HeroSection />
            <RunsEverywhereSection />
            <PlatformSphere />
            <IntegrationsMarquee />
            <FeatureSection />
            <VoiceLongformerSection />
            <AgentExperienceSection />
            <ArchitectureSection />
            <PrinciplesSection />
            <FAQSection />
            <CTASection />
          </main>
          <SiteFooter />
          <WaitlistModal />
        </div>
      </WaitlistProvider>
    </PasscodeGate>
  );
}
