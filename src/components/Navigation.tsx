
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navigation = ({ isMenuOpen, setIsMenuOpen }: NavigationProps) => {
  // This would come from your authentication provider in a real app
  const isLoggedIn = false; // Change to true to test organizer link visibility
  const location = useLocation();
  
  // Only show organizer link on non-landing page or if logged in
  const showOrganizerLink = isLoggedIn || location.pathname !== '/';
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/events" className="text-gray-600 hover:text-gray-900 transition-colors">Events</Link>
            <Link to="/internships" className="text-gray-600 hover:text-gray-900 transition-colors">Internships</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
            
            {showOrganizerLink && (
              <Link to="/organizer">
                <Button variant="outline" className="mr-2">Organizers</Button>
              </Link>
            )}
            
            <Link to="/admin">
              <Button className="gradient-bg text-white">Admin</Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/events" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Events</Link>
            <Link to="/internships" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Internships</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</Link>
            <div className="px-3 py-2 space-y-2">
              {showOrganizerLink && (
                <Link to="/organizer" className="block w-full">
                  <Button variant="outline" className="w-full">Organizers</Button>
                </Link>
              )}
              <Link to="/admin" className="block w-full">
                <Button className="w-full gradient-bg text-white">Admin</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
