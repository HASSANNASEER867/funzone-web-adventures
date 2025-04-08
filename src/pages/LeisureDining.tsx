
import React from "react";
import { Link } from "react-router-dom";
import { Search, Coffee, Utensils, IceCream, Pizza, Burger, ChefHat } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const restaurants = [
  {
    id: 1,
    name: "Safari Grill",
    description: "Experience authentic African flavors with our signature grilled meats and vegetables",
    category: "restaurant",
    zone: "african",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    priceRange: "$$"
  },
  {
    id: 2,
    name: "Dragon Wok",
    description: "Savor the taste of East Asia with our traditional wok-fried specialties",
    category: "restaurant",
    zone: "asian",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    priceRange: "$$"
  },
  {
    id: 3,
    name: "Gelato Paradise",
    description: "Cool down with our Italian-style gelato in over 24 flavors",
    category: "dessert",
    zone: "european",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    priceRange: "$"
  },
  {
    id: 4,
    name: "Fiesta Taqueria",
    description: "Authentic Mexican street tacos and fresh guacamole",
    category: "fast-food",
    zone: "latin",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    priceRange: "$"
  },
  {
    id: 5,
    name: "Royal Tea House",
    description: "British high tea experience with finger sandwiches and pastries",
    category: "cafe",
    zone: "european",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    priceRange: "$$"
  },
  {
    id: 6,
    name: "Burger Junction",
    description: "Classic American burgers with gourmet toppings",
    category: "fast-food",
    zone: "american",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    priceRange: "$"
  },
  {
    id: 7,
    name: "Spice Bazaar",
    description: "Aromatic Indian curries and freshly baked naan bread",
    category: "restaurant",
    zone: "asian",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    priceRange: "$$"
  },
  {
    id: 8,
    name: "Smoothie Oasis",
    description: "Refreshing fruit smoothies and healthy snacks",
    category: "cafe",
    zone: "american",
    image: "https://images.unsplash.com/photo-1589734435354-1c983cb3357b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    priceRange: "$"
  }
];

const categories = [
  { id: "all", name: "All Venues", icon: <Utensils className="h-4 w-4" /> },
  { id: "restaurant", name: "Restaurants", icon: <ChefHat className="h-4 w-4" /> },
  { id: "cafe", name: "Cafés", icon: <Coffee className="h-4 w-4" /> },
  { id: "fast-food", name: "Fast Food", icon: <Burger className="h-4 w-4" /> },
  { id: "dessert", name: "Desserts", icon: <IceCream className="h-4 w-4" /> },
];

const LeisureDining = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const filteredRestaurants = (category: string) => {
    return restaurants.filter(restaurant => 
      (category === "all" || restaurant.category === category) &&
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-funzone-orange via-funzone-red to-funzone-purple bg-clip-text text-transparent">
              Leisure & Dining
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover culinary delights from around the world within our themed zones
            </p>
          </div>
          
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for restaurants, cafés..."
                className="pl-10 pr-4 py-2 rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex mb-8 overflow-x-auto pb-2 justify-center">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-2 px-4 py-2"
                >
                  {category.icon}
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredRestaurants(category.id).map((restaurant) => (
                    <Card key={restaurant.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={restaurant.image} 
                          alt={restaurant.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-medium">
                          {restaurant.priceRange}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold">{restaurant.name}</h3>
                          <span className="text-funzone-yellow flex items-center">
                            ★ {restaurant.rating}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3 text-sm">{restaurant.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs uppercase bg-funzone-blue/10 text-funzone-blue px-2 py-1 rounded-full">
                            {restaurant.zone} zone
                          </span>
                          <Link 
                            to="#" 
                            className="text-funzone-blue hover:underline text-sm font-medium"
                          >
                            View Menu
                          </Link>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                {filteredRestaurants(category.id).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No dining options found. Try a different search term.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LeisureDining;
