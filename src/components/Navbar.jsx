import { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // If you want to scroll to a section, use this
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { RiMenu4Fill } from "react-icons/ri";

const MenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <div className="md:hidden flex items-center">
      <motion.button
        onClick={toggleMenu}
        className="text-gray-300 hover:text-white p-2 rounded-lg focus:outline-none"
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <FiX size={24} /> : <RiMenu4Fill size={24} />}
      </motion.button>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems = ['home', 'tech', 'projects'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-blue-950/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div 
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className="text-2xl font-bold text-gray-300 cursor-pointer">
                Portfolio|ABD
              </h1>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="relative text-gray-300 text-lg hover:text-white px-3 py-2 
                           cursor-pointer transition-colors duration-300 capitalize
                           group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600
                                transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <MenuButton isOpen={isMobileMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-blue-950/90 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-3 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-white px-3 py-2 
                           rounded-lg text-base font-medium capitalize
                           hover:bg-white/5 transition-all duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
    </nav>
  );
};

export default Navbar;
