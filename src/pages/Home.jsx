import { Link } from 'react-router-dom';
import { about } from '../data';
import '../styles/home.css';
import '../styles/about.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="home-section">
        <div className="container home-container">
          <div className="home-content">
            <span className="greeting">Hello, I'm</span>
            <h1 className="name">{about.name}</h1>
            <h2 className="profession">{about.title}</h2>
            <p className="description">
              {about.description}
            </p>
            <div className="home-buttons">
              <Link to="/contact" className="primary-btn">
                <i className="fas fa-paper-plane"></i> Contact Me
              </Link>
              <a 
                href={about.resumeLink} 
                className="secondary-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download"></i> Download CV
              </a>
            </div>
            <div className="social-icons">
              <a 
                href={about.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href={about.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="home-image">
            <img src={about.image} alt={about.name} />
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;