import { 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaGitAlt 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiGo, 
  SiGraphql, 
  SiApollographql,
  SiMongodb, 
  SiPostgresql, 
  SiMysql,
  SiTensorflow,
  SiJavascript,
  SiTailwindcss
} from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import { motion } from 'framer-motion';

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  const technologies = [
    { 
      name: 'Python', 
      icon: <FaPython className="text-5xl text-[#3776AB] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" /> 
    },
    { 
      name: 'React', 
      icon: <FaReact className="text-5xl text-[#61DAFB] group-hover:scale-125 group-hover:rotate-180 transition-all duration-500" /> 
    },
    { 
      name: 'JavaScript', 
      icon: <SiJavascript className="text-5xl text-[#F7DF1E] group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" /> 
    },
    { 
      name: 'TypeScript', 
      icon: <SiTypescript className="text-5xl text-[#3178C6] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" /> 
    },
    { 
      name: 'Node.js', 
      icon: <FaNodeJs className="text-5xl text-[#339933] group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" /> 
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs className="text-5xl text-black group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="text-5xl text-[#06B6D4] group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" />
    },
    { 
      name: 'Go', 
      icon: <SiGo className="text-5xl text-[#00ADD8] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" /> 
    },
    { 
      name: 'GraphQL', 
      icon: <SiGraphql className="text-5xl text-[#E10098] group-hover:scale-125 group-hover:rotate-45 transition-all duration-300" /> 
    },
    { 
      name: 'Apollo GraphQL', 
      icon: <SiApollographql className="text-5xl text-[#311C87] group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" /> 
    },
    { 
      name: 'Docker', 
      icon: <FaDocker className="text-5xl text-[#2496ED] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" /> 
    },
    { 
      name: 'MongoDB', 
      icon: <SiMongodb className="text-5xl text-[#47A248] group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" /> 
    },
    { 
      name: 'PostgreSQL', 
      icon: <SiPostgresql className="text-5xl text-[#4169E1] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" /> 
    },
    { 
      name: 'MySQL', 
      icon: <SiMysql className="text-5xl text-[#4479A1] group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" /> 
    },
    { 
      name: 'TensorFlow', 
      icon: <SiTensorflow className="text-5xl text-[#FF6F00] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" /> 
    },
    { 
      name: 'CNN', 
      icon: <TbBrain className="text-5xl text-[#FF4785] group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" /> 
    },
    { 
      name: 'Git', 
      icon: <FaGitAlt className="text-5xl text-[#F05032] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" /> 
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12 py-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 inline-block">
            Tech Stack
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group relative p-4 bg-white/5 backdrop-blur-sm rounded-xl 
                       hover:bg-white/10 transition-all duration-300 
                       border border-white/10 hover:border-white/20
                       flex flex-col items-center justify-center
                       hover:transform hover:-translate-y-1 hover:shadow-xl
                       cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center h-16">
                  {tech.icon}
                </div>
                <h3 className="text-sm font-medium text-white/90 mt-3 text-center
                             group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform 
                            -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-0 
                            group-hover:animate-shine" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};


export default TechStack;