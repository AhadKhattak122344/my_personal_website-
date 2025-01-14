"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const particleCount = 80
    const connectionDistance = 250
    let particles: Particle[] = []

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 2
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = 'rgba(30, 144, 255, 0.8)'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    function createParticles() {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animateParticles() {
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
            ctx.strokeStyle = `rgba(30, 144, 255, ${0.5 - distance / connectionDistance * 0.5})`
            ctx.lineWidth = 1.2
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.closePath()
          }
        }
      }

      requestAnimationFrame(animateParticles)
    }

    function handleResize() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      createParticles()
    }

    handleResize()
    animateParticles()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />
      <div className="z-10 text-center space-y-12 px-4 py-8 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          className="group"
        >
          <Image
            src="/placeholder.svg"
            alt="Ahad Khattak"
            width={250}
            height={250}
            className="rounded-full mx-auto mb-8 transition-transform duration-500 ease-out group-hover:scale-103"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full flex justify-center"
        >
          <h1 style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-blue-600 px-8 py-6 flex flex-col items-center justify-center">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 text-blue-500">Hello, World.</span>
            <span className="block text-blue-700">I'm Ahad Khattak.</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <Button
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-blue-600 bg-transparent hover:bg-white/20 border-2 border-blue-400 backdrop-blur-sm transition-all duration-500 ease-out px-6 py-3 rounded-full w-full max-w-2xl group-hover:scale-103 shadow-lg hover:shadow-xl"
          >
            Student Full Stack Developer
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 sm:space-y-0 sm:space-x-4 w-full flex flex-col sm:flex-row justify-center items-center"
        >
          <Button 
            asChild 
            className="text-lg px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white transition-all duration-500 ease-out rounded-full w-full sm:w-auto hover:scale-103"
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button 
            asChild 
            className="text-lg px-8 py-3 bg-white/70 backdrop-blur-sm hover:bg-white/80 text-blue-500 border-2 border-blue-500 transition-all duration-500 ease-out rounded-full w-full sm:w-auto hover:scale-103"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

