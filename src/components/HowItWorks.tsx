const HowItWorks = () => {
  const steps = [
    { number: "1", text: "Book a free consultation." },
    { number: "2", text: "Choose your preferred Business Central plan." },
    { number: "3", text: "Lock in your old price before the new rates apply." },
    {
      number: "4",
      text: "Begin your digital transformation journey with our expert team.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            How It Works
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <p className="text-foreground leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
