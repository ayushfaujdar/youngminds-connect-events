
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, ArrowLeft } from 'lucide-react';
import { toast } from "sonner";

const EventDetail = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Mock events data - in a real app, this would come from an API
  const events = [
    {
      id: "1",
      title: "Tech Leadership Summit 2024",
      description: "Join industry leaders for insights on emerging technologies and leadership strategies. This full-day conference features keynote speakers, panel discussions, networking opportunities, and hands-on workshops designed to help you stay ahead in the rapidly evolving tech landscape.",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco Convention Center, 747 Howard St, San Francisco, CA",
      attendees: 250,
      price: "Free",
      type: "Conference",
      image: "tech-summit",
      organizer: "Tech Innovators Association",
      agenda: [
        { time: "9:00 AM - 10:00 AM", activity: "Registration & Networking Breakfast" },
        { time: "10:00 AM - 11:30 AM", activity: "Keynote: The Future of Tech Leadership" },
        { time: "11:45 AM - 1:00 PM", activity: "Panel Discussion: Navigating Industry Challenges" },
        { time: "1:00 PM - 2:00 PM", activity: "Lunch Break & Networking" },
        { time: "2:15 PM - 3:45 PM", activity: "Workshop Sessions" },
        { time: "4:00 PM - 5:30 PM", activity: "Closing Keynote & Q&A" },
        { time: "5:30 PM - 6:00 PM", activity: "Networking & Closing Remarks" }
      ]
    },
    {
      id: "2",
      title: "Startup Pitch Competition",
      description: "Present your innovative ideas to top investors and win funding opportunities. This high-energy event brings together ambitious entrepreneurs and influential venture capitalists in a competitive yet collaborative environment designed to showcase the next generation of business innovations.",
      date: "March 22, 2024",
      time: "2:00 PM - 8:00 PM",
      location: "Innovation Hub, 350 5th Ave, New York, NY",
      attendees: 150,
      price: "$25",
      type: "Competition",
      image: "startup-pitch",
      organizer: "NYC Founders Network",
      agenda: [
        { time: "2:00 PM - 2:30 PM", activity: "Check-in & Welcome" },
        { time: "2:30 PM - 4:00 PM", activity: "Preliminary Pitch Rounds" },
        { time: "4:00 PM - 4:30 PM", activity: "Coffee Break & Networking" },
        { time: "4:30 PM - 6:00 PM", activity: "Finalist Pitches" },
        { time: "6:00 PM - 7:00 PM", activity: "Judges Deliberation & Networking Reception" },
        { time: "7:00 PM - 8:00 PM", activity: "Awards Ceremony & Closing" }
      ]
    },
    {
      id: "3",
      title: "Digital Marketing Masterclass",
      description: "Learn advanced digital marketing strategies from industry experts. This comprehensive workshop covers the latest techniques in SEO, social media marketing, content strategy, email campaigns, and analytics to help you maximize your online presence and drive measurable business results.",
      date: "March 28, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Virtual Event",
      attendees: 500,
      price: "$49",
      type: "Workshop",
      image: "marketing-class",
      organizer: "Digital Marketing Institute",
      agenda: [
        { time: "10:00 AM - 10:30 AM", activity: "Introduction & Platform Overview" },
        { time: "10:30 AM - 12:00 PM", activity: "SEO & Content Strategy" },
        { time: "12:00 PM - 12:45 PM", activity: "Break" },
        { time: "12:45 PM - 2:15 PM", activity: "Social Media Marketing Techniques" },
        { time: "2:30 PM - 3:30 PM", activity: "Analytics & Performance Measurement" },
        { time: "3:30 PM - 4:00 PM", activity: "Q&A Session & Closing" }
      ]
    }
  ];
  
  useEffect(() => {
    // Simulate API call to fetch event details
    setLoading(true);
    const foundEvent = events.find(e => e.id === id);
    
    // Small delay to simulate loading
    setTimeout(() => {
      if (foundEvent) {
        setEvent(foundEvent);
      }
      setLoading(false);
    }, 300);
  }, [id]);
  
  const handleRegister = () => {
    toast.success("You have successfully registered for this event!");
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
          <div className="mt-4 text-lg">Loading event details...</div>
        </div>
      </div>
    );
  }
  
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
          <p className="mb-6">We couldn't find the event you're looking for.</p>
          <Button onClick={() => navigate('/events')}>
            <ArrowLeft className="mr-2" /> Back to Events
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="outline" 
            className="mb-6"
            onClick={() => navigate('/events')}
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Events
          </Button>
          
          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 rounded-xl mb-8">
            <div className="flex justify-between items-start flex-wrap">
              <div>
                <Badge className="mb-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
                  {event.type}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{event.title}</h1>
                <p className="text-lg text-gray-700 mb-6">{event.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-purple-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                    <span>{event.attendees} Attendees</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-700 mb-6">
                  <span className="font-medium mr-2">Organized by:</span>
                  {event.organizer}
                </div>
              </div>
              
              <div className="w-full md:w-auto mt-6 md:mt-0">
                <Button
                  className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
                  size="lg"
                  onClick={handleRegister}
                >
                  Register Now {event.price === "Free" ? "(Free)" : `(${event.price})`}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Event Agenda</h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="divide-y divide-gray-200">
                {event.agenda.map((item: any, index: number) => (
                  <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <div className="font-medium text-purple-600">{item.time}</div>
                      <div className="mt-1 sm:mt-0">{item.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EventDetail;
