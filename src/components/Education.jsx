import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const education = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "Birla Vishvakarma Mahavidyalaya College",
      location: "Anand, Gujarat",
      year: "2024",
      duration: "2021-2024",
        score: {
      label: "CPI",
      value: "7/10.0",
    },
      description:
        "Specialized in computer engineering with focus on software development, data structures, algorithms, and web technologies.",
      grade: "First Class",
      icon: GraduationCap,
    },
    {
      degree: "Diploma in Information Technology",
      institution: "MS University",
      location: "Vadodara, Gujarat",
      year: "2021",
      duration: "2018-2021",
        score: {
      label: "Percentage",
      value: "88.71%",
    },
      description:
        "Comprehensive program covering programming fundamentals, database management, web development, and software engineering principles.",
      grade: "Distinction",
       icon: GraduationCap,
    },
     {
      degree: "Secondary School Education (10th Grade)",
      institution: "Shree Swaminarayan Gurukul",
      location: "SavarKundla, Amreli, Gujarat",
      year: "2017",
      duration: "2016-2017",
        score: {
      label: "Percentage",
      value: "80.68%",
    },
      description:
        "Gained a strong academic foundation through focused learning in Mathematics, Science, and Language, preparing effectively for advanced education.",
      grade: "A2",
       icon: GraduationCap,
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey in computer science and information technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className={`relative mb-16 ${
                  index % 2 === 0
                    ? "md:ml-0 md:mr-auto md:pr-12"
                    : "md:ml-auto md:mr-0 md:pl-12"
                } md:w-1/2`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-auto md:right-0 transform md:translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10 md:top-8"></div>

                {/* Education Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="ml-16 md:ml-0 bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
                        <edu.icon size={24} />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {edu.year}
                        </span>
                      </div>

                      {/* CPI/Percentage badge */}
                      {edu.score && (
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {edu.score.label}: {edu.score.value}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">
                    {edu.institution}
                  </h4>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award size={16} />
                      <span>{edu.grade}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
