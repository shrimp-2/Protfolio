import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 max-w-2xl"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">
          About Me
        </h2>
        <p className="leading-relaxed text-lg text-gray-800 dark:text-white">
          I’m a passionate full-stack developer with a Bachelor's degree in Computer Science and Information Technology (BSc CSIT).
          I specialize in building full-fledged applications using the MERN stack (MongoDB, Express, React, Node.js).
          With a strong foundation in both frontend and backend, I enjoy turning ideas into interactive, scalable solutions.
          I’m always eager to learn new technologies and collaborate on impactful projects.
        </p>
      </motion.div>
    </section>
  )
}
