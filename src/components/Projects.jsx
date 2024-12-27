import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Logiance',
      description: 'Description of project 1',
      image: '/project1.jpg',
      tech: ['React', 'Tailwind', 'Node.js'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'RoomSync',
      description: 'RoomSync is a cutting-edge platform that integrates multiple machine learning models. It revolutionizes room management and enhances user experiences through advanced technologies.',
      image: './LOC.webp',
      tech: ['React', 'YOLO V5', 'TensorFlow', 'Postgre SQL', 'Python Image Processing', 'Flask'],
      link: '#',
      github: 'https://github.com/abdullahquantumx/LOC6.0'
    },
    {
      id: 3,
      title: 'FarmHelp',
      description: 'Description of project 1',
      image: '/project1.jpg',
      tech: ['Next.js', 'Tailwind', 'Node.js', 'TensorFlow', 'Flask'],
      link: '#',
      github: 'https://github.com/abdullahquantumx/FarmHelp'
    },
    {
      id: 4,
      title: 'FoodCoaster-2.0',
      description: 'Discover a unique experience crafted exclusively for NIT Rourkela! Our food delivery service is designed to bring tasty meals directly to you, right within the university campus. Enjoy the convenience of our exclusive offerings tailored for your taste buds.',
      image: './foodcoaster.png',
      tech: ['React', 'Tailwind', 'Node.js', 'Express js', 'MongoDB'],
      link: '#',
      github: 'https://github.com/abdullahquantumx/FoodCoaster-2.O-'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 inline-block">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10"
            >
              <div className="flex flex-col md:flex-row">
                <motion.div 
                  className="md:w-1/2 relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="h-64 md:h-full w-full object-cover"
                  />
                </motion.div>

                <div className="p-8 md:w-1/2 relative">
                  <motion.h3 
                    className="text-3xl font-bold mb-4 text-white"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {projects[currentIndex].title}
                  </motion.h3>

                  <motion.p 
                    className="text-gray-300 mb-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {projects[currentIndex].description}
                  </motion.p>

                  <motion.div 
                    className="flex flex-wrap gap-2 mb-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {projects[currentIndex].tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400
                                 rounded-full text-sm border border-blue-500/20
                                 hover:bg-blue-500/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <a
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10
                               text-white rounded-lg transition-all duration-300
                               border border-white/10 hover:border-white/20"
                    >
                      <FiGithub /> GitHub
                    </a>
                    <a
                      href={projects[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700
                               text-white rounded-lg transition-all duration-300"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4
                     bg-white/10 backdrop-blur-sm p-3 rounded-full
                     hover:bg-white/20 transition-all duration-300
                     border border-white/10 hover:border-white/20
                     text-white"
          >
            <FiArrowLeft className="text-xl" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4
                     bg-white/10 backdrop-blur-sm p-3 rounded-full
                     hover:bg-white/20 transition-all duration-300
                     border border-white/10 hover:border-white/20
                     text-white"
          >
            <FiArrowRight className="text-xl" />
          </button>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                         ${currentIndex === index 
                           ? 'w-8 bg-blue-500' 
                           : 'bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;