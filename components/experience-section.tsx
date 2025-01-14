"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const experiences = [
  {
    company: "Tech Innovators Inc.",
    logo: "/placeholder.svg",
    position: "Software Engineering Intern",
    date: "June 2022 - August 2022",
    description: "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on improving code quality and implementing new features."
  },
  {
    company: "DataDrive Solutions",
    logo: "/placeholder.svg",
    position: "Junior Data Analyst",
    date: "September 2021 - May 2022",
    description: "Assisted in data analysis and visualization projects using Python and SQL. Created dashboards to help clients make data-driven decisions."
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle>{exp.position}</CardTitle>
                    <p className="text-sm text-muted-foreground">{exp.company} | {exp.date}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

