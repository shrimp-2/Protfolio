import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 text-gray-800 dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center"
      >
        <p className="mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} Suresh Bhujel. All rights reserved.
        </p>

        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/shrimp-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-800 dark:text-white hover:text-secondary transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sureshbhujel/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-800 dark:text-white hover:text-secondary transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-800 dark:text-white hover:text-secondary transition-colors duration-200"
          >
            <FaTwitter />
          </a>
        </div>
      </motion.div>
    </footer>
  )
}
