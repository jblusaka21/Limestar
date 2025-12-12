import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Users, Award, Briefcase, Target, Heart, Globe, Zap, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const serviceData = [
  { name: 'Research & Consulting', value: 12 },
  { name: 'Audit & Taxation', value: 8 },
  { name: 'General Services', value: 8 }
];

const growthData = [
  { year: '2024 Q1', clients: 5 },
  { year: '2024 Q2', clients: 12 },
  { year: '2024 Q3', clients: 28 },
  { year: '2024 Q4', clients: 45 }
];

const timeline = [
  {
    year: '2024',
    title: 'Foundation',
    description: 'StarLime Consultant & General Dealer Limited officially established with core team of experienced professionals.'
  },
  {
    year: 'Today',
    title: 'Growth & Expansion',
    description: 'Serving diverse clients across multiple sectors with innovative, evidence-based solutions.'
  },
  {
    year: 'Future',
    title: 'Global Leadership',
    description: 'Vision to become a leading multidisciplinary consultancy known for transformational solutions.'
  }
];

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen pt-24 overflow-hidden">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden"
      >
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              About <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">StarLime</span>
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mb-8 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              StarLime Consultant & General Dealer Limited is a multidisciplinary consultancy and service delivery firm established in 2024 with a vision to provide research-driven and innovative solutions across various sectors. Our work is anchored in professionalism, inclusiveness, and a strong commitment to excellence. We focus on offering practical, data-informed services that promote organizational growth, community development, and efficient service delivery.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our team is composed of highly skilled professionals with diverse expertise spanning research, programme design, monitoring and evaluation, education, governance, climate change, technology, taxation, and organizational systems strengthening. With this multidisciplinary strength, StarLime strives to empower institutions, communities, and individuals by delivering reliable, context-specific, and results-oriented solutions.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Journey &<span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Milestones</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-emerald-100 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: index * 0.15 }}
                    >
                      {item.year}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Growth & <span className="text-emerald-600">Impact</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={serviceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#059669" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Growth 2024</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="clients" stroke="#059669" strokeWidth={3} dot={{ fill: '#059669', r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-emerald-600">Strengths</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Globe,
                title: 'Global Network',
                description: 'Access to a worldwide network of PhD-level experts and senior professionals.',
                color: 'from-emerald-500 to-teal-500'
              },
              {
                icon: Briefcase,
                title: 'Multidisciplinary Expertise',
                description: 'Professionals spanning research, education, governance, technology, and more.',
                color: 'from-teal-500 to-emerald-500'
              },
              {
                icon: Award,
                title: 'Evidence-Based Solutions',
                description: 'All recommendations rooted in research and industry best practices.',
                color: 'from-emerald-500 to-teal-500'
              },
              {
                icon: Users,
                title: 'Inclusive Approach',
                description: 'Commitment to gender equality, child protection, and social inclusion.',
                color: 'from-teal-500 to-emerald-500'
              },
              {
                icon: Heart,
                title: 'Client-Centric',
                description: 'Customized services designed specifically for your unique needs.',
                color: 'from-emerald-500 to-teal-500'
              },
              {
                icon: Zap,
                title: 'Proven Track Record',
                description: 'Successful delivery across multiple sectors and organizational contexts.',
                color: 'from-teal-500 to-emerald-500'
              }
            ].map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${strength.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-br ${strength.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <strength.icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {strength.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden"
      >
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Committed to Excellence
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl leading-relaxed mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              StarLime strives to empower institutions, communities, and individuals by providing reliable services that drive long-term development and operational effectiveness. We operate with unwavering commitment to professionalism, inclusiveness, and excellence in every project we undertake.
            </motion.p>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-white text-emerald-600 rounded-xl font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative">Start Your Journey With Us</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
