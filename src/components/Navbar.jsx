import { useState } from "react";
import { FaBars, FaTimes, FaBookOpen } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Features", to: "features" },
    { name: "Statistics", to: "statistics" },
    { name: "Courses", to: "courses" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed w-full z-50">
      {/* Navbar Bar */}
      <div className="max-w-9xl mx-auto px-6 flex justify-between items-center h-16 bg-white/70 backdrop-blur-md shadow-md">
        {/* Logo */}
        <div className="flex items-center text-2xl font-bold text-red-600 cursor-pointer z-50">
          <FaBookOpen className="mr-2" /> IELTS Institute
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 z-50">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.to}
                smooth={true}
                duration={800}
                offset={-64}
                className="text-gray-700 hover:text-red-600 cursor-pointer transition text-lg"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="md:hidden cursor-pointer text-gray-700 z-[60] absolute top-0 right-0 p-6"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes size={28} className="text-red-600" /> : <FaBars size={28} />}
      </div>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          bg-white/50 backdrop-blur-lg`}
      >
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            smooth={true}
            duration={800}
            offset={-64}
            onClick={() => setIsOpen(false)}
            className="text-2xl text-black hover:text-red-600 cursor-pointer transition"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;