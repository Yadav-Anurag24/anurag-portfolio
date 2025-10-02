import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with a keen for creating innovative web solutions.
              With experience in modern JavaScript frameworks and backend technologies, I enjoy 
              bringing ideas to life through code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source,
              or learning about the latest trends in web development. I believe in writing clean,
              maintainable code and creating user experiences that make a difference.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About