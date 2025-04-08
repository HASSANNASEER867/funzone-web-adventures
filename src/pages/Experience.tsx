import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Info, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Zone data
const zones = [
  {
    id: "african-safari",
    name: "African Safari",
    description: "Experience the wild African savannah with thrilling safari adventures and jungle explorations.",
    longDescription: "Step into the heart of Africa with our immersive safari experience. From the vast Serengeti plains to the dense jungle habitats, this zone brings you face-to-face with the wonders of the African continent. Brave our heart-pounding rapids ride, encounter exotic wildlife, and explore ancient tribal villages.",
    color: "bg-funzone-yellow",
    textColor: "text-funzone-yellow",
    backgroundImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    attractions: [
      { name: "Serengeti Express", type: "Rollercoaster", thrill: "High" },
      { name: "Jungle River Adventure", type: "Water Ride", thrill: "Medium" },
      { name: "Tribal Encounter", type: "Cultural Experience", thrill: "Low" },
      { name: "Predator's Path", type: "Walking Trail", thrill: "Low" }
    ]
  },
  {
    id: "asian-wonder",
    name: "Asian Wonder",
    description: "Discover the mystical and cultural treasures of the Far East with authentic experiences.",
    longDescription: "Journey to the exotic East in our Asian Wonder zone. From the majestic Himalayan mountains to the serene Japanese gardens, immerse yourself in centuries of tradition and spiritual wonder. Test your courage on our Dragon's Flight coaster or find peace in our meticulously designed meditation gardens.",
    color: "bg-funzone-red",
    textColor: "text-funzone-red",
    backgroundImage: "https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    attractions: [
      { name: "Dragon's Flight", type: "Rollercoaster", thrill: "High" },
      { name: "Bamboo Forest Maze", type: "Maze", thrill: "Low" },
      { name: "Temple of Wonders", type: "3D Experience", thrill: "Medium" },
      { name: "Zen Garden Path", type: "Walking Trail", thrill: "Low" }
    ]
  },
  {
    id: "european-magic",
    name: "European Magic",
    description: "Step into fairytale castles and charming European villages filled with enchantment.",
    longDescription: "Travel through time to medieval Europe, where fairytale castles rise majestically against alpine backdrops. Our European Magic zone combines old-world charm with magical adventures. Storm the castle on our Knights' Quest ride, wander through quaint cobblestone streets, or experience the thrill of our Alpine Slide.",
    color: "bg-funzone-blue",
    textColor: "text-funzone-blue",
    backgroundImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    attractions: [
      { name: "Knights' Quest", type: "Dark Ride", thrill: "Medium" },
      { name: "Alpine Slide", type: "Thrill Ride", thrill: "High" },
      { name: "Enchanted Castle", type: "Walk-through", thrill: "Low" },
      { name: "Medieval Tournament", type: "Live Show", thrill: "Medium" }
    ]
  },
  {
    id: "latin-fiesta",
    name: "Latin Fiesta",
    description: "Feel the rhythm and vibrant culture of South America with colorful celebrations.",
    longDescription: "Dive into the passionate heart of Latin America, where music, color, and celebration come alive! Our Latin Fiesta zone pulses with energy from the festive streets of Rio to the ancient Mayan temples. Dance to the beat of the Carnival parade, brave the Maya Falls water ride, or explore mysterious ruins filled with treasure.",
    color: "bg-funzone-orange",
    textColor: "text-funzone-orange",
    backgroundImage: "https://images.unsplash.com/photo-1551279880-03041531948f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    attractions: [
      { name: "Maya Falls", type: "Water Ride", thrill: "High" },
      { name: "Carnival Parade", type: "Live Entertainment", thrill: "Low" },
      { name: "Aztec Temple Explorer", type: "Interactive", thrill: "Medium" },
      { name: "Rainforest Rapids", type: "Water Ride", thrill: "Medium" }
    ]
  },
  {
    id: "arctic-adventure",
    name: "Arctic Adventure",
    description: "Brave the frozen north with polar expeditions and icy challenges in this chilling zone.",
    longDescription: "Journey to the top of the world in our Arctic Adventure zone, where snow-capped mountains and icy landscapes create a polar wonderland. Brave the Glacier Run coaster, explore an authentic igloo village, or take a peaceful ride on our Northern Lights Sky Tour for breathtaking views of the entire park.",
    color: "bg-funzone-teal",
    textColor: "text-funzone-teal",
    backgroundImage: "https://images.unsplash.com/photo-1548516173-3cabfa7c38ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    attractions: [
      { name: "Glacier Run", type: "Rollercoaster", thrill: "High" },
      { name: "Polar Plunge", type: "Water Ride", thrill: "High" },
      { name: "Igloo Village", type: "Walk-through", thrill: "Low" },
      { name: "Northern Lights Sky Tour", type: "Scenic Ride", thrill: "Low" }
    ]
  },
  {
    id: "oceanic-depths",
    name: "Oceanic Depths",
    description: "Dive into underwater wonders from exotic coral reefs to mysterious deep sea creatures.",
    longDescription: "Plunge into the mysterious world beneath the waves in our Oceanic Depths zone. From vibrant coral gardens to the darkest trenches, explore the wonders of marine life through immersive attractions. Brave the Kraken's Fury coaster, walk through our 360° aquarium tunnel, or take a relaxing voyage on our Glass-Bottom Boat Tour.",
    color: "bg-funzone-blue",
    textColor: "text-funzone-blue",
    backgroundImage: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    attractions: [
      { name: "Kraken's Fury", type: "Rollercoaster", thrill: "High" },
      { name: "Coral Reef Walk", type: "Aquarium", thrill: "Low" },
      { name: "Submarine Voyage", type: "Simulation", thrill: "Medium" },
      { name: "Glass-Bottom Boat Tour", type: "Scenic Ride", thrill: "Low" }
    ]
  },
  {
    id: "future-world",
    name: "Future World",
    description: "Experience tomorrow today with futuristic technologies and space-age adventures.",
    longDescription: "Step into tomorrow in our Future World zone, where cutting-edge technology and imagination create extraordinary experiences. From space travel simulations to robot encounters, this zone pushes the boundaries of entertainment. Rocket into the cosmos on our Space Odyssey coaster, interact with AI companions, or test your skills in our Tech Challenge Arena.",
    color: "bg-funzone-purple",
    textColor: "text-funzone-purple",
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    attractions: [
      { name: "Space Odyssey", type: "Rollercoaster", thrill: "High" },
      { name: "Robot Laboratory", type: "Interactive", thrill: "Medium" },
      { name: "Virtual Reality Planet", type: "VR Experience", thrill: "Medium" },
      { name: "Tech Challenge Arena", type: "Interactive Games", thrill: "Low" }
    ]
  }
];

