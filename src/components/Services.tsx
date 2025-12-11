import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Calculator, Briefcase, ChevronDown, ArrowRight, Check } from 'lucide-react';

const serviceCategories = [
  {
    id: 'research',
    icon: Search,
    title: 'Research & Consulting Services',
    description: 'Comprehensive research and technical consulting across social, educational, economic, environmental, and development sectors.',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'from-emerald-50 to-emerald-100',
    borderColor: 'border-emerald-200',
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
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
            Comprehensive solutions across research, audit, and general business services
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">28+ specialized services delivered with excellence and professionalism</p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {serviceCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-8"
            >
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                className="w-full"
              >
                <div className={`bg-gradient-to-br ${category.bgColor} border-2 ${category.borderColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 text-left`}>
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-6 flex-1">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <category.icon className="text-white" size={32} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                        <p className="text-gray-700 mb-3">{category.description}</p>
                        <div className="flex items-center gap-2 text-emerald-600 font-medium">
                          <span>{category.services.length} specialized services</span>
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`text-gray-400 transition-transform duration-300 flex-shrink-0 mt-2 ${
                        expandedCategory === category.id ? 'rotate-180' : ''
                      }`}
                      size={24}
                    />
                  </div>
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expandedCategory === category.id ? 'auto' : 0,
                  opacity: expandedCategory === category.id ? 1 : 0,
                  marginTop: expandedCategory === category.id ? 16 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, serviceIdx) => (
                    <motion.div
                      key={serviceIdx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: serviceIdx * 0.05 }}
                      className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check size={18} className="text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{service.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to deliver tailored solutions that drive results
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-emerald-600 rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
