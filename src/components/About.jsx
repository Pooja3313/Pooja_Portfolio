import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Briefcase, Trophy, Book } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const highlights = [
    {
      icon: Code,
      title: "2+",
      description: "Years Experience",
    },
    {
      icon: Briefcase,
      title: "3",
      description: "Companies Worked",
    },
    {
      icon: Trophy,
      title: "5+",
      description: "Projects Completed",
    },
    {
      icon: Book,
      title: "B.Tech",
      description: "Computer Engineering",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Hello! I'm Pooja Sorathiya
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate MERN-stack developer with a strong foundation
                  in modern web technologies. My journey in software development
                  began during my studies, and I've since gained valuable
                  hands-on experience through internships and professional
                  roles.
                </p>
                <p>
                  I specialize in building full-stack web applications using
                  React.js, Node.js, Express.js, and MongoDB. My experience
                  spans from frontend development with modern React patterns to
                  backend API development and database design.
                </p>
                <p>
                  Currently based in Surat, I'm actively seeking exciting
                  opportunities in React.js development and MERN stack projects.
                  I'm particularly interested in freelancing opportunities and
                  full-time positions where I can contribute to innovative web
                  solutions.
                </p>
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2+</div>
                  <div className="text-gray-600">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">5+</div>
                  <div className="text-gray-600">Projects Built</div>
                </div>
              </div> */}
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mb-4">
                    <highlight.icon size={24} />
                  </div>
                  <h4 className="font-bold text-2xl text-gray-800 mb-1">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
