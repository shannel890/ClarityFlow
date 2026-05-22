import AboutSection from "@/components/AboutSection";
import ClinicalStackSection from "@/components/ClinicalStackSection";
import ContactSection from "@/components/ContactSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import OutcomesSection from "@/components/OutcomesSection";
import PilotReadinessSection from "@/components/PilotReadinessSection";
import PricingSection from "@/components/PricingSection";
import ProblemSection from "@/components/ProblemSection";
import ProjectsSection from "@/components/ProjectsSection";
import SolutionSection from "@/components/SolutionSection";
import TrustSection from "@/components/TrustSection";
import WhyWorkflowIntelligenceSection from "@/components/WhyWorkflowIntelligenceSection";
import WorkflowScenariosSection from "@/components/WorkflowScenariosSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClinicalStackSection />
      <WorkflowScenariosSection />
      <WhyWorkflowIntelligenceSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <OutcomesSection />
      <TrustSection />
      <HowItWorks />
      <PilotReadinessSection />
      <PricingSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
