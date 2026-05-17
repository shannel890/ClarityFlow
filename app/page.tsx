import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import OutcomesSection from "@/components/OutcomesSection";
import PricingSection from "@/components/PricingSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <OutcomesSection />
      <TrustSection />
      <HowItWorks />
      <PricingSection />
      <Footer />
    </main>
  );
}
