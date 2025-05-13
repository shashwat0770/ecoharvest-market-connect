
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import RoleCards from '@/components/RoleCards';
import ProductShowcase from '@/components/ProductShowcase';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturesSection />
        <RoleCards />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
