import { certifications } from '../data';
import '../styles/certifications.css';

const Certifications = () => {
  return (
    <section className="certifications-section section">
      <div className="container">
        <h2 className="section-title">My Certifications</h2>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="certification-card" key={index}>
              <div className="certification-icon">
                <i className="fas fa-certificate"></i>
              </div>
              
              <div className="certification-details">
                <h3 className="certification-name">{cert.name}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                {cert.period && (
                  <p className="certification-period">{cert.period}</p>
                )}
                {cert.verifyLink && (
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-verify-link"
                  >
                    Verify Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;