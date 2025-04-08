
import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, ShoppingBag, Coffee, Utensils, Store, BarChart, Handshake, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const businessOpportunities = [
  {
    id: 1,
    title: "Retail Space Leasing",
    description: "Lease prime retail space in high-traffic areas throughout the park. Ideal for souvenir shops, clothing stores, and specialty merchandise.",
    icon: <ShoppingBag className="h-10 w-10 text-funzone-blue" />,
    category: "retail",
    benefits: [
      "Access to millions of annual visitors",
      "Customizable store design options",
      "Flexible lease terms available",
      "Marketing support from park channels"
    ],
    contact: "retail@funzone.com"
  },
  {
    id: 2,
    title: "Restaurant & Food Outlet Franchises",
    description: "Operate a food service location within the park. Opportunities range from quick-service carts to full-service themed restaurants.",
    icon: <Utensils className="h-10 w-10 text-funzone-red" />,
    category: "food",
    benefits: [
      "Captive audience within park environment",
      "Theme-consistent restaurant designs",
      "Multiple location options throughout zones",
      "Supply chain and logistics support"
    ],
    contact: "dining@funzone.com"
  },
  {
    id: 3,
    title: "Entertainment Partnerships",
    description: "Provide entertainment services or sponsor existing entertainment offerings within the park, from stage shows to character experiences.",
    icon: <Users className="h-10 w-10 text-funzone-purple" />,
    category: "entertainment",
    benefits: [
      "Brand association with popular experiences",
      "Naming rights opportunities",
      "Integrated marketing campaigns",
      "VIP access for partner companies"
    ],
    contact: "entertainment@funzone.com"
  },
  {
    id: 4,
    title: "Advertising & Sponsorship",
    description: "Promote your brand through strategic advertising placements and event sponsorships throughout the park.",
    icon: <BarChart className="h-10 w-10 text-funzone-green" />,
    category: "advertising",
    benefits: [
      "Digital and physical advertising spaces",
      "Event and attraction sponsorships",
      "Demographic targeting options",
      "Annual campaign packages available"
    ],
    contact: "sponsors@funzone.com"
  },
  {
    id: 5,
    title: "Corporate Events & Team Building",
    description: "Host corporate events, conferences, team building activities, and private parties in our versatile venue spaces.",
    icon: <Building className="h-10 w-10 text-funzone-yellow" />,
    category: "corporate",
    benefits: [
      "Customizable venue spaces",
      "Full catering services",
      "Audio-visual equipment rental",
      "Group activity packages"
    ],
    contact: "events@funzone.com"
  },
  {
    id: 6,
    title: "Vendor & Supplier Opportunities",
    description: "Become a trusted supplier of goods and services to support the park's operations, from food ingredients to maintenance services.",
    icon: <Handshake className="h-10 w-10 text-funzone-orange" />,
    category: "vendor",
    benefits: [
      "Long-term contract opportunities",
      "Volume purchasing potential",
      "Preferred vendor status program",
      "Industry networking opportunities"
    ],
    contact: "procurement@funzone.com"
  },
  {
    id: 7,
    title: "Pop-up Stores & Seasonal Kiosks",
    description: "Operate temporary retail spaces during peak seasons or special events with lower commitment than full-year leases.",
    icon: <Store className="h-10 w-10 text-funzone-teal" />,
    category: "retail",
    benefits: [
      "Lower capital investment required",
      "Test market before full commitment",
      "Seasonal themed opportunities",
      "Flexibility to rotate locations"
    ],
    contact: "popup@funzone.com"
  },
  {
    id: 8,
    title: "Café & Beverage Concessions",
    description: "Run specialty coffee shops, juice bars, or other beverage-focused operations throughout the park.",
    icon: <Coffee className="h-10 w-10 text-funzone-red" />,
    category: "food",
    benefits: [
      "High-margin product opportunities",
      "Multiple service models available",
      "Custom branded environments",
      "Repeat customer potential"
    ],
    contact: "cafes@funzone.com"
  }
];

