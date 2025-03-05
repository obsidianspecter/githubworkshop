"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export default function RegistrationCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="mx-auto my-16 max-w-3xl rounded-xl border border-gray-800 bg-gradient-to-b from-black/60 to-purple-950/20 p-8 text-center backdrop-blur-sm"
    >
      <h2 className="mb-4 text-3xl font-bold">Ready to Master Git & GitHub?</h2>
      <p className="mb-8 text-lg text-gray-300">
        Join us for this immersive workshop and transform the way you collaborate on code. Limited seats available!
      </p>

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex items-center gap-2 rounded-lg border border-gray-800 bg-black/30 p-3">
          <Check className="h-5 w-5 text-primary" />
          <span className="text-sm">Hands-on exercises</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-gray-800 bg-black/30 p-3">
          <Check className="h-5 w-5 text-primary" />
          <span className="text-sm">Expert instructors</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-gray-800 bg-black/30 p-3">
          <Check className="h-5 w-5 text-primary" />
          <span className="text-sm">Certificate of completion</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-gray-800 bg-black/30 p-3">
          <Check className="h-5 w-5 text-primary" />
          <span className="text-sm">Networking opportunities</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-gray-800 bg-black/30 p-3">
          <Check className="h-5 w-5 text-primary" />
          <span className="text-sm">Take-home resources</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-gray-800 bg-black/30 p-3">
          <Check className="h-5 w-5 text-primary" />
          <span className="text-sm">Post-workshop support</span>
        </div>
      </div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mx-auto inline-block">
        <Button
          size="lg"
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-lg font-semibold"
          onClick={() => window.open("https://forms.gle/S5tkmD7rNgJM7qRj9", "_blank")}
        >
          <span className="relative z-10 flex items-center gap-2">
            Register Now
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
        </Button>
      </motion.div>

      <p className="mt-4 text-sm text-gray-400">
        Early bird pricing: ₹100 (Regular price: ₹200) • Limited seats available
      </p>
    </motion.section>
  )
}

