
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About <span className="gradient-text">YoungMinds</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering young professionals through exceptional events and career opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2023, YoungMinds started with a simple vision: to create a bridge between ambitious young 
                professionals and the opportunities they deserve. What began as a small initiative to organize career 
                workshops has evolved into a comprehensive platform connecting event organizers, companies, and young talents.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to facilitate thousands of connections each month, helping shape the careers of 
                tomorrow's leaders while providing event organizers with access to engaged, passionate audiences.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-200 to-amber-200 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="w-full h-full bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <Users className="w-16 h-16 text-yellow-700 mx-auto mb-4" />
                  <p className="text-yellow-800 text-xl font-medium">Connecting bright minds</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Excellence</h3>
                  <p className="text-gray-600">
                    We're committed to providing exceptional experiences and opportunities that truly make a difference.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Growth</h3>
                  <p className="text-gray-600">
                    We believe in continuous learning and creating environments where everyone can develop their potential.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Community</h3>
                  <p className="text-gray-600">
                    We foster meaningful connections and collaborations that create lasting impact in our community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Whether you're looking to attend events, find internships, or organize your own gatherings, 
              YoungMinds is here to support your professional journey.
            </p>
            <Button className="gradient-bg text-white px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
