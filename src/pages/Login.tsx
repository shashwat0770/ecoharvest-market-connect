
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { LeafIcon } from '@/assets/icons';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-md mx-auto bg-background rounded-xl shadow-sm border overflow-hidden">
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <LeafIcon size={40} className="text-eco-leaf" />
              </div>
              <h1 className="text-2xl font-bold text-center mb-8">
                {isLogin ? 'Welcome Back' : 'Join EcoHarvestMarket'}
              </h1>
              
              {isLogin ? (
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="text-eco-leaf hover:underline">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <Button className="w-full bg-eco-leaf hover:bg-eco-leaf/90">
                    Sign in
                  </Button>
                </form>
              ) : (
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium mb-1">First name</label>
                      <input
                        type="text"
                        id="first-name"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium mb-1">Last name</label>
                      <input
                        type="text"
                        id="last-name"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label htmlFor="user-type" className="block text-sm font-medium mb-1">I am a</label>
                    <select
                      id="user-type"
                      className="w-full px-3 py-2 border rounded-md"
                    >
                      <option>Farmer</option>
                      <option>Trader</option>
                      <option>Investor</option>
                      <option>Consumer</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                      I agree to the <a href="#" className="text-eco-leaf hover:underline">Terms and Conditions</a>
                    </label>
                  </div>
                  <Button className="w-full bg-eco-leaf hover:bg-eco-leaf/90">
                    Create account
                  </Button>
                </form>
              )}
              
              <div className="mt-6 text-center">
                <button 
                  onClick={toggleForm}
                  className="text-eco-leaf hover:underline focus:outline-none text-sm"
                >
                  {isLogin 
                    ? "Don't have an account? Sign up" 
                    : "Already have an account? Sign in"}
                </button>
              </div>
              
              {/* "Or continue with" section removed as requested */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
