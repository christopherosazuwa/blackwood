import { ArrowRight, Utensils, Wine, Bed, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroRestaurant from '@/assets/hero-restaurant.jpg';
import heroLounge from '@/assets/hero-lounge.jpg';
import heroHotel from '@/assets/hero-hotel.jpg';
import heroEvents from '@/assets/hero-events.jpg';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: any;
  link: string;
  cta: string;
}

const services: Service[] = [
  {
    id: 'restaurant',
    title: 'Fine Dining Restaurant',
    description: 'Experience culinary artistry with our world-class chefs crafting exquisite dishes that celebrate both international flavors and local Nigerian cuisine.',
    features: ['Michelin-trained chefs', 'Premium wine selection', 'Private dining rooms', 'Seasonal tasting menus'],
    image: heroRestaurant,
    icon: Utensils,
    link: '/restaurant',
    cta: 'View Menu'
  },
  {
    id: 'lounge',
    title: 'Rooftop Lounge',
    description: 'Elevate your evening at Lagos\' most sophisticated rooftop destination, featuring craft cocktails, live music, and breathtaking city skyline views.',
    features: ['Panoramic city views', 'Master mixologists', 'Live entertainment', 'VIP bottle service'],
    image: heroLounge,
    icon: Wine,
    link: '/lounge',
    cta: 'Reserve Table'
  },
  {
    id: 'hotel',
    title: 'Luxury Hotel',
    description: 'Indulge in unparalleled comfort with our elegantly appointed suites, personalized service, and world-class amenities in the heart of Victoria Island.',
    features: ['Designer suites', '24/7 concierge', 'Spa services', 'Business center'],
    image: heroHotel,
    icon: Bed,
    link: '/hotel',
    cta: 'Book Stay'
  },
  {
    id: 'events',
    title: 'Event Spaces',
    description: 'Create unforgettable memories in our versatile event spaces, perfect for weddings, corporate events, and private celebrations with bespoke planning services.',
    features: ['Flexible venues', 'Event coordination', 'Catering services', 'Audio/visual equipment'],
    image: heroEvents,
    icon: Calendar,
    link: '/events',
    cta: 'Plan Event'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover four distinct experiences under one roof, each crafted to deliver 
            the pinnacle of Lagos luxury and hospitality
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-playfair font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button
                    size="lg"
                    className="btn-luxury group"
                    onClick={() => window.location.href = service.link}
                  >
                    {service.cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-12 border-t border-border/20">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-4">
            Ready to Experience Blackwood?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to make a reservation or learn more about our premium services
          </p>
          <Button
            size="lg"
            className="btn-luxury"
            onClick={() => window.open('https://wa.me/2348180474973', '_blank')}
          >
            Book Now via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;