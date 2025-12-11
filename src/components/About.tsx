import { motion } from 'framer-motion';
import { Target, Telescope, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white to-emerald-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-emerald-600">StarLime</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            StarLime Consultant & General Dealer Limited is a <strong>multidisciplinary consultancy and service delivery company</strong> established in 2024. We provide research-driven, practical, and innovative solutions supporting organizational growth, community development, and effective service delivery across sectors.
          </p>
          <button
            onClick={() => navigate('/about')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Learn Our Full Story
            <ArrowRight size={20} />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-emerald-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-emerald-600 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <Telescope className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              To become a leading multidisciplinary consultancy delivering evidence-based, innovative, and transformational solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border-2 border-teal-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-teal-600 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Deliver high-quality consulting, auditing, taxation, and business services supporting growth while upholding integrity and professionalism.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border-2 border-emerald-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:border-emerald-600 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <Shield className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Commitment</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Empower institutions, communities, and individuals through reliable services driving long-term development and operational effectiveness.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
