
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LeafIcon, TruckIcon, CoinsIcon } from '@/assets/icons';

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h1 className="text-4xl font-bold mb-6 md:text-5xl lg:text-6xl">About <span className="text-eco-leaf">EcoHarvestMarket</span></h1>
            <p className="text-lg text-foreground/80 max-w-3xl mb-8">
              Transforming agricultural waste into sustainable solutions for a greener tomorrow
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  Founded in 2023, EcoHarvestMarket was born from a simple yet powerful idea: 
                  what if we could transform agricultural waste into valuable resources? 
                  Our platform connects farmers with traders and investors to create 
                  a sustainable ecosystem that benefits everyone.
                </p>
                <p className="mb-4">
                  Crop residue burning is a major environmental issue in many agricultural regions. 
                  By providing farmers with an alternative that generates income from their stubble, 
                  we're helping reduce air pollution while creating economic opportunities.
                </p>
                <p>
                  Our mission extends beyond commerce. We're building a community of environmentally 
                  conscious individuals committed to sustainable practices in agriculture and beyond.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden border shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop" 
                  alt="Harvested field with stubble" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="eco-card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <LeafIcon size={40} className="text-eco-leaf" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Environmental</h3>
                <p className="text-muted-foreground">
                  Reduced crop burning by 40% in our operational areas, preventing the release of harmful pollutants into the atmosphere.
                </p>
              </div>
              
              <div className="eco-card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <TruckIcon size={40} className="text-eco-earth" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Economic</h3>
                <p className="text-muted-foreground">
                  Generated additional income for over 10,000 farmers and created jobs in the agricultural waste management sector.
                </p>
              </div>
              
              <div className="eco-card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <CoinsIcon size={40} className="text-eco-wheat" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Developed new technologies for processing agricultural waste into sustainable products and alternative fuels.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              We're a diverse team of environmentalists, technologists, and agricultural experts 
              united by our passion for sustainable solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="eco-card overflow-hidden">
                  <div className="h-64 bg-muted/50"></div>
                  <div className="p-4">
                    <h3 className="font-semibold">Team Member {index}</h3>
                    <p className="text-sm text-muted-foreground">Position</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
