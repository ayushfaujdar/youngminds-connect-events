import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Star } from 'lucide-react';
const HeroSection = () => {
  return <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-amber-100">
        <div className="text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-purple-100 text-purple-700 border-purple-200 animate-scale-in">
            🎉 Join 10,000+ Young Professionals
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
            Connect. Learn.{' '}
            <span className="gradient-text">Grow.</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
            The premier platform connecting event organizers with ambitious young minds seeking 
            meaningful experiences and career opportunities.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Link to="/events">
              <Button size="lg" className="gradient-bg text-white px-8 py-4 text-lg animate-glow">
                <Calendar className="w-5 h-5 mr-2" />
                Explore Events
              </Button>
            </Link>
            <Link to="/internships">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                <Users className="w-5 h-5 mr-2" />
                Find Internships
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Events Listed</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-purple-600" />
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
            <div className="aspect-video bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl shadow-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 flex items-center justify-center bg-yellow-300">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
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
    </section>;
};
export default HeroSection;