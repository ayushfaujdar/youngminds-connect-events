
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, BarChart, Calendar, Users, Clock, Heart, Edit, Trash2, Settings, EyeIcon } from 'lucide-react';

const OrganizerPanel = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  // Mock data for events
  const myEvents = [
    {
      id: 1,
      title: "Tech Leadership Summit 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco, CA",
      registrations: 157,
      status: "upcoming"
    },
    {
      id: 2,
      title: "Startup Pitch Competition",
      date: "March 22, 2024",
      time: "2:00 PM - 8:00 PM",
      location: "New York, NY",
      registrations: 98,
      status: "upcoming"
    },
    {
      id: 3,
      title: "Web Development Workshop",
      date: "February 10, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Virtual Event",
      registrations: 312,
      status: "past"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Organizer Dashboard
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                Manage your events and analyze attendee engagement.
              </p>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <Link to="/create-event">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Create New Event
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {/* Summary Cards */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                <Calendar className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-gray-500">2 upcoming, 1 past</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
                <Users className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">567</div>
                <p className="text-xs text-gray-500">+48 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Average Engagement</CardTitle>
                <Heart className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-gray-500">+5% from previous events</p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {myEvents.filter(event => event.status === 'upcoming').map((event) => (
                    <li key={event.id}>
                      <div className="px-4 py-5 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white">
                              <Calendar className="h-6 w-6" />
                            </div>
                            <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                              <div className="mt-1 flex items-center text-sm text-gray-500">
                                <Clock className="flex-shrink-0 mr-1.5 h-4 w-4" />
                                <span>{event.date}, {event.time}</span>
                              </div>
                              <div className="mt-1 flex items-center text-sm text-gray-500">
                                <Users className="flex-shrink-0 mr-1.5 h-4 w-4" />
                                <span>{event.registrations} registrations</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <EyeIcon className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button size="sm" variant="outline">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {myEvents.filter(event => event.status === 'past').map((event) => (
                    <li key={event.id}>
                      <div className="px-4 py-5 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                              <Calendar className="h-6 w-6" />
                            </div>
                            <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                              <div className="mt-1 flex items-center text-sm text-gray-500">
                                <Clock className="flex-shrink-0 mr-1.5 h-4 w-4" />
                                <span>{event.date}, {event.time}</span>
                              </div>
                              <div className="mt-1 flex items-center text-sm text-gray-500">
                                <Users className="flex-shrink-0 mr-1.5 h-4 w-4" />
                                <span>{event.registrations} registrations</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <BarChart className="h-4 w-4 mr-1" />
                              Analytics
                            </Button>
                            <Button size="sm" variant="outline">
                              <EyeIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="drafts">
              <div className="text-center py-12 bg-white rounded-md">
                <div className="mx-auto h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <PlusCircle className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900">No drafts yet</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get started by creating a new event
                </p>
                <div className="mt-6">
                  <Link to="/create-event">
                    <Button>Create New Event</Button>
                  </Link>
                </div>
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
