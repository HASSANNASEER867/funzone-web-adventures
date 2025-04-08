
import React, { useState } from "react";
import { MapPin, Clock, Ticket, DollarSign, HelpCircle, Info, Mail as MailIcon, Phone as PhoneIcon, Calendar, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Information = () => {
  const [activeTab, setActiveTab] = useState("hours");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-funzone-green via-funzone-blue to-funzone-teal bg-clip-text text-transparent">
              Park Information
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know for a magical visit to FUN ZONE
            </p>
          </div>

          <Tabs defaultValue="hours" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex mb-8 overflow-x-auto pb-2 justify-center gap-2">
              <TabsTrigger 
                value="hours" 
                className={`flex items-center gap-2 transition-all duration-300 ${activeTab === "hours" ? "bg-funzone-blue/10 text-funzone-blue ring-2 ring-funzone-blue/20" : ""}`}
              >
                <Clock className="h-4 w-4" />
                Opening Hours
              </TabsTrigger>
              <TabsTrigger 
                value="tickets" 
                className={`flex items-center gap-2 transition-all duration-300 ${activeTab === "tickets" ? "bg-funzone-purple/10 text-funzone-purple ring-2 ring-funzone-purple/20" : ""}`}
              >
                <Ticket className="h-4 w-4" />
                Tickets & Pricing
              </TabsTrigger>
              <TabsTrigger 
                value="facilities" 
                className={`flex items-center gap-2 transition-all duration-300 ${activeTab === "facilities" ? "bg-funzone-green/10 text-funzone-green ring-2 ring-funzone-green/20" : ""}`}
              >
                <MapPin className="h-4 w-4" />
                Services & Facilities
              </TabsTrigger>
              <TabsTrigger 
                value="faqs" 
                className={`flex items-center gap-2 transition-all duration-300 ${activeTab === "faqs" ? "bg-funzone-orange/10 text-funzone-orange ring-2 ring-funzone-orange/20" : ""}`}
              >
                <HelpCircle className="h-4 w-4" />
                FAQs
              </TabsTrigger>
            </TabsList>

            {/* Opening Hours Content */}
            <TabsContent value="hours" className="mt-0 animate-fade-in">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="hover:scale-[1.01] transition-transform duration-300">
                    <h2 className="text-2xl font-bold mb-6 flex items-center text-funzone-blue">
                      <Clock className="mr-2 h-5 w-5" />
                      Regular Opening Hours
                    </h2>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100 hover:border-funzone-blue/30 transition-colors duration-200">
                        <span className="font-medium">Monday - Thursday</span>
                        <span className="text-gray-600">10:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100 hover:border-funzone-blue/30 transition-colors duration-200">
                        <span className="font-medium">Friday</span>
                        <span className="text-gray-600">10:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100 hover:border-funzone-blue/30 transition-colors duration-200">
                        <span className="font-medium">Saturday</span>
                        <span className="text-gray-600">9:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100 hover:border-funzone-blue/30 transition-colors duration-200">
                        <span className="font-medium">Sunday</span>
                        <span className="text-gray-600">9:00 AM - 9:00 PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="hover:scale-[1.01] transition-transform duration-300">
                    <h2 className="text-2xl font-bold mb-6 flex items-center text-funzone-purple">
                      <Info className="mr-2 h-5 w-5" />
                      Special Hours
                    </h2>
                    <div className="space-y-4">
                      <div className="p-4 bg-funzone-purple/10 rounded-lg transform transition-all duration-300 hover:translate-x-1 hover:shadow-md">
                        <h3 className="font-bold text-funzone-purple mb-2 flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Summer Season (June - August)
                        </h3>
                        <p className="text-gray-700">Extended hours until midnight on Fridays and Saturdays!</p>
                      </div>
                      <div className="p-4 bg-funzone-green/10 rounded-lg transform transition-all duration-300 hover:translate-x-1 hover:shadow-md">
                        <h3 className="font-bold text-funzone-green mb-2 flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Holiday Hours
                        </h3>
                        <p className="text-gray-700">Special extended hours during public holidays and school breaks.</p>
                      </div>
                      <div className="p-4 bg-funzone-red/10 rounded-lg transform transition-all duration-300 hover:translate-x-1 hover:shadow-md">
                        <h3 className="font-bold text-funzone-red mb-2 flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Maintenance Days
                        </h3>
                        <p className="text-gray-700">The park is closed on the first Tuesday of every month for maintenance.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-funzone-blue/5 to-funzone-teal/5 rounded-xl border border-funzone-blue/10">
                  <h2 className="text-xl font-bold mb-4">Important Notes</h2>
                  <ul className="list-none space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-funzone-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span>Last entry to the park is 2 hours before closing time</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-funzone-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span>Some attractions and experiences may close earlier than the park's closing time</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-funzone-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span>Hours may change during special events - please check our Events page for details</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-funzone-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span>The Water Adventure section closes 30 minutes before the park's closing time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Tickets & Pricing Content */}
            <TabsContent value="tickets" className="mt-0 animate-fade-in">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-funzone-purple">
                  <Ticket className="mr-2 h-5 w-5" />
                  Admission Options
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="overflow-hidden border-2 border-funzone-green hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
                    <div className="bg-gradient-to-r from-funzone-green to-funzone-teal text-white p-4">
                      <h3 className="text-xl font-bold">Day Pass</h3>
                      <p className="text-sm opacity-90">Full-day access to all zones and attractions</p>
                    </div>
                    <div className="p-6 relative">
                      <div className="flex justify-between items-center mb-4 group-hover:translate-x-1 transition-transform duration-200">
                        <span className="text-gray-600">Adult (13+)</span>
                        <span className="font-bold">$79.99</span>
                      </div>
                      <div className="flex justify-between items-center mb-4 group-hover:translate-x-1 transition-transform duration-200">
                        <span className="text-gray-600">Child (3-12)</span>
                        <span className="font-bold">$59.99</span>
                      </div>
                      <div className="flex justify-between items-center mb-4 group-hover:translate-x-1 transition-transform duration-200">
                        <span className="text-gray-600">Senior (65+)</span>
                        <span className="font-bold">$69.99</span>
                      </div>
                      <div className="flex justify-between items-center group-hover:translate-x-1 transition-transform duration-200">
                        <span className="text-gray-600">Infant (0-2)</span>
                        <span className="font-bold">FREE</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="overflow-hidden border-2 border-funzone-purple hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group relative">
                    <div className="absolute -top-3 right-4 bg-funzone-yellow text-black font-bold text-xs px-3 py-1.5 rounded-full shadow-md transform rotate-2">
                      BEST VALUE
                    </div>
                    <div className="bg-gradient-to-r from-funzone-purple to-funzone-blue text-white p-4">
                      <h3 className="text-xl font-bold">Season Pass</h3>
                      <p className="text-sm opacity-90">Unlimited visits for the entire season</p>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4 group-hover:translate-x-1 transition-transform duration-200">
                        <span className="text-gray-600">Adult (13+)</span>
                        <span className="font-bold">$199.99</span>
                      </div>
                      <div className="flex justify-between items-center mb-4 group-hover:translate-x-1 transition-transform duration-200">
                        <span className="text-gray-600">Child (3-12)</span>
                        <span className="font-bold">$149.99</span>
                      </div>
                      <div className="flex justify-between items-center mb-4 group-hover:translate-x-1 transition-transform duration-200">
                        <span className="text-gray-600">Senior (65+)</span>
                        <span className="font-bold">$179.99</span>
                      </div>
                      <div className="text-sm text-funzone-purple mt-4 font-medium">
                        *Includes 10% discount on dining and merchandise
                      </div>
                    </div>
                  </Card>

                  <Card className="overflow-hidden border-2 border-funzone-blue hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
                    <div className="bg-gradient-to-r from-funzone-blue to-funzone-teal text-white p-4">
                      <h3 className="text-xl font-bold">VIP Experience</h3>
                      <p className="text-sm opacity-90">Priority access, exclusive experiences</p>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4 group-hover:translate-x-1 transition-transform duration-200">
                        <span className="text-gray-600">Adult (13+)</span>
                        <span className="font-bold">$149.99</span>
                      </div>
                      <div className="flex justify-between items-center mb-4 group-hover:translate-x-1 transition-transform duration-200">
                        <span className="text-gray-600">Child (3-12)</span>
                        <span className="font-bold">$119.99</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-4">
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-funzone-blue mr-1 flex-shrink-0" />
                            Skip-the-line access
                          </li>
                          <li className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-funzone-blue mr-1 flex-shrink-0" />
                            Reserved seating for shows
                          </li>
                          <li className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-funzone-blue mr-1 flex-shrink-0" />
                            Complimentary dining package
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-4">Special Packages & Add-ons</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-gradient-to-br from-funzone-yellow/10 to-funzone-orange/10 rounded-lg border border-funzone-yellow/20 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                      <h4 className="font-bold text-lg mb-2 text-funzone-orange">Family Bundle (2 Adults + 2 Children)</h4>
                      <p className="text-gray-600 mb-4">Save 15% on regular admission prices</p>
                      <div className="font-bold text-funzone-orange text-xl">$239.99</div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-funzone-green/10 to-funzone-teal/10 rounded-lg border border-funzone-green/20 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                      <h4 className="font-bold text-lg mb-2 text-funzone-green">Group Discounts</h4>
                      <p className="text-gray-600 mb-4">10+ people: 10% off<br/>20+ people: 15% off</p>
                      <div className="text-sm font-medium text-funzone-green">Contact our group sales for more info</div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-funzone-blue/10 to-funzone-purple/10 rounded-lg border border-funzone-blue/20 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                      <h4 className="font-bold text-lg mb-2 text-funzone-blue">Dining Plan Add-on</h4>
                      <p className="text-gray-600 mb-4">Pre-purchase meal vouchers and save</p>
                      <div className="font-bold text-funzone-blue">From $29.99/person</div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-funzone-red/10 to-funzone-purple/10 rounded-lg border border-funzone-red/20 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                      <h4 className="font-bold text-lg mb-2 text-funzone-red">Photo Pass</h4>
                      <p className="text-gray-600 mb-4">Unlimited digital photos from your visit</p>
                      <div className="font-bold text-funzone-red">$49.99</div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-gray-100 pt-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-funzone-green">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Payment Options
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We accept all major credit cards, debit cards, and mobile payment methods. Cash is accepted at the ticket booths only.
                  </p>
                  <div className="bg-gradient-to-r from-funzone-blue/10 to-funzone-teal/5 p-6 rounded-lg border border-funzone-blue/20 hover:shadow-md transition-all duration-300">
                    <h4 className="font-bold mb-2 text-funzone-blue">Buy Online & Save</h4>
                    <p className="text-gray-700">
                      Purchase your tickets online in advance and save 10% off the gate price!
                    </p>
                    <button className="mt-4 bg-funzone-blue hover:bg-funzone-blue/90 text-white font-medium py-2 px-6 rounded-full transition-colors shadow-sm hover:shadow">
                      Buy Tickets Now
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Services & Facilities Content */}
            <TabsContent value="facilities" className="mt-0 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-2xl font-bold mb-6 text-funzone-teal">Guest Services</h2>
                  <div className="space-y-6">
                    <div className="hover:translate-x-1 transition-transform duration-200">
                      <h3 className="text-lg font-medium mb-2 text-funzone-blue flex items-center">
                        <Info className="h-4 w-4 mr-2" />
                        Information Centers
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Located at the main entrance and in each zone. Our friendly staff will help with:
                      </p>
                      <ul className="list-none text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-funzone-blue mr-1 flex-shrink-0" />
                          Park maps and guides
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-funzone-blue mr-1 flex-shrink-0" />
                          Show schedules
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-funzone-blue mr-1 flex-shrink-0" />
                          Lost and found
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-funzone-blue mr-1 flex-shrink-0" />
                          General assistance
                        </li>
                      </ul>
                    </div>

                    <div className="hover:translate-x-1 transition-transform duration-200">
                      <h3 className="text-lg font-medium mb-2 text-funzone-green flex items-center">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        First Aid Stations
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Staffed by qualified medical personnel and equipped to handle minor injuries and health concerns.
                      </p>
                      <p className="text-sm italic text-gray-600 bg-funzone-green/5 p-2 rounded">
                        Locations: Main Entrance Plaza, African Safari Zone, and Space Frontier Zone
                      </p>
                    </div>

                    <div className="hover:translate-x-1 transition-transform duration-200">
                      <h3 className="text-lg font-medium mb-2 text-funzone-purple flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        Storage Lockers
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Secure lockers available for rent to store personal belongings.
                      </p>
                      <div className="flex justify-between text-sm bg-funzone-purple/5 p-2 rounded">
                        <span className="font-medium">Small: $8</span>
                        <span className="font-medium">Medium: $12</span>
                        <span className="font-medium">Large: $15</span>
                      </div>
                    </div>

                    <div className="hover:translate-x-1 transition-transform duration-200">
                      <h3 className="text-lg font-medium mb-2 text-funzone-red flex items-center">
                        <PhoneIcon className="h-4 w-4 mr-2" />
                        Mobile App
                      </h3>
                      <p className="text-gray-600">
                        Download our free app for wait times, interactive map, dining reservations, and more!
                      </p>
                      <div className="mt-2 flex gap-3">
                        <button className="text-xs bg-black text-white py-1.5 px-3 rounded-md hover:bg-gray-800 transition-colors">App Store</button>
                        <button className="text-xs bg-funzone-green text-white py-1.5 px-3 rounded-md hover:bg-funzone-green/90 transition-colors">Google Play</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-2xl font-bold mb-6 text-funzone-purple">Park Amenities</h2>
                  <div className="space-y-6">
                    <div className="hover:translate-x-1 transition-transform duration-200">
                      <h3 className="text-lg font-medium mb-2 text-funzone-orange flex items-center">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        Accessibility Services
                      </h3>
                      <p className="text-gray-600 mb-2">
                        FUN ZONE is committed to providing a comfortable and enjoyable experience for all guests.
                      </p>
                      <ul className="list-none text-sm text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-funzone-orange mr-1 flex-shrink-0" />
                          Wheelchair rentals
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-funzone-orange mr-1 flex-shrink-0" />
                          Accessible entrances and pathways
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-funzone-orange mr-1 flex-shrink-0" />
                          Service animal relief areas
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-funzone-orange mr-1 flex-shrink-0" />
                          Sensory guides for attractions
                        </li>
                      </ul>
                    </div>

                    <div className="hover:translate-x-1 transition-transform duration-200">
                      <h3 className="text-lg font-medium mb-2 text-funzone-blue flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        Wi-Fi & Charging
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Complimentary high-speed Wi-Fi throughout the park. Charging stations available in all rest areas.
                      </p>
                      <div className="bg-funzone-blue/5 p-2 rounded text-sm">
                        Wi-Fi Network: <span className="font-medium">FUN_ZONE_FREE</span>
                      </div>
                    </div>

                    <div className="hover:translate-x-1 transition-transform duration-200">
                      <h3 className="text-lg font-medium mb-2 text-funzone-green flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        Baby Care Centers
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Private nursing areas, changing tables, and baby food warming stations available.
                      </p>
                      <p className="text-sm italic text-gray-600 bg-funzone-green/5 p-2 rounded">
                        Locations: Main Entrance Plaza and European Magic Zone
                      </p>
                    </div>

                    <div className="hover:translate-x-1 transition-transform duration-200">
                      <h3 className="text-lg font-medium mb-2 text-funzone-teal flex items-center">
                        <DollarSign className="h-4 w-4 mr-2" />
                        ATMs & Currency Exchange
                      </h3>
                      <p className="text-gray-600">
                        ATMs located throughout the park. Currency exchange services available at Guest Relations.
                      </p>
                      <div className="bg-funzone-teal/5 p-2 rounded mt-2 text-sm">
                        Foreign currencies accepted: USD, EUR, GBP, JPY, CAD
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-6 text-funzone-blue">Transportation & Parking</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-3 text-funzone-blue flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Parking Options
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-funzone-blue/5 rounded hover:shadow-sm transition-all duration-200 border border-transparent hover:border-funzone-blue/20">
                        <span className="font-medium">Standard Parking</span>
                        <span className="text-gray-600">$25 per vehicle</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-funzone-purple/5 rounded hover:shadow-sm transition-all duration-200 border border-transparent hover:border-funzone-purple/20">
                        <span className="font-medium">Premium Parking</span>
                        <span className="text-gray-600">$45 per vehicle</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-funzone-green/5 rounded hover:shadow-sm transition-all duration-200 border border-transparent hover:border-funzone-green/20">
                        <span className="font-medium">Oversized Vehicles</span>
                        <span className="text-gray-600">$35 per vehicle</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-funzone-blue bg-funzone-blue/5 p-2 rounded italic">
                      *Season Pass holders receive 50% off standard parking.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3 text-funzone-purple flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Public Transportation
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Several options are available to reach FUN ZONE without a car:
                    </p>
                    <ul className="space-y-3 text-sm">
                      <li className="p-3 bg-gradient-to-r from-funzone-purple/10 to-funzone-purple/5 rounded hover:shadow-sm transition-all duration-200 border border-transparent hover:border-funzone-purple/20">
                        <span className="font-medium block text-funzone-purple">FUN ZONE Express Bus</span>
                        Direct service from downtown, running every 30 minutes
                      </li>
                      <li className="p-3 bg-gradient-to-r from-funzone-red/10 to-funzone-red/5 rounded hover:shadow-sm transition-all duration-200 border border-transparent hover:border-funzone-red/20">
                        <span className="font-medium block text-funzone-red">Metro Rail</span>
                        FUN ZONE station is a 5-minute walk from our entrance
                      </li>
                      <li className="p-3 bg-gradient-to-r from-funzone-green/10 to-funzone-green/5 rounded hover:shadow-sm transition-all duration-200 border border-transparent hover:border-funzone-green/20">
                        <span className="font-medium block text-funzone-green">Shuttle Services</span>
                        Complimentary shuttles from partner hotels
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* FAQs Content */}
            <TabsContent value="faqs" className="mt-0 animate-fade-in">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-funzone-orange">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1" className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <AccordionTrigger className="py-4 text-funzone-blue hover:text-funzone-blue hover:no-underline">
                      What are the best days to visit to avoid crowds?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4 pt-0 px-4 bg-funzone-blue/5 rounded">
                      Typically, weekdays (Tuesday through Thursday) have lower attendance levels, especially during non-holiday periods and when local schools are in session. Early mornings and evenings also tend to be less crowded. The busiest times are weekends, holidays, and summer months (June-August).
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-2" className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <AccordionTrigger className="py-4 text-funzone-purple hover:text-funzone-purple hover:no-underline">
                      Are there height restrictions for rides?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4 pt-0 px-4 bg-funzone-purple/5 rounded">
                      Yes, many of our thrill rides have minimum height requirements for safety reasons. These requirements are clearly posted at each attraction entrance and on our mobile app. We offer "rider switch" services for families with small children so adults can take turns enjoying attractions.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-3" className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <AccordionTrigger className="py-4 text-funzone-green hover:text-funzone-green hover:no-underline">
                      Can I bring my own food and drinks into the park?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4 pt-0 px-4 bg-funzone-green/5 rounded">
                      Outside food and beverages are not permitted inside FUN ZONE, with exceptions for baby food, special dietary needs, and sealed water bottles. We offer a wide variety of dining options throughout the park to accommodate different tastes and dietary requirements.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-4" className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <AccordionTrigger className="py-4 text-funzone-blue hover:text-funzone-blue hover:no-underline">
                      What happens if it rains during my visit?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4 pt-0 px-4 bg-funzone-blue/5 rounded">
                      The park remains open during light to moderate rain, though some outdoor attractions may temporarily close for safety reasons. During severe weather, outdoor attractions close but indoor experiences, shows, and dining remain available. We do not offer rain checks or refunds due to weather, but our Season Passes allow you to return on a sunnier day!
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-5" className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <AccordionTrigger className="py-4 text-funzone-red hover:text-funzone-red hover:no-underline">
                      Are pets allowed in the park?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4 pt-0 px-4 bg-funzone-red/5 rounded">
                      Only service animals are permitted inside FUN ZONE. We offer a Pet Care Center near the main entrance where guests can board their pets for a fee while enjoying the park. Please bring proof of vaccinations if you plan to use this service.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-6" className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <AccordionTrigger className="py-4 text-funzone-purple hover:text-funzone-purple hover:no-underline">
                      How can I become a Season Pass holder?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4 pt-0 px-4 bg-funzone-purple/5 rounded">
                      Season Passes can be purchased online, at the main ticket booths, or by phone. If you've already purchased a single-day ticket and want to upgrade to a Season Pass, you can do so at Guest Relations within 7 days of your visit, and the price of your day ticket will be applied to the Season Pass price.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-7" className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <AccordionTrigger className="py-4 text-funzone-orange hover:text-funzone-orange hover:no-underline">
                      Does FUN ZONE offer birthday packages?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4 pt-0 px-4 bg-funzone-orange/5 rounded">
                      Yes! We offer several birthday celebration packages that include admission, a private party area, food, character visits, and special souvenirs. Packages can be customized based on age group and preferences. We recommend booking at least two weeks in advance to secure your preferred date.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-8" className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <AccordionTrigger className="py-4 text-funzone-teal hover:text-funzone-teal hover:no-underline">
                      What accommodations are available for guests with disabilities?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4 pt-0 px-4 bg-funzone-teal/5 rounded">
                      FUN ZONE is committed to accessibility for all guests. We offer wheelchair rentals, accessible entrances, companion restrooms, and attraction boarding passes for guests who may have difficulty waiting in standard queues. Please visit Guest Services upon arrival to discuss specific accommodations and obtain an accessibility guide.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8 bg-gradient-to-br from-funzone-blue/10 to-funzone-purple/10 p-6 rounded-xl border border-funzone-blue/20 hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-funzone-blue">Still have questions?</h3>
                  <p className="text-gray-700 mb-4">
                    Our guest services team is ready to assist you with any additional questions or concerns.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center bg-white/60 p-3 rounded hover:bg-white transition-colors duration-200">
                      <PhoneIcon className="h-5 w-5 text-funzone-blue mr-3" />
                      <span className="text-gray-700 font-medium">Call us: (555) 123-4567</span>
                    </div>
                    <div className="flex items-center bg-white/60 p-3 rounded hover:bg-white transition-colors duration-200">
                      <MailIcon className="h-5 w-5 text-funzone-green mr-3" />
                      <span className="text-gray-700 font-medium">Email: info@funzone.example.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* New CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-funzone-purple/20 to-funzone-blue/20 rounded-xl p-8 text-center border border-funzone-blue/10 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-funzone-blue">Ready for an Unforgettable Adventure?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Join thousands of families who create magical memories at FUN ZONE each year. 
              Start planning your visit today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-funzone-blue hover:bg-funzone-blue/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-sm hover:shadow hover:translate-y-[-2px]">
                Buy Tickets
              </button>
              <button className="bg-white hover:bg-gray-50 text-funzone-purple border border-funzone-purple font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-sm hover:shadow hover:translate-y-[-2px]">
                View Park Map
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Information;

