import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Wifi, Coffee, Car, Shield, Bed, Bath } from 'lucide-react';
import heroHotel from '@/assets/hero-hotel.jpg';

const Hotel = () => {
  const roomTypes = [
    {
      name: 'Deluxe Suite',
      size: '45 sqm',
      description: 'Elegant suite with city views, king bed, and modern amenities',
      features: ['King bed', 'City view', 'Marble bathroom', 'Work desk'],
      price: '₦85,000/night'
    },
    {
      name: 'Executive Suite',
      size: '65 sqm',
      description: 'Spacious suite with separate living area and premium furnishings',
      features: ['King bed', 'Living area', 'Premium bath', 'Dining space'],
      price: '₦120,000/night'
    },
    {
      name: 'Presidential Suite',
      size: '95 sqm',
      description: 'Ultimate luxury with panoramic views and exclusive amenities',
      features: ['Master bedroom', 'Panoramic views', 'Butler service', 'Private terrace'],
      price: '₦200,000/night'
    }
  ];

  const amenities = [
    { icon: Wifi, name: 'High-Speed WiFi', description: 'Complimentary throughout hotel' },
    { icon: Coffee, name: '24/7 Room Service', description: 'Gourmet dining anytime' },
    { icon: Car, name: 'Valet Parking', description: 'Secure underground parking' },
    { icon: Shield, name: '24/7 Security', description: 'Round-the-clock protection' },
    { icon: Bed, name: 'Luxury Bedding', description: 'Premium linens and pillows' },
    { icon: Bath, name: 'Spa Services', description: 'In-room massage available' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroHotel})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground mb-6 text-glow">
            Luxury Hotel
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Your sophisticated home in the heart of Lagos with unparalleled comfort and service
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                Exceptional Hospitality
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Experience the pinnacle of luxury accommodation in Lagos. Our elegantly appointed 
                suites feature contemporary design, premium amenities, and breathtaking city views, 
                all complemented by our signature personalized service.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Located in the prestigious Victoria Island district, Blackwood Hotel places you 
                at the center of Lagos' business and entertainment hub, while providing a tranquil 
                retreat from the city's vibrant energy.
              </p>
              <Button
                size="lg"
                className="btn-luxury"
                onClick={() => window.open('https://wa.me/2348180474973', '_blank')}
              >
                Book Your Stay
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card-luxury p-6 text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Luxury Suites</div>
              </div>
              <div className="card-luxury p-6 text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Concierge Service</div>
              </div>
              <div className="card-luxury p-6 text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">5★</div>
                <div className="text-sm text-muted-foreground">Luxury Rating</div>
              </div>
              <div className="card-luxury p-6 text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Guest Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Accommodation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our selection of elegantly designed suites, each offering unique luxury experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <div key={index} className="card-luxury p-8 hover-scale">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
                  {room.name}
                </h3>
                <div className="text-primary font-semibold mb-4">{room.size}</div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {room.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {room.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-border/20 pt-6">
                  <div className="text-2xl font-playfair font-bold text-primary mb-4">
                    {room.price}
                  </div>
                  <Button
                    className="w-full btn-luxury"
                    onClick={() => window.open('https://wa.me/2348180474973', '_blank')}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Premium Amenities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every detail designed to enhance your stay experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="card-luxury p-6 text-center hover-scale">
                <amenity.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  {amenity.name}
                </h3>
                <p className="text-muted-foreground">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your stay at Blackwood Hotel and discover why we're Lagos' premier luxury destination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-luxury"
              onClick={() => window.open('https://wa.me/2348180474973', '_blank')}
            >
              Book via WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-outline-luxury"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Concierge
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hotel;