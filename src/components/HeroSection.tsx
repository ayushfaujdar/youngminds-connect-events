
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-purple-100 text-purple-700 border-purple-200 hero-animate">
            🎉 Join 10,000+ Young Professionals
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 hero-animate">
            Connect. Learn.{' '}
            <span className="gradient-text bg-gradient-to-r from-purple-600 to-indigo-600">Grow.</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto hero-animate">
            The premier platform connecting event organizers with ambitious young minds seeking 
            meaningful experiences and career opportunities.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 hero-animate">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 text-lg animate-pulse">
              <Calendar className="w-5 h-5 mr-2" />
              Explore Events
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg hover:scale-105 transition-all duration-300">
              <Users className="w-5 h-5 mr-2" />
              Find Internships
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center hero-animate">
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center animate-pulse">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Events Listed</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center animate-pulse">
                <Users className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                <Star className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Image/Illustration */}
        <div className="mt-16 relative animate-float">
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-purple-200 to-indigo-200 rounded-2xl shadow-2xl overflow-hidden animate-glow">
              <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-indigo-400/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
                    <Calendar className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-white/90 text-lg font-medium">Your Next Opportunity Awaits</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-400 rounded-full animate-bounce opacity-80"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-indigo-400 rounded-full animate-pulse opacity-80"></div>
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-blue-400 rounded-full animate-ping opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
