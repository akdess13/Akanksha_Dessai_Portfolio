import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, CheckCircle, Building } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My journey in the professional world, showcasing real-world project experience and achievements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experience.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>
              )}

              <div className="flex items-start space-x-6">
                {/* Timeline Dot */}
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <Briefcase className="w-8 h-8" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card p-8"
                  >
                    {/* Company and Role Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center space-x-2">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Duration Badge */}
                      <div className="mt-4 md:mt-0">
                        <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Achievements & Responsibilities:
                      </h4>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {achievement}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Technologies & Skills Applied:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {['MERN Stack', 'AWS Cognito', 'Hugging Face', 'React', 'Node.js', 'MongoDB', 'AWS S3', 'VS Code Extensions'].map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Growth
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
              My internship experience has been instrumental in bridging the gap between academic learning 
              and real-world application. Working on live projects has enhanced my problem-solving skills, 
              taught me the importance of collaboration, and given me hands-on experience with industry-standard 
              technologies and best practices.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Briefcase size={20} />
            <span>View Full Profile on LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 