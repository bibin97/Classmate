import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
    return (
        <section className="section-padding" style={{ backgroundColor: '#f3f4f6', textAlign: 'center', padding: '6rem 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        Give Your Child the Right<br />
                        <span className="text-teal">Academic Support</span> — Every Day.
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '3rem', fontWeight: 500 }}>
                        Personal tuition. Personal mentor. Complete care.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{
                            scale: { repeat: Infinity, duration: 2 }
                        }}
                        style={{
                            backgroundColor: 'var(--color-accent)',
                            color: 'var(--text-heading)',
                            padding: '1.25rem 3rem',
                            borderRadius: '50px',
                            fontSize: '1.2rem',
                            fontWeight: 700,
                            boxShadow: '0 4px 20px 0 rgba(248, 186, 43, 0.5)',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Book a Free Classmate Demo Now
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
