import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import ScrollUI from './components/ScrollUI'

import useTheme from './hooks/useTheme'
import useReveal from './hooks/useReveal'

function App() {
  const [theme, toggleTheme] = useTheme()
  useReveal()

  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      <ScrollUI />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="portfolio">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>

      <Contact />
    </>
  )
}

export default App
