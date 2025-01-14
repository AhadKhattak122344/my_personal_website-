"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SkillBars } from "@/components/skill-bars"
import { TagCloud } from "@/components/tag-cloud"
import { SkillMatrix } from "@/components/skill-matrix"

export function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <Card className="text-center p-8 max-w-6xl mx-auto">
          <CardContent className="space-y-6">
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

