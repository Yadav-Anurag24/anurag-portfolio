import React from 'react'
import './App.css'

// Import all components
import {
  Header,
  Hero,
  About,
  Skills,
  CodingProfiles,
  Projects,
  Contact,
  Footer
} from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <CodingProfiles />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App