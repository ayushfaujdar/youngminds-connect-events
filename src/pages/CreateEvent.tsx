
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, MapPin, Users, ArrowLeft, Plus } from 'lucide-react';
import { toast } from "sonner";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const CreateEvent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    type: '',
    price: '',
  });
  
  const [agendaItems, setAgendaItems] = useState([
    { time: '', activity: '' }
  ]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleAgendaChange = (index: number, field: string, value: string) => {
    const newAgendaItems = [...agendaItems];
    newAgendaItems[index] = { ...newAgendaItems[index], [field]: value };
    setAgendaItems(newAgendaItems);
  };
  
  const addAgendaItem = () => {
    setAgendaItems([...agendaItems, { time: '', activity: '' }]);
  };
  
  const removeAgendaItem = (index: number) => {
    if (agendaItems.length > 1) {
      const newAgendaItems = [...agendaItems];
      newAgendaItems.splice(index, 1);
      setAgendaItems(newAgendaItems);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.title || !formData.description || !formData.date || !formData.time || !formData.location) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // In a real application, you would submit this data to your backend
    console.log("Event data:", { ...formData, agenda: agendaItems });
    
    toast.success("Event created successfully!");
    setTimeout(() => navigate('/events'), 1500);
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="outline" 
            className="mb-6"
            onClick={() => navigate('/organizer')}
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Organizer Dashboard
          </Button>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <h1 className="text-3xl font-bold mb-6">Create New Event</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title *</Label>
                <Input 
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter the event title"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea 
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Provide a detailed description of the event"
                  className="min-h-[120px]"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Date *</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                    <Input 
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time">Time *</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                    <Input 
                      id="time"
                      name="time"
                      type="text"
                      value={formData.time}
                      onChange={handleInputChange}
                      placeholder="e.g., 6:00 PM - 9:00 PM"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
                  <Input 
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Event location or 'Virtual Event'"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="type">Event Type</Label>
                  <Select onValueChange={(value) => handleSelectChange('type', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Conference">Conference</SelectItem>
                      <SelectItem value="Workshop">Workshop</SelectItem>
                      <SelectItem value="Seminar">Seminar</SelectItem>
                      <SelectItem value="Networking">Networking</SelectItem>
                      <SelectItem value="Competition">Competition</SelectItem>
                      <SelectItem value="Hackathon">Hackathon</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input 
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="e.g., Free, $10, $25"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Event Agenda</Label>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={addAgendaItem}
                    className="flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-1" /> Add Item
                  </Button>
                </div>
                
                {agendaItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-5 gap-4 items-center">
                    <div className="col-span-2">
                      <Input 
                        placeholder="Time (e.g., 2:00 PM - 3:00 PM)"
                        value={item.time}
                        onChange={(e) => handleAgendaChange(index, 'time', e.target.value)}
                      />
                    </div>
                    <div className="col-span-2">
                      <Input 
                        placeholder="Activity description"
                        value={item.activity}
                        onChange={(e) => handleAgendaChange(index, 'activity', e.target.value)}
                      />
                    </div>
                    <div>
                      <Button 
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeAgendaItem(index)}
                        disabled={agendaItems.length <= 1}
                        className="w-full"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  size="lg"
                >
                  Create Event
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CreateEvent;
