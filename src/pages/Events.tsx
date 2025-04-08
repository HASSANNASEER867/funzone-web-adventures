
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const events = [
  {
    id: 1,
    title: "Summer Splash Festival",
    description: "Join us for water-based fun with splash zones, water slides, and pool parties across the park. Don't forget to bring your swimwear!",
    startDate: "June 15, 2024",
    endDate: "June 30, 2024",
    location: "Throughout the park",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "seasonal",
    status: "upcoming"
  },
  {
    id: 2,
    title: "Lunar Light Show",
    description: "Experience a breathtaking display of lights, drones, and fireworks choreographed to original music composed for FUN ZONE.",
    startDate: "July 15, 2024",
    endDate: "July 25, 2024",
    location: "Central Plaza",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "nighttime",
    status: "upcoming"
  },
  {
    id: 3,
    title: "Global Food & Wine Festival",
    description: "Sample cuisines from around the world with special tasting menus, cooking demonstrations, and wine pairings.",
    startDate: "August 5, 2024",
    endDate: "August 15, 2024",
    location: "Leisure & Dining District",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "food",
    status: "upcoming"
  },
  {
    id: 4,
    title: "Halloween Spooktacular",
    description: "The park transforms with spooky decorations, Halloween-themed shows, and treat stations for all ages. Costumes encouraged!",
    startDate: "October 1, 2024",
    endDate: "October 31, 2024",
    location: "Throughout the park",
    image: "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "seasonal",
    status: "upcoming"
  },
  {
    id: 5,
    title: "Winter Wonderland",
    description: "Experience the magic of winter with snow flurries, ice skating, hot chocolate stations, and special holiday parades.",
    startDate: "December 1, 2024",
    endDate: "December 31, 2024",
    location: "Throughout the park",
    image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "seasonal",
    status: "upcoming"
  },
  {
    id: 6,
    title: "Character Birthday Bash",
    description: "Celebrate with Zippy and friends for the park mascot's birthday with special shows, meet & greets, and birthday treats.",
    startDate: "May 12, 2024",
    endDate: "May 12, 2024",
    location: "Central Plaza",
    image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "special",
    status: "past"
  },
  {
    id: 7,
    title: "Spring Bloom Festival",
    description: "The park blooms with thousands of flowers, topiary displays, and garden workshops during this botanical celebration.",
    startDate: "April 1, 2024",
    endDate: "April 30, 2024",
    location: "Gardens & Walkways",
    image: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "seasonal",
    status: "past"
  },
  {
    id: 8,
    title: "Cultural Heritage Days",
    description: "Experience traditional performances, crafts, and foods representing each of our seven global zones.",
    startDate: "March 14, 2024",
    endDate: "March 20, 2024",
    location: "Throughout the park",
    image: "https://images.unsplash.com/photo-1509024644558-2f56ce76c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "cultural",
    status: "past"
  }
];

const categories = [
  { id: "all", name: "All Events" },
  { id: "seasonal", name: "Seasonal" },
  { id: "nighttime", name: "Nighttime" },
  { id: "food", name: "Food & Dining" },
  { id: "cultural", name: "Cultural" },
  { id: "special", name: "Special Events" }
];

const EventCard = ({ event }: { event: typeof events[0] }) => (
  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={event.image} 
        alt={event.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-0 right-0 m-2 px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-gray-800">
        {event.status === "upcoming" ? "Upcoming" : "Past Event"}
      </div>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
      <p className="text-gray-600 mb-4 text-sm flex-1">{event.description}</p>
      <div className="space-y-2 mt-auto">
        <div className="flex items-center text-sm">
          <Calendar className="h-4 w-4 mr-2 text-funzone-blue" />
          <span>{event.startDate} - {event.endDate}</span>
        </div>
        <div className="flex items-center text-sm">
          <MapPin className="h-4 w-4 mr-2 text-funzone-red" />
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  </Card>
);

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-funzone-red via-funzone-orange to-funzone-yellow bg-clip-text text-transparent">
              What's Up at FUN ZONE
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with exciting events, seasonal celebrations, and special activities
            </p>
          </div>
          
          <div className="mb-12 max-w-4xl mx-auto bg-gradient-to-r from-funzone-purple/10 to-funzone-blue/10 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Clock className="h-10 w-10 text-funzone-purple mb-2" />
                <h3 className="font-bold">Extended Hours</h3>
                <p className="text-sm text-center text-gray-600">9AM - 11PM on weekends & holidays</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Users className="h-10 w-10 text-funzone-red mb-2" />
                <h3 className="font-bold">Character Parade</h3>
                <p className="text-sm text-center text-gray-600">Daily at 3PM in Central Plaza</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Calendar className="h-10 w-10 text-funzone-green mb-2" />
                <h3 className="font-bold">Special Tickets</h3>
                <p className="text-sm text-center text-gray-600">Event packages available online</p>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="upcoming" onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="upcoming">
              <div className="mb-8">
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="flex mb-8 overflow-x-auto pb-2 justify-center">
                    {categories.map((category) => (
                      <TabsTrigger 
                        key={category.id} 
                        value={category.id}
                        className="px-4 py-2"
                      >
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {categories.map((category) => (
                    <TabsContent key={category.id} value={category.id} className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events
                          .filter(event => 
                            event.status === "upcoming" && 
                            (category.id === "all" || event.category === category.id)
                          )
                          .map((event) => (
                            <EventCard key={event.id} event={event} />
                          ))}
                      </div>
                      
                      {events.filter(event => 
                        event.status === "upcoming" && 
                        (category.id === "all" || event.category === category.id)
                      ).length === 0 && (
                        <div className="text-center py-12">
                          <p className="text-gray-500">No upcoming events in this category.</p>
                        </div>
                      )}
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </TabsContent>
            
            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events
                  .filter(event => event.status === "past")
                  .map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 bg-funzone-blue/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Event Updates</h2>
            <p className="text-lg text-gray-600 mb-6">
              Never miss an event! Sign up to receive notifications about upcoming special events and seasonal celebrations.
            </p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-funzone-blue focus:border-transparent"
              />
              <button className="bg-funzone-blue hover:bg-funzone-blue/90 text-white font-medium py-2 px-6 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Events;
