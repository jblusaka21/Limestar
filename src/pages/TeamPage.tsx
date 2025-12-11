import { motion } from 'framer-motion';
import { GraduationCap, Globe, Award, Users, Briefcase, BookOpen } from 'lucide-react';

const teamHighlights = [
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Our team spans across continents, bringing diverse perspectives and international best practices to every project.',
    stat: '5+ Countries'
  },
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'PhD-level researchers, postdoctoral fellows, and university professors with distinguished academic records.',
    stat: '30% PhD Level'
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Decades of combined experience delivering successful projects across multiple sectors and organizations.',
    stat: '50+ Projects'
  },
  {
    icon: Briefcase,
    title: 'Multi-Sectoral Expertise',
    description: 'Professionals specializing in education, health, agriculture, governance, finance, technology, and development.',
    stat: '10+ Sectors'
  }
];

const expertiseAreas = [
  { area: 'Research & Evaluation', experts: 15 },
  { area: 'Education & Development', experts: 12 },
  { area: 'Audit & Finance', experts: 10 },
  { area: 'Policy & Governance', experts: 8 },
  { area: 'Environment & Climate', experts: 7 },
  { area: 'Technology & Innovation', experts: 6 },
  { area: 'Health & Social Services', experts: 6 },
  { area: 'Agriculture & Food Security', experts: 5 }
];

const qualifications = [
  { level: 'PhD & Postdoctoral', percentage: 30, color: 'bg-emerald-600' },
  { level: 'Masters Degree', percentage: 40, color: 'bg-emerald-500' },
  { level: 'Bachelors Degree', percentage: 30, color: 'bg-emerald-400' }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-emerald-600">Team</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A global network of accomplished professionals delivering world-class expertise across multiple disciplines
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamHighlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                  <highlight.icon className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">{highlight.stat}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
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
              Academic <span className="text-emerald-600">Qualifications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team holds advanced degrees from leading universities worldwide
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {qualifications.map((qual, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="mb-8"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-gray-900">{qual.level}</span>
                  <span className="text-lg font-bold text-emerald-600">{qual.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${qual.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 + 0.3 }}
                    className={`h-full ${qual.color} rounded-full`}
                  />
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
              Areas of <span className="text-emerald-600">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our multidisciplinary team brings specialized knowledge across diverse sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {expertiseAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-emerald-100"
              >
                <div className="text-4xl font-bold text-emerald-600 mb-2">{area.experts}</div>
                <div className="text-gray-900 font-semibold">{area.area}</div>
                <div className="text-sm text-gray-500 mt-2">Expert Consultants</div>
              </motion.div>
            ))}
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
              Why Our <span className="text-emerald-600">Team</span> Excels
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 shadow-lg"
            >
              <BookOpen className="text-emerald-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
              <p className="text-gray-700 leading-relaxed">
                Our team stays at the forefront of their fields through ongoing research, professional development, and knowledge exchange.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 shadow-lg"
            >
              <Users className="text-emerald-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Approach</h3>
              <p className="text-gray-700 leading-relaxed">
                We leverage diverse perspectives and expertise through collaborative problem-solving and integrated service delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 shadow-lg"
            >
              <Award className="text-emerald-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Commitment</h3>
              <p className="text-gray-700 leading-relaxed">
                Every team member upholds the highest standards of professionalism, integrity, and excellence in service delivery.
              </p>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Growing Team</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're always looking for talented professionals who share our commitment to excellence, innovation, and positive impact.
            </p>
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
