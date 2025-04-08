
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  path: string;
}

const navItems: NavItem[] = [
  { title: "EXPERIENCE", path: "/experience" },
  { title: "LEISURE & DINING", path: "/leisure-dining" },
  { title: "PARK CHARACTERS", path: "/characters" },
  { title: "WHAT'S UP", path: "/events" },
  { title: "PARK INFORMATION", path: "/information" },
  { title: "BUSINESS OPPORTUNITIES", path: "/business" },
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

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-funzone-blue via-funzone-purple to-funzone-red bg-clip-text text-transparent">
                FUN ZONE
              </span>
            </NavLink>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-sm font-medium hover:text-funzone-blue transition-colors duration-200",
                    isActive
                      ? "text-funzone-blue"
                      : isScrolled
                      ? "text-gray-800"
                      : "text-gray-700"
                  )
                }
              >
                {item.title}
              </NavLink>
            ))}
            <Button className="bg-funzone-red hover:bg-funzone-red/90 ml-4">BUY TICKETS</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transform transition-transform ease-in-out duration-300 pt-16 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "block px-3 py-4 text-base font-medium border-b border-gray-200",
                  isActive ? "text-funzone-blue" : "text-gray-700"
                )
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </NavLink>
          ))}
          <div className="pt-4">
            <Button className="w-full bg-funzone-red hover:bg-funzone-red/90">BUY TICKETS</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
