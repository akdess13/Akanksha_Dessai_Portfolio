import React from 'react';
import { motion } from 'framer-motion';
import { Code, Monitor, Server, Database, Wrench, Cloud, Brain } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: skills.languages,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Frontend",
      icon: <Monitor className="w-6 h-6" />,
      skills: skills.frontend,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: skills.backend,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: skills.databases,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Dev Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: skills.devTools,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Cloud & Auth",
      icon: <Cloud className="w-6 h-6" />,
      skills: skills.cloudAuth,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "AI Tools",
      icon: <Brain className="w-6 h-6" />,
      skills: skills.aiTools,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Others",
      icon: <Code className="w-6 h-6" />,
      skills: skills.others,
      color: "from-gray-500 to-gray-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="group"
            >
              <div className="card p-6 h-full hover:scale-105 transition-transform duration-300">
                {/* Category Header */}
                <div className="text-center mb-4">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className="flex items-center space-x-2 p-2 rounded-md bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why These Skills Matter
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
              My diverse skill set enables me to work across the full development stack, from creating 
              responsive user interfaces to building robust backend systems and integrating cutting-edge AI technologies. 
              This versatility allows me to contribute effectively to various aspects of software development projects 
              and continuously adapt to emerging technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 