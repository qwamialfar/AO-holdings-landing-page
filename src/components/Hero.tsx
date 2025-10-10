import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
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
                  <div className="max-w-5xl mx-auto">
                    <div className="relative aspect-video overflow-hidden rounded-xl ring-1 ring-black/10">
                      <img
                        src={imageSrc}
                        alt={alt}
                        className="h-full w-full object-contain bg-white"
                        loading="eager"
                      />
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
