import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Users, Camera, Music, Utensils, Calendar, Award } from 'lucide-react';
import heroEvents from '@/assets/hero-events.jpg';

const Events = () => {
  const eventTypes = [
    {
      name: 'Corporate Events',
      description: 'Professional meetings, conferences, and business celebrations',
      features: ['AV equipment', 'Business center', 'Catering service', 'Parking'],
      capacity: 'Up to 200 guests'
    },
    {
      name: 'Weddings',
      description: 'Romantic ceremonies and receptions in elegant settings',
      features: ['Bridal suite', 'Photography areas', 'Full planning', 'Floral design'],
      capacity: 'Up to 150 guests'
    },
    {
      name: 'Private Parties',
      description: 'Birthday celebrations, anniversaries, and special occasions',
      features: ['Custom themes', 'Entertainment', 'Bar service', 'Photography'],
      capacity: 'Up to 100 guests'
    }
  ];

  const packages = [
    {
      name: 'Essential Package',
      price: '₦500,000',
      features: ['Venue rental (6 hours)', 'Basic AV setup', 'Standard catering', 'Event coordination'],
      capacity: 'Up to 50 guests'
    },
    {
      name: 'Premium Package',
      price: '₦1,200,000',
      features: ['Venue rental (8 hours)', 'Full AV system', 'Premium catering', 'Decoration included', 'Photography'],
      capacity: 'Up to 100 guests'
    },
    {
      name: 'Luxury Package',
      price: '₦2,500,000',
      features: ['Full venue access', 'Complete AV setup', 'Gourmet catering', 'Full decoration', 'Photography & videography', 'Live entertainment'],
      capacity: 'Up to 200 guests'
    }
  ];

  const services = [
    { icon: Users, name: 'Event Planning', description: 'Full-service event coordination' },
    { icon: Camera, name: 'Photography', description: 'Professional event photography' },
    { icon: Music, name: 'Entertainment', description: 'Live music and DJ services' },
    { icon: Utensils, name: 'Catering', description: 'Gourmet dining experiences' },
    { icon: Calendar, name: 'Coordination', description: 'Timeline and logistics management' },
    { icon: Award, name: 'Decoration', description: 'Custom themes and styling' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroEvents})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground mb-6 text-glow">
            Event Spaces
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Create unforgettable memories in Lagos' most elegant and versatile event venues
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                Unforgettable Events
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Transform your special occasions into extraordinary celebrations at Blackwood. 
                Our versatile event spaces and dedicated team ensure every detail is perfectly 
                executed, from intimate gatherings to grand celebrations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With our comprehensive event services, state-of-the-art facilities, and 
                commitment to excellence, we create seamless experiences that exceed expectations 
                and leave lasting impressions on you and your guests.
              </p>
              <Button
                size="lg"
                className="btn-luxury"
                onClick={() => window.open('https://wa.me/2348180474973', '_blank')}
              >
                Plan Your Event
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card-luxury p-6 text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Events Hosted</div>
              </div>
              <div className="card-luxury p-6 text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">200</div>
                <div className="text-sm text-muted-foreground">Max Capacity</div>
              </div>
              <div className="card-luxury p-6 text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Event Spaces</div>
              </div>
              <div className="card-luxury p-6 text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Planning Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Event Types
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From corporate gatherings to personal celebrations, we cater to every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((eventType, index) => (
              <div key={index} className="card-luxury p-8 hover-scale">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                  {eventType.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {eventType.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {eventType.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-border/20 pt-4">
                  <div className="text-primary font-semibold">
                    {eventType.capacity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Event Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our carefully curated packages or let us create a custom solution for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`card-luxury p-8 hover-scale ${index === 1 ? 'ring-2 ring-primary' : ''}`}>
                {index === 1 && (
                  <div className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-playfair font-bold text-primary mb-4">
                  {pkg.price}
                </div>
                <div className="text-sm text-muted-foreground mb-6">
                  {pkg.capacity}
                </div>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button
                  className={`w-full ${index === 1 ? 'btn-luxury' : 'btn-outline-luxury'}`}
                  onClick={() => window.open('https://wa.me/2348180474973', '_blank')}
                >
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Event Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive services to ensure your event is flawlessly executed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-luxury p-6 text-center hover-scale">
                <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Let's Plan Your Perfect Event
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to create an unforgettable experience? Contact our event planning team to discuss your vision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-luxury"
              onClick={() => window.open('https://wa.me/2348180474973', '_blank')}
            >
              Start Planning via WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-outline-luxury"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;