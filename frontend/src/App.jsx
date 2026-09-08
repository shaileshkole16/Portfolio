import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import WhyHireMe from './components/WhyHireMe'
import TechStack from './components/TechStack'
import Learning from './components/Learning'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-dark">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <WhyHireMe />
      <TechStack />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Learning />
      <Contact />
      <footer className="bg-darker border-t border-white/10 text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-400 mb-2">&copy; 2024 Shailesh Kole. Built with React, Express, and modern web technologies.</p>
          <p className="text-gray-500 text-sm">Building scalable software, one project at a time.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
