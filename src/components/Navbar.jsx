import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  // Close mobile nav when route changes
  useEffect(() => {
    setMobileNavOpen(false);
  }, [location]);

  // Prevent scrolling when mobile nav is open
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileNavOpen]);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">Shrimad Patel</Link>
        
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
          </li>
          {/* Removed About link since it's now part of Home */}
          <li>
            <NavLink to="/experience" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/certifications" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Certifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Contact
            </NavLink>
          </li>
        </ul>
        
        {/* Theme toggle removed */}
        
        <button 
          className="menu-button" 
          onClick={toggleMobileNav} 
          aria-label="Toggle navigation menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <Link to="/" className="logo">Shrimad Patel</Link>
          <button 
            className="close-menu" 
            onClick={toggleMobileNav}
            aria-label="Close navigation menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <ul className="mobile-nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}>
              Home
            </NavLink>
          </li>
          {/* Removed About link from mobile menu too */}
          <li>
            <NavLink to="/experience" className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}>
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}>
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/certifications" className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}>
              Certifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}>
              Contact
            </NavLink>
          </li>
        </ul>
        
        {/* Theme toggle removed from mobile nav */}
      </div>
      
      {/* Overlay for mobile nav */}
      <div 
        className={`overlay ${mobileNavOpen ? 'open' : ''}`} 
        onClick={toggleMobileNav}
      ></div>
    </nav>
  );
};

export default Navbar;