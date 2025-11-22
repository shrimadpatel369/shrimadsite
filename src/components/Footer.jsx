import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface py-12 border-t border-white/5">
            <div className="container-custom flex flex-col items-center">
                <a href="#" className="text-2xl font-bold text-white mb-6">
                    Shrimad <span className="text-primary">Patel</span>
                </a>

                <div className="flex gap-6 mb-8">
                    <a href="https://github.com/shrimadpatel369" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/shrimad-patel-2b281926b" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:smruticollection36@gmail.com" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                        <Mail size={20} />
                    </a>
                </div>

                <p className="text-gray-500 text-sm text-center">
                    &copy; {new Date().getFullYear()} Shrimad Patel. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
