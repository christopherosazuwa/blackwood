import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Phone, Download } from 'lucide-react';
import heroRestaurant from '@/assets/hero-restaurant.jpg';

const Restaurant = () => {
  const menuCategories = [
    {
      name: 'Appetizers',
      items: [
        { name: 'Grilled Tiger Prawns', description: 'With garlic herb butter and lemon', price: '₦15,000' },
        { name: 'Wagyu Beef Carpaccio', description: 'Truffle oil, arugula, parmesan', price: '₦18,000' },
        { name: 'Pan-Seared Foie Gras', description: 'Apple compote, brioche', price: '₦22,000' }
      ]
    },
    {
      name: 'Main Courses',
      items: [
        { name: 'Blackwood Signature Steak', description: 'Dry-aged ribeye, seasonal vegetables', price: '₦35,000' },
        { name: 'Lobster Thermidor', description: 'Canadian lobster, brandy cream sauce', price: '₦28,000' },
        { name: 'Jollof Risotto', description: 'Nigerian-Italian fusion, tiger prawns', price: '₦20,000' }
      ]
    },
    {
      name: 'Desserts',
      items: [
        { name: 'Chocolate Soufflé', description: 'Dark chocolate, vanilla ice cream', price: '₦8,000' },
        { name: 'Crème Brûlée', description: 'Madagascar vanilla, seasonal berries', price: '₦7,000' },
        { name: 'Tiramisu', description: 'Traditional Italian, coffee liqueur', price: '₦7,500' }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroRestaurant})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground mb-6 text-glow">
            Fine Dining
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Where culinary artistry meets exceptional service in an atmosphere of refined elegance
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                Culinary Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our restaurant represents the pinnacle of Lagos dining, where Michelin-trained chefs 
                create extraordinary culinary experiences that celebrate both international gastronomy 
                and the rich flavors of Nigerian cuisine.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every dish is crafted with precision, using only the finest ingredients sourced locally 
                and internationally, ensuring each meal is a journey of taste and sophistication.
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
            <div className="grid grid-cols-2 gap-4">
              <div className="card-luxury p-6 text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">5★</div>
                <div className="text-sm text-muted-foreground">Michelin Guide</div>
              </div>
              <div className="card-luxury p-6 text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Award-Winning Chefs</div>
              </div>
              <div className="card-luxury p-6 text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Premium Wines</div>
              </div>
              <div className="card-luxury p-6 text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Fine Dining</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Our Menu
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              A carefully curated selection of dishes that showcase culinary artistry and innovation
            </p>
            <Button
              variant="outline"
              className="btn-outline-luxury"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Full Menu PDF
            </Button>
          </div>

          <div className="space-y-12">
            {menuCategories.map((category, index) => (
              <div key={index} className="card-luxury p-8">
                <h3 className="text-3xl font-playfair font-bold text-primary mb-8 text-center">
                  {category.name}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start border-b border-border/20 pb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-playfair font-semibold text-foreground mb-2">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="text-primary font-bold text-lg ml-4">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="card-luxury p-6">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-playfair font-semibold text-foreground mb-2">Hours</h3>
              <p className="text-muted-foreground">
                Monday - Sunday<br />
                12:00 PM - 11:00 PM
              </p>
            </div>
            <div className="card-luxury p-6">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-playfair font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">
                Victoria Island<br />
                Lagos, Nigeria
              </p>
            </div>
            <div className="card-luxury p-6">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-playfair font-semibold text-foreground mb-2">Reservations</h3>
              <p className="text-muted-foreground">
                +234 818 047 4973<br />
                WhatsApp Available
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Restaurant;