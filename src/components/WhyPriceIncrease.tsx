import { CheckCircle, Shield, Zap, Users, BarChart3, Cloud } from "lucide-react";

const WhyPriceIncrease = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "AI-Powered Automation",
      description: "Leverage Microsoft's latest AI capabilities for smarter business processes and enhanced productivity."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security features with multi-factor authentication and data protection compliance."
    },
    {
      icon: Zap,
      title: "Enhanced Performance",
      description: "Faster processing speeds and improved system reliability for optimal business operations."
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      description: "Seamless team collaboration with integrated communication and project management features."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Powerful data insights and reporting tools to drive informed business decisions."
    },
    {
      icon: Cloud,
      title: "Scalable Infrastructure",
      description: "Flexible cloud solutions that grow with your business needs and requirements."
    }
  ];

  return (
    <section id="key-features" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Key Features
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Discover the powerful capabilities that make our Microsoft solutions the perfect choice for your business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-background rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPriceIncrease;
