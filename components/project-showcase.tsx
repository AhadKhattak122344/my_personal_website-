"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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

export function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20 bg-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-blue-900">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden smooth-transition hover-lift subtle-shadow h-full flex flex-col">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-800">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-blue-700">{project.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" className="smooth-transition hover-lift">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  </Button>
                  <Button asChild className="smooth-transition hover-lift">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

