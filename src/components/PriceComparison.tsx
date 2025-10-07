import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PriceComparison = () => {
  const plans = [
    { name: "Essentials", old: "$70", new: "$80" },
    { name: "Premium", old: "$100", new: "$110" },
    { name: "Device", old: "$40", new: "$45" },
  ];

  const scrollToForm = () => {
    document
      .getElementById("lead-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="whats-changing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            What's Changing
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className="p-6 border-2 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-6 text-center text-secondary">
                  {plan.name}
                </h3>

                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1"></p>
                    <p className="text-2xl font-bold text-green-600">
                      {plan.old}
                    </p>
                    <p className="text-xs text-muted-foreground">/user/month</p>
                  </div>

                  <div className="border-t pt-4 text-center">
                    <p className="text-sm text-muted-foreground mb-1">
                      New Price
                    </p>
                    <p className="text-2xl font-bold text-destructive">
                      {plan.new}
                    </p>
                    <p className="text-xs text-muted-foreground">/user/month</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border text-center space-y-4">
            <p className="text-foreground text-lg">
              <span className="font-semibold">
                Lock today’s price for 3 years
              </span>{" "}
              and avoid upcoming increases. For a 10‑user team, that’s up to
              <span className="font-bold text-primary"> $1,200</span> in savings
              annually.
            </p>
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Lock the Current Price for 3 Years
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
