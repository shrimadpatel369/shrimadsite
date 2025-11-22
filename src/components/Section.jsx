import { motion } from 'framer-motion';

const Section = ({ children, id, className = '', title, subtitle }) => {
    return (
        <section id={id} className={`section ${className}`}>
            <div className="container-custom">
                {(title || subtitle) && (
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {title && (
                            <h2 className="text-3xl md:text-4xl mb-4 relative inline-block">
                                {title}
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
                            </h2>
                        )}
                        {subtitle && <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
