import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
              <img
                src="/images/logo.png"
                alt="StarLime Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold">StarLime</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-4">
              Empowering Progress Through Knowledge, Innovation and Excellence
            </p>
            <p className="text-sm text-gray-500">Established 2024</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-emerald-400 transition-colors">Team</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">Research & Consulting</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">Audit & Taxation</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">General Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Get Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <div>starLimeconsulting@gmail.com</div>
                  
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <div>+260 (978) 155-958</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <div>Off Palm Drive Road<br />Chelstone, Lusaka, Zambia</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 StarLime Consultant & General Dealer Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
