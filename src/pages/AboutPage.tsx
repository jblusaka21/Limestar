import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Users, Award, Briefcase, Target, Telescope, Heart, GraduationCap, Globe } from 'lucide-react';
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
    <div className="min-h-screen pt-24">
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              About <span className="text-emerald-600">StarLime</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              StarLime Consultant & General Dealer Limited is a multidisciplinary consultancy and service delivery firm established in 2024 with a vision to provide research-driven and innovative solutions across various sectors. Our work is anchored in professionalism, inclusiveness, and a strong commitment to excellence. We focus on offering practical, data-informed services that promote organizational growth, community development, and efficient service delivery. Through our consulting, auditing, taxation, and general business support services, we aim to equip clients with the tools, insights, and systems needed to navigate challenges and achieve sustainable progress.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed mb-6">
             Our team is composed of highly skilled professionals with diverse expertise spanning research, programme design, monitoring and evaluation, education, governance, climate change, technology, taxation, and organizational systems strengthening. With this multidisciplinary strength, StarLime Consultant & General Dealer Limited strives to empower institutions, communities, and individuals by delivering reliable, context-specific, and results-oriented solutions. We are dedicated to supporting long-term development, operational effectiveness, and transformative outcomes that enhance performance and create lasting impact.
            </p>
           
          </motion.div>
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
              Our Journey & <span className="text-emerald-600">Milestones</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                  <div className="text-4xl font-bold text-emerald-600 mb-3">{item.year}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                description: 'Access to a worldwide network of PhD-level experts and senior professionals.'
              },
              {
                icon: Briefcase,
                title: 'Multidisciplinary Expertise',
                description: 'Professionals spanning research, education, governance, technology, and more.'
              },
              {
                icon: Award,
                title: 'Evidence-Based Solutions',
                description: 'All recommendations rooted in research and industry best practices.'
              },
              {
                icon: Users,
                title: 'Inclusive Approach',
                description: 'Commitment to gender equality, child protection, and social inclusion.'
              },
              {
                icon: Heart,
                title: 'Client-Centric',
                description: 'Customized services designed specifically for your unique needs.'
              },
              {
                icon: Target,
                title: 'Proven Track Record',
                description: 'Successful delivery across multiple sectors and organizational contexts.'
              }
            ].map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <strength.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{strength.title}</h3>
                <p className="text-gray-700 leading-relaxed">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Committed to Excellence</h2>
            <p className="text-xl leading-relaxed mb-8 text-white/90">
              StarLime Consultant & General Dealer Limited strives to empower institutions, communities, and individuals by providing reliable services that drive long-term development and operational effectiveness. We operate with unwavering commitment to professionalism, inclusiveness, and excellence in every project we undertake.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Your Journey With Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
