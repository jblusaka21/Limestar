import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Users, Globe, Calendar, Mail } from 'lucide-react';

const sections = [
  {
    icon: FileText,
    title: 'Introduction',
    content: 'StarLime Consultant & General Dealer Limited ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.'
  },
  {
    icon: Eye,
    title: 'Information We Collect',
    content: 'We may collect information about you in a variety of ways:',
    list: [
      { title: 'Personal Information', desc: 'Name, email address, phone number, organization, and any other information you voluntarily provide through our contact forms.' },
      { title: 'Device Information', desc: 'Browser type, operating system, IP address, and device identifiers.' },
      { title: 'Usage Information', desc: 'Pages visited, time spent on pages, and interactions with our website.' },
      { title: 'Location Data', desc: 'General geographic information based on IP address.' }
    ]
  },
  {
    icon: Users,
    title: 'Use of Information',
    content: 'We use the information we collect for the following purposes:',
    list: [
      'To respond to your inquiries and provide requested services',
      'To improve our website and services',
      'To send you marketing communications (with your consent)',
      'To comply with legal obligations',
      'To protect against fraud and security threats',
      'To analyze website performance and user behavior'
    ]
  },
  {
    icon: Lock,
    title: 'Data Security',
    content: 'We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:',
    list: [
      'Encryption of sensitive data in transit and at rest',
      'Secure server infrastructure',
      'Regular security audits and assessments',
      'Restricted access to personal information',
      'Employee confidentiality agreements'
    ],
    note: 'However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.'
  },
  {
    icon: Globe,
    title: 'Third-Party Sharing',
    content: 'We do not sell, trade, or rent your personal information to third parties. We may share information with:',
    list: [
      'Service providers who assist in our operations (under confidentiality agreements)',
      'Legal authorities when required by law',
      'Business partners for service delivery (with your consent)'
    ]
  },
  {
    icon: Shield,
    title: 'Your Rights',
    content: 'You have the right to:',
    list: [
      'Access your personal information',
      'Correct inaccurate information',
      'Request deletion of your information',
      'Opt-out of marketing communications',
      'Request a copy of your data'
    ],
    note: 'To exercise these rights, please contact us at starLimeconsulting@gmail.com.'
  }
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 mb-12 text-white shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Shield size={32} />
              </div>
              <div>
                <h1 className="text-5xl font-bold">Privacy Policy</h1>
                <div className="flex items-center gap-2 text-white/90 mt-2">
                  <Calendar size={18} />
                  <span>Last updated: December 2024</span>
                </div>
              </div>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          {typeof item === 'string' ? (
                            <p className="text-gray-700">{item}</p>
                          ) : (
                            <>
                              <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                              <p className="text-gray-700 text-sm">{item.desc}</p>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.note && (
                  <div className="ml-16 mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                    <p className="text-gray-700 italic">{section.note}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border-2 border-emerald-200"
          >
            <div className="flex items-start gap-4">
              <Mail className="text-emerald-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
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
        </motion.div>
      </div>
    </div>
  );
}
