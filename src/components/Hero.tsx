import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 py-20 text-center relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-8 text-sm font-medium"
        >
          <Sparkles size={16} />
          <span>Established 2024</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        >
          StarLime Consultant & <br />
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            General Dealer Limited
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto font-light italic"
        >
          "Empowering Progress Through Knowledge, Innovation and Excellence"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Transform your organization with research-driven, innovative solutions across consulting, audit, and business services
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button
            onClick={scrollToServices}
            className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Explore Our Services
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
          <button
            onClick={() => navigate('/about')}
            className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-lg font-medium hover:border-emerald-600 hover:text-emerald-600 hover:scale-105 transition-all duration-300"
          >
            Learn More
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: 'Service Areas', value: '28+', icon: '🎯' },
            { label: 'Global Experts', value: 'PhD Level', icon: '🌍' },
            { label: 'Client Focus', value: '100%', icon: '⭐' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-16 flex flex-wrap justify-center gap-6 max-w-3xl mx-auto"
        >
          {['Evidence-Based', 'Innovative', 'Professional', 'Inclusive'].map((text, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-700 font-medium">
              <CheckCircle2 size={20} className="text-emerald-600" />
              {text}
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
