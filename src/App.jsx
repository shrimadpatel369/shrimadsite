import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { about, projects, experience, skills, education, certifications } from './data';
import { Briefcase, Calendar, MapPin, Award, GraduationCap, Mail, Phone, Send, Linkedin, Github, Users, Code, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        {/* Experience Section */}
        <Section id="experience" title="Experience" subtitle="My professional journey and internships.">
          <div className="max-w-4xl mx-auto relative border-l-2 border-neutral-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
                <div className="card">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <h4 className="text-primary font-medium flex items-center gap-2 mt-1">
                        <Briefcase size={16} /> {job.company}
                      </h4>
                    </div>
                    <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full flex items-center gap-2">
                      <Calendar size={14} /> {job.period}
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-400">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects" subtitle="Some of the projects I've worked on.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const mappedProject = {
                title: project.title,
                description: Array.isArray(project.description)
                  ? project.description[0]
                  : project.description,
                tags: project.technologies,
                github: project.link.includes('github') ? project.link : null,
                demo: !project.link.includes('github') && project.link !== '#' ? project.link : null,
                image: project.image
              };
              return <ProjectCard key={index} project={mappedProject} />;
            })}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Skills" subtitle="Technologies and tools I work with.">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Code size={24} className="text-primary" /> Technical Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.technical.map((skill, index) => (
                  <div key={index} className="bg-surface border border-white/5 rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users size={24} className="text-primary" /> Soft Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.soft.map((skill, index) => (
                  <div key={index} className="bg-surface border border-white/5 rounded-lg p-4 text-center hover:border-primary/50 transition-colors">
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education" subtitle="My academic background.">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="card flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <h4 className="text-gray-400 flex items-center gap-2 mt-1">
                    <MapPin size={16} /> {edu.institution}
                  </h4>
                  <span className="text-sm text-primary mt-2 block flex items-center gap-2">
                    <Calendar size={14} /> {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications Section */}
        <Section id="certifications" title="Certifications" subtitle="Professional certifications and achievements.">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="card text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-400 text-sm mb-4">Issued by: {cert.issuer}</p>
                <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                  {cert.period}
                </span>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{cert.description}</p>
                {cert.verifyLink && (
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
                  >
                    Verify Credential <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Get In Touch" subtitle="Feel free to reach out for collaborations or just a friendly hello.">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                I'm currently open to new opportunities and collaborations.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block">Email</span>
                    <a href={`mailto:${about.info.find(i => i.label === 'Email')?.value}`} className="text-white hover:text-primary transition-colors">
                      {about.info.find(i => i.label === 'Email')?.value}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block">Phone</span>
                    <a href={`tel:${about.info.find(i => i.label === 'Phone')?.value}`} className="text-white hover:text-primary transition-colors">
                      {about.info.find(i => i.label === 'Phone')?.value}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block">Location</span>
                    <span className="text-white">
                      {about.info.find(i => i.label === 'Location')?.value}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href={about.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all">
                  <Linkedin size={24} />
                </a>
                <a href={about.socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#333] hover:text-white hover:border-[#333] transition-all">
                  <Github size={24} />
                </a>
              </div>
            </div>

            <div className="card">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Email" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea id="message" rows="4" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Message" required></textarea>
                </div>

                <button type="submit" className="w-full btn btn-primary">
                  Send Message <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
