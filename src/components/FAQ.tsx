import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What services does StarLime offer?',
    answer: 'StarLime offers comprehensive consulting services across three main areas: Research & Consulting (28+ services), Audit & Taxation Services, and General Service Delivery including marketing, web development, training, and business process improvement.'
  },
  {
    question: 'How can I engage StarLime for a project?',
    answer: 'You can engage us by filling out the contact form on our website, calling us at +260 (978) 155-958, or emailing starLimeconsulting@gmail.com. We will discuss your needs and provide a customized proposal for your project.'
  },
  {
    question: 'What is your project timeline?',
    answer: 'Project timelines vary based on scope and complexity. We work with clients to establish realistic timelines and maintain regular communication throughout the project lifecycle to ensure on-time delivery.'
  },
  {
    question: 'Do you offer training and capacity building?',
    answer: 'Yes! We offer comprehensive training programs including audit capacity development, finance team capacity building, and general staff training across various technical and professional areas.'
  },
  {
    question: 'What is your team composition?',
    answer: 'Our team consists of PhD-level researchers, postdoctoral fellows, university professors, and senior professionals with expertise spanning education, governance, technology, health, agriculture, and more across 5+ countries.'
  },
  {
    question: 'How do you ensure quality in your work?',
    answer: 'Quality assurance is embedded in our processes through rigorous methodologies, regular audits, peer reviews, and our commitment to evidence-based solutions. We maintain high standards across all deliverables.'
  },
  {
    question: 'Can you work on international projects?',
    answer: 'Yes! Our global network allows us to work on projects across Africa and internationally. We have experience delivering services to diverse organizations worldwide.'
  },
  {
    question: 'What about confidentiality and data security?',
    answer: 'We take confidentiality and data security very seriously. All client information is protected through confidentiality agreements, secure data handling practices, and compliance with international standards.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="text-emerald-600" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked <span className="text-emerald-600">Questions</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, team, and processes.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-emerald-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 flex-1">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 flex-shrink-0"
                >
                  <ChevronDown className="text-emerald-600" size={24} />
                </motion.div>
              </button>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: openIndex === index ? 1 : 0,
                  height: openIndex === index ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 border-t border-gray-100 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="mb-6 text-white/90">
            Our team is ready to help. Get in touch with us for more information about our services.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-emerald-600 rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
