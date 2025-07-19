import React from 'react'
import { motion } from 'framer-motion'
import profilePic from '../assets/profile.jpg'
import resumePDF from '../assets/Suresh_Bhujel_Resume.pdf'
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaChevronDown
} from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative -mt-16 h-screen flex flex-col justify-center items-center
        text-center px-4
        bg-gray-100 dark:bg-gray-800
        text-gray-800 dark:text-white
      "
    >
      <motion.img
        src={profilePic}
        alt="Suresh Bhujel"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-32 h-32 rounded-full mb-6 border-4 border-primary"
      />

      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold mb-4"
      >
        Hi, I’m Suresh Bhujel
      </motion.h1>

      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg md:text-2xl mb-6"
      >
        Full‑Stack Developer | Crafting modern, scalable apps with React, Node.js & MongoDB.
      </motion.p>

      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex space-x-8 text-4xl mb-8"
        aria-hidden="true"
      >
        <FaReact />
        <FaNodeJs />
        <FaDatabase />
      </motion.div>

      
      <motion.a
        href={resumePDF}
        download="Suresh_Bhujel_Resume.pdf"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="
          px-6 py-3
          bg-white dark:bg-gray-700
          text-gray-800 dark:text-white
          font-semibold rounded-lg
          hover:bg-gray-100 dark:hover:bg-gray-600
          transition-colors duration-200
        "
      >
        Download Resume
      </motion.a>

      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-primary"
      >
        <FaChevronDown size={30} />
      </motion.div>
    </section>
  )
}
