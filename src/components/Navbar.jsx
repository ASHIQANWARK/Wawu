import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/WAWU.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAboutClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#about");
      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }

    setIsOpen(false);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about", onClick: handleAboutClick },
    { name: "INLL", path: "/inll" },
    // { name: "Support Us", path: "/support-us" },
    // { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent-lg"}
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="WAWU Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map(({ name, path, onClick }) =>
              onClick ? (
                <a
                  key={name}
                  href={path}
                  onClick={onClick}
                  className={`font-extrabold ${
                    isScrolled ? "text-[#11698E]" : "text-white"
                  } hover:text-[#0D5C75] transition duration-300`}
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={name}
                  to={path}
                  className={`font-extrabold ${
                    isScrolled ? "text-[#11698E]" : "text-white"
                  } hover:text-[#0D5C75] transition duration-300`}
                >
                  {name}
                </Link>
              )
            )}
          </div>

          {/* Donate Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              to="/donate"
              className={`px-5 py-2 ${
                isScrolled ? "bg-[#11c120]" : "bg-white text-[#11698E]"
              } rounded-lg font-bold hover:bg-[#0D5C75] hover:text-white transition duration-300`}
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          <div
            className={`fixed top-0 left-0 w-3/4 max-w-sm h-full bg-black shadow-lg z-50 p-6 transition-transform transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-[#11698E]"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            <nav className="mt-12 space-y-6 text-lg font-bold">
              {menuItems.map(({ name, path, onClick }) =>
                onClick ? (
                  <a
                    key={name}
                    href={path}
                    onClick={onClick}
                    className="block px-4 py-2 rounded-md text-[#11698E] hover:text-[#0D5C75]"
                  >
                    {name}
                  </a>
                ) : (
                  <Link
                    key={name}
                    to={path}
                    className="block px-4 py-2 rounded-md text-[#11698E] hover:text-[#0D5C75]"
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </Link>
                )
              )}

              <Link
                to="/donate"
                className="block bg-[#11698E] text-white rounded-lg py-3 text-center font-bold mt-6 hover:bg-[#0D5C75] transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
            </nav>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;