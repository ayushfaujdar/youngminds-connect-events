
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, MapPin, Star, Shield, Zap } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Event Discovery",
      description: "AI-powered recommendations help you find events perfectly matched to your interests and career goals.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Professional Networking",
      description: "Connect with like-minded professionals, mentors, and industry leaders in your field.",
      color: "indigo"
    },
    {
      icon: MapPin,
      title: "Local & Virtual Events",
      description: "Discover opportunities both in your city and online, expanding your reach globally.",
      color: "blue"
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "All events and internships are verified to ensure authentic, valuable experiences.",
      color: "violet"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your data and privacy are protected with enterprise-grade security measures.",
      color: "purple"
    },
    {
      icon: Zap,
      title: "Instant Applications",
      description: "One-click applications and seamless registration process for all opportunities.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "from-purple-500 to-purple-600 bg-purple-100 text-purple-600",
      indigo: "from-indigo-500 to-indigo-600 bg-indigo-100 text-indigo-600",
      blue: "from-blue-500 to-blue-600 bg-blue-100 text-blue-600",
      violet: "from-violet-500 to-violet-600 bg-violet-100 text-violet-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 animate-on-scroll">
            Why Choose <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">YoungMinds</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
            We're revolutionizing how young professionals discover opportunities and build meaningful connections.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = getColorClasses(feature.color);
            
            return (
              <Card 
                key={index} 
                className="animate-on-scroll hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${colors.split(' ')[0]} ${colors.split(' ')[1]} flex items-center justify-center mb-4 animate-pulse`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
