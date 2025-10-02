import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // Configuration: Switch between custom backend and Formspree
      const USE_CUSTOM_BACKEND = false; // Set to true to use your backend, false for Formspree
      
      const endpoint = USE_CUSTOM_BACKEND 
        ? 'http://localhost:5000/api/contact'  // Your custom backend
        : 'https://formspree.io/f/xvgwrrbp'; // Formspree
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Thanks for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please check your connection and try again.');
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in hearing about new opportunities and exciting projects.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="contact-links">
              <a href="mailto:msdanurag65@gmail.com" className="contact-link">
                <span>📧</span> msdanurag65@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/anurag24kumar/" className="contact-link">
                <span>💼</span> LinkedIn
              </a>
              <a href="https://github.com/Yadav-Anurag24" className="contact-link">
                <span>🐱</span> GitHub
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact