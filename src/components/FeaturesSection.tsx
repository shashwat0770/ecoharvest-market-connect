
import React from 'react';
import { LeafIcon, TruckIcon, CoinsIcon, ShoppingCartIcon, EarthIcon, SprayIcon } from '@/assets/icons';

const features = [
  {
    icon: LeafIcon,
    title: "Stubble Listing",
    description: "Farmers can easily list their crop residue for sale, specifying quantity, type, and location.",
    badgeType: "badge-eco"
  },
  {
    icon: TruckIcon,
    title: "Trader Connections",
    description: "Efficient connections between farmers and traders for streamlined stubble pickup and transportation.",
    badgeType: "badge-earth"
  },
  {
    icon: CoinsIcon,
    title: "Investment Opportunities",
    description: "Investors can purchase stubble for eco-friendly ethanol production and renewable energy.",
    badgeType: "badge-wheat"
  },
  {
    icon: ShoppingCartIcon,
    title: "Eco-Products Store",
    description: "Browse and purchase sustainable products made from recycled agricultural waste.",
    badgeType: "badge-eco"
  },
  {
    icon: EarthIcon,
    title: "Community Engagement",
    description: "Connect with like-minded individuals and share ideas for a more sustainable future.",
    badgeType: "badge-wheat"
  },
  {
    icon: SprayIcon,
    title: "Eco-Challenge Leaderboards",
    description: "Participate in challenges and track your progress on interactive leaderboards.",
    badgeType: "badge-earth"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform provides a complete ecosystem for sustainable agriculture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="eco-card p-6 flex flex-col"
            >
              <div className={`${feature.badgeType} w-fit mb-4 flex items-center gap-2`}>
                <feature.icon size={16} />
                <span>Feature</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground flex-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
