import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/wawu white.png";
import { Menu, X, ChevronDown, Star, Users, Trophy, Target } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleAboutClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === "/") {
      const section = document.getElementById("about");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("about");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const services = [
    { 
      title: "Talent Identification", 
      link: "/talent",
      icon: Star,
      description: "Advanced scouting and player assessment"
    },
    { 
      title: "Comprehensive Support", 
      link: "/compsupport",
      icon: Users,
      description: "Holistic player development programs"
    },
    { 
      title: "Professional Training", 
      link: "/pf",
      icon: Target,
      description: "Elite coaching and skill enhancement"
    },
    { 
      title: "Mentorship and Guidance", 
      link: "/mentor",
      icon: Trophy,
      description: "Career guidance and mentorship"
    },
  ];

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about", onClick: handleAboutClick },
    { name: "INLL", path: "/inll" },
    { name: "Donate", path: "/donate" },
    { name: "Contact", path: "/contact" },
  ];

  const isActivePath = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.includes(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-900/10 border-b border-white/20" 
          : "bg-transparent"
      }`}
    >
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r from-blue-900/5 via-cyan-900/5 to-blue-900/5 transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group relative z-10"
            onClick={() => setIsOpen(false)}
          >
            <div className={`p-2 rounded-2xl transition-all duration-300 ${
              isScrolled 
                ? "bg-gradient-to-br from-blue-600/10 to-cyan-500/10" 
                : "bg-white/10"
            }`}>
              <img 
                src={logo} 
                alt="WAWU Foundation" 
                className={`h-12 w-auto transition-all duration-300 ${
                  isScrolled ? "filter brightness-0" : "brightness-100"
                }`} 
              />
            </div>
           
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map(({ name, path, onClick }) => {
              const isActive = isActivePath(path);
              return onClick ? (
                <a
                  key={name}
                  href={path}
                  onClick={onClick}
                  className={`relative px-6 py-3 font-sans font-medium text-sm tracking-wide transition-all duration-300 group ${
                    isScrolled 
                      ? isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600" 
                      : isActive ? "text-white" : "text-white/90 hover:text-white"
                  }`}
                >
                  {name}
                  <span className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${
                    isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                  }`}></span>
                </a>
              ) : (
                <Link
                  key={name}
                  to={path}
                  className={`relative px-6 py-3 font-sans font-medium text-sm tracking-wide transition-all duration-300 group ${
                    isScrolled 
                      ? isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600" 
                      : isActive ? "text-white" : "text-white/90 hover:text-white"
                  }`}
                >
                  {name}
                  <span className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 ${
                    isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                  }`}></span>
                </Link>
              );
            })}

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown(true)}
              onMouseLeave={() => setActiveDropdown(false)}
            >
              <button
                className={`flex items-center px-6 py-3 font-sans font-medium text-sm tracking-wide transition-all duration-300 group ${
                  isScrolled 
                    ? "text-gray-700 hover:text-blue-600" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                Services
                <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                  activeDropdown ? "rotate-180" : ""
                }`} />
                <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 w-0 group-hover:w-4/5"></span>
              </button>

              {/* Mega Dropdown */}
              {activeDropdown && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-50">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-500">
                    <h3 className="font-serif font-bold text-white text-lg">Our Services</h3>
                    <p className="text-white/90 text-sm font-sans">Comprehensive football development</p>
                  </div>
                  <div className="p-2">
                    {services.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={index}
                          to={item.link}
                          className="flex items-center p-3 rounded-xl hover:bg-blue-50/80 transition-all duration-200 group"
                          onClick={() => setActiveDropdown(false)}
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mr-3">
                            <IconComponent className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-sans font-semibold text-gray-900 text-sm group-hover:text-blue-600">
                              {item.title}
                            </div>
                            <div className="font-sans text-gray-600 text-xs">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              to="/donate"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-sans font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/20"
            >
              Support Our Mission
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 z-50 ${
              isScrolled ? "bg-blue-600/10 text-blue-900" : "bg-white/10 text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
        isOpen 
          ? "opacity-100 visible" 
          : "opacity-0 invisible"
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-full bg-gradient-to-b from-blue-900 to-cyan-800 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          {/* Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-xl">
                <img src={logo} alt="WAWU Foundation" className="h-10 w-auto" />
              </div>
              <div className="text-white">
                <div className="font-serif text-lg font-bold">WAWU FOUNDATION</div>
                <div className="font-sans text-xs opacity-80">Football Excellence</div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="p-6 space-y-2">
            {menuItems.map(({ name, path, onClick }) => {
              const isActive = isActivePath(path);
              return onClick ? (
                <a
                  key={name}
                  href={path}
                  onClick={(e) => {
                    onClick(e);
                    setIsOpen(false);
                  }}
                  className={`block px-4 py-3 rounded-xl font-sans font-medium transition-all duration-200 ${
                    isActive 
                      ? "bg-white/20 text-white" 
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={name}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-sans font-medium transition-all duration-200 ${
                    isActive 
                      ? "bg-white/20 text-white" 
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {name}
                </Link>
              );
            })}

            {/* Services Accordion */}
            <div className="border-t border-white/10 pt-4 mt-4">
              <div className="px-4 py-3 text-white/80 font-sans font-medium">
                Services
              </div>
              <div className="space-y-1">
                {services.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={index}
                      to={item.link}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                    >
                      <IconComponent className="w-4 h-4 mr-3" />
                      <span className="font-sans text-sm">{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="pt-6 border-t border-white/10 mt-6">
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-sans font-semibold text-center rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Support Our Mission
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;