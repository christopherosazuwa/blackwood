import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Adunni Adeleke",
    title: "Celebrity Chef",
    content: "Blackwood has redefined luxury dining in Lagos. The attention to detail and culinary excellence is unmatched. Every visit is an extraordinary experience.",
    rating: 5
  },
  {
    id: 2,
    name: "Kemi Adetola",
    title: "Event Planner",
    content: "I've hosted numerous high-profile events at Blackwood. Their event spaces are stunning and the service is impeccable. My clients are always impressed.",
    rating: 5
  },
  {
    id: 3,
    name: "David Okafor",
    title: "Business Executive",
    content: "The rooftop lounge is my go-to spot for client meetings and celebrations. The ambiance, cocktails, and view of Lagos are absolutely spectacular.",
    rating: 5
  },
  {
    id: 4,
    name: "Funmi Johnson",
    title: "Travel Blogger",
    content: "Stayed at Blackwood Hotel during Lagos Fashion Week. The luxury, comfort, and central location made it the perfect base for exploring the city.",
    rating: 5
  },
  {
    id: 5,
    name: "Ahmed Bello",
    title: "Tech Entrepreneur",
    content: "Blackwood represents the best of Lagos hospitality. From the restaurant to the lounge, every experience exceeds expectations.",
    rating: 5
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-primary fill-current' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the luxury through the eyes of our valued guests
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="card-luxury p-8 md:p-12 mx-auto max-w-4xl text-center hover-scale">
                    {/* Stars */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Content */}
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                        <span className="text-primary font-playfair font-bold text-xl">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="text-foreground font-medium text-lg mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-primary font-medium">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 border-border/40 backdrop-blur-sm hover:bg-background"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 border-border/40 backdrop-blur-sm hover:bg-background"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary shadow-lg scale-125'
                    : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;