
import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  MapPin, 
  Mail, 
  Phone 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-funzone-blue via-funzone-purple to-funzone-red bg-clip-text text-transparent">
              FUN ZONE
            </h3>
            <p className="text-gray-300 max-w-xs">
              A premium international theme park featuring 7 globally-themed zones for unforgettable adventures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-funzone-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-funzone-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-funzone-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-funzone-blue transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/experience" className="text-gray-300 hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/leisure-dining" className="text-gray-300 hover:text-white transition-colors">
                  Leisure & Dining
                </Link>
              </li>
              <li>
                <Link to="/characters" className="text-gray-300 hover:text-white transition-colors">
                  Park Characters
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                  What's Up
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/information" className="text-gray-300 hover:text-white transition-colors">
                  Park Information
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-gray-300 hover:text-white transition-colors">
                  Business Opportunities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-funzone-red mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Adventure Way, Fun City, FC 12345, USA</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-funzone-yellow mr-2 flex-shrink-0" />
                <a href="mailto:info@funzone.com" className="text-gray-300 hover:text-white transition-colors">
                  info@funzone.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-funzone-green mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} FUN ZONE Theme Park. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
