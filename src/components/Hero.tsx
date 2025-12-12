import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Hero() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 150], [0, 80]);
  const y2 = useTransform(scrollY, [0, 150], [0, -40]);
  const opacity = useTransform(scrollY, [0, 150], [1, 0]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      <motion.div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/30 to-teal-500/30 rounded-full mix-blend-multiply filter blur-3xl"
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-teal-400/30 to-emerald-500/30 rounded-full mix-blend-multiply filter blur-3xl"
        style={{ y: y2 }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        style={{
          x: mousePosition.x / 100,
          y: mousePosition.y / 100
        }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-500/20 rounded-full"
            style={{
              left: `${(i * 123) % 100}%`,
              top: `${(i * 456) % 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
        className="container mx-auto px-6 py-20 text-center relative z-10"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-700 rounded-full mb-8 text-sm font-semibold backdrop-blur-sm shadow-lg"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={16} />
          </motion.div>
          <span>Established 2024</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-gray-900">StarLime Consultant &</span>
          <br />
          <span className="relative inline-block">
            <motion.span
              className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{
                backgroundPosition: ['0% center', '200% center']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              General Dealer Limited
            </motion.span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="relative inline-block"
        >
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto font-light italic"
            whileHover={{ scale: 1.02 }}
          >
            <span className="relative">
              "Empowering Progress Through Knowledge, Innovation and Excellence"
              <motion.div
                className="absolute -left-4 top-0 text-emerald-400 text-4xl opacity-50"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 0.5, x: 0 }}
                transition={{ delay: 1.5 }}
              >
                "
              </motion.div>
            </span>
          </motion.p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Transform your organization with research-driven, innovative solutions across consulting, audit, and business services
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            onClick={scrollToServices}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold overflow-hidden shadow-lg shadow-emerald-500/30 transition-shadow duration-300 hover:shadow-2xl hover:shadow-emerald-500/40"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center justify-center gap-2">
              Explore Our Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 rounded-xl font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <motion.div
              className="absolute inset-0 bg-emerald-50"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative">Get in Touch</span>
          </motion.button>

          <motion.button
            onClick={() => navigate('/about')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-emerald-600 hover:text-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: 'Service Areas', value: '28+', icon: TrendingUp, color: 'from-emerald-500 to-teal-500' },
            { label: 'Global Experts', value: 'PhD Level', icon: Sparkles, color: 'from-teal-500 to-emerald-500' },
            { label: 'Client Focus', value: '100%', icon: CheckCircle2, color: 'from-emerald-500 to-teal-500' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.05 }}
              className="relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              <motion.div
                className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="text-white" size={28} />
              </motion.div>
              <motion.div
                className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap justify-center gap-6 max-w-3xl mx-auto"
        >
          {['Evidence-Based', 'Innovative', 'Professional', 'Inclusive'].map((text, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-gray-100 text-gray-700 font-medium"
            >
              <CheckCircle2 size={20} className="text-emerald-600" />
              {text}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
