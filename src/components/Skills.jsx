import React from 'react'
import { motion } from 'framer-motion'
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiPhp
} from 'react-icons/si'

const skills = [
  { name: 'JavaScript',    icon: SiJavascript },
  { name: 'React',         icon: SiReact },
  { name: 'Node.js',       icon: SiNodedotjs },
  { name: 'MongoDB',       icon: SiMongodb },
  { name: 'Tailwind CSS',  icon: SiTailwindcss },
  { name: 'Express.js',    icon: SiExpress },
  { name: 'HTML5',         icon: SiHtml5 },
  { name: 'CSS',          icon: SiCss3 },
  { name: 'PHP',           icon: SiPhp }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-10 text-white
      ">
        Skills
      </h2>

      <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill, i) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="
                flex flex-col items-center p-6
                bg-white dark:bg-gray-700
                rounded-xl shadow-md hover:shadow-xl
                transform hover:scale-105
                transition-all duration-300
              "
            >
              <Icon className="text-primary mb-4" size={48} />
              <span className="text-gray-800 dark:text-white font-medium">
                {skill.name}
              </span>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
