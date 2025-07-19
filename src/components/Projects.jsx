import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'A personal developer portfolio built with React, Tailwind CSS, and Framer Motion.',
    link: 'https://yourportfolio.com'
  },
  {
    title: 'Bus Ticketing website',
    desc: 'A real-time bus booking system using php',
    link: 'https://github.com/shrimp-2/Bus-Ticketing'
  },
  {
    title: 'Online Momo Restaurant website',
    desc: 'MERN stack Momo site with Esewa payments and admin dashboard.',
    link: 'https://momo-house-b4ve.vercel.app/'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">
        Projects
      </h2>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View project: ${p.title}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="
              bg-white dark:bg-gray-700
              rounded-xl shadow-lg hover:shadow-2xl
              p-6 transform hover:-translate-y-2
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            "
            tabIndex={0}
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white transition-colors duration-200">
              {p.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
              {p.desc}
            </p>
            {/* Optional CTA */}
            <span className="inline-block mt-4 text-secondary hover:underline transition-colors duration-200">
              View&nbsp;Live⟶
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
