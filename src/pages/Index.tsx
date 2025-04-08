
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Calendar, Users, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const zones = [
  {
    id: 1,
    name: "African Safari",
    description: "Experience the wild African savannah and jungle adventures",
    color: "bg-funzone-yellow",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Asian Wonder",
    description: "Discover the mystical and cultural treasures of the Far East",
    color: "bg-funzone-red",
    image: "https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "European Magic",
    description: "Step into fairytale castles and charming European villages",
    color: "bg-funzone-blue",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Latin Fiesta",
    description: "Feel the rhythm and vibrant culture of South America",
    color: "bg-funzone-orange",
    image: "https://images.unsplash.com/photo-1551279880-03041531948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Summer Splash Festival",
    date: "June 15-30, 2024",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Halloween Spooktacular",
    date: "October 1-31, 2024",
    image: "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Winter Wonderland",
    date: "December 1-31, 2024",
    image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47b5e33cd8b7a00&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/30 z-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Welcome to <span className="bg-gradient-to-r from-funzone-yellow via-funzone-red to-funzone-blue bg-clip-text text-transparent">FUN ZONE</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
            Experience the thrill of 7 globally-themed adventure zones in one amazing park
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-funzone-red hover:bg-funzone-red/90 text-white">
              Buy Tickets
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
              Explore Park Map
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-30 animate-bounce-slight">
          <a href="#explore" className="text-white">
            <ChevronRight size={40} className="rotate-90" />
          </a>
        </div>
      </section>
      
      {/* Explore Zones Section */}
      <section id="explore" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our 7 Adventure Zones</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each zone offers unique thrills and immersive experiences from around the globe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {zones.map((zone) => (
              <Card key={zone.id} className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={zone.image} 
                    alt={zone.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className={`${zone.color} h-2`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{zone.name}</h3>
                  <p className="text-gray-600 mb-4">{zone.description}</p>
                  <Link 
                    to="/experience" 
                    className="inline-flex items-center font-medium text-funzone-blue hover:underline"
                  >
                    Discover More
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/experience">
              <Button variant="outline" className="border-funzone-blue text-funzone-blue hover:bg-funzone-blue hover:text-white">
                View All 7 Zones
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-funzone-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">40+</div>
              <p className="text-blue-100">Exhilarating Rides</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">20+</div>
              <p className="text-blue-100">Food Outlets</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">12+</div>
              <p className="text-blue-100">Unique Characters</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">7</div>
              <p className="text-blue-100">Themed Zones</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              There's always something exciting happening at FUN ZONE
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-w-16 aspect-h-9 h-64">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <Link 
                    to="/events" 
                    className="inline-flex items-center font-medium text-white hover:text-funzone-yellow transition-colors"
                  >
                    Learn More
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/events">
              <Button className="bg-funzone-purple hover:bg-funzone-purple/90">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-funzone-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={24} className="text-funzone-red" />
              </div>
              <h3 className="text-xl font-bold mb-3">Interactive Park Map</h3>
              <p className="text-gray-600">
                Navigate easily through our 7 globally-themed zones with our interactive map
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-funzone-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils size={24} className="text-funzone-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Cuisine</h3>
              <p className="text-gray-600">
                Experience authentic foods from around the world at our themed restaurants
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-funzone-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={24} className="text-funzone-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Meet Characters</h3>
              <p className="text-gray-600">
                Take photos with our unique park characters from each themed zone
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-funzone-purple to-funzone-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for an Adventure?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Book your tickets now and experience the magic of FUN ZONE
          </p>
          <Button size="lg" className="bg-white text-funzone-blue hover:bg-gray-100">
            Get Your Tickets Today
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
