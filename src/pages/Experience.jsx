import { experience } from '../data';
import '../styles/experience.css';

const Experience = () => {
  return (
    <section className="experience-section section">
      <div className="container">
        <h2 className="section-title">My Experience</h2>
        
        <div className="timeline">
          {experience.map((job, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="job-title">{job.title}</h3>
                    <h4 className="company-name">{job.company}</h4>
                  </div>
                  <span className="job-period">{job.period}</span>
                </div>
                
                <ul className="job-description">
                  {job.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;