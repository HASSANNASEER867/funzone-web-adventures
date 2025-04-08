
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Ticket, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavItem {
  title: string;
  path: string;
  subItems?: { title: string; path: string; description?: string }[];
}

const navItems: NavItem[] = [
  { 
    title: "EXPERIENCE", 
    path: "/experience",
    subItems: [
      { title: "Adventure Zones", path: "/experience", description: "Explore our 7 globally-themed areas" },
      { title: "Rides & Attractions", path: "/experience#rides", description: "Discover thrilling experiences" },
      { title: "Park Map", path: "/experience#map", description: "Navigate your way around FUN ZONE" },
    ]
  },
  { 
    title: "LEISURE & DINING", 
    path: "/leisure-dining",
    subItems: [
      { title: "Restaurants", path: "/leisure-dining?category=restaurant", description: "Fine dining experiences" },
      { title: "Cafés & Snacks", path: "/leisure-dining?category=cafe", description: "Quick bites and refreshments" },
      { title: "Shopping", path: "/leisure-dining?category=shopping", description: "Souvenirs and merchandise" },
    ]
  },
  { 
    title: "PARK CHARACTERS", 
    path: "/characters",
    subItems: [
      { title: "Meet Our Characters", path: "/characters", description: "Say hello to our friendly faces" },
      { title: "Character Dining", path: "/characters#dining", description: "Eat with your favorite characters" },
      { title: "Show Schedule", path: "/characters#shows", description: "Don't miss special performances" },
    ]
  },
  { 
    title: "WHAT'S UP", 
    path: "/events",
    subItems: [
      { title: "Upcoming Events", path: "/events", description: "Special events and festivities" },
      { title: "Seasonal Celebrations", path: "/events?category=seasonal", description: "Holiday magic at FUN ZONE" },
      { title: "Entertainment", path: "/events?category=entertainment", description: "Shows and performances" },
    ]
  },
  { 
    title: "PARK INFORMATION", 
    path: "/information",
    subItems: [
      { title: "Opening Hours", path: "/information", description: "When to visit us" },
      { title: "Tickets & Pricing", path: "/information#tickets", description: "Admission options and packages" },
      { title: "Services & Facilities", path: "/information?tab=facilities", description: "Everything you need to know" },
      { title: "FAQs", path: "/information?tab=faqs", description: "Frequently asked questions" },
    ]
  },
  { 
    title: "BUSINESS OPPORTUNITIES", 
    path: "/business",
    subItems: [
      { title: "Partnership Options", path: "/business", description: "Join forces with FUN ZONE" },
      { title: "Leasing", path: "/business?category=retail", description: "Retail and dining spaces" },
      { title: "Corporate Events", path: "/business?category=corporate", description: "Host your company at the park" },
    ]
  },
  { title: "CONTACT US", path: "/contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const isHome = location.pathname === "/";

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled || !isHome
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <div className="relative">
                <span className="font-bold text-2xl md:text-3xl">
                  <span className="text-funzone-blue">FUN</span>
                  <span className="text-funzone-red">ZONE</span>
                </span>
                <Sun className="absolute -top-2 -right-4 h-4 w-4 text-funzone-yellow animate-spin-slow" />
              </div>
            </NavLink>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  item.subItems ? (
                    <NavigationMenuItem key={item.path}>
                      <NavigationMenuTrigger className={cn(
                        "px-3 py-2 text-sm font-medium hover:text-funzone-blue transition-colors duration-200 bg-transparent",
                        location.pathname === item.path
                          ? "text-funzone-blue"
                          : isScrolled || !isHome
                          ? "text-gray-800"
                          : "text-gray-700"
                      )}>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.path}>
                              <NavigationMenuLink asChild>
                                <NavLink
                                  to={subItem.path}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                  {subItem.description && (
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {subItem.description}
                                    </p>
                                  )}
                                </NavLink>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.path}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          cn(
                            "inline-flex items-center px-3 py-2 text-sm font-medium hover:text-funzone-blue transition-colors duration-200",
                            isActive
                              ? "text-funzone-blue"
                              : isScrolled || !isHome
                              ? "text-gray-800"
                              : "text-gray-700"
                          )
                        }
                      >
                        {item.title}
                      </NavLink>
                    </NavigationMenuItem>
                  )
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center ml-4 space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-700 hover:text-funzone-blue hover:bg-transparent"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button className="bg-gradient-to-r from-funzone-red via-funzone-purple to-funzone-blue hover:opacity-90 text-white">
                <Ticket className="h-4 w-4 mr-2" />
                BUY TICKETS
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700 hover:text-funzone-blue hover:bg-transparent"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="text-gray-700"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-md z-40 transform transition-transform ease-in-out duration-300 pt-20 md:hidden overflow-y-auto",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="px-4 py-2 space-y-1">
          {navItems.map((item) => (
            <div key={item.path} className="border-b border-gray-100">
              {item.subItems ? (
                <details className="group">
                  <summary className="flex justify-between items-center py-4 cursor-pointer list-none">
                    <span className="text-base font-medium text-gray-800">{item.title}</span>
                    <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-4 pb-2 space-y-2">
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        className={({ isActive }) =>
                          cn(
                            "block py-2 text-sm",
                            isActive ? "text-funzone-blue font-medium" : "text-gray-600"
                          )
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.title}
                      </NavLink>
                    ))}
                  </div>
                </details>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "block py-4 text-base font-medium",
                      isActive ? "text-funzone-blue" : "text-gray-800"
                    )
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </NavLink>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Button className="w-full bg-gradient-to-r from-funzone-red via-funzone-purple to-funzone-blue hover:opacity-90 text-white">
              <Ticket className="h-4 w-4 mr-2" />
              BUY TICKETS
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
