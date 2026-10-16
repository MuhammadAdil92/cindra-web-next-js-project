import DeviceShowcaseSection from "@/components/home/DeviceShowcaseSection";
import DeploymentSection from "@/components/home/DeploymentSection";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import InterfacesSection from "@/components/home/InterfacesSection";
import LandingHeroSection from "@/components/home/LandingHeroSection";
import MetricsSection from "@/components/home/MetricsSection";
import PatientExperienceSection from "@/components/home/PatientExperienceSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";

export default function Page() {
  return (
    <main className="bg-[#fff] text-[#1F1B2D]">
      <LandingHeroSection />
      
      <section id="product">
        <FeatureHighlights />
      </section>
      
      <ProblemSection />

      <SolutionSection />

      <section id="how-it-works">
        <HowItWorksSection />
      </section>

      <DeviceShowcaseSection />

      <PatientExperienceSection />
      
      <InterfacesSection />

      <section id="metrics">
        <MetricsSection />
      </section>

      <section id="deployment">
        <DeploymentSection />
      </section>

      <FinalCtaSection />
    </main>
  );
}