import Layout from '@/components/Layout';
import HeroSlider from '@/components/HeroSlider';
import ServicesSection from '@/components/ServicesSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <ServicesSection />
      <TestimonialCarousel />
    </Layout>
  );
};

export default Index;
