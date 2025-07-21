import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/wawu white.png";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      navigate("/#about");
      setTimeout(() => {
        const section = document.getElementById("about");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const services = [
    { title: "Talent Identification", link: "/talent" },
    { title: "Comprehensive Support", link: "/compsupport" },
    { title: "Professional Training", link: "/pf" },
    { title: "Mentorship and Guidance", link: "/mentor" },
  ];

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about", onClick: handleAboutClick },
    { name: "INLL", path: "/inll" },
    { name: "Donate", path: "/donate" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        isScrolled ? "bg-[#11698e] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-base font-bold">
            {menuItems.map(({ name, path, onClick }) =>
              onClick ? (
                <a
                  key={name}
                  href={path}
                  onClick={onClick}
                  className="text-white hover:text-[#0D5C75] transition"
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={name}
                  to={path}
                  className="text-white hover:text-[#0D5C75] transition"
                >
                  {name}
                </Link>
              )
            )}

            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="text-white flex items-center hover:text-[#ffffff] transition"
              >
                Services <ChevronDown className="ml-1 w-5 h-5" />
              </button>
              {showDropdown && (
                <div
                  className="absolute left-0 mt-2 w-56 bg-transparent rounded-lg shadow-xl z-50"
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  {services.map((item, i) => (
                    <Link
                      key={i}
                      to={item.link}
                      className="block px-4 py-3 text-[#ffffff] hover:bg-gray-100 font-semibold"
                      onClick={() => setShowDropdown(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="fixed top-0 left-0 w-3/4 max-w-sm h-full bg-black z-50 p-6 overflow-y-auto">
            <button className="absolute top-4 right-4 text-white" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
            <nav className="mt-12 space-y-6 text-lg font-bold">
              {menuItems.map(({ name, path, onClick }) =>
                onClick ? (
                  <a
                    key={name}
                    href={path}
                    onClick={onClick}
                    className="block px-4 py-2 rounded-md text-white hover:text-[#0D5C75]"
                  >
                    {name}
                  </a>
                ) : (
                  <Link
                    key={name}
                    to={path}
                    className="block px-4 py-2 rounded-md text-white hover:text-[#0D5C75]"
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </Link>
                )
              )}

              <div className="border-t border-gray-700 pt-4">
                <p className="text-white font-semibold mb-2">Services</p>
                {services.map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    className="block px-4 py-2 text-white hover:text-[#0D5C75]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
