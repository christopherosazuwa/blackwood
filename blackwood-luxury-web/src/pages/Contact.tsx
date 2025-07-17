import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello Blackwood! I'd like to make a reservation:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred Date: ${formData.date}\nNumber of Guests: ${formData.guests}\n\nAdditional Information:\n${formData.message}`;
    
    const whatsappUrl = `https://wa.me/2348180474973?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Victoria Island', 'Lagos, Nigeria'],
      action: () => window.open('https://maps.google.com', '_blank')
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+234 818 047 4973'],
      action: () => window.open('tel:+2348180474973', '_blank')
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@blackwoodlagos.com'],
      action: () => window.open('mailto:info@blackwoodlagos.com', '_blank')
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Sun: 12:00 PM - 11:00 PM', 'Lounge: Thu-Sat 7:00 PM - 3:00 AM'],
      action: null
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Ready to experience the pinnacle of Lagos luxury? Let's start planning your visit
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-luxury p-8">
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-6">
                Make a Reservation
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll contact you shortly to confirm your reservation
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-input border-border/40"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-input border-border/40"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-input border-border/40"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service *
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="bg-input border-border/40">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">Restaurant Dining</SelectItem>
                        <SelectItem value="lounge">Rooftop Lounge</SelectItem>
                        <SelectItem value="hotel">Hotel Stay</SelectItem>
                        <SelectItem value="events">Private Event</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="bg-input border-border/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Number of Guests
                    </label>
                    <Input
                      type="number"
                      min="1"
                      value={formData.guests}
                      onChange={(e) => handleInputChange('guests', e.target.value)}
                      className="bg-input border-border/40"
                      placeholder="Number of guests"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Information
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-input border-border/40 min-h-[120px]"
                    placeholder="Any special requests or additional information..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full btn-luxury">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team is here to help you plan the perfect experience at Blackwood. 
                  Whether you're looking to dine, celebrate, or stay with us, we're just a message away.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`card-luxury p-6 hover-scale ${info.action ? 'cursor-pointer' : ''}`}
                    onClick={info.action || undefined}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-playfair font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick WhatsApp Button */}
              <div className="card-luxury p-6 text-center">
                <h3 className="font-playfair font-semibold text-foreground mb-4">
                  Need Immediate Assistance?
                </h3>
                <Button
                  size="lg"
                  className="btn-luxury"
                  onClick={() => window.open('https://wa.me/2348180474973', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Find Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Located in the heart of Victoria Island, Lagos
            </p>
          </div>

          <div className="card-luxury p-8">
            <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  Interactive Map
                </h3>
                <p className="text-muted-foreground mb-4">
                  Victoria Island, Lagos, Nigeria
                </p>
                <Button
                  variant="outline"
                  className="btn-outline-luxury"
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  View on Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;