import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Bell, User } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const sections = [
    { name: "Missing Persons", url: "/", icon: <Search size={18} /> },
    { name: "Unclaimed Bodies", url: "/unclaimed", icon: <Bell size={18} /> },
    { name: "Add Missing Person", url: "/add", icon: <User size={18} /> }
  ];

  

  return (
    <nav className="relative">
      <div className="hidden md:flex items-center space-x-8">
        {sections.map((section, index) => (
          <Link
            key={index}
            to={section.url}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            <span className="opacity-75">{section.icon}</span>
            <span>{section.name}</span>
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 w-64 mt-2 py-2 bg-white rounded-lg shadow-xl border border-gray-100">
            {sections.map((section, index) => (
              <Link
                key={index}
                to={section.url}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="opacity-75">{section.icon}</span>
                <span>{section.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navigation