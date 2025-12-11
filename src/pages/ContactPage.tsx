import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageSquare, CheckCircle, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email anytime',
      detail: 'starLimeconsulting@gmail.com',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Mon-Fri from 8am to 5pm',
      detail: '+260 (978) 155-958',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come say hello at our office',
      detail: 'Off Palm Drive Road, Chelstone, Lusaka, Zambia',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

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
              Get in <span className="text-emerald-600">Touch</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your organization? We're here to help. Reach out to us through any of the channels below or fill out the form.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {contactMethods.map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${method.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                  <method.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{method.title}</h3>
                <p className="text-gray-600 text-center mb-4">{method.description}</p>
                <p className="text-gray-900 font-semibold text-center">{method.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8 text-center"
                >
                  <CheckCircle className="text-emerald-600 mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-700">We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                        placeholder="+260 XXX XXX XXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your Organization"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service of Interest *
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a service</option>
                        <option value="research">Research & Consulting</option>
                        <option value="audit">Audit & Taxation</option>
                        <option value="general">General Services</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under 5K ZMW</option>
                        <option value="5k-10k">5K - 10K ZMW</option>
                        <option value="10k-25k">10K - 25K ZMW</option>
                        <option value="25k-50k">25K - 50K ZMW</option>
                        <option value="over-50k">Over 50K ZMW</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (Within 1 month)</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months+">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-bold hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="text-emerald-600" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">Working Hours</h3>
                </div>
                <div className="space-y-4">
                  {workingHours.map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-emerald-200 last:border-0">
                      <span className="font-semibold text-gray-900">{schedule.day}</span>
                      <span className="text-gray-700">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="text-blue-600" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">Schedule a Consultation</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Book a free 30-minute consultation to discuss your project needs and explore how we can help achieve your goals.
                </p>
                <a
                  href="mailto:starLimeconsulting@gmail.com?subject=Consultation Request"
                  className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-center hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                >
                  Book Consultation
                </a>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white shadow-lg">
                <MessageSquare className="mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-4">Why Choose StarLime?</h3>
                <ul className="space-y-3">
                  {[
                    'Global network of PhD-level experts',
                    'Evidence-based innovative solutions',
                    'Multidisciplinary expertise across sectors',
                    'Commitment to integrity and excellence',
                    '24-hour response time guarantee',
                    'Customized solutions for your needs'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
                <Globe className="text-emerald-600 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Reach</h3>
                <p className="text-gray-700 leading-relaxed">
                  While we're based in Lusaka, Zambia, our global network allows us to serve clients across Africa and beyond, delivering world-class expertise wherever you need it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-white text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help transform your organization and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:starLimeconsulting@gmail.com"
                className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Email Us Now
              </a>
              <a
                href="tel:+260978155958"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                Call Us Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
