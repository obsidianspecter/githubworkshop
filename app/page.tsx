"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import WorkshopHeader from "@/components/workshop-header"
import WorkshopContent from "@/components/workshop-content"
import RegistrationCTA from "@/components/registration-cta"
import Starfield from "@/components/starfield"

export default function WorkshopPoster() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <Starfield />
      <div className="container relative z-10 mx-auto px-4 py-8">
        <WorkshopHeader />
        <WorkshopContent />
        <RegistrationCTA />
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="mt-16 text-center text-sm text-gray-400"
        >
          <p>© {new Date().getFullYear()} Git & GitHub Workshop. All rights reserved.</p>
          <p className="mt-2">
            For more information, contact{" "}
            <a href="mailto:workshop@example.com" className="text-primary hover:underline">
              workshop@example.com
            </a>
          </p>
        </motion.footer>
      </div>
    </div>
  )
}

