import { motion } from 'framer-motion'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Education from '@/components/education'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Awards from '@/components/awards'
import Resume from '@/components/Resume'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Header />
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Resume />
      <Contact />
    </motion.main>
  )
}

