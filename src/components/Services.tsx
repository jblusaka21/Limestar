import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Search, Calculator, Briefcase, ChevronDown, ArrowRight, Check, Sparkles } from 'lucide-react';

const serviceCategories = [
  {
    id: 'research',
    icon: Search,
    title: 'Research & Consulting Services',
    description: 'Comprehensive research and technical consulting across social, educational, economic, environmental, and development sectors.',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'from-emerald-50 to-emerald-100',
    borderColor: 'border-emerald-200',
    accentColor: 'emerald',
    services: [
      { title: 'Programme Monitoring and Evaluation', desc: 'Track and assess programs to ensure objectives are met' },
      { title: 'Foundation Learning and Child Development', desc: 'Design early learning programs for holistic development' },
      { title: 'Adult Education and Community Development', desc: 'Empower communities through skills training' },
      { title: 'Public Implementation Science', desc: 'Apply research insights into practical program design' },
      { title: 'Quality Assurance in Higher Education', desc: 'Maintain academic excellence through frameworks' },
      { title: 'Research Development and Management', desc: 'End-to-end support in research project planning' },
      { title: 'Program Development and Implementation', desc: 'Design and manage programs addressing needs' },
      { title: 'Child Care and Protection', desc: 'Ensure safety and well-being of children' },
      { title: 'Gender and Inclusion', desc: 'Mainstream gender equity across programs' },
      { title: 'Climate Change Management', desc: 'Develop contextualized environmental interventions' },
      { title: 'Policy Development & Evaluation', desc: 'Create and evaluate evidence-based policies' },
      { title: 'Environmental & Agriculture Management', desc: 'Sustainable agriculture and conservation guidance' }
    ]
  },
  {
    id: 'audit',
    icon: Calculator,
    title: 'Audit & Taxation Services',
    description: 'Professional auditing and taxation services ensuring transparency, accountability, and proper financial management.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    borderColor: 'border-blue-200',
    accentColor: 'blue',
    services: [
      { title: 'Independent Auditing', desc: 'Objective audits ensuring compliance and transparency' },
      { title: 'Audit Capacity Development', desc: 'Training on modern auditing and accounting standards' },
      { title: 'SMART Audit Reports', desc: 'Specific, measurable reports for strategic decisions' },
      { title: 'Tax Advisory & Compliance', desc: 'Tax planning and optimization strategies' },
      { title: 'Financial Risk Assessment', desc: 'Identify and mitigate financial risks' },
      { title: 'Internal Controls Audit', desc: 'Assess and strengthen internal processes' },
      { title: 'Fraud Detection & Forensics', desc: 'Investigate irregularities with solutions' },
      { title: 'Finance Team Capacity Building', desc: 'Equip staff with financial management skills' }
    ]
  },
  {
    id: 'general',
    icon: Briefcase,
    title: 'General Service Delivery',
    description: 'Wide array of services enhancing business growth, operational efficiency, and stakeholder engagement.',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'from-teal-50 to-teal-100',
    borderColor: 'border-teal-200',
    accentColor: 'teal',
    services: [
      { title: 'Marketing Services', desc: 'Strategies and campaigns for brand awareness' },
      { title: 'Web Development', desc: 'Responsive websites for digital presence' },
      { title: 'Business Process Improvement', desc: 'Streamline operations for efficiency' },
      { title: 'Administrative Support', desc: 'Professional documentation and record management' },
      { title: 'Training & Capacity Building', desc: 'Workshops for skills enhancement' },
      { title: 'Community Engagement', desc: 'Promote awareness and inclusive participation' },
      { title: 'Event Planning & Coordination', desc: 'Organize conferences and workshops' },
      { title: 'Enterprise Development', desc: 'Support SMEs with strategic planning' }
    ]
  }
];

export default function Services() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('research');

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full mb-6 text-sm font-semibold"
          >
            <Sparkles size={16} />
            <span>28+ Specialized Services</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Our </span>
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
            Comprehensive solutions across research, audit, and general business services
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">Delivered with excellence and professionalism</p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {serviceCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="mb-8"
            >
              <motion.button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                whileHover={{ scale: 1.01 }}
                className="w-full"
              >
                <div className={`relative bg-gradient-to-br ${category.bgColor} border-2 ${category.borderColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 text-left overflow-hidden group`}>
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="flex items-start justify-between gap-6 relative z-10">
                    <div className="flex items-start gap-6 flex-1">
                      <motion.div
                        className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <category.icon className="text-white" size={36} />
                      </motion.div>
                      <div className="text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-gray-700 mb-4 text-base leading-relaxed">{category.description}</p>
                        <motion.div
                          className="flex items-center gap-2 text-emerald-600 font-semibold"
                          whileHover={{ x: 5 }}
                        >
                          <span>{category.services.length} specialized services</span>
                          <ArrowRight size={18} />
                        </motion.div>
                      </div>
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedCategory === category.id ? 180 : 0,
                        scale: expandedCategory === category.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 mt-2 p-2 rounded-lg ${
                        expandedCategory === category.id ? `bg-${category.accentColor}-100` : 'bg-white/50'
                      }`}
                    >
                      <ChevronDown
                        className={expandedCategory === category.id ? `text-${category.accentColor}-600` : 'text-gray-400'}
                        size={28}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.button>

              <AnimatePresence>
                {expandedCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: 'auto',
                      transition: {
                        height: { duration: 0.4 },
                        opacity: { duration: 0.3, delay: 0.1 }
                      }
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 }
                      }
                    }}
                    className="overflow-hidden mt-6"
                  >
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.services.map((service, serviceIdx) => (
                        <motion.div
                          key={serviceIdx}
                          initial={{ opacity: 0, scale: 0.9, y: 20 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            transition: {
                              duration: 0.4,
                              delay: serviceIdx * 0.05
                            }
                          }}
                          whileHover={{
                            y: -8,
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                          className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <motion.div
                              className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Check size={20} className="text-white" />
                            </motion.div>
                            <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors leading-tight">
                              {service.title}
                            </h4>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 relative rounded-3xl overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: '200% 200%' }}
          />
          <div className="relative p-12 text-white text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Organization?</h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Our team of experts is ready to deliver tailored solutions that drive results
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-xl font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300"
              >
                Schedule a Consultation
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
