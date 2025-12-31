import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate full-stack developer with a love for creating beautiful,
            functional web applications. I enjoy turning complex problems into simple,
            elegant solutions.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing
            to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

