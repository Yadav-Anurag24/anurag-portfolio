import React from 'react'

const Projects = () => {
  const projects = [
    // {
    //   title: "E-Commerce Platform",
    //   description: "A full-featured e-commerce platform built with React and Node.js, featuring user authentication, payment processing, and admin dashboard.",
    //   tech: ["React", "Node.js", "MongoDB", "Stripe"],
    //   github: "#",
    //   live: "#"
    // },
    {
      title: "CGPA Calculator App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Angular", "TypeScript", "Bootstrap"],
      github: "https://github.com/Yadav-Anurag24/CGPA-Calculator.git",
      live: "https://cgpa-calculator-ten-nu.vercel.app/"
    },
    {
      title: "Book-Vault",
      description: "This project is a fully responsive, subscription-based bookstore designed to provide a seamless reading experience. Using Bootstrap, I engineered a user-friendly interface that allows readers to explore various book categories and subscribe to their favorites. To enhance book discovery, I integrated a custom API that powers a fast and efficient search system, ensuring users can locate any title with ease.",
      tech: ["JavaScript", "Bootstrap", "Google API", "HTML5"],
      github: "https://github.com/Yadav-Anurag24/Book-Vault-.git",
      live: "https://book-vault-one.vercel.app/"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">GitHub</a>
                  <a href={project.live} className="project-link">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects