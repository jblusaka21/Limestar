import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 0.98)']
  );

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

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl ${
        isScrolled ? 'shadow-2xl shadow-emerald-500/5 border-b border-emerald-500/10' : 'shadow-lg shadow-emerald-500/5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src="/images/logo.png"
              alt="StarLime Logo"
              className="h-12 w-auto object-contain"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <div>
              <motion.div
                className="text-xl font-bold bg-gradient-to-r from-gray-900 to-emerald-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                StarLime
              </motion.div>
              <div className="text-xs text-gray-600 group-hover:text-emerald-600 transition-colors">
                Consultant & General Dealer Ltd.
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative group text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.label}
                </motion.span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="relative px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold overflow-hidden shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative">Get Started</span>
              </Link>
            </motion.div>
          </div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-emerald-600 transition-colors p-2 rounded-lg hover:bg-emerald-50"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-6 border-t border-emerald-500/10"
          >
            <motion.div
              className="flex flex-col gap-2"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.1 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
              initial="closed"
              animate="open"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  variants={{
                    open: { x: 0, opacity: 1 },
                    closed: { x: -20, opacity: 0 }
                  }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all font-medium py-3 px-4 rounded-lg"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  open: { x: 0, opacity: 1 },
                  closed: { x: -20, opacity: 0 }
                }}
                className="mt-2"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-center shadow-lg shadow-emerald-500/30"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
