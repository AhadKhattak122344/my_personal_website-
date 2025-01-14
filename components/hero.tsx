"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 30 // Reduced for a more zoomed-in effect
    const connectionDistance = 250 // Increased for more connections
    const colors = ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE']

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 3 // Increased particle size
        this.speedX = (Math.random() - 0.5) * 0.2 // Reduced speed for smoother movement
        this.speedY = (Math.random() - 0.5) * 0.2
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    function createParticles() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 - distance / connectionDistance * 0.3})`
            ctx.lineWidth = 1.5 // Increased line width
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.closePath()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    createParticles()
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createParticles()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - left) / width
        const y = (e.clientY - top) / height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const calculateTransform = (depth: number = 1) => {
    const maxMove = 10 * depth
    const xMove = (mousePosition.x - 0.5) * maxMove
    const yMove = (mousePosition.y - 0.5) * maxMove
    return `translate(${xMove}px, ${yMove}px)`
  }

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.5 }} // Increased opacity for more visibility
      />
      <div className="z-10 text-center space-y-10 px-4 py-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ transform: calculateTransform(0.5) }}
        >
          <Image
            src="/placeholder.svg"
            alt="Ahad Khattak"
            width={250} // Slightly reduced from 300
            height={250} // Slightly reduced from 300
            className="rounded-full mx-auto mb-6 shadow-lg border-4 border-blue-400"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          style={{ transform: calculateTransform(0.2) }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 text-blue-300"
            >
              Hello, World.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              I'm Ahad Khattak.
            </motion.span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          style={{ transform: calculateTransform(0.1) }}
        >
          <Button
            className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-blue-100 bg-blue-600/20 hover:bg-blue-600/30 backdrop-blur-sm transition-all duration-300 px-6 py-3 rounded-full shadow-lg hover:shadow-xl border border-blue-400"
          >
            Aspiring Software Developer
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
          className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center"
        >
          <Button 
            asChild 
            className="text-lg px-7 py-3 bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 rounded-full shadow-md hover:shadow-lg"
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button 
            asChild 
            className="text-lg px-7 py-3 bg-transparent hover:bg-white/10 text-blue-300 border-2 border-blue-400 transition-all duration-300 rounded-full shadow-md hover:shadow-lg"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

