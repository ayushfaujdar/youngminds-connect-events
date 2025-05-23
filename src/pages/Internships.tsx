
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Building, Calendar, MapPin } from 'lucide-react';

const Internships = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  // Sample internship data
  const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Tech Innovators",
      location: "Remote",
      type: "Part-time",
      duration: "3 months",
      deadline: "June 30, 2025"
    },
    {
      id: 2,
      title: "UI/UX Design Intern",
      company: "Creative Solutions",
      location: "New York",
      type: "Full-time",
      duration: "6 months",
      deadline: "May 15, 2025"
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "Data Analytics Pro",
      location: "San Francisco",
      type: "Full-time",
      duration: "4 months",
      deadline: "July 10, 2025"
    },
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6">Internship Opportunities</h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Discover exciting internship opportunities with top companies. Gain valuable experience and kickstart your career.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {internships.map((internship) => (
              <Card key={internship.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className="mb-2 bg-amber-100 text-amber-700 border-amber-200">
                    {internship.type}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">{internship.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Building className="w-4 h-4 mr-2" />
                      <span>{internship.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{internship.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Apply by: {internship.deadline}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-bg text-white mt-4">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Internships;
