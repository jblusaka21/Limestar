import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="/images/logo.png"
              alt="StarLime Logo"
              className="h-12 w-auto object-contain"
            />
            <div>
              <div className="text-xl font-bold text-gray-900">StarLime</div>
              <div className="text-xs text-gray-600">Consultant & General Dealer Ltd.</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Services
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Team
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Contact
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-emerald-600 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
              >
                Services
              </Link>
              <Link
                to="/team"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
              >
                Team
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
              >
                Contact
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-center block"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
