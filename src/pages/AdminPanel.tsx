
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, DollarSign, BarChart2, UserCheck, Building, Shield, Search, CheckCircle, XCircle, Settings } from 'lucide-react';

const AdminPanel = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  // Sample users data
  const users = [
    { id: 1, name: "Alex Johnson", email: "alex@example.com", type: "Attendee", status: "active", joined: "Jan 15, 2025" },
    { id: 2, name: "Sarah Parker", email: "sarah@company.org", type: "Organizer", status: "active", joined: "Feb 3, 2025" },
    { id: 3, name: "Michael Brown", email: "michael@gmail.com", type: "Attendee", status: "inactive", joined: "Dec 10, 2024" },
    { id: 4, name: "Emma Wilson", email: "emma@events.co", type: "Organizer", status: "active", joined: "Mar 22, 2025" },
  ];
  
  // Sample events data
  const events = [
    { id: 1, title: "Tech Conference 2025", organizer: "Tech Innovators Inc", date: "May 15, 2025", attendees: 120, status: "approved" },
    { id: 2, name: "Design Workshop", organizer: "Creative Agency", date: "June 10, 2025", attendees: 45, status: "approved" },
    { id: 3, name: "Leadership Summit", organizer: "Business Leaders Association", date: "April 25, 2025", attendees: 0, status: "pending" },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
              <Settings className="w-4 h-4 mr-2" />
              System Settings
            </Button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Users</p>
                    <p className="text-3xl font-bold">1,240</p>
                  </div>
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Active Events</p>
                    <p className="text-3xl font-bold">28</p>
                  </div>
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Revenue</p>
                    <p className="text-3xl font-bold">$24,395</p>
                  </div>
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Platform Growth</p>
                    <p className="text-3xl font-bold">+18%</p>
                  </div>
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <BarChart2 className="w-5 h-5 text-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="users" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="users" className="border rounded-lg bg-white p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">User Management</h2>
                <div className="flex space-x-4">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input placeholder="Search users..." className="pl-10" />
                  </div>
                  <Button className="gradient-bg text-white">
                    <UserCheck className="w-4 h-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map(user => (
                      <tr key={user.id}>
                        <td className="px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-8 w-8 bg-yellow-100 rounded-full flex items-center justify-center">
                              <span className="text-yellow-600 font-medium">{user.name.charAt(0)}</span>
                            </div>
                            <div className="ml-3">
                              <p className="font-medium">{user.name}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm">{user.email}</td>
                        <td className="px-4 py-4 text-sm">
                          <Badge className={user.type === 'Organizer' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-700'}>
                            {user.type === 'Organizer' ? <Building className="w-3 h-3 mr-1" /> : <Shield className="w-3 h-3 mr-1" />}
                            {user.type}
                          </Badge>
                        </td>
                        <td className="px-4 py-4 text-sm">
                          <Badge className={user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                            {user.status === 'active' ? <CheckCircle className="w-3 h-3 mr-1" /> : <XCircle className="w-3 h-3 mr-1" />}
                            {user.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-4 text-sm">{user.joined}</td>
                        <td className="px-4 py-4 text-sm">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="destructive" size="sm">Delete</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="events" className="border rounded-lg bg-white p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Event Management</h2>
                <div className="flex space-x-4">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input placeholder="Search events..." className="pl-10" />
                  </div>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organizer</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendees</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {events.map(event => (
                      <tr key={event.id}>
                        <td className="px-4 py-4">
                          <p className="font-medium">{event.title || event.name}</p>
                        </td>
                        <td className="px-4 py-4 text-sm">{event.organizer}</td>
                        <td className="px-4 py-4 text-sm">{event.date}</td>
                        <td className="px-4 py-4 text-sm">{event.attendees}</td>
                        <td className="px-4 py-4 text-sm">
                          <Badge className={event.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}>
                            {event.status === 'approved' ? <CheckCircle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                            {event.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-4 text-sm">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">View</Button>
                            {event.status === 'pending' && (
                              <Button className="bg-green-600 hover:bg-green-700 text-white" size="sm">Approve</Button>
                            )}
                            <Button variant="destructive" size="sm">Remove</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="reports" className="border rounded-lg bg-white p-6">
              <h2 className="text-xl font-bold mb-6">Analytics & Reports</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Platform Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-60 bg-gray-100 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">User growth chart will appear here</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Revenue Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-60 bg-gray-100 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Revenue chart will appear here</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-lg">Event Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-60 bg-gray-100 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Event distribution chart will appear here</p>
                    </div>
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

export default AdminPanel;
