
import React, { useState } from "react";
import { MapPin, Clock, Ticket, DollarSign, HelpCircle, Info, Mail as MailIcon, Phone as PhoneIcon } from "lucide-react";
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-funzone-green via-funzone-blue to-funzone-teal bg-clip-text text-transparent">
              Park Information
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know for a magical visit to FUN ZONE
            </p>
          </div>

          <Tabs defaultValue="hours" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex mb-8 overflow-x-auto pb-2 justify-center">
              <TabsTrigger value="hours" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Opening Hours
              </TabsTrigger>
              <TabsTrigger value="tickets" className="flex items-center gap-2">
                <Ticket className="h-4 w-4" />
                Tickets & Pricing
              </TabsTrigger>
              <TabsTrigger value="facilities" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Services & Facilities
              </TabsTrigger>
              <TabsTrigger value="faqs" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                FAQs
              </TabsTrigger>
            </TabsList>

            {/* Opening Hours Content */}
            <TabsContent value="hours" className="mt-0">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-funzone-blue" />
                      Regular Opening Hours
                    </h2>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="font-medium">Monday - Thursday</span>
                        <span className="text-gray-600">10:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="font-medium">Friday</span>
                        <span className="text-gray-600">10:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="font-medium">Saturday</span>
                        <span className="text-gray-600">9:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="font-medium">Sunday</span>
                        <span className="text-gray-600">9:00 AM - 9:00 PM</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <Info className="mr-2 h-5 w-5 text-funzone-purple" />
                      Special Hours
                    </h2>
                    <div className="space-y-4">
                      <div className="p-4 bg-funzone-purple/10 rounded-lg">
                        <h3 className="font-bold text-funzone-purple mb-2">Summer Season (June - August)</h3>
                        <p className="text-gray-700">Extended hours until midnight on Fridays and Saturdays!</p>
                      </div>
                      <div className="p-4 bg-funzone-green/10 rounded-lg">
                        <h3 className="font-bold text-funzone-green mb-2">Holiday Hours</h3>
                        <p className="text-gray-700">Special extended hours during public holidays and school breaks.</p>
                      </div>
                      <div className="p-4 bg-funzone-red/10 rounded-lg">
                        <h3 className="font-bold text-funzone-red mb-2">Maintenance Days</h3>
                        <p className="text-gray-700">The park is closed on the first Tuesday of every month for maintenance.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-funzone-blue/5 rounded-xl">
                  <h2 className="text-xl font-bold mb-4">Important Notes</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Last entry to the park is 2 hours before closing time</li>
                    <li>Some attractions and experiences may close earlier than the park's closing time</li>
                    <li>Hours may change during special events - please check our Events page for details</li>
                    <li>The Water Adventure section closes 30 minutes before the park's closing time</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Tickets & Pricing Content */}
            <TabsContent value="tickets" className="mt-0">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Ticket className="mr-2 h-5 w-5 text-funzone-blue" />
                  Admission Options
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="overflow-hidden border-2 border-funzone-green hover:shadow-lg transition-all duration-300">
                    <div className="bg-funzone-green text-white p-4">
                      <h3 className="text-xl font-bold">Day Pass</h3>
                      <p className="text-sm opacity-90">Full-day access to all zones and attractions</p>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Adult (13+)</span>
                        <span className="font-bold">$79.99</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Child (3-12)</span>
                        <span className="font-bold">$59.99</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Senior (65+)</span>
                        <span className="font-bold">$69.99</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Infant (0-2)</span>
                        <span className="font-bold">FREE</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="overflow-hidden border-2 border-funzone-purple hover:shadow-lg transition-all duration-300 relative">
                    <div className="absolute top-4 right-4 bg-funzone-yellow text-black font-bold text-xs px-2 py-1 rounded-full">
                      BEST VALUE
                    </div>
                    <div className="bg-funzone-purple text-white p-4">
                      <h3 className="text-xl font-bold">Season Pass</h3>
                      <p className="text-sm opacity-90">Unlimited visits for the entire season</p>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Adult (13+)</span>
                        <span className="font-bold">$199.99</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Child (3-12)</span>
                        <span className="font-bold">$149.99</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Senior (65+)</span>
                        <span className="font-bold">$179.99</span>
                      </div>
                      <div className="text-sm text-funzone-purple mt-4">
                        *Includes 10% discount on dining and merchandise
                      </div>
                    </div>
                  </Card>

                  <Card className="overflow-hidden border-2 border-funzone-blue hover:shadow-lg transition-all duration-300">
                    <div className="bg-funzone-blue text-white p-4">
                      <h3 className="text-xl font-bold">VIP Experience</h3>
                      <p className="text-sm opacity-90">Priority access, exclusive experiences</p>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Adult (13+)</span>
                        <span className="font-bold">$149.99</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">Child (3-12)</span>
                        <span className="font-bold">$119.99</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-4">
                        <ul className="space-y-2">
                          <li>• Skip-the-line access</li>
                          <li>• Reserved seating for shows</li>
                          <li>• Complimentary dining package</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-4">Special Packages & Add-ons</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-gradient-to-br from-funzone-yellow/10 to-funzone-orange/10 rounded-lg">
                      <h4 className="font-bold text-lg mb-2">Family Bundle (2 Adults + 2 Children)</h4>
                      <p className="text-gray-600 mb-4">Save 15% on regular admission prices</p>
                      <div className="font-bold text-funzone-orange text-xl">$239.99</div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-funzone-green/10 to-funzone-teal/10 rounded-lg">
                      <h4 className="font-bold text-lg mb-2">Group Discounts</h4>
                      <p className="text-gray-600 mb-4">10+ people: 10% off<br/>20+ people: 15% off</p>
                      <div className="text-sm font-medium text-funzone-green">Contact our group sales for more info</div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-funzone-blue/10 to-funzone-purple/10 rounded-lg">
                      <h4 className="font-bold text-lg mb-2">Dining Plan Add-on</h4>
                      <p className="text-gray-600 mb-4">Pre-purchase meal vouchers and save</p>
                      <div className="font-bold text-funzone-blue">From $29.99/person</div>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-funzone-red/10 to-funzone-purple/10 rounded-lg">
                      <h4 className="font-bold text-lg mb-2">Photo Pass</h4>
                      <p className="text-gray-600 mb-4">Unlimited digital photos from your visit</p>
                      <div className="font-bold text-funzone-red">$49.99</div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-gray-100 pt-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <DollarSign className="mr-2 h-5 w-5 text-funzone-green" />
                    Payment Options
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We accept all major credit cards, debit cards, and mobile payment methods. Cash is accepted at the ticket booths only.
                  </p>
                  <div className="bg-funzone-blue/5 p-5 rounded-lg">
                    <h4 className="font-bold mb-2">Buy Online & Save</h4>
                    <p className="text-gray-700">
                      Purchase your tickets online in advance and save 10% off the gate price!
                    </p>
                    <button className="mt-4 bg-funzone-blue hover:bg-funzone-blue/90 text-white font-medium py-2 px-6 rounded-full transition-colors">
                      Buy Tickets Now
                    </button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Services & Facilities Content */}
            <TabsContent value="facilities" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-6">Guest Services</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-funzone-blue">Information Centers</h3>
                      <p className="text-gray-600 mb-2">
                        Located at the main entrance and in each zone. Our friendly staff will help with:
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Park maps and guides</li>
                        <li>Show schedules</li>
                        <li>Lost and found</li>
                        <li>General assistance</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2 text-funzone-green">First Aid Stations</h3>
                      <p className="text-gray-600 mb-2">
                        Staffed by qualified medical personnel and equipped to handle minor injuries and health concerns.
                      </p>
                      <p className="text-sm text-gray-600">
                        Locations: Main Entrance Plaza, African Safari Zone, and Space Frontier Zone
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2 text-funzone-purple">Storage Lockers</h3>
                      <p className="text-gray-600 mb-2">
                        Secure lockers available for rent to store personal belongings.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span>Small: $8</span>
                        <span>Medium: $12</span>
                        <span>Large: $15</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2 text-funzone-red">Mobile App</h3>
                      <p className="text-gray-600">
                        Download our free app for wait times, interactive map, dining reservations, and more!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-6">Park Amenities</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-funzone-orange">Accessibility Services</h3>
                      <p className="text-gray-600 mb-2">
                        FUN ZONE is committed to providing a comfortable and enjoyable experience for all guests.
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Wheelchair rentals</li>
                        <li>Accessible entrances and pathways</li>
                        <li>Service animal relief areas</li>
                        <li>Sensory guides for attractions</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2 text-funzone-blue">Wi-Fi & Charging</h3>
                      <p className="text-gray-600 mb-2">
                        Complimentary high-speed Wi-Fi throughout the park. Charging stations available in all rest areas.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2 text-funzone-green">Baby Care Centers</h3>
                      <p className="text-gray-600 mb-2">
                        Private nursing areas, changing tables, and baby food warming stations available.
                      </p>
                      <p className="text-sm text-gray-600">
                        Locations: Main Entrance Plaza and European Magic Zone
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2 text-funzone-teal">ATMs & Currency Exchange</h3>
                      <p className="text-gray-600">
                        ATMs located throughout the park. Currency exchange services available at Guest Relations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6">Transportation & Parking</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-3 text-funzone-blue">Parking Options</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="font-medium">Standard Parking</span>
                        <span className="text-gray-600">$25 per vehicle</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="font-medium">Premium Parking</span>
                        <span className="text-gray-600">$45 per vehicle</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="font-medium">Oversized Vehicles</span>
                        <span className="text-gray-600">$35 per vehicle</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">
                      *Season Pass holders receive 50% off standard parking.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3 text-funzone-purple">Public Transportation</h3>
                    <p className="text-gray-600 mb-3">
                      Several options are available to reach FUN ZONE without a car:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="p-2 bg-funzone-purple/10 rounded">
                        <span className="font-medium block">FUN ZONE Express Bus</span>
                        Direct service from downtown, running every 30 minutes
                      </li>
                      <li className="p-2 bg-funzone-red/10 rounded">
                        <span className="font-medium block">Metro Rail</span>
                        FUN ZONE station is a 5-minute walk from our entrance
                      </li>
                      <li className="p-2 bg-funzone-green/10 rounded">
                        <span className="font-medium block">Shuttle Services</span>
                        Complimentary shuttles from partner hotels
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* FAQs Content */}
            <TabsContent value="faqs" className="mt-0">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <HelpCircle className="mr-2 h-5 w-5 text-funzone-purple" />
                  Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger>What are the best days to visit to avoid crowds?</AccordionTrigger>
                    <AccordionContent>
                      Typically, weekdays (Tuesday through Thursday) have lower attendance levels, especially during non-holiday periods and when local schools are in session. Early mornings and evenings also tend to be less crowded. The busiest times are weekends, holidays, and summer months (June-August).
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-2">
                    <AccordionTrigger>Are there height restrictions for rides?</AccordionTrigger>
                    <AccordionContent>
                      Yes, many of our thrill rides have minimum height requirements for safety reasons. These requirements are clearly posted at each attraction entrance and on our mobile app. We offer "rider switch" services for families with small children so adults can take turns enjoying attractions.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-3">
                    <AccordionTrigger>Can I bring my own food and drinks into the park?</AccordionTrigger>
                    <AccordionContent>
                      Outside food and beverages are not permitted inside FUN ZONE, with exceptions for baby food, special dietary needs, and sealed water bottles. We offer a wide variety of dining options throughout the park to accommodate different tastes and dietary requirements.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-4">
                    <AccordionTrigger>What happens if it rains during my visit?</AccordionTrigger>
                    <AccordionContent>
                      The park remains open during light to moderate rain, though some outdoor attractions may temporarily close for safety reasons. During severe weather, outdoor attractions close but indoor experiences, shows, and dining remain available. We do not offer rain checks or refunds due to weather, but our Season Passes allow you to return on a sunnier day!
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-5">
                    <AccordionTrigger>Are pets allowed in the park?</AccordionTrigger>
                    <AccordionContent>
                      Only service animals are permitted inside FUN ZONE. We offer a Pet Care Center near the main entrance where guests can board their pets for a fee while enjoying the park. Please bring proof of vaccinations if you plan to use this service.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-6">
                    <AccordionTrigger>How can I become a Season Pass holder?</AccordionTrigger>
                    <AccordionContent>
                      Season Passes can be purchased online, at the main ticket booths, or by phone. If you've already purchased a single-day ticket and want to upgrade to a Season Pass, you can do so at Guest Relations within 7 days of your visit, and the price of your day ticket will be applied to the Season Pass price.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-7">
                    <AccordionTrigger>Does FUN ZONE offer birthday packages?</AccordionTrigger>
                    <AccordionContent>
                      Yes! We offer several birthday celebration packages that include admission, a private party area, food, character visits, and special souvenirs. Packages can be customized based on age group and preferences. We recommend booking at least two weeks in advance to secure your preferred date.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="faq-8">
                    <AccordionTrigger>What accommodations are available for guests with disabilities?</AccordionTrigger>
                    <AccordionContent>
                      FUN ZONE is committed to accessibility for all guests. We offer wheelchair rentals, accessible entrances, companion restrooms, and attraction boarding passes for guests who may have difficulty waiting in standard queues. Please visit Guest Services upon arrival to discuss specific accommodations and obtain an accessibility guide.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8 bg-funzone-blue/10 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
                  <p className="text-gray-700 mb-4">
                    Our guest services team is ready to assist you with any additional questions or concerns.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <PhoneIcon className="h-5 w-5 text-funzone-blue mr-3" />
                      <span className="text-gray-700">Call us: (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <MailIcon className="h-5 w-5 text-funzone-green mr-3" />
                      <span className="text-gray-700">Email: info@funzone.example.com</span>
                    </div>
                  </div>
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

export default Information;
