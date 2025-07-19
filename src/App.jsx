import React from 'react'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Projects from './components/Projects'
import Skills   from './components/Skills'   // ← new!
import About    from './components/About'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Projects />
        <Skills />    {/* ← inserted here */}
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
