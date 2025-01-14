"use client"

import { motion, useAnimation } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "Java", level: 70 },
]

export function SkillBars() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div className="max-w-md mx-auto space-y-4" ref={ref}>
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="space-y-2"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" } },
            hidden: { opacity: 0, y: 20 }
          }}
        >
          <div className="flex justify-between">
            <span className="font-medium">{skill.name}</span>
            <span className="text-muted-foreground">{skill.level}%</span>
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.2, ease: "easeInOut" }}
          >
            <Progress value={skill.level} className="h-2" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

