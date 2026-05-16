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
    <div className="bg-surface-50 text-slate-900">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl space-y-20 px-6 pb-20 pt-10 md:space-y-24 md:px-10 md:pb-24 md:pt-12">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <OutcomesSection />
        <TrustSection />
        <HowItWorks />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
