import { skills } from '../data';
import '../styles/skills.css';

const Skills = () => {
  return (
    <section className="skills-section section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-categories">
          <div className="skills-category">
            <h3 className="category-title">Technical Skills</h3>
            <div className="skills-tags">
              {skills.technical.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="category-title">Soft Skills</h3>
            <div className="skills-tags">
              {skills.soft.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;