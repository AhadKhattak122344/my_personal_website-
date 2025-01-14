"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Vue.js", "Angular", "HTML5", "CSS3", "Sass"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Django", "Ruby on Rails", "ASP.NET"]
  },
  {
    name: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch"]
  },
  {
    name: "DevOps",
    skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "Azure"]
  }
]

export function SkillMatrix() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-secondary/50 p-4 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h5 className="font-semibold mb-2 text-center">{category.name}</h5>
            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

