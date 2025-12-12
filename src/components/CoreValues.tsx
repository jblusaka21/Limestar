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
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Users,
    title: 'Inclusiveness',
    description: 'We promote gender equality, child protection, and social inclusion in all interventions.',
    color: 'from-emerald-500 to-emerald-600'
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Core <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do and shape our approach to every challenge
          </p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.05 }}
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              <motion.div
                className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 shadow-lg flex-shrink-0`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <value.icon className="text-white" size={28} />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
