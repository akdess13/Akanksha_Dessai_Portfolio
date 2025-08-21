import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education Timeline</h2>
          <p className="section-subtitle">
            My academic journey and achievements throughout my educational career
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card p-6 relative"
                  >
                    {/* Period Badge */}
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {edu.period}
                    </div>

                    {/* Degree */}
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Performance */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-accent-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Institution Details */}
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.institution}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Academic Excellence
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
              My educational journey reflects a consistent commitment to academic excellence, 
              with strong performance across all levels. Currently pursuing my Master's degree 
              while maintaining high academic standards, I believe in continuous learning and 
              applying theoretical knowledge to practical development challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 