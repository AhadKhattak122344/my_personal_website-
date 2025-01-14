"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "react-intersection-observer"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationData = [
    {
      school: "George Mason University",
      location: "Fairfax, VA",
      degree: "Bachelor's Degree in Computer Science",
      date: "Expected 12/2026",
      details: [
        "Coursework: Analysis of Algorithms, Machine Learning, Calculus III, Linear Algebra, Operating Systems"
      ]
    },
    {
      school: "Northern Virginia Community College",
      location: "Loudoun, VA",
      degree: "Associate's Degree in Computer Science",
      date: "2023-5/2024",
      details: []
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="education" className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-300 opacity-20 pattern-grid-lg"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-300 relative z-10">Education</h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {educationData.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{edu.school}</span>
                    <span className="text-sm text-gray-500">{edu.date}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.location}</p>
                  {edu.details.length > 0 && (
                    <ul className="list-disc list-inside mt-2">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="text-sm">{detail}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

