import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="card h-full flex flex-col group overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10"></div>
                <img
                    src={project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-primary text-white rounded-full hover:bg-white hover:text-primary transition-colors transform hover:scale-110"
                            title="View Code"
                        >
                            <Github size={24} />
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-primary text-white rounded-full hover:bg-white hover:text-primary transition-colors transform hover:scale-110"
                            title="Live Demo"
                        >
                            <ExternalLink size={24} />
                        </a>
                    )}
                </div>
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags && project.tags.map((tag, index) => (
                    <span key={index} className="text-xs px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/5">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
