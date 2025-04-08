
import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const characters = [
  {
    id: 1,
    name: "Leo the Explorer",
    description: "Leo is the brave safari guide from the African Zone. With his trusty binoculars and adventure hat, he leads visitors through exciting expeditions and teaches them about wildlife conservation.",
    zone: "African Safari",
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    meetTimes: "11:00 AM, 2:30 PM, 5:00 PM"
  },
  {
    id: 2,
    name: "Mei and Ming",
    description: "Twin pandas Mei and Ming are the playful ambassadors of the Asian Wonder zone. These mischievous siblings are known for their acrobatic performances and love of bamboo treats.",
    zone: "Asian Wonder",
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    meetTimes: "10:30 AM, 1:00 PM, 4:30 PM"
  },
  {
    id: 3,
    name: "Princess Aurora",
    description: "The elegant Princess Aurora resides in the European Magic castle. With her flowing gown and gentle demeanor, she shares tales of ancient kingdoms and magical enchantments with visitors.",
    zone: "European Magic",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    meetTimes: "12:00 PM, 3:00 PM, 6:00 PM"
  },
  {
    id: 4,
    name: "Carlos the Guitarist",
    description: "With his colorful poncho and ever-present guitar, Carlos brings the rhythm of Latin America to life. His infectious energy gets everyone dancing during the daily Latin Fiesta parade.",
    zone: "Latin Fiesta",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    meetTimes: "11:30 AM, 2:00 PM, 5:30 PM"
  },
  {
    id: 5,
    name: "Captain Neptune",
    description: "The adventurous Captain Neptune rules the waves at the Oceanic Adventure zone. With his trident and tales of underwater treasures, he inspires visitors to explore and protect our oceans.",
    zone: "Oceanic Adventure",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    meetTimes: "10:00 AM, 1:30 PM, 4:00 PM"
  },
  {
    id: 6,
    name: "Astro and Nova",
    description: "This futuristic duo from the Space Frontier zone take visitors on cosmic adventures. Astro with his high-tech suit and Nova with her star-powered abilities introduce guests to the wonders of space exploration.",
    zone: "Space Frontier",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    meetTimes: "12:30 PM, 3:30 PM, 6:30 PM"
  },
  {
    id: 7,
    name: "Maple and Rocky",
    description: "Brother and sister duo Maple and Rocky represent the Wilderness Trek zone. With their outdoor gear and knowledge of surviving in nature, they teach visitors about respecting and preserving natural environments.",
    zone: "Wilderness Trek",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    meetTimes: "11:00 AM, 2:30 PM, 5:00 PM"
  },
  {
    id: 8,
    name: "Zippy",
    description: "The park's beloved mascot Zippy is a colorful parrot who can be found throughout FUN ZONE. Known for his catchphrase 'Let's make memories!', Zippy brings smiles wherever he goes.",
    zone: "All Zones",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    meetTimes: "Throughout the day"
  }
];

const zones = [
  { id: "all", name: "All Characters" },
  { id: "African Safari", name: "African Safari" },
  { id: "Asian Wonder", name: "Asian Wonder" },
  { id: "European Magic", name: "European Magic" },
  { id: "Latin Fiesta", name: "Latin Fiesta" },
  { id: "Oceanic Adventure", name: "Oceanic Adventure" },
  { id: "Space Frontier", name: "Space Frontier" },
  { id: "Wilderness Trek", name: "Wilderness Trek" }
];

const Characters = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-funzone-green via-funzone-blue to-funzone-purple bg-clip-text text-transparent">
              Park Characters
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our colorful cast of characters from around the world
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex mb-8 overflow-x-auto pb-2 justify-center">
              {zones.map((zone) => (
                <TabsTrigger 
                  key={zone.id} 
                  value={zone.id}
                  className="px-4 py-2"
                >
                  {zone.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {zones.map((zone) => (
              <TabsContent key={zone.id} value={zone.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {characters
                    .filter(character => zone.id === "all" || character.zone === zone.id)
                    .map((character) => (
                      <Card key={character.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                        <div className="aspect-square overflow-hidden bg-gray-100">
                          <img 
                            src={character.image} 
                            alt={character.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-2xl font-bold mb-2">{character.name}</h3>
                          <div className="mb-4">
                            <span className="text-xs font-medium bg-funzone-purple/20 text-funzone-purple px-3 py-1 rounded-full">
                              {character.zone}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4 flex-1">{character.description}</p>
                          <div className="mt-auto">
                            <div className="text-sm font-medium text-gray-900">Meet & Greet Times:</div>
                            <div className="text-sm text-gray-600">{character.meetTimes}</div>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-16 bg-funzone-yellow/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Character Dining Experiences</h2>
            <p className="text-lg text-gray-600 mb-6">
              Enjoy a meal with your favorite FUN ZONE characters! Special character dining experiences are available at select restaurants.
            </p>
            <button className="bg-funzone-yellow hover:bg-funzone-yellow/90 text-black font-medium py-2 px-6 rounded-full transition-colors">
              Book Character Dining
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Characters;
