import { motion } from 'framer-motion';
import { Globe, GraduationCap, Users, Award } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const qualificationData = [
  { name: 'PhD & Postdoctoral', value: 30, color: '#059669' },
  { name: 'Masters Degree', value: 40, color: '#0d9488' },
  { name: 'Bachelors Degree', value: 30, color: '#10b981' }
];

export default function HumanResource() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Human Resource <span className="text-emerald-600">Capacity</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A global network of accomplished professionals delivering world-class expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Expertise Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={qualificationData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {qualificationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white border-2 border-emerald-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Global Talent Network</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    StarLime draws its human resource from across the globe, ensuring a diverse and highly skilled network of professionals.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-emerald-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-teal-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Academic Excellence</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our experts hold qualifications ranging from Bachelor's Degrees to Postdoctoral levels, ensuring relevant academic credentials and extensive field experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-emerald-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Distinguished Professionals</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We leverage a strong pool of accomplished PhD holders, senior researchers, and professors with distinguished service delivery track records.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-emerald-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-teal-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Multi-Sectoral Expertise</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This global talent base enriches our company with multi-sectoral perspectives, advanced knowledge, and high-level technical expertise.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
