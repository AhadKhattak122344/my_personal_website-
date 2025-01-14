"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "AI-Powered Task Manager",
    image: "/placeholder.svg",
    description: "A task management application that uses AI to prioritize and categorize tasks.",
    github: "https://github.com/johndoe/ai-task-manager",
    demo: "https://ai-task-manager.demo.com"
  },
  {
    title: "Blockchain Voting System",
    image: "/placeholder.svg",
    description: "A secure and transparent voting system built on blockchain technology.",
    github: "https://github.com/johndoe/blockchain-voting",
    demo: "https://blockchain-voting.demo.com"
  },
  {
    title: "Eco-Friendly Smart Home",
    image: "/placeholder.svg",
    description: "An IoT project that optimizes energy consumption in smart homes using machine learning algorithms.",
    github: "https://github.com/johndoe/eco-smart-home",
    demo: "https://eco-smart-home.demo.com"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
                <Button asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

