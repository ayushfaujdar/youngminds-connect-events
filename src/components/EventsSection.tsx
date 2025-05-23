
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Tech Leadership Summit 2024",
      description: "Join industry leaders for insights on emerging technologies and leadership strategies.",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco, CA",
      attendees: 250,
      price: "Free",
      type: "Conference",
      image: "tech-summit"
    },
    {
      id: 2,
      title: "Startup Pitch Competition",
      description: "Present your innovative ideas to top investors and win funding opportunities.",
      date: "March 22, 2024",
      time: "2:00 PM - 8:00 PM",
      location: "New York, NY",
      attendees: 150,
      price: "$25",
      type: "Competition",
      image: "startup-pitch"
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      description: "Learn advanced digital marketing strategies from industry experts.",
      date: "March 28, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Virtual Event",
      attendees: 500,
      price: "$49",
      type: "Workshop",
      image: "marketing-class"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 animate-on-scroll">
            Featured <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
            Discover exciting events that will accelerate your career and expand your network.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <Card key={event.id} className="animate-on-scroll hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-200 to-blue-200 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-white/80" />
                </div>
                <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                  {event.type}
                </Badge>
                <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                  {event.price}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    {event.attendees} attendees
                  </div>
                </div>
                
                <Button className="w-full gradient-bg text-white">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8 py-4">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
