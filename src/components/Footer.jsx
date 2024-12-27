import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Footer = () => {
  const fadeInUpVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <footer className="text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* About Section */}
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Abdullah Siddique
            </h3>
            <p className="text-gray-400">Building amazing web experiences</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['home', 'tech', 'projects'].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-white transition-colors duration-300 
                             cursor-pointer flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 transform scale-0 
                                 group-hover:scale-100 transition-transform duration-300" />
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:abdullahquantum369@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300 
                           flex items-center group"
                >
                  <FaEnvelope className="mr-3 text-blue-400 group-hover:text-blue-300" />
                  abdullahquantum369@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917737865846"
                  className="text-gray-400 hover:text-white transition-colors duration-300 
                           flex items-center group"
                >
                  <FaPhone className="mr-3 text-blue-400 group-hover:text-blue-300" />
                  +91 7737865846
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Platforms Section */}
          <motion.div
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Platforms I'm Active On
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/abdullah-siddique-243365262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 
                           flex items-center group"
                >
                  <FaLinkedin className="mr-3 text-blue-400 group-hover:text-blue-300" size={20} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/abdullahquantumx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 
                           flex items-center group"
                >
                  <FaGithub className="mr-3 text-gray-400 group-hover:text-white" size={20} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/abdullah_quantum/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 
                           flex items-center group"
                >
                  <SiLeetcode className="mr-3 text-yellow-500 group-hover:text-yellow-300" size={20} />
                  LeetCode
                </a>
              </li>
              <li>
                <a
                  href="https://www.geeksforgeeks.org/user/abdullahqul6se/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 
                           flex items-center group"
                >
                  <SiGeeksforgeeks className="mr-3 text-green-500 group-hover:text-green-300" size={20} />
                  GeeksforGeeks
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={fadeInUpVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Abdullah Siddique. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;