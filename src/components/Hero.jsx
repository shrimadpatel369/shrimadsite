import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
                <div className="z-10">
                    <motion.span
                        className="text-primary font-semibold text-lg mb-4 block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Hello, I'm
                    </motion.span>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Shrimad <span className="text-primary">Patel</span>
                    </motion.h1>

                    <motion.h2
                        className="text-2xl md:text-3xl text-gray-400 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Computer Science Student / AI-ML Part time job
                    </motion.h2>

                    <motion.p
                        className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        I am a computer science graduate with expertise in system analysis and development. I have a strong foundation in programming languages, database management, and problem-solving. I am passionate about creating efficient and user-friendly systems that solve real-world problems.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            View My Work <ArrowRight size={20} className="ml-2" />
                        </a>
                        <a href="/documents/shrimad%20patel%20updated%20cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            Resume <Download size={20} className="ml-2" />
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    className="relative hidden md:flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="w-[400px] h-[400px] bg-gradient-to-br from-primary to-secondary rounded-full blur-[100px] opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10 w-[350px] h-[350px] rounded-full border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                        <img
                            src="/images/main.png"
                            alt="Shrimad Patel"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
        </section>
    );
};

export default Hero;
