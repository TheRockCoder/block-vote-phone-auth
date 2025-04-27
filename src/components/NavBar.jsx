
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Lock, Shield } from 'lucide-react';

const NavBar = ({ userAuthenticated }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-brand-purple" />
                <span className="font-bold text-xl bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                  BlockVote
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-purple">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-purple">
              About
            </Link>
            <Link to="/faq" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-purple">
              FAQ
            </Link>
            {userAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost" className="text-sm font-medium">Dashboard</Button>
                </Link>
                <Link to="/vote">
                  <Button className="flex items-center gap-1 bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/90 hover:to-brand-blue/90">
                    <Lock className="h-4 w-4" />
                    Vote Now
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="/auth">
                <Button className="flex items-center gap-1 bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/90 hover:to-brand-blue/90">
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-brand-purple"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-b">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-purple">
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-purple">
              About
            </Link>
            <Link to="/faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-purple">
              FAQ
            </Link>
            {userAuthenticated ? (
              <>
                <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-brand-purple">
                  Dashboard
                </Link>
                <Link to="/vote" className="block px-3 py-2 rounded-md text-base font-medium">
                  <Button className="w-full flex items-center justify-center gap-1 bg-gradient-to-r from-brand-purple to-brand-blue">
                    <Lock className="h-4 w-4" />
                    Vote Now
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="/auth" className="block px-3 py-2 rounded-md text-base font-medium">
                <Button className="w-full flex items-center justify-center gap-1 bg-gradient-to-r from-brand-purple to-brand-blue">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
