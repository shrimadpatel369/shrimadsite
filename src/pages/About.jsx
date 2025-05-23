import { about } from '../data';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-container">
          <div className="about-image">
            <img src={about.image} alt={about.name} />
          </div>
          
          <div className="about-content">
            <h3>I'm {about.name}, a {about.title}</h3>
            <p className="about-description">
              {about.description}
            </p>
            
            <div className="info-list">
              {about.info.map((item, index) => (
                <div className="info-item" key={index}>
                  <span className="info-label">{item.label}:</span>
                  <span className="info-value">{item.value}</span>
                </div>
              ))}
            </div>
            
            <div className="about-buttons">
              <a 
                href={about.resumeLink} 
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-download"></i> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;