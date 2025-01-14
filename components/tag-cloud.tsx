"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const tags = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "SQL",
  "Git", "AWS", "Docker", "CI/CD", "Agile", "Scrum", "RESTful APIs", "GraphQL", "Jest", "Cypress"
]

export function TagCloud() {
  const [shuffledTags, setShuffledTags] = useState(tags)

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      setShuffledTags([...tags].sort(() => Math.random() - 0.5))
    }, 5000)

    return () => clearInterval(shuffleInterval)
  }, [])

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-wrap justify-center">
        {shuffledTags.map((tag, index) => (
          <motion.span
            key={index}
            className="m-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.1 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

