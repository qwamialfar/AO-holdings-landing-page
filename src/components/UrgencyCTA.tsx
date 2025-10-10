import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const UrgencyCTA = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="urgency-cta" className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary/80" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Clock className="w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-bold">Limited-Time Offer</h2>
          </div>
          
          <p className="text-xl md:text-2xl leading-relaxed">
            Lock Your Old Price Now – Before It's Gone! Secure your Microsoft pricing before October 30th.
          </p>
          
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            💼 Book My Consultation Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UrgencyCTA;
