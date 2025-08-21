import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, User, Heart, Users, Target, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personal, softSkills } = portfolioData;

  const skillIcons = {
    'Strong customer service orientation': <Heart className="w-5 h-5 text-red-500" />,
    'Clear and effective communication': <User className="w-5 h-5 text-blue-500" />,
    'Quick learner and self-motivated': <Zap className="w-5 h-5 text-yellow-500" />,
    'Team collaboration and adaptability': <Users className="w-5 h-5 text-green-500" />,
    'Leadership experience': <Target className="w-5 h-5 text-purple-500" />,
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better - my background, skills, and what drives me in the world of technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile Picture and Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Picture */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="relative inline-block">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 flex items-center justify-center">
                    <User className="w-32 h-32 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AG</span>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants}>
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  Who I Am
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
                  {personal.about}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Info and Soft Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {personal.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {personal.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {personal.location}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div variants={itemVariants}>
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Soft Skills
                </h3>
                <div className="space-y-3">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      {skillIcons[skill] || <Heart className="w-5 h-5 text-primary-500" />}
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 