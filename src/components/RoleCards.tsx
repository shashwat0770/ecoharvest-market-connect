
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { LeafIcon, TruckIcon, CoinsIcon } from '@/assets/icons';

const roles = [
  {
    id: 'farmer',
    title: 'Farmer',
    icon: LeafIcon,
    description: 'List your crop residue for sale, manage your transactions, and get paid for agricultural waste.',
    benefits: ['Direct fair pricing', 'Simple listing process', 'Environmental impact', 'Reduced disposal costs'],
    color: 'bg-eco-leaf',
    path: '/login',
    iconColor: 'text-eco-leaf'
  },
  {
    id: 'trader',
    title: 'Trader',
    icon: TruckIcon,
    description: 'Connect with farmers, schedule pickup, and transport stubble to processing facilities.',
    benefits: ['Efficient routing', 'Multiple collection points', 'Guaranteed volumes', 'Digital documentation'],
    color: 'bg-eco-earth',
    path: '/login',
    iconColor: 'text-eco-earth'
  },
  {
    id: 'investor',
    title: 'Investor',
    icon: CoinsIcon,
    description: 'Purchase stubble in bulk for eco-friendly ethanol production and other sustainable initiatives.',
    benefits: ['Verified sources', 'Quality guarantees', 'Volume discounts', 'Sustainability reporting'],
    color: 'bg-eco-wheat',
    path: '/login',
    iconColor: 'text-eco-wheat'
  }
];

const RoleCards = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Choose Your Role</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our ecosystem and contribute to a more sustainable agricultural future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div 
              key={role.id} 
              className="eco-card p-8 flex flex-col h-full border-t-4 group hover:translate-y-[-4px] transition-transform duration-200"
              style={{ borderTopColor: role.color === 'bg-eco-leaf' ? '#4D7C0F' : role.color === 'bg-eco-earth' ? '#78350F' : '#CA8A04' }}
            >
              <div className="mb-6">
                <role.icon size={38} className={role.iconColor} />
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">{role.title}</h3>
              <p className="text-muted-foreground mb-6">{role.description}</p>
              
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-foreground/70 mb-2">Benefits:</h4>
                <ul className="space-y-2">
                  {role.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg className={`w-4 h-4 ${role.iconColor} shrink-0`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                <Link to={role.path} className="w-full">
                  <Button 
                    className={`w-full ${role.color === 'bg-eco-leaf' ? 'bg-eco-leaf hover:bg-eco-leaf/90' : role.color === 'bg-eco-earth' ? 'bg-eco-earth hover:bg-eco-earth/90' : 'bg-eco-wheat hover:bg-eco-wheat/90'} text-white`}
                  >
                    Join as {role.title}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleCards;
