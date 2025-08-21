import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Target, Award, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Extracurriculars = () => {
  const { extracurriculars } = portfolioData;

  const activityIcons = {
    'Played cricket at the district level': <Trophy className="w-6 h-6 text-yellow-500" />,
    'Participated as a volunteer in a hackathon during Infofest': <Activity className="w-6 h-6 text-blue-500" />,
    'Served as the Lady representative in the college council': <Users className="w-6 h-6 text-purple-500" />,
    'Student Placement Coordinator DCST 2024': <Target className="w-6 h-6 text-green-500" />,
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Extracurricular Activities</h2>
          <p className="section-subtitle">
            Beyond academics - my involvement in sports, leadership, and community activities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {extracurriculars.map((activity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="card p-8 h-full hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {/* Activity Icon */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 flex items-center justify-center">
                    {activityIcons[activity] || <Award className="w-8 h-8 text-primary-600 dark:text-primary-400" />}
                  </div>
                </div>

                {/* Activity Description */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 leading-relaxed">
                    {activity}
                  </h3>
                  
                  {/* Additional Context */}
                  {activity.includes('cricket') && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Represented at district level, demonstrating teamwork and sportsmanship
                    </p>
                  )}
                  
                  {activity.includes('hackathon') && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Contributed to organizing and supporting innovative tech events
                    </p>
                  )}
                  
                  {activity.includes('college council') && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Provided leadership and representation for student community
                    </p>
                  )}
                  
                  {activity.includes('Placement Coordinator') && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Facilitated career opportunities and industry connections for students
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extracurriculars Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Beyond the Code
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
              My extracurricular involvement has been crucial in developing essential life skills such as 
              leadership, teamwork, communication, and time management. These experiences complement my 
              technical abilities and help me become a well-rounded professional who can work effectively 
              in diverse team environments and take on leadership roles when needed.
            </p>
          </div>
        </motion.div>

        {/* Skills Developed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Skills Developed Through Activities
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { skill: 'Leadership', icon: <Target className="w-8 h-8 text-green-500" />, description: 'Leading teams and initiatives' },
              { skill: 'Teamwork', icon: <Users className="w-8 h-8 text-blue-500" />, description: 'Collaborating effectively with others' },
              { skill: 'Communication', icon: <Activity className="w-8 h-8 text-purple-500" />, description: 'Clear and effective interaction' },
              { skill: 'Sportsmanship', icon: <Trophy className="w-8 h-8 text-yellow-500" />, description: 'Fair play and resilience' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.skill}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Extracurriculars; 