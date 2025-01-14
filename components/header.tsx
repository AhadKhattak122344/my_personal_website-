"use client"

import { motion } from 'framer-motion'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 backdrop-blur-md bg-background/80"
    >
      <Link href="/" className="text-2xl font-bold text-blue-600">
        Ahad Khattak
      </Link>
      <nav className="space-x-4">
        <Button asChild variant="ghost" className="transition-transform hover:scale-105">
          <Link href="#about">About</Link>
        </Button>
        <Button asChild variant="ghost" className="transition-transform hover:scale-105">
          <Link href="#projects">Projects</Link>
        </Button>
        <Button asChild variant="ghost" className="transition-transform hover:scale-105">
          <Link href="#skills">Skills</Link>
        </Button>
        <Button asChild variant="ghost" className="transition-transform hover:scale-105">
          <Link href="#contact">Contact</Link>
        </Button>
      </nav>
    </motion.header>
  )
}