const categories = [
  { id: "all", name: "All Opportunities", icon: <Building className="h-4 w-4" /> },
  { id: "retail", name: "Retail", icon: <ShoppingBag className="h-4 w-4" /> },
  { id: "food", name: "Food & Beverage", icon: <Utensils className="h-4 w-4" /> },
  { id: "entertainment", name: "Entertainment", icon: <Users className="h-4 w-4" /> },
  { id: "advertising", name: "Advertising", icon: <BarChart className="h-4 w-4" /> },
  { id: "corporate", name: "Corporate", icon: <Building className="h-4 w-4" /> },
  { id: "vendor", name: "Vendor/Supplier", icon: <Handshake className="h-4 w-4" /> }
];

const Business = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-funzone-blue via-funzone-teal to-funzone-green bg-clip-text text-transparent">
              Business Opportunities
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with FUN ZONE and connect with millions of visitors annually
            </p>
          </div>
          
          <div className="mb-12 bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-funzone-blue to-funzone-purple p-8 text-white">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Partner With Us?</h2>
                  <p>Join the FUN ZONE family and grow your business with our 5+ million annual visitors</p>
                </div>
                <button className="whitespace-nowrap bg-white text-funzone-blue hover:bg-white/90 font-medium py-2 px-6 rounded-lg transition-colors">
                  Request Information
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-funzone-blue mb-2">5M+</div>
                <p className="text-gray-600">Annual Visitors</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-funzone-green mb-2">7</div>
                <p className="text-gray-600">Themed Zones</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-funzone-purple mb-2">365</div>
                <p className="text-gray-600">Days of Operation</p>
              </div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {businessOpportunities
                    .filter(opportunity => category.id === "all" || opportunity.category === category.id)
                    .map((opportunity) => (
                      <Card key={opportunity.id} className="border-t-4 border-t-funzone-blue hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="mb-4">
                            {opportunity.icon}
                          </div>
                          <h3 className="text-xl font-bold mb-3">{opportunity.title}</h3>
                          <p className="text-gray-600 mb-4 text-sm flex-1">{opportunity.description}</p>
                          <div className="mt-auto">
                            <h4 className="font-medium text-sm mb-2">Key Benefits:</h4>
                            <ul className="text-sm text-gray-600 space-y-1 mb-4">
                              {opportunity.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-funzone-green mr-2">✓</span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                            <div className="border-t pt-3">
                              <a 
                                href={`mailto:${opportunity.contact}`} 
                                className="text-funzone-blue hover:underline text-sm font-medium"
                              >
                                Contact: {opportunity.contact}
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Partnership Process</h2>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-funzone-blue text-white font-bold mr-3">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Initial Inquiry</h3>
                      <p className="text-sm text-gray-600">Submit your business proposal through our online form</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-funzone-blue text-white font-bold mr-3">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">Consultation</h3>
                      <p className="text-sm text-gray-600">Meet with our business development team to discuss opportunities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-funzone-blue text-white font-bold mr-3">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Proposal Review</h3>
                      <p className="text-sm text-gray-600">Our team evaluates your detailed business proposal</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-funzone-blue text-white font-bold mr-3">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium">Agreement & Onboarding</h3>
                      <p className="text-sm text-gray-600">Finalize partnership terms and begin integration process</p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Request Information</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-funzone-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-funzone-blue focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-funzone-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-funzone-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-funzone-blue focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="retail">Retail Space</option>
                      <option value="food">Food & Beverage</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="advertising">Advertising & Sponsorship</option>
                      <option value="corporate">Corporate Events</option>
                      <option value="vendor">Vendor/Supplier</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Brief Description of Your Business
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-funzone-blue focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-funzone-blue hover:bg-funzone-blue/90 text-white font-medium py-2 px-6 rounded-md transition-colors"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Business;
