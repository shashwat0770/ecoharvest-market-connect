
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@/assets/icons';

const products = [
  {
    id: 1,
    name: 'Eco-Paper Notebook',
    price: 899,
    image: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?q=80&w=1374&auto=format&fit=crop',
    category: 'Stationery',
    badge: 'Popular'
  },
  {
    id: 2,
    name: 'Stubble Fiber Planter',
    price: 1495,
    image: 'https://images.unsplash.com/photo-1501554728187-ce583db33af7?q=80&w=1374&auto=format&fit=crop',
    category: 'Home & Garden',
    badge: 'New'
  },
  {
    id: 3,
    name: 'Biodegradable Utensils',
    price: 599,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1374&auto=format&fit=crop',
    category: 'Kitchen',
    badge: 'Bestseller'
  },
  {
    id: 4,
    name: 'Compressed Stubble Fuel',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=1470&auto=format&fit=crop',
    category: 'Energy',
    badge: 'Eco-friendly'
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Eco-Friendly Products</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Sustainable goods made from recycled agricultural waste
            </p>
          </div>
          <Link to="/products" className="mt-4 sm:mt-0">
            <Button variant="outline" className="flex items-center gap-2">
              View All Products
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="eco-card group overflow-hidden">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-eco-leaf text-white text-xs font-medium rounded-full px-2.5 py-1">
                    {product.badge}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-muted-foreground mb-1">{product.category}</div>
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
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
  );
};

export default ProductShowcase;
