import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const sections = ['home', 'projects', 'about', 'contact']

  return (
    <nav className="fixed w-full bg-gray-100 dark:bg-gray-800 backdrop-blur z-50 text-gray-800 dark:text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer transition-colors duration-200 hover:text-secondary">
          MyPortfolio
        </h1>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Links */}
        <ul
          className={`
            md:flex md:items-center md:space-x-6
            absolute md:static
            w-full left-0 md:w-auto
            transition-all duration-300
            bg-gray-100 dark:bg-gray-800
            ${open ? 'top-16' : 'top-[-490px]'}
          `}
        >
          {sections.map((sec) => (
            <li key={sec} className="my-2 md:my-0">
              <Link
                to={sec}
                smooth
                duration={500}
                offset={-70}
                className="block md:inline-block px-4 transition-colors duration-200 hover:text-secondary"
                onClick={() => setOpen(false)}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
