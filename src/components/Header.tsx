
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { LeafIcon } from '@/assets/icons';
import { Menu, X, User as UserIcon } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/components/ui/sonner';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully");
      navigate('/');
    } catch (error) {
      toast.error("Error signing out");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <LeafIcon size={28} className="text-eco-leaf" />
            <span className="text-xl font-bold">EcoHarvest<span className="text-eco-leaf">Market</span></span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">Home</Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">About</Link>
          <Link to="/products" className="text-foreground/80 hover:text-foreground transition-colors">Products</Link>
          <Link to="/community" className="text-foreground/80 hover:text-foreground transition-colors">Community</Link>
          
          {user ? (
            <>
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-2"
              >
                <UserIcon size={16} /> My Account
              </Button>
              <Button 
                size="sm" 
                className="bg-eco-leaf hover:bg-eco-leaf/90"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" size="sm">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" className="bg-eco-leaf hover:bg-eco-leaf/90">Sign up</Button>
              </Link>
            </>
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background animate-fade-in">
          <div className="container py-4 flex flex-col gap-4">
            <Link to="/" className="px-2 py-2 hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="px-2 py-2 hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/products" className="px-2 py-2 hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link to="/community" className="px-2 py-2 hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>Community</Link>
            
            {user ? (
              <div className="flex gap-4 pt-2">
                <Link to="/account" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <UserIcon size={16} /> My Account
                  </Button>
                </Link>
                <div className="flex-1">
                  <Button 
                    className="w-full bg-eco-leaf hover:bg-eco-leaf/90"
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex gap-4 pt-2">
                <Link to="/login" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Log in</Button>
                </Link>
                <Link to="/signup" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-eco-leaf hover:bg-eco-leaf/90">Sign up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
