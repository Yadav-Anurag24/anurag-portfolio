import React from 'react'
import Profile from '../assets/profile1.jpg'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Anurag</span>
        </h1>
        <p className="hero-subtitle">Full Stack Developer & Problem Solver</p>
        <p className="hero-description">
          I create beautiful, responsive web applications using modern technologies.
          Passionate about clean code and user experience.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="profile-placeholder">

          <img 
            src={Profile} 
            alt="Anurag's Profile" 
            className="profile-img"
          />
          
        </div>
      </div>
    </section>
  )
}

export default Hero