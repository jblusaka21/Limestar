import { motion } from 'framer-motion';
import { Search, Calculator, Briefcase, Check, TrendingUp, Users, Shield, ArrowRight } from 'lucide-react';

const serviceCategories = [
  {
    id: 'research',
    icon: Search,
    title: 'Research & Consulting Services',
    description: 'Comprehensive research and technical consulting across social, educational, economic, environmental, and development sectors.',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    services: [
      {
        title: 'Programme Monitoring and Evaluation',
        desc: 'Comprehensive M&E frameworks to track and assess program effectiveness, ensuring objectives are met and impact is measurable.',
        icon: TrendingUp
      },
      {
        title: 'Foundation Learning and Child Development',
        desc: 'Design evidence-based early learning programs that support holistic child development across cognitive, social, and emotional domains.',
        icon: Users
      },
      {
        title: 'Adult Education and Community Development',
        desc: 'Empower communities through targeted skills training, literacy programs, and capacity building initiatives.',
        icon: Shield
      },
      {
        title: 'Public Implementation Science',
        desc: 'Apply research insights into practical program design, ensuring evidence-based interventions are effectively implemented.',
        icon: TrendingUp
      },
      {
        title: 'Quality Assurance in Higher Education',
        desc: 'Develop and implement comprehensive quality assurance frameworks to maintain academic excellence and institutional standards.',
        icon: Shield
      },
      {
        title: 'Research Development and Management',
        desc: 'End-to-end support in research project planning, execution, data collection, analysis, and dissemination.',
        icon: Search
      },
      {
        title: 'Program Development and Implementation',
        desc: 'Design, manage, and evaluate programs that address community needs and organizational objectives.',
        icon: Briefcase
      },
      {
        title: 'Child Care and Protection',
        desc: 'Ensure safety, well-being, and rights protection of children through comprehensive safeguarding frameworks.',
        icon: Shield
      },
      {
        title: 'Gender and Inclusion',
        desc: 'Mainstream gender equity, disability inclusion, and social justice across programs and organizational practices.',
        icon: Users
      },
      {
        title: 'Climate Change Management',
        desc: 'Develop contextualized environmental interventions addressing climate adaptation, mitigation, and sustainability.',
        icon: TrendingUp
      },
      {
        title: 'Policy Development & Evaluation',
        desc: 'Create and evaluate evidence-based policies that drive effective governance and sustainable development.',
        icon: Briefcase
      },
      {
        title: 'Environmental & Agriculture Management',
        desc: 'Provide guidance on sustainable agriculture practices, natural resource management, and conservation strategies.',
        icon: Search
      }
    ]
  },
  {
    id: 'audit',
    icon: Calculator,
    title: 'Audit & Taxation Services',
    description: 'Professional auditing and taxation services ensuring transparency, accountability, and proper financial management.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    services: [
      {
        title: 'Independent Auditing',
        desc: 'Objective financial statement audits ensuring compliance with accounting standards and providing stakeholder confidence.',
        icon: Shield
      },
      {
        title: 'Audit Capacity Development',
        desc: 'Comprehensive training programs on modern auditing standards, techniques, and best practices for finance teams.',
        icon: Users
      },
      {
        title: 'SMART Audit Reports',
        desc: 'Specific, measurable, achievable, relevant, and time-bound audit reports that drive strategic decision-making.',
        icon: Briefcase
      },
      {
        title: 'Tax Advisory & Compliance',
        desc: 'Expert tax planning, optimization strategies, and compliance support to minimize liabilities and ensure regulatory adherence.',
        icon: Calculator
      },
      {
        title: 'Financial Risk Assessment',
        desc: 'Identify, analyze, and develop mitigation strategies for financial risks affecting organizational sustainability.',
        icon: TrendingUp
      },
      {
        title: 'Internal Controls Audit',
        desc: 'Comprehensive assessment and strengthening of internal processes to prevent fraud and ensure operational efficiency.',
        icon: Shield
      },
      {
        title: 'Fraud Detection & Forensics',
        desc: 'Investigate financial irregularities, trace fraudulent activities, and provide actionable solutions to prevent recurrence.',
        icon: Search
      },
      {
        title: 'Finance Team Capacity Building',
        desc: 'Equip staff with essential financial management skills, accounting knowledge, and reporting capabilities.',
        icon: Users
      }
    ]
  },
  {
    id: 'general',
    icon: Briefcase,
    title: 'General Service Delivery',
    description: 'Wide array of services enhancing business growth, operational efficiency, and stakeholder engagement.',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    services: [
      {
        title: 'Marketing Services',
        desc: 'Develop comprehensive marketing strategies, campaigns, and content that increase brand awareness and drive engagement.',
        icon: TrendingUp
      },
      {
        title: 'Web Development',
        desc: 'Create responsive, user-friendly websites that enhance digital presence and support business objectives.',
        icon: Briefcase
      },
      {
        title: 'Business Process Improvement',
        desc: 'Streamline operations, eliminate inefficiencies, and optimize workflows for enhanced productivity and cost savings.',
        icon: TrendingUp
      },
      {
        title: 'Administrative Support',
        desc: 'Professional documentation management, record keeping, and administrative services supporting organizational operations.',
        icon: Briefcase
      },
      {
        title: 'Training & Capacity Building',
        desc: 'Design and deliver workshops, training programs, and learning initiatives that enhance staff competencies.',
        icon: Users
      },
      {
        title: 'Community Engagement',
        desc: 'Promote stakeholder awareness, facilitate inclusive participation, and build strong community relationships.',
        icon: Users
      },
      {
        title: 'Event Planning & Coordination',
        desc: 'Organize successful conferences, workshops, seminars, and corporate events from concept to execution.',
        icon: Briefcase
      },
      {
        title: 'Enterprise Development',
        desc: 'Support SMEs and entrepreneurs with strategic planning, business model development, and growth strategies.',
        icon: TrendingUp
      }
    ]
  }
];

export default function ServicesPage() {
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
              Our <span className="text-emerald-600">Services</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions across research, audit, and general business services.
              We deliver 28+ specialized services with excellence, innovation, and professionalism.
            </p>
          </motion.div>
        </div>
      </section>

      {serviceCategories.map((category, categoryIdx) => (
        <section key={category.id} className={`py-24 ${categoryIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <category.icon className="text-white" size={40} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{category.title}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{category.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {category.services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`${category.bgColor} border-2 border-gray-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group`}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Organization?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our team of global experts is ready to deliver tailored solutions that drive measurable results and sustainable impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight size={20} />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                Contact Us Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
