import profilePhoto from "../images/profile.jpeg";
import Header from "./components/Header";
import Education from "./components/Education";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Header />

      <main>
        {/* About section */}
        <section id="about" className="container about-section">
          <img
            src={profilePhoto}
            alt="Portrait of Nischal Shrestha"
            className="profile-photo"
            width="220"
            height="220"
          />

          <div className="about-content">
            <p className="intro-label">ASPIRING SOFTWARE ENGINEER</p>

            <h1>Nischal Shrestha</h1>

            <p className="intro-description">
              I am learning software development and building practical
              projects.
            </p>

            <p className="intro-description">
              Follow my journey as I explore new technologies and turn
              ideas into working applications.
            </p>

            <div className="hero-links">
              <a
                className="hero-button"
                href="https://github.com/Nischal8889"
              >
                GitHub ↗
              </a>

              <a
                className="hero-button"
                href="https://www.linkedin.com/in/nischal-shrestha-596bb7254/"
              >
                LinkedIn ↗
              </a>

              <a className="hero-button primary-button" href="#contact">
                Get in touch
              </a>
            </div>

            <a className="explore-link" href="#skills">
              Explore my skills ↓
            </a>
          </div>
        </section>

        <Education />

        <Skills />

        {/* Contact section */}
        <section id="contact" className="container">
          <h2>Let’s connect and grow</h2>

          <p>
            I am learning software development through hands-on projects.
            Explore my work and follow my progress.
          </p>

          <div className="contact-grid">
            <a
              className="contact-card"
              href="https://github.com/Nischal8889"
            >
              <strong>Explore my GitHub</strong>
              <span>My projects, code, and learning journey.</span>
            </a>

            <a
              className="contact-card"
              href="mailto:nischalshrestha@mail.weber.edu"
            >
              <strong>Email me at</strong>
              <span>nischalshrestha@mail.weber.edu</span>
            </a>

            <a
              className="contact-card"
              href="https://www.linkedin.com/in/nischal-shrestha-596bb7254/"
            >
              <strong>Connect on LinkedIn</strong>
              <span>My education, experience, and interests.</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="container site-footer">
        <p>&copy; 2026 Nischal Shrestha</p>
        <a href="#about">Back to About</a>
      </footer>
    </>
  );
}