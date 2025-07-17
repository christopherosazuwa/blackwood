import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Restaurant', href: '/restaurant' },
    { name: 'Rooftop Lounge', href: '/lounge' },
    { name: 'Hotel', href: '/hotel' },
    { name: 'Events', href: '/events' },
  ];

  return (
    <footer className="bg-background border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-playfair font-bold text-foreground mb-4">
              BLACKWOOD
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Lagos' premier destination for luxury dining, nightlife, accommodation, and events. 
              Experience the pinnacle of hospitality in the heart of Nigeria.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-10 h-10 p-0 border-border/40 hover:bg-primary hover:border-primary"
                  onClick={() => window.open(social.href, '_blank')}
                >
                  <social.icon className="w-4 h-4" />
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Victoria Island, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+234 818 047 4973</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@blackwoodlagos.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-playfair font-semibold text-foreground mb-4">Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <div>
                <div className="font-medium">Restaurant</div>
                <div className="text-sm">Mon-Sun: 12:00 PM - 11:00 PM</div>
              </div>
              <div>
                <div className="font-medium">Rooftop Lounge</div>
                <div className="text-sm">Thu-Sat: 7:00 PM - 3:00 AM</div>
              </div>
              <div>
                <div className="font-medium">Hotel</div>
                <div className="text-sm">24/7 Check-in</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Blackwood Lagos. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;