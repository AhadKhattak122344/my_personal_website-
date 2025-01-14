"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Brain, Globe, FileCode, Coffee, Database, FileJson, Terminal } from 'lucide-react'

const AnimatedIcon = ({ Icon }) => {
  return (
    <motion.div
      className="text-blue-300 opacity-50"
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Icon size={40} />
    </motion.div>
  )
}

export default function Skills() {
  const skillsData = [
    {
      category: "Technical Skills",
      icon: <Code className="w-8 h-8 text-blue-300" />,
      skills: ["Python", "Java", "SQL", "HTML/CSS", "Power BI", "Tableau", "Numpy", "Matplotlib", "Office Suite", "Automation"]
    },
    {
      category: "Soft Skills",
      icon: <Brain className="w-8 h-8 text-blue-300" />,
      skills: ["Adaptability", "Analytical thinking", "Teamwork", "Leadership", "Effective communication"]
    },
    {
      category: "Languages",
      icon: <Globe className="w-8 h-8 text-blue-300" />,
      skills: ["English", "Hindi", "Urdu", "Pashto"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute left-10 top-1/4">
        <AnimatedIcon Icon={FileCode} />
      </div>
      <div className="absolute right-10 top-1/3">
        <AnimatedIcon Icon={Coffee} />
      </div>
      <div className="absolute left-20 bottom-1/4">
        <AnimatedIcon Icon={Database} />
      </div>
      <div className="absolute right-20 bottom-1/3">
        <AnimatedIcon Icon={FileJson} />
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <AnimatedIcon Icon={Terminal} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold mb-16 text-center text-blue-300">Skills</h2>
        <motion.div
          className="flex flex-col items-center gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillsData.map((category, index) => (
            <motion.div key={index} className="w-full max-w-4xl" variants={itemVariants}>
              <div className="flex items-center justify-center mb-6">
                {category.icon}
                <h3 className="text-3xl font-semibold ml-3 text-blue-400">{category.category}</h3>
              </div>
              <div className="bg-blue-800 bg-opacity-30 rounded-lg p-8 shadow-lg backdrop-blur-sm">
                <ul className="flex flex-wrap justify-center gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="bg-blue-600 text-white px-5 py-2 rounded-full text-lg font-medium hover:bg-blue-500 transition-colors duration-200 shadow-md"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

