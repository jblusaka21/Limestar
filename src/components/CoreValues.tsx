import { motion } from 'framer-motion';
import { Shield, Award, Lightbulb, Briefcase, Users, Leaf, Heart } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold honesty and ethical standards in all our operations.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for high-quality outputs and continuous improvement.',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We develop creative and evidence-based solutions.',
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: Briefcase,
    title: 'Professionalism',
    description: 'We maintain competence, reliability, and accountability.',
    color: 'from-slate-500 to-slate-600'
  },
  {
    icon: Users,
    title: 'Inclusiveness',
    description: 'We promote gender equality, child protection, and social inclusion in all interventions.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'We encourage environmentally responsible and long-term development practices.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Heart,
    title: 'Client Focus',
    description: 'We provide customized services designed to meet unique client needs.',
    color: 'from-rose-500 to-rose-600'
  }
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core <span className="text-emerald-600">Values</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do and shape our approach to every challenge
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center mb-4 transform hover:rotate-6 transition-transform duration-300`}>
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
