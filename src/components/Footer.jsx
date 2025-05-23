import { Link } from 'react-router-dom';
import { about } from '../data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-content">
        <Link to="/" className="footer-logo">Shrimad Patel</Link>
        <p className="copyright">© {currentYear} All Rights Reserved</p>
        
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
    </footer>
  );
};

export default Footer;