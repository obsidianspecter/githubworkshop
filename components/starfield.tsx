"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  z: number
  size: number
  color: string
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      starsRef.current = []
      const starCount = Math.floor((canvas.width * canvas.height) / 1000)

      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: Math.random() * 1.5 + 0.5,
          color: `rgba(${155 + Math.floor(Math.random() * 100)}, ${155 + Math.floor(Math.random() * 100)}, ${155 + Math.floor(Math.random() * 100)}, ${0.5 + Math.random() * 0.5})`,
        })
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star, i) => {
        // Move stars toward the viewer (increase z)
        star.z -= 0.5

        // If star is too close, reset it to the back
        if (star.z <= 0) {
          star.z = 1000
          star.x = Math.random() * canvas.width
          star.y = Math.random() * canvas.height
        }

        // Calculate position based on perspective
        const x = (star.x - canvas.width / 2) * (1000 / star.z) + canvas.width / 2
        const y = (star.y - canvas.height / 2) * (1000 / star.z) + canvas.height / 2

        // Calculate size based on distance
        const size = star.size * (1000 / star.z)

        // Only draw stars that are within the canvas
        if (x > 0 && x < canvas.width && y > 0 && y < canvas.height) {
          ctx.beginPath()
          ctx.fillStyle = star.color
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      frameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 h-full w-full bg-black" style={{ zIndex: 0 }} />
}

