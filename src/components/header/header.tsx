import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../navigation/navigation";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 10;
        setScrolled(isScrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <header 
        className={`sticky top-0 w-full z-50 transition-all duration-200 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-md' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200"
              >
                MissingPersons
              </Link>
            </div>
  
            <Navigation />
  
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Login
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Register
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;