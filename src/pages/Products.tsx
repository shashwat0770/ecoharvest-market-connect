import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from '@/assets/icons';

const categories = [
  "All",
  "Stationery",
  "Home & Garden",
  "Kitchen",
  "Energy",
  "Decor"
];

const products = [
  {
    id: 1,
    name: 'Eco-Paper Notebook',
    price: 899,
    image: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?q=80&w=1374&auto=format&fit=crop',
    category: 'Stationery',
    badge: 'Popular',
    description: 'Made from 100% recycled agricultural waste, this notebook features 120 acid-free pages perfect for note-taking or sketching.'
  },
  {
    id: 2,
    name: 'Stubble Fiber Planter',
    price: 1495,
    image: 'https://images.unsplash.com/photo-1501554728187-ce583db33af7?q=80&w=1374&auto=format&fit=crop',
    category: 'Home & Garden',
    badge: 'New',
    description: 'Biodegradable planters made from compressed stubble fibers, perfect for starting seedlings or small plants.'
  },
  {
    id: 3,
    name: 'Biodegradable Utensils',
    price: 599,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1374&auto=format&fit=crop',
    category: 'Kitchen',
    badge: 'Bestseller',
    description: 'Set of 24 compostable utensils made from agricultural waste, perfect for parties or everyday use.'
  },
  {
    id: 4,
    name: 'Compressed Stubble Fuel',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=1470&auto=format&fit=crop',
    category: 'Energy',
    badge: 'Eco-friendly',
    description: 'High-efficiency fuel blocks made from compressed agricultural waste, perfect for fireplaces and wood stoves.'
  },
  {
    id: 5,
    name: 'Stubble Fiber Coasters',
    price: 399,
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1470&auto=format&fit=crop',
    category: 'Home & Garden',
    badge: '',
    description: 'Set of 6 water-resistant coasters made from compressed stubble fibers with beautiful natural patterns.'
  },
  {
    id: 6,
    name: 'Eco-Friendly Gift Wrap',
    price: 199,
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1374&auto=format&fit=crop',
    category: 'Stationery',
    badge: '',
    description: 'Biodegradable gift wrapping paper made from agricultural waste fibers, with natural dyes and patterns.'
  },
  {
    id: 7,
    name: 'Stubble Fiber Wall Art',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1470&auto=format&fit=crop',
    category: 'Decor',
    badge: 'Premium',
    description: 'Handcrafted wall decoration made from pressed and dyed agricultural fibers in a geometric pattern.'
  },
  {
    id: 8,
    name: 'Eco Kitchen Scrubbers',
    price: 299,
    image: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1376&auto=format&fit=crop',
    category: 'Kitchen',
    badge: '',
    description: 'Set of 3 biodegradable kitchen scrubbers made from stubble fibers, tough on stains but gentle on surfaces.'
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-muted/30 py-12">
          <div className="container">
            <h1 className="text-3xl font-bold mb-6 md:text-4xl">Eco-Friendly Products</h1>
            <p className="text-lg text-foreground/80 max-w-3xl mb-8">
              Browse our selection of sustainable goods made from recycled agricultural waste. 
              Each purchase supports farmers and contributes to reducing agricultural burning.
            </p>
            
            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category 
                      ? 'bg-eco-leaf text-white' 
                      : 'bg-background hover:bg-muted/80'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="eco-card group overflow-hidden">
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.badge && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-eco-leaf text-white text-xs font-medium rounded-full px-2.5 py-1">
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-muted-foreground mb-1">{product.category}</div>
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">₹{product.price}</span>
                      <Button size="sm" className="bg-eco-leaf hover:bg-eco-leaf/90">
                        <ShoppingCartIcon size={16} className="mr-1" /> Add
                      </Button>
                    </div>
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

export default Products;
