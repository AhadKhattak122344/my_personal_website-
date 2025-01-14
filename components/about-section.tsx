"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SkillBars } from "@/components/skill-bars"
import { TagCloud } from "@/components/tag-cloud"
import { SkillMatrix } from "@/components/skill-matrix"

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <Card className="text-center p-8 max-w-6xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">John Doe</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-2">Passionate Software Engineer</h3>
              <p className="text-muted-foreground">
                Dedicated to crafting elegant solutions to complex problems. With a keen interest in web development and AI, 
                I'm constantly exploring new technologies to create innovative applications that make a difference.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Technical Expertise</h3>
                <SkillBars />
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Skills & Interests</h3>
                <TagCloud />
              </div>
            </div>
            <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Skill Matrix</h3>
              <SkillMatrix />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

