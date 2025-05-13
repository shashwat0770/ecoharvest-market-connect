
import React from 'react';
import { Button } from "@/components/ui/button";
import { LeafIcon } from '@/assets/icons';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background pt-16 pb-24">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(#84CC16_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-eco-leaf mr-2"></span>
              Making agriculture sustainable
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Turn Stubble into <span className="text-eco-leaf">Value</span>
            </h1>
            
            <p className="text-lg text-foreground/80 md:text-xl max-w-2xl">
              EcoHarvestMarket connects farmers, traders, and investors to transform agricultural waste into sustainable products and energy solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-eco-leaf hover:bg-eco-leaf/90">
                  Get Started
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-4 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <LeafIcon size={16} />
                <span>Eco-friendly</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-border"></div>
              <div>Sustainable</div>
              <div className="h-1 w-1 rounded-full bg-border"></div>
              <div>Zero Waste</div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-slow">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop"
                alt="Harvested crop field with stubble"
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg border dark:bg-gray-800">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                <span className="text-sm font-medium">Reducing agricultural waste by 40%</span>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 rounded-lg bg-white p-4 shadow-lg border dark:bg-gray-800">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-eco-wheat"></span>
                <span className="text-sm font-medium">Supporting 10,000+ farmers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
