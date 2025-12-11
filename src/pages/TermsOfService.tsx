import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle, Users, Globe, Calendar, Mail } from 'lucide-react';

const sections = [
  {
    icon: CheckCircle,
    title: 'Agreement to Terms',
    content: 'By accessing and using the StarLime Consultant & General Dealer Limited website and services, you accept and agree to be bound by and comply with these Terms of Service. If you do not agree to abide by the foregoing, please do not use this service.'
  },
  {
    icon: FileText,
    title: 'Use License',
    content: 'Permission is granted to temporarily download one copy of the materials (information or software) on StarLime\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:',
    list: [
      'Modify or copy the materials',
      'Use the materials for any commercial purpose or for any public display',
      'Attempt to decompile or reverse engineer any software contained on the website',
      'Remove any copyright or other proprietary notations from the materials',
      'Transfer the materials to another person or "mirror" the materials on any other server',
      'Violate any applicable laws or regulations'
    ]
  },
  {
    icon: AlertTriangle,
    title: 'Disclaimer',
    content: 'The materials on StarLime\'s website are provided on an \'as is\' basis. StarLime makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
  },
  {
    icon: Scale,
    title: 'Limitations',
    content: 'In no event shall StarLime or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on StarLime\'s website, even if StarLime or a StarLime authorized representative has been notified orally or in writing of the possibility of such damage.'
  },
  {
    icon: Users,
    title: 'User Responsibilities',
    content: 'When using our services, you agree to:',
    list: [
      'Provide accurate and truthful information',
      'Not engage in any unlawful or unauthorized activities',
      'Respect intellectual property rights',
      'Not transmit malware or harmful code',
      'Not attempt to gain unauthorized access to our systems',
      'Not harass or harm other users'
    ]
  },
  {
    icon: Globe,
    title: 'Governing Law',
    content: 'These terms and conditions are governed by and construed in accordance with the laws of the Republic of Zambia, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.'
  }
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 mb-12 text-white shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Scale size={32} />
              </div>
              <div>
                <h1 className="text-5xl font-bold">Terms of Service</h1>
                <div className="flex items-center gap-2 text-white/90 mt-2">
                  <Calendar size={18} />
                  <span>Last updated: December 2024</span>
                </div>
              </div>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              Please read these terms carefully before using our services. Your use of our website constitutes acceptance of these terms.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <section.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.title}</h2>
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </div>
                </div>

                {section.list && (
                  <div className="ml-16 space-y-3">
                    {section.list.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Important Notice</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Service Modifications</h4>
                      <p className="text-gray-700 text-sm">
                        StarLime may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Accuracy of Materials</h4>
                      <p className="text-gray-700 text-sm">
                        The materials appearing on StarLime's website could include technical, typographical, or photographic errors. StarLime does not warrant that any of the materials on its website are accurate, complete, or current.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Service Agreement Terms</h4>
                      <p className="text-gray-700 text-sm">
                        When you engage StarLime for consulting services, projects will be conducted according to agreed-upon scope and timeline. Confidentiality agreements will protect sensitive client information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200"
          >
            <div className="flex items-start gap-4">
              <Mail className="text-blue-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Questions About These Terms?</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-white rounded-lg p-6 space-y-2">
                  <p className="text-gray-900"><strong>StarLime Consultant & General Dealer Limited</strong></p>
                  <p className="text-gray-700">Email: starLimeconsulting@gmail.com</p>
                  <p className="text-gray-700">Phone: +260 (978) 155-958</p>
                  <p className="text-gray-700">Address: Off Palm Drive Road, Chelstone, Lusaka, Zambia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 mb-4">
              By continuing to use our services, you acknowledge that you have read and understood these terms.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contact Us for Clarifications
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
