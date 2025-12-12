import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Services' },
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact' }
  ];

  const serviceLinks = [
    { to: '/services', label: 'Research & Consulting' },
    { to: '/services', label: 'Audit & Taxation' },
    { to: '/services', label: 'General Services' },
    { to: '/contact', label: 'Get Quote' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <motion.img
                  src="/images/logo.png"
                  alt="StarLime Logo"
                  className="h-10 w-auto object-contain"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  StarLime
                </span>
              </Link>
              <p className="text-gray-400 leading-relaxed mb-4">
                Empowering Progress Through Knowledge, Innovation and Excellence
              </p>
              <p className="text-sm text-gray-500">Established 2024</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {serviceLinks.map((link, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <motion.li
                  className="flex items-start gap-3 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <Mail size={18} className="mt-1 flex-shrink-0" />
                  <div>
                    <div>starLimeconsulting@gmail.com</div>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <Phone size={18} className="mt-1 flex-shrink-0" />
                  <div>
                    <div>+260 (978) 155-958</div>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-start gap-3 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <div>Off Palm Drive Road<br />Chelstone, Lusaka, Zambia</div>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="border-t border-gray-800 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 StarLime Consultant & General Dealer Limited. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
