import { about } from '../data';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section className="contact-section section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Get in Touch</h3>
              <p>Feel free to contact me using any of the methods below. I'll respond as soon as possible!</p>
            </div>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="method-details">
                  <h4>Email</h4>
                  <a href={`mailto:${about.info.find(item => item.label === 'Email')?.value}`}>
                    {about.info.find(item => item.label === 'Email')?.value}
                  </a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="method-details">
                  <h4>Phone</h4>
                  <p>{about.info.find(item => item.label === 'Phone')?.value}</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="method-details">
                  <h4>Location</h4>
                  <p>{about.info.find(item => item.label === 'Location')?.value}</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="method-details">
                  <h4>Social Media</h4>
                  <div className="social-links">
                    <a 
                      href={about.socialLinks.linkedin} 
                      className="social-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a 
                      href={about.socialLinks.github} 
                      className="social-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;