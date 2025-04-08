
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, MapPin, Ticket, CalendarDays, Info, Helpdesk, 
  Car, Bus, Train, Accessibility, Umbrella, Baby, 
  CreditCard, DollarSign, ShoppingBag, BaggageClaim
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Information = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-funzone-teal via-funzone-blue to-funzone-purple bg-clip-text text-transparent">
              Park Information
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know to plan your perfect visit to FUN ZONE
            </p>
          </div>
          
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 flex items-start">
              <Clock className="h-10 w-10 text-funzone-blue mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-1">Park Hours</h3>
                <p className="text-gray-700 text-sm">Monday - Friday: 10:00 AM - 8:00 PM</p>
                <p className="text-gray-700 text-sm">Weekends & Holidays: 9:00 AM - 10:00 PM</p>
                <p className="text-gray-500 text-xs mt-1">Hours may vary seasonally</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 flex items-start">
              <Ticket className="h-10 w-10 text-funzone-green mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-1">Ticket Prices</h3>
                <p className="text-gray-700 text-sm">Adults (12+): $89.99</p>
                <p className="text-gray-700 text-sm">Children (3-11): $69.99</p>
                <p className="text-gray-700 text-sm">Seniors (65+): $79.99</p>
                <p className="text-gray-500 text-xs mt-1">Multi-day passes available</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 flex items-start">
              <MapPin className="h-10 w-10 text-funzone-red mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-1">Location</h3>
                <p className="text-gray-700 text-sm">123 Adventure Way</p>
                <p className="text-gray-700 text-sm">Fun City, FC 12345</p>
                <a href="#map" className="text-funzone-blue text-sm font-medium hover:underline">View Map</a>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="planning" className="w-full">
            <TabsList className="flex mb-8 overflow-x-auto pb-2 justify-center">
              <TabsTrigger value="planning" className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                Planning Your Visit
              </TabsTrigger>
              <TabsTrigger value="transportation" className="flex items-center gap-2">
                <Car className="h-4 w-4" />
                Transportation
              </TabsTrigger>
              <TabsTrigger value="facilities" className="flex items-center gap-2">
                <Helpdesk className="h-4 w-4" />
                Facilities & Services
              </TabsTrigger>
              <TabsTrigger value="faqs" className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                FAQs
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="planning" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Best Times to Visit</h2>
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2">Weekdays (Monday-Thursday)</h3>
                      <p className="text-gray-600 text-sm">Experience shorter wait times and fewer crowds, especially during non-holiday periods.</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2">Early Morning or Evening</h3>
                      <p className="text-gray-600 text-sm">The first two hours after opening and last two hours before closing typically see reduced wait times for popular attractions.</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h3 className="font-medium mb-2">Off-Peak Seasons</h3>
                      <p className="text-gray-600 text-sm">Mid-January through March, September (after Labor Day), and early November (before Thanksgiving) typically have lower attendance.</p>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mt-8 mb-6">What to Bring</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                      <Umbrella className="h-8 w-8 text-funzone-blue mb-2" />
                      <p className="text-sm">Weather Protection<br/>(Sunscreen, Hat, Poncho)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                      <ShoppingBag className="h-8 w-8 text-funzone-green mb-2" />
                      <p className="text-sm">Small Backpack<br/>for Personal Items</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                      <CreditCard className="h-8 w-8 text-funzone-purple mb-2" />
                      <p className="text-sm">Credit/Debit Cards<br/>& Identification</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                      <Baby className="h-8 w-8 text-funzone-orange mb-2" />
                      <p className="text-sm">Essentials for Children<br/>(if applicable)</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6">Ticket Information</h2>
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-funzone-blue">
                      <h3 className="font-medium mb-2">Standard Day Pass</h3>
                      <p className="text-gray-600 text-sm mb-2">Full day access to all seven zones and standard attractions.</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">
                          Adults: $89.99<br/>
                          Children: $69.99<br/>
                          Seniors: $79.99
                        </span>
                        <button className="bg-funzone-blue hover:bg-funzone-blue/90 text-white text-sm font-medium py-1 px-4 rounded-full transition-colors">
                          Buy Now
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-funzone-purple">
                      <h3 className="font-medium mb-2">Premium Fast Pass</h3>
                      <p className="text-gray-600 text-sm mb-2">Standard admission plus skip-the-line access on most attractions.</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">
                          Adults: $139.99<br/>
                          Children: $119.99<br/>
                          Seniors: $129.99
                        </span>
                        <button className="bg-funzone-purple hover:bg-funzone-purple/90 text-white text-sm font-medium py-1 px-4 rounded-full transition-colors">
                          Buy Now
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-funzone-green">
                      <h3 className="font-medium mb-2">Multi-Day Pass (3 Days)</h3>
                      <p className="text-gray-600 text-sm mb-2">Three consecutive days of park admission at a discounted rate.</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">
                          Adults: $229.99<br/>
                          Children: $179.99<br/>
                          Seniors: $199.99
                        </span>
                        <button className="bg-funzone-green hover:bg-funzone-green/90 text-white text-sm font-medium py-1 px-4 rounded-full transition-colors">
                          Buy Now
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-funzone-yellow">
                      <h3 className="font-medium mb-2">Annual Pass</h3>
                      <p className="text-gray-600 text-sm mb-2">Unlimited visits for 12 months plus member perks and discounts.</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">
                          Adults: $299.99<br/>
                          Children: $249.99<br/>
                          Seniors: $279.99
                        </span>
                        <button className="bg-funzone-yellow hover:bg-funzone-yellow/90 text-black text-sm font-medium py-1 px-4 rounded-full transition-colors">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="transportation" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Getting Here</h2>
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm flex">
                      <Car className="h-10 w-10 text-funzone-blue mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-2">By Car</h3>
                        <p className="text-gray-600 text-sm mb-2">
                          Our address is 123 Adventure Way, Fun City, FC 12345. Follow signs from major highways. GPS coordinates: 12.345678, -98.765432
                        </p>
                        <h4 className="font-medium text-sm">Parking:</h4>
                        <p className="text-gray-600 text-sm">
                          Standard: $25 per day<br/>
                          Premium (closer to entrance): $40 per day<br/>
                          Oversized vehicles: $35 per day
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm flex">
                      <Bus className="h-10 w-10 text-funzone-green mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-2">By Shuttle</h3>
                        <p className="text-gray-600 text-sm">
                          Complimentary shuttle service runs from official partner hotels every 30 minutes. See the concierge at your hotel for the schedule.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg shadow-sm flex">
                      <Train className="h-10 w-10 text-funzone-red mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-2">By Public Transportation</h3>
                        <p className="text-gray-600 text-sm">
                          The Fun City Metro Line stops at "FUN ZONE Main Gate" station. Trains run every 15 minutes from downtown. Bus routes 42, 53, and 67 also stop at our main entrance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6">Park Map & Navigation</h2>
                  <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <img 
                        src="https://images.unsplash.com/photo-1535184611696-30bdd9f984c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Park Map" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-600 text-sm">
                      Interactive maps are available in our mobile app and at information kiosks throughout the park. Free paper maps are provided at the entrance.
                    </p>
                    <div className="mt-4 flex space-x-4">
                      <a 
                        href="#" 
                        className="bg-funzone-blue hover:bg-funzone-blue/90 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors inline-flex items-center"
                      >
                        <span>Download PDF Map</span>
                      </a>
                      <a 
                        href="#" 
                        className="border border-funzone-blue text-funzone-blue hover:bg-funzone-blue/10 text-sm font-medium py-2 px-4 rounded-md transition-colors inline-flex items-center"
                      >
                        <span>Download Mobile App</span>
                      </a>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-6" id="map">Park Location</h2>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.123456!3d40.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40uMTIzNDU2LC03My4xMjM0NTY!5e0!3m2!1sen!2sus!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="FUN ZONE Map Location"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="facilities" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <Accessibility className="h-8 w-8 text-funzone-blue mr-3" />
                    <h2 className="text-xl font-bold">Accessibility</h2>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Wheelchair accessible pathways throughout the park
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Complimentary wheelchair and ECV rentals (limited availability)
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Service animals welcome (restrictions apply on some rides)
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Accessible restrooms in all zones
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Special access passes available for guests with disabilities
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <Baby className="h-8 w-8 text-funzone-purple mr-3" />
                    <h2 className="text-xl font-bold">Family Services</h2>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Baby Care Centers in each zone with changing tables, nursing areas, and supplies
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Stroller rentals (single: $15/day, double: $25/day)
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Child swap service for parents at thrill rides
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Family restrooms throughout the park
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Lost children facilities at Guest Services
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <Helpdesk className="h-8 w-8 text-funzone-red mr-3" />
                    <h2 className="text-xl font-bold">Guest Services</h2>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Information kiosks in all zones
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      First aid stations with trained medical staff
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Lost and found service at the Main Guest Relations office
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      ATMs located throughout the park
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Complimentary Wi-Fi in designated areas
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Phone charging stations ($5 per hour)
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-8 w-8 text-funzone-green mr-3" />
                    <h2 className="text-xl font-bold">Payment Options</h2>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      All major credit/debit cards accepted throughout the park
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      FUN ZONE cashless wristbands (load funds at kiosks)
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Mobile payment options (Apple Pay, Google Pay, Samsung Pay)
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Cash acceptance at select locations only
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Gift cards available for purchase
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <BaggageClaim className="h-8 w-8 text-funzone-yellow mr-3" />
                    <h2 className="text-xl font-bold">Storage & Lockers</h2>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Small lockers (fits backpack): $12/day
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Medium lockers (fits multiple bags): $15/day
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Large lockers (fits luggage): $20/day
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Free temporary storage at major attractions
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Electronic access system using park tickets
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <ShoppingBag className="h-8 w-8 text-funzone-orange mr-3" />
                    <h2 className="text-xl font-bold">Shopping</h2>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Zone-themed souvenir shops in each area
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Character merchandise and collectibles
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      FUN ZONE apparel and accessories
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Free package pickup service - shop and collect at the exit
                    </li>
                    <li className="flex items-start">
                      <span className="text-funzone-green mr-2">✓</span>
                      Shipping services available for large purchases
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="faqs" className="mt-0">
              <div>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                  <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Is there a dress code for the park?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">
                          We recommend comfortable clothing and walking shoes. Some attractions have specific requirements prohibiting loose articles or open-toed shoes. Clothing with offensive language or imagery is not permitted. For water attractions, appropriate swimwear is required.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Can I bring my own food and drinks?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">
                          Small snacks, water bottles, and special dietary items are permitted. However, full meals, coolers, glass containers, and alcoholic beverages are not allowed in the park. We offer a variety of dining options catering to different dietary needs, including vegetarian, vegan, and gluten-free options.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>What should I do if I lose something in the park?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">
                          Visit our Lost & Found office located at the Main Guest Services building near the entrance. Items found in the park are brought there. You can also report lost items online through our website or mobile app. We recommend labeling personal items with your name and contact information.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Are there height restrictions for rides?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">
                          Yes, many attractions have minimum height requirements for safety reasons. These requirements are clearly posted at each attraction entrance and on our website/mobile app. We offer "rider switch" for families with children who don't meet height requirements, allowing adults to take turns on rides while the other stays with the child.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-5">
                      <AccordionTrigger>What happens if it rains during my visit?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">
                          The park remains open during light to moderate rain, though some outdoor attractions may temporarily close for safety reasons. We offer many indoor attractions, shows, and dining experiences to enjoy during inclement weather. Ponchos are available for purchase at various shops throughout the park. We do not offer rain checks or refunds due to weather, but you may consider purchasing weather insurance when buying tickets.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-6">
                      <AccordionTrigger>Is there a way to avoid long queues for popular attractions?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">
                          Yes, we offer several options to reduce wait times. Our Premium Fast Pass gives priority access to most attractions. Single Rider lines are available at select attractions for solo visitors or groups willing to split up. Our mobile app provides real-time wait times to help you plan efficiently. Visiting during off-peak seasons or weekdays typically results in shorter wait times.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-7">
                      <AccordionTrigger>Are pets allowed in the park?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">
                          Only service animals are permitted inside the park. We offer a Pet Care Center near the entrance where guests can leave their pets for the day (additional fee applies). Service animals must remain on a leash or harness at all times and may have restricted access to certain attractions.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-8">
                      <AccordionTrigger>Do you offer any discounts on tickets?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">
                          Yes, we offer various discounts including: Military discounts (active and retired), senior citizen rates, multi-day pass savings, annual pass options, group rates (15+ people), seasonal promotions, and corporate partner discounts. Check our website or contact Guest Services for current offers.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-9">
                      <AccordionTrigger>Is the park accessible for guests with disabilities?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">
                          Absolutely. FUN ZONE is committed to accessibility for all guests. We offer wheelchair-accessible pathways, attractions, dining areas, and restrooms. Complimentary wheelchairs and ECVs (electric convenience vehicles) are available for rent on a first-come, first-served basis. Guests with disabilities may qualify for our Assisted Access Pass, which provides alternative access to attractions. Please visit Guest Services upon arrival for more information and assistance.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-10">
                      <AccordionTrigger>How far in advance should I book tickets?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">
                          We recommend booking tickets at least 1-2 weeks in advance, especially during peak seasons (summer, holidays, and spring break). Online tickets are often discounted compared to gate prices, and advance booking guarantees entry on your desired date. Some special events and holiday periods may sell out months in advance, so plan accordingly.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                
                <div className="bg-funzone-blue/10 rounded-xl p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Our Guest Services team is ready to assist you with any additional questions or special requests.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                      href="tel:+1234567890" 
                      className="bg-funzone-blue hover:bg-funzone-blue/90 text-white font-medium py-2 px-6 rounded-lg transition-colors inline-flex items-center justify-center"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Us: +1 (234) 567-890
                    </a>
                    <a 
                      href="mailto:info@funzone.com" 
                      className="border border-funzone-blue text-funzone-blue hover:bg-funzone-blue/10 font-medium py-2 px-6 rounded-lg transition-colors inline-flex items-center justify-center"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email: info@funzone.com
                    </a>
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
