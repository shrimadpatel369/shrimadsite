import { education } from '../data';
import '../styles/education.css';

const Education = () => {
  return (
    <section className="education-section section">
      <div className="container">
        <h2 className="section-title">My Education</h2>
        
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div className="education-item" key={index}>
              <div className="education-content">
                <div className="education-header">
                  <div>
                    <h3 className="degree">{edu.degree}</h3>
                    <h4 className="institution">{edu.institution}</h4>
                  </div>
                  <span className="education-period">{edu.period}</span>
                </div>
                
                <p className="education-description">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;