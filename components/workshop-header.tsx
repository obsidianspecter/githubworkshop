"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function WorkshopHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mb-12 mt-8 text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-4 inline-block rounded-full bg-gradient-to-r from-purple-600 to-blue-500 p-1"
      >
        <div className="rounded-full bg-black px-6 py-2">
          <span className="text-sm font-medium uppercase tracking-wider text-white">Interactive Workshop</span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl md:text-7xl"
      >
        Git & GitHub Workshop
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mx-auto mb-8 max-w-2xl text-xl text-gray-300"
      >
        Master version control and collaborative development with industry experts
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mx-auto flex max-w-lg flex-col justify-center gap-4 rounded-lg border border-gray-800 bg-black/50 p-6 backdrop-blur-sm sm:flex-row"
      >
        <div className="flex items-center justify-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          <span>March 15, 2025</span>
        </div>
        <div className="hidden h-4 w-px bg-gray-700 sm:block"></div>
        <div className="flex items-center justify-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          <span>9:00 AM - 4:00 PM</span>
        </div>
        <div className="hidden h-4 w-px bg-gray-700 sm:block"></div>
        <div className="flex items-center justify-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          <span>Sri Ramakrishna Engineering College</span>
        </div>
      </motion.div>
    </motion.header>
  )
}

