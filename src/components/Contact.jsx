import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 max-w-md"
      >
        <h2 className="text-4xl font-bold mb-6 text-white dark:text-gray-200 text-center">
          Contact Me
        </h2>
        <p className="text-center text-gray-800 dark:text-gray-400 mb-6">
          Got a project idea or question? Send me a message below or email me directly at<br/>
          <a
            href="mailto:youremail@example.com"
            className="text-secondary hover:underline transition-colors duration-200"
          >
            youremail@example.com
          </a>
        </p>

        <form
          action="https://formspree.io/f/yourFormId"
          method="POST"
          className="flex flex-col space-y-4"
        >
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="
              p-4 rounded-lg
              bg-white dark:bg-gray-700
              text-gray-800 dark:text-white
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              transition-colors duration-200
            "
          />

         
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="
              p-4 rounded-lg
              bg-white dark:bg-gray-700
              text-gray-800 dark:text-white
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              transition-colors duration-200
            "
          />

          
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="
              p-4 rounded-lg
              bg-white dark:bg-gray-700
              text-gray-800 dark:text-white
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              transition-colors duration-200
            "
          />

          <button
            type="submit"
            className="
              py-4
              bg-secondary
              text-white
              font-semibold
              rounded-lg
              hover:bg-secondary-dark
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            "
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  )
}
