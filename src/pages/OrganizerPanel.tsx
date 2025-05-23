
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, PlusCircle, Users, Clock, MapPin, Calendar as CalendarIcon, Edit, Trash2, BarChart2 } from 'lucide-react';

const OrganizerPanel = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "May 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco Convention Center",
      attendees: 120,
      status: "upcoming"
    },
    {
      id: 2,
      title: "Design Workshop",
      date: "June 10, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "Creative Hub, Los Angeles",
      attendees: 45,
      status: "upcoming"
    },
    {
      id: 3,
      title: "Networking Mixer",
      date: "April 5, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Skyline Lounge, Chicago",
      attendees: 78,
      status: "past"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Organizer Dashboard</h1>
            <Button className="gradient-bg text-white">
              <PlusCircle className="w-4 h-4 mr-2" />
              Create New Event
            </Button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Events</p>
                    <p className="text-3xl font-bold">12</p>
                  </div>
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Attendees</p>
                    <p className="text-3xl font-bold">1,240</p>
                  </div>
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Upcoming Events</p>
                    <p className="text-3xl font-bold">5</p>
                  </div>
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Revenue</p>
                    <p className="text-3xl font-bold">$12,580</p>
                  </div>
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <BarChart2 className="w-5 h-5 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="events" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="events">Manage Events</TabsTrigger>
              <TabsTrigger value="create">Create Event</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="events" className="border rounded-lg bg-white p-6">
              <h2 className="text-xl font-bold mb-4">Your Events</h2>
              
              <div className="space-y-4">
                {events.map(event => (
                  <Card key={event.id} className={event.status === 'past' ? 'opacity-70' : ''}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="text-lg font-bold">{event.title}</h3>
                            {event.status === 'past' && (
                              <span className="ml-3 text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">Past</span>
                            )}
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-500">
                            <div className="flex items-center">
                              <CalendarIcon className="w-4 h-4 mr-2 text-yellow-600" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2 text-yellow-600" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2 text-yellow-600" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-2 text-yellow-600" />
                              <span>{event.attendees} Attendees</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2 mt-4 md:mt-0">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                          <Button variant="destructive" size="sm">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="create" className="border rounded-lg bg-white p-6">
              <h2 className="text-xl font-bold mb-6">Create New Event</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                  <Input placeholder="Enter event title" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                    <Input type="time" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <Input placeholder="Enter event location" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Description</label>
                  <Textarea placeholder="Describe your event" className="min-h-[150px]" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
                    <Input type="number" placeholder="Maximum number of attendees" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ticket Price ($)</label>
                    <Input type="number" placeholder="Leave blank if free" />
                  </div>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <Button variant="outline">Save as Draft</Button>
                  <Button className="gradient-bg text-white">Publish Event</Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="analytics" className="border rounded-lg bg-white p-6">
              <h2 className="text-xl font-bold mb-6">Event Analytics</h2>
              
              <div className="h-60 bg-gray-100 mb-6 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Analytics charts will appear here</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Registration Conversion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">68%</p>
                    <p className="text-xs text-green-600">+12% from last month</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Avg. Ticket Price</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">$42</p>
                    <p className="text-xs text-green-600">+8% from last month</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">Attendee Satisfaction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">4.7/5</p>
                    <p className="text-xs text-green-600">+0.3 from last month</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrganizerPanel;
