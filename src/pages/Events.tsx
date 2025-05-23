
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EventsSection from '@/components/EventsSection';

const Events = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>
          <EventsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
