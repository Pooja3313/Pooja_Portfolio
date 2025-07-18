import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Wrench, Globe } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'React.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3',
        'Tailwind CSS', 'Bootstrap', 'Responsive Design', 'Redux', 'Context API'
      ]
    },
    {
      title: 'Backend Development',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      skills: [
        'Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication',
        'Middleware', 'Server-side Rendering', 'API Design', 'Error Handling'
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        'MongoDB', 'Mongoose', 'MySQL', 'Database Design',
         'Indexing', 
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        'Gitlab & GitHub', 'VS Code', 'Postman', 'npm/yarn',
         'Vite', 'Chrome DevTools', 'Figma', 'Agile/Scrum'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} text-white rounded-lg`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        delay: index * 0.2 + skillIndex * 0.05, 
                        duration: 0.4 
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                      }}
                      className="bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg text-center text-sm font-medium text-gray-700 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Core Strengths</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Full-Stack Development',
                  'MERN Stack Specialist',
                  'Responsive Web Design',
                  'API Integration',
                  'Problem Solving',
                  'Team Collaboration'
                ].map((strength, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium"
                  >
                    {strength}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;