import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Cloud,
  BarChart3,
  Boxes,
  AppWindow,
  Users2,
  Database,
} from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    document
      .getElementById("lead-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-secondary text-secondary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary/80 opacity-90" />
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Carousel
            className="relative"
            opts={{ loop: true, align: "start" }}
            plugins={[Autoplay({ delay: 4000 })]}
          >
            <CarouselContent>
              {[
                {
                  imageSrc: "/AO PPROMOTION FLYER 1.jpg",
                  alt: "AO Holdings Promotion Flyer 1"
                },
                {
                  imageSrc: "/AO PPROMOTION FLYER 2.jpg",
                  alt: "AO Holdings Promotion Flyer 2"
                },
                {
                  imageSrc: "/AO PPROMOTION FLYER 3.jpg",
                  alt: "AO Holdings Promotion Flyer 3"
                },
                {
                  imageSrc: "/AO PPROMOTION FLYER 4.jpg",
                  alt: "AO Holdings Promotion Flyer 4"
                },
                {
                  imageSrc: "/AO PPROMOTION FLYER 5.jpg",
                  alt: "AO Holdings Promotion Flyer 5"
                },
              ].map(({ imageSrc, alt }, idx) => (
                <CarouselItem key={idx}>
                  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 text-center md:text-left space-y-6">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight flex items-center justify-center md:justify-start gap-3">
                        <Boxes className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                        <span>Dynamics 365 Business Central</span>
                      </h1>
                      <p className="text-lg md:text-xl text-secondary-foreground/90 leading-relaxed">
                        All-in-one ERP for finance, supply chain, sales, and operations—tailored for your business.
                      </p>
                      <Button
                        onClick={scrollToForm}
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        Lock My Price Now
                      </Button>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="relative aspect-video overflow-hidden rounded-xl ring-1 ring-black/10">
                        <img
                          src={imageSrc}
                          alt={alt}
                          className="h-full w-full object-contain bg-white"
                          loading="eager"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/10 to-transparent" />
    </section>
  );
};

export default Hero;
