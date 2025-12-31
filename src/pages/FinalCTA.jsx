import React from 'react';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';

const FinalCTA = () => {
    const { openBookingModal } = useBooking();

    return (
        <section className="py-20 px-5">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-[3rem] p-12 md:p-16 text-center shadow-xl border border-white/50 relative overflow-hidden max-w-5xl mx-auto"
                >
                    {/* Background Decor */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-50 rounded-full blur-[80px] opacity-60"></div>
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-50 rounded-full blur-[80px] opacity-60"></div>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Let Us Match Your Child <br className="hidden md:block" />
                            With the <span className="text-brand-teal">Right Mentor</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: '#008080', color: '#ffffff', borderColor: '#008080' }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                onClick={openBookingModal}
                                className="bg-yellow-400 text-black py-4 px-8 rounded-full text-lg font-bold shadow-lg cursor-pointer border-2 border-yellow-400 min-w-[240px]"
                            >
                                Book a Free Demo
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: '#facc15', color: '#000000', borderColor: '#facc15' }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                onClick={openBookingModal}
                                className="bg-[#008080] border-2 border-[#008080] text-white py-4 px-8 rounded-full text-lg font-bold shadow-lg cursor-pointer min-w-[240px]"
                            >
                                Talk to Academic Advisor
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
