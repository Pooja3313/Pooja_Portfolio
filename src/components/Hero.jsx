import React from "react";
import { motion } from "framer-motion";
import { Download, ChevronDown, Sparkles, Code, Laptop } from "lucide-react";

const Hero = () => {
  const floatingIcons = [
    { Icon: Code, delay: 0, x: "10%", y: "20%" },
    { Icon: Laptop, delay: 1, x: "80%", y: "30%" },
    { Icon: Sparkles, delay: 2, x: "15%", y: "70%" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 md:pt-20 pb-20 md:pb-0"
    >
      {/* Floating Background Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.1,
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            delay,
            duration: 2,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute text-blue-300 hidden md:block"
          style={{ left: x, top: y }}
        >
          <Icon size={40} />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-600">P</span>
              </div>
            </div>
          </motion.div>

          {/* Animated Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6"
          >
            <motion.h1
              className="text-3xl md:text-6xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Pooja Sorathiya
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-2xl text-gray-600 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              MERN-Stack Developer
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed px-4"
          >
            I am a full-stack web developer with 2 years of hands-on experience
            building modern, user-centric applications. Skilled in both frontend
            and backend development, I specialize in React.js and the MERN
            stack. I enjoy crafting innovative solutions and transforming ideas
            into scalable, maintainable software through clean and efficient
            code.Currently seeking exciting opportunities in React.js development and MERN stack projects.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4"
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 md:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .querySelector("#contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center px-6 md:px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Scroll Indicator - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="hidden md:flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
