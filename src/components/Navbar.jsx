import { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Folder, Code, GraduationCap, Award, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Simple scroll spy
            const sections = ['home', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home', icon: <Home size={20} /> },
        { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
        { id: 'projects', label: 'Projects', icon: <Folder size={20} /> },
        { id: 'skills', label: 'Skills', icon: <Code size={20} /> },
        { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
        { id: 'certifications', label: 'Certifications', icon: <Award size={20} /> },
        { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileNavOpen(false);
            setActiveSection(id);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
            <div className="container-custom flex justify-between items-center h-20">
                <a href="#" onClick={() => scrollToSection('home')} className="text-2xl font-bold text-white">
                    Shrimad <span className="text-primary">Patel</span>
                </a>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => scrollToSection(link.id)}
                                className={`relative font-medium transition-colors duration-300 ${activeSection === link.id ? 'text-primary' : 'text-gray-400 hover:text-white'}`}
                            >
                                {link.label}
                                {activeSection === link.id && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                                        layoutId="activeIndicator"
                                    />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileNavOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileNavOpen(false)}
                        />
                        <motion.div
                            className="fixed top-0 right-0 w-[80%] max-w-xs h-full bg-surface z-50 p-6 shadow-2xl border-l border-white/10"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-xl font-bold">Menu</span>
                                <button onClick={() => setMobileNavOpen(false)} className="p-2 text-gray-400 hover:text-white">
                                    <X size={24} />
                                </button>
                            </div>

                            <ul className="flex flex-col gap-4">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <button
                                            onClick={() => scrollToSection(link.id)}
                                            className={`flex items-center gap-4 w-full p-3 rounded-lg transition-colors ${activeSection === link.id ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                        >
                                            {link.icon}
                                            {link.label}
                                        </button>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
