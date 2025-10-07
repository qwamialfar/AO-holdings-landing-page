import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const StickyFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky footer after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg transform transition-transform duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm md:text-base font-semibold flex-1">
            Lock Your Old Price Now – Before It's Gone
          </p>
          
          <Button
            onClick={scrollToForm}
            variant="secondary"
            size="sm"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold whitespace-nowrap"
          >
            Get Started →
          </Button>
          
          <button
            onClick={() => setIsDismissed(true)}
            className="flex-shrink-0 p-1 hover:bg-primary-foreground/10 rounded transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
