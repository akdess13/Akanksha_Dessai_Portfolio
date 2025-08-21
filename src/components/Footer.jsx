import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500"></div>
      </div>

      <div className="container-custom px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AG</span>
              </div>
              <span className="text-xl font-bold">
                Akanksha Gauns Dessai
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              MCA Student & Full-Stack Developer passionate about creating innovative web solutions 
              and exploring cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a
                  href={`mailto:${personal.email}`}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <span className="text-gray-300">📍 {personal.location}</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300">
                © {currentYear} Akanksha Gauns Dessai. All rights reserved.
              </p>
            </div>

            {/* Made with Love */}
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-50"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
};

export default Footer; 