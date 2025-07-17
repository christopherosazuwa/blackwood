import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Phone, Music, Users, Wine } from 'lucide-react';
import heroLounge from '@/assets/hero-lounge.jpg';

const Lounge = () => {
  const cocktailMenu = [
    { name: 'Blackwood Signature', description: 'Premium whiskey, honey, bitters', price: '₦8,000' },
    { name: 'Lagos Sunset', description: 'Vodka, passion fruit, champagne', price: '₦7,500' },
    { name: 'Rooftop Royale', description: 'Gin, elderflower, cucumber', price: '₦7,000' },
    { name: 'Smoky Manhattan', description: 'Rye whiskey, sweet vermouth', price: '₦8,500' }
  ];

  const events = [
    { day: 'Thursday', event: 'Jazz Night', time: '8:00 PM - 12:00 AM' },
    { day: 'Friday', event: 'DJ Live Set', time: '9:00 PM - 3:00 AM' },
    { day: 'Saturday', event: 'Rooftop Party', time: '7:00 PM - 3:00 AM' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroLounge})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground mb-6 text-glow">
            Rooftop Lounge
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Where Lagos comes alive under the stars with premium cocktails and breathtaking views
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                Lagos' Premier Rooftop Experience
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Perched high above Victoria Island, our rooftop lounge offers an unparalleled 
                nightlife experience with panoramic views of Lagos' glittering skyline. 
                Master mixologists craft exceptional cocktails while world-class DJs set the perfect mood.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From intimate conversations to celebration nights, our sophisticated atmosphere 
                provides the perfect backdrop for memorable evenings in Nigeria's most dynamic city.
              </p>
              <Button
                size="lg"
                className="btn-luxury"
                onClick={() => window.open('https://wa.me/2348180474973', '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Reserve Table
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="card-luxury p-6 text-center">
                <Music className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Live DJ</div>
              </div>
              <div className="card-luxury p-6 text-center">
                <Wine className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">Premium Bar</div>
              </div>
              <div className="card-luxury p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium text-foreground">VIP Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cocktail Menu */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Signature Cocktails
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Expertly crafted drinks featuring premium spirits and fresh ingredients
            </p>
          </div>

          <div className="card-luxury p-8">
            <div className="space-y-6">
              {cocktailMenu.map((cocktail, index) => (
                <div key={index} className="flex justify-between items-start border-b border-border/20 pb-4 last:border-b-0">
                  <div className="flex-1">
                    <h4 className="text-xl font-playfair font-semibold text-foreground mb-2">
                      {cocktail.name}
                    </h4>
                    <p className="text-muted-foreground">{cocktail.description}</p>
                  </div>
                  <div className="text-primary font-bold text-lg ml-4">
                    {cocktail.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Schedule */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Weekly Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Join us for unforgettable nights with live entertainment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} className="card-luxury p-6 text-center hover-scale">
                <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
                  {event.day}
                </h3>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {event.event}
                </h4>
                <p className="text-muted-foreground">
                  {event.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="card-luxury p-6">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-playfair font-semibold text-foreground mb-2">Hours</h3>
              <p className="text-muted-foreground">
                Thursday - Saturday<br />
                7:00 PM - 3:00 AM
              </p>
            </div>
            <div className="card-luxury p-6">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-playfair font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">
                Rooftop Level<br />
                Victoria Island, Lagos
              </p>
            </div>
            <div className="card-luxury p-6">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-playfair font-semibold text-foreground mb-2">Reservations</h3>
              <p className="text-muted-foreground">
                +234 818 047 4973<br />
                WhatsApp Booking
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Lounge;