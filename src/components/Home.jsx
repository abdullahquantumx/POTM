import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['Developer', 'ML Enthusiast', 'Problem Solver'];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        if (displayedText.length === 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        if (displayedText.length === currentWord.length) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8  relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <motion.div 
        className="max-w-7xl mx-auto w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <motion.div 
            className="md:w-1/2 space-y-8 text-center md:text-left"
            variants={itemVariants}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Hi, I'm <br className="md:hidden" />
              <span className="mt-2 block md:inline text-gray-300">Abdullah Siddique</span>
            </h1>
            <div className="h-12 flex items-center justify-center md:justify-start">
              <p className="text-2xl md:text-3xl text-gray-300">
                A passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{displayedText}</span>
                <span className="animate-pulse text-purple-500">|</span>
              </p>
            </div>
            <motion.div 
              className="flex gap-6 justify-center md:justify-start"
              variants={itemVariants}
            >
              <a
                href="https://www.linkedin.com/in/abdullah-siddique-243365262/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 
                         hover:bg-white/10 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin className="text-2xl text-blue-600" />
              
              </a>
              <a
                href="https://github.com/abdullahquantumx"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 
                         hover:bg-white/10 hover:scale-110 transition-all duration-300"
              >
                <FaGithub className="text-2xl text-gray-400" />
               
              </a>
              <a
                href="https://drive.google.com/file/d/1A9KIlJ-13GkReWRP5fIaiDHrIwKa89BS/view?usp=drive_link"
                download
                className="group relative p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 
                         hover:bg-white/10 hover:scale-110 transition-all duration-300"
              >
                <FaDownload className="text-2xl text-gray-300" />
                
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-300  to-blue-400 
                 rounded-full blur-lg opacity-50 group-hover:opacity-100 
                 transition-opacity duration-300"></div>
              <div className="w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full 
                              opacity-20 animate-pulse"></div>
                <img
                  src="./dc.jpeg"
                  alt="Profile"
                  className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl 
                           transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;