import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Official Microsoft Partner in Ghana",

    "ISO certified 27001 : 2022",
    "Training and onboarding included",
    "Tailored solutions for SMEs and enterprises",
    "Free consultation to assess your business needs",
    "Localized implementation & support",
  ];

  return (
    <section id="why-choose-ao-holdings" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose AO Holdings
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="text-lg text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