const Experience = () => {
  const [selectedZone, setSelectedZone] = useState(zones[0]);
  const [isMapView, setIsMapView] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20">
        <div className="h-[50vh] relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="FUN ZONE Experience" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Experience The Adventure
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Explore our seven globally-themed zones, each with unique thrills and discoveries
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* View Toggle */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                onClick={() => setIsMapView(false)}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  !isMapView 
                    ? "bg-funzone-blue text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Zone Details
              </button>
              <button
                type="button"
                onClick={() => setIsMapView(true)}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  isMapView 
                    ? "bg-funzone-blue text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Park Map
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {isMapView ? (
        // Interactive Map View
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Interactive Park Map</h2>
            
            <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <AspectRatio ratio={16/9} className="bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1580668095433-6ab1d531fad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                  alt="FUN ZONE Park Map" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              
              {zones.map((zone, index) => {
                const topPercentage = 30 + (index % 4) * 15;
                const leftPercentage = 20 + (Math.floor(index / 4) * 30);
                
                return (
                  <div 
                    key={zone.id}
                    className={`absolute cursor-pointer group`}
                    style={{ 
                      top: `${topPercentage}%`, 
                      left: `${leftPercentage}%` 
                    }}
                    onClick={() => {
                      setSelectedZone(zone);
                      setIsMapView(false);
                    }}
                  >
                    <div className={`${zone.color} h-6 w-6 rounded-full flex items-center justify-center animate-pulse shadow-md`}>
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-white p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                      <p className="text-xs font-medium text-center">{zone.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Click on a zone marker to view details</p>
              <Button 
                variant="outline" 
                className="border-funzone-blue text-funzone-blue hover:bg-funzone-blue hover:text-white"
                onClick={() => setIsMapView(false)}
              >
                Back to Zone Details
              </Button>
            </div>
          </div>
        </section>
      ) : (
        // Zone Details View
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue={zones[0].id} className="w-full" onValueChange={(value) => {
              const zone = zones.find(z => z.id === value);
              if (zone) setSelectedZone(zone);
            }}>
              <div className="overflow-x-auto pb-4">
                <TabsList className="w-full max-w-4xl mx-auto justify-start sm:justify-center">
                  {zones.map((zone) => (
                    <TabsTrigger 
                      key={zone.id} 
                      value={zone.id}
                      className="min-w-[120px] text-sm sm:text-base"
                    >
                      {zone.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {zones.map((zone) => (
                <TabsContent key={zone.id} value={zone.id} className="mt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3">
                      <div className="rounded-lg overflow-hidden shadow-lg h-[300px] md:h-[400px]">
                        <img 
                          src={zone.backgroundImage} 
                          alt={zone.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h2 className="text-3xl font-bold mb-4">{zone.name}</h2>
                        <div className={`${zone.color} h-1 w-20 mb-4`}></div>
                        <p className="text-gray-700">{zone.longDescription}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3 flex items-center">
                          <Info size={18} className="mr-2" />
                          Key Attractions
                        </h3>
                        <ul className="space-y-2">
                          {zone.attractions.map((attraction, index) => (
                            <li key={index} className="flex items-start">
                              <ArrowRight size={16} className={`mt-1 mr-2 ${zone.textColor}`} />
                              <div>
                                <span className="font-medium">{attraction.name}</span>
                                <span className="text-sm text-gray-600 ml-2">
                                  {attraction.type} • {attraction.thrill} Thrill
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className={zone.color}>
                        Get FastPass for this Zone
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="mt-12 text-center">
              <Button 
                variant="outline" 
                className="border-funzone-blue text-funzone-blue hover:bg-funzone-blue hover:text-white"
                onClick={() => setIsMapView(true)}
              >
                View Interactive Map
              </Button>
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-funzone-blue to-funzone-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Adventure?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Book your tickets now and explore all 7 globally-themed zones at FUN ZONE
          </p>
          <Button size="lg" className="bg-white text-funzone-blue hover:bg-gray-100">
            Buy Tickets Now
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Experience;
