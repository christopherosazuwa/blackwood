import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import hero images
import heroHome from '@/assets/hero-home.jpg';
import heroRestaurant from '@/assets/hero-restaurant.jpg';
import heroLounge from '@/assets/hero-lounge.jpg';
import heroHotel from '@/assets/hero-hotel.jpg';
import heroEvents from '@/assets/hero-events.jpg';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: heroHome,
    title: "Welcome to Blackwood",
    subtitle: "Lagos' Premier Luxury Experience",
    description: "Where sophistication meets nightlife in the heart of Victoria Island",
    cta: "Explore Our World",
    ctaLink: "#services"
  },
  {
    id: 2,
    image: heroRestaurant,
    title: "Exquisite Dining",
    subtitle: "Culinary Excellence Redefined",
    description: "Savor the finest cuisine crafted by world-class chefs",
    cta: "View Menu",
    ctaLink: "/restaurant"
  },
  {
    id: 3,
    image: heroLounge,
    title: "Rooftop Lounge",
    subtitle: "Where Lagos Comes Alive",
    description: "Premium cocktails with breathtaking city views",
    cta: "Reserve Table",
    ctaLink: "/lounge"
  },
  {
    id: 4,
    image: heroHotel,
    title: "Luxury Accommodation",
    subtitle: "Your Home Away From Home",
    description: "Experience unparalleled comfort and elegance",
    cta: "Book Stay",
    ctaLink: "/hotel"
  },
  {
    id: 5,
    image: heroEvents,
    title: "Unforgettable Events",
    subtitle: "Celebrations Made Perfect",
    description: "Create lasting memories in our elegant event spaces",
    cta: "Plan Event",
    ctaLink: "/events"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleCtaClick = (link: string) => {
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = link;
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 hero-gradient" />
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div
                className={`transition-all duration-1000 delay-300 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-foreground mb-4 text-glow">
                  {slide.title}
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair text-primary mb-6">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <Button
                  size="lg"
                  className="btn-luxury text-lg px-8 py-6 animate-glow-pulse"
                  onClick={() => handleCtaClick(slide.ctaLink)}
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/20 border-border/40 backdrop-blur-sm hover:bg-background/40"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/20 border-border/40 backdrop-blur-sm hover:bg-background/40"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary shadow-lg'
                : 'bg-background/40 hover:bg-background/60'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/20">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default HeroSlider;