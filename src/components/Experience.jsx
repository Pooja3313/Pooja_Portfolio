import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, Users, Code, Zap } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const experiences = [
    {
      title: 'Full-Stack Developer (MERN)',
      company: 'Ekta Infotech Services',
      location: 'Surat, Gujarat',
      duration: 'Present',
      type: 'Hybrid',
      description: 'Working on full-stack MERN applications with modern development practices and agile methodologies.',
      responsibilities: [
        'Developing scalable web applications using React.js and Node.js',
        'Implementing responsive UI components with modern CSS frameworks',
        'Designing and optimizing MongoDB database schemas',
        'Collaborating with cross-functional teams in agile environment'
      ],
      skills: ['React.js', 'Node.js', 'MongoDB','MYSQL', 'Express.js', 'REST APIs','React Hooks','Tailwind CSS'],
      icon: Code,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'React.js Developer',
      company: 'Tech Elecon Pvt. Ltd.',
      location: 'Anand, Gujarat',
      duration: '2023-2024',
      type: 'Full-time',
      description: 'Focused on frontend development using React.js and modern JavaScript frameworks.',
      responsibilities: [
        'Built responsive and interactive user interfaces',
        'Implemented state management solutions using Redux',
        'Integrated RESTful APIs and third-party services',
        'Optimized application performance and user experience'
      ],
      skills: ['React.js', 'Redux', 'JavaScript ES6+', 'CSS3', 'HTML5', 'React Hooks','Material UI'],
      icon: Briefcase,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'MERN Stack Intern',
      company: 'Venom Technologies Pvt. Ltd.',
      location: 'Anand, Gujarat',
      duration: '2023',
      type: 'Internship',
      description: 'Worked on industrial MERN stack project, gaining hands-on experience with full-stack development.',
      responsibilities: [
        'Developed full-stack web application using MERN technologies',
        'Learned industry best practices and coding standards',
        'Participated in code reviews and team meetings',
        'Implemented user authentication and authorization'
      ],
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT','Paymment Gateway'],
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development and MERN stack technologies
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className={`relative mb-16 ${
                  index % 2 === 0 ? 'md:ml-0 md:mr-auto md:pr-12' : 'md:ml-auto md:mr-0 md:pl-12'
                } md:w-1/2`}
              >
                {/* Timeline Node */}
                <div className={`absolute left-8 md:left-auto ${index % 2 === 0 ? 'md:right-0' : 'md:left-0'} transform md:translate-x-1/2 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-lg z-10 md:top-8`}></div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="ml-16 md:ml-0 bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 bg-gradient-to-r ${exp.color} text-white rounded-lg`}>
                        <exp.icon size={24} />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-800 mb-3">Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-600">
                          <Zap size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;