import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React","JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Github", "AWS", "VS Code", "Postman"]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills