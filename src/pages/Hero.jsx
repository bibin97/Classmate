import React from 'react';
import hero_student from '../assets/hero_student.png';
import { motion } from 'framer-motion';
import { MonitorPlay, UserCheck, Brain } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const Hero = () => {
    const { openBookingModal } = useBooking();

    return (
        <section className="pt-20 pb-10 overflow-hidden relative">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-4 leading-tight font-bold">
                        <span className="block">Personal Learning</span>
                        <span className="block">Visible <span className="text-brand-teal">Academic Growth</span></span>
                    </h1>

                    <p className="text-lg text-brand-body mb-6 max-w-[90%] leading-relaxed">
                        A year-long 1:1 online tuition program for K–12 students,
                        powered by personal mentors and scientific learning methods.
                    </p>

                    {/* Trust Line */}
                    <div className="flex items-center gap-2 mb-5 text-gray-500 text-sm font-medium">
                        <span className="text-yellow-400">⭐</span>
                        Trusted by 100+ Parents
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: '#008080', color: '#ffffff', borderColor: '#008080', boxShadow: '0 10px 25px -5px rgba(0, 128, 128, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            onClick={openBookingModal}
                            className="bg-yellow-400 text-black py-4 px-8 rounded-full text-lg font-bold shadow-[0_4px_14px_0_rgba(250,204,21,0.39)] cursor-pointer border-2 border-yellow-400 w-full sm:w-auto"
                        >
                            Book a Free 1:1 Demo Class
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: '#facc15', color: '#000000', borderColor: '#facc15' }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            onClick={openBookingModal}
                            className="bg-[#008080] border-2 border-[#008080] text-white py-3.5 px-8 rounded-full text-lg font-semibold cursor-pointer w-full sm:w-auto"
                        >
                            Talk to a Mentor
                        </motion.button>
                    </div>
                    <p className="mt-3 text-xs text-gray-500 ml-2">No payment. No commitment.</p>

                </motion.div>

                {/* Right Image */}
                {/* Right Content Wrapper */}
                <div className="flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="relative"
                    >
                        {/* Background blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-teal-50 to-teal-100 rounded-full -z-10 blur-[40px] opacity-70"></div>

                        {/* Floating Image */}
                        <div className="animate-float transform-gpu flex justify-center items-center">
                            <img
                                src={hero_student}
                                alt="Mentor teaching student"
                                className="w-auto h-auto max-h-[280px] lg:max-h-[340px] object-contain drop-shadow-2xl rounded-3xl"
                            />
                        </div>

                        {/* Floating Elements (Decorative) */}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-teal-50 hidden md:block"
                        >
                            <Brain size={32} className="text-brand-teal" />
                        </motion.div>

                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 -left-8 bg-white p-3 rounded-xl shadow-lg border border-teal-50 hidden md:block"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-xs font-bold text-gray-700">Growth Tracked</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Feature Cards Grid (Below Image) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {/* Card 1 */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            transition={{ duration: 0.2 }}
                            className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 cursor-default hover:border-brand-teal"
                        >
                            <div className="text-brand-teal mb-1"><MonitorPlay size={24} /></div>
                            <strong className="block text-brand-heading text-sm mb-0.5 leading-tight">1:1 Online Tuition</strong>
                            <span className="text-[10px] text-gray-400 font-medium">CBSE · State · ICSE</span>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            transition={{ duration: 0.2 }}
                            className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 cursor-default hover:border-brand-teal"
                        >
                            <div className="text-brand-teal mb-1"><UserCheck size={24} /></div>
                            <strong className="block text-brand-heading text-sm mb-0.5 leading-tight">Personal Mentor</strong>
                            <span className="text-[10px] text-gray-400 font-medium">Tracking & Care</span>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            transition={{ duration: 0.2 }}
                            className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 cursor-default hover:border-brand-teal"
                        >
                            <div className="text-brand-teal mb-1"><Brain size={24} /></div>
                            <strong className="block text-brand-heading text-sm mb-0.5 leading-tight">Scientific Learning</strong>
                            <span className="text-[10px] text-gray-400 font-medium">Memory & Revision</span>
                        </motion.div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Hero;
