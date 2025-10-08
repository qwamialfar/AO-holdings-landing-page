import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PriceComparison from "@/components/PriceComparison";
import WhyPriceIncrease from "@/components/WhyPriceIncrease";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import UrgencyCTA from "@/components/UrgencyCTA";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import StickyFooter from "@/components/StickyFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div id="services">
        <PriceComparison />
        <WhyPriceIncrease />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <UrgencyCTA />
      <div id="faq">
        <FAQ />
      </div>
      <LeadForm />
      <StickyFooter />
    </div>
  );
};

export default Index;
