
import React from 'react';
import { Link } from 'react-router-dom';
import { LeafIcon } from '@/assets/icons';

const Footer = () => {
  return (
    <footer className="bg-muted pt-16 pb-8 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LeafIcon size={24} className="text-eco-leaf" />
              <span className="text-xl font-bold">EcoHarvest<span className="text-eco-leaf">Market</span></span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transforming agricultural waste into sustainable opportunities.
            </p>
            {/* Social media icons removed as requested */}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/community" className="text-muted-foreground hover:text-foreground transition-colors">Community</Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Join Us</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/farmer/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Farmer Portal</Link>
              </li>
              <li>
                <Link to="/trader/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Trader Portal</Link>
              </li>
              <li>
                <Link to="/investor/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Investor Portal</Link>
              </li>
              <li>
                <Link to="/partner" className="text-muted-foreground hover:text-foreground transition-colors">Become a Partner</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-foreground transition-colors">Support</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} EcoHarvestMarket. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
