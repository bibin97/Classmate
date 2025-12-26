import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, UserCheck, Microscope, CheckCircle, User, MessageCircle, Users, HeartHandshake, Star, ArrowRight, X, Check, Quote } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <GraduationCap size={32} />,
            title: "Qualified Subject Faculty",
            text: "Experienced teachers who understand student psychology and deliver concept-based learning."
        },
        {
            icon: <UserCheck size={32} />,
            title: "Personal Mentor Guidance",
            text: "A dedicated mentor to track progress, ensure discipline, and guide the student emotionally."
        },
        {
            icon: <Microscope size={32} />,
            title: "Scientific Learning Methods",
            text: "Using proven techniques like VARK and Bloom’s Taxonomy for deeper understanding."
        }
    ];

    const targetAudience = [
        { title: "K–12 Students", desc: "From foundation building to board readiness" },
        { title: "Students Needing Regular Support", desc: "Ideal for learners who struggle with consistency or focus" },
        { title: "Learners with Learning Gaps", desc: "When concepts are unclear or forgotten easily" },
        { title: "Parents Seeking Complete Care", desc: "One solution instead of multiple tutors" }
    ];

    const parentsChooseReasons = [
        {
            icon: <User size={24} />,
            title: "Personal Mentor",
            desc: "One mentor responsible for progress, discipline & motivation"
        },
        {
            icon: <MessageCircle size={24} />,
            title: "Regular Updates",
            desc: "Parents receive structured progress feedback"
        },
        {
            icon: <Users size={24} />,
            title: "No Batch Classes",
            desc: "100% one-to-one attention, no distractions"
        },
        {
            icon: <HeartHandshake size={24} />,
            title: "Complete Care",
            desc: "Academic + emotional support combined"
        }
    ];


    const comparisonData = [
        { criteria: "Focus", regular: "Subject-focused", classmate: "Student-focused" },
        { criteria: "Structure", regular: "Multiple tutors", classmate: "One coordinated system" },
        { criteria: "Monitoring", regular: "No monitoring", classmate: "Continuous tracking" },
        { criteria: "Goal", regular: "Short-term exam focus", classmate: "Long-term academic growth" },
    ];

    return (
        <section id="about-us" className="section-padding relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-[120px] -z-10 opacity-60"></div>

            {/* STRONG OPENING STORY & What Is Classmate Section */}
            <div className="container mb-24">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl mb-6 font-bold leading-tight">
                            Classmate is Built for Students<br />
                            <span className="text-brand-teal">Who Need More Than Tuition</span>
                        </h2>

                        <div className="max-w-[800px] mx-auto mb-10">
                            <p className="text-xl text-gray-700 font-medium mb-4 leading-relaxed">
                                Many students attend classes regularly, yet struggle with confidence, consistency, and clarity.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Classmate was created to solve this gap — by combining expert teaching, personal mentoring, and scientific learning methods into one complete academic care system.
                            </p>
                        </div>

                        <div className="bg-teal-50/50 p-6 rounded-2xl border border-teal-100 max-w-[800px] mx-auto mb-16">
                            <p className="text-gray-700 italic">
                                "Classmate is Mash Magic’s year-long 1-to-1 online tuition program designed to support students academically and emotionally throughout the academic year. With expert faculty, dedicated mentors, and research-based learning methods, Classmate ensures students don’t just study — they grow, improve, and gain confidence."
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}
                                className="bg-white py-12 px-8 rounded-2xl text-left shadow-sm border border-gray-100 hover:border-teal-100 transition-all duration-300"
                            >
                                <div className="text-brand-teal mb-6 bg-teal-50 w-fit p-4 rounded-xl">
                                    {feature.icon}
                                </div>
                                <h3 className="mb-4 text-xl font-bold text-brand-heading">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{feature.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Who Is Classmate For Section */}
                <div className="max-w-6xl mx-auto bg-brand-primary rounded-3xl p-10 md:p-16 relative overflow-hidden mb-24 text-center">
                    <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[50%] bg-yellow-100 rounded-full blur-[80px] -z-0 opacity-50"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-3xl md:text-4xl mb-12 font-bold">Who is <span className="text-brand-teal">Classmate For?</span></h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {targetAudience.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white p-6 rounded-xl flex flex-col items-center text-center shadow-sm h-full"
                                >
                                    <div className="text-brand-teal mb-4">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Why Parents Choose Classmate */}
                <div className="mb-24">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-heading">
                            Why Parents Choose Classmate
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {parentsChooseReasons.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-all cursor-default"
                            >
                                <div className="text-brand-teal bg-teal-50 p-4 rounded-full">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2 text-brand-heading">{item.title}</h3>
                                    <p className="text-sm text-gray-600 font-medium leading-normal">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* COMPARISON SECTION (New) */}
                <div className="mb-24 bg-gray-50 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">How Classmate is <span className="text-brand-teal">Different</span></h2>
                        <p className="text-gray-600">From Regular Tuition</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {/* Headers (Desktop) */}
                        <div className="hidden md:block col-span-3">
                            <div className="grid grid-cols-3 gap-4 border-b border-gray-200 pb-4 text-lg font-bold text-gray-500">
                                <div></div>
                                <div className="text-center text-gray-400">Regular Tuition</div>
                                <div className="text-center text-brand-teal relative">Classmate <div className="absolute -top-6 right-1/2 translate-x-1/2 bg-brand-accent text-xs text-brand-heading px-2 py-0.5 rounded-full">Best Choice</div></div>
                            </div>
                        </div>

                        {/* Rows */}
                        {comparisonData.map((row, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none border md:border-0 border-gray-100 shadow-sm md:shadow-none items-center"
                            >
                                <div className="font-semibold text-gray-800 md:text-gray-600 mb-2 md:mb-0 text-center md:text-left">{row.criteria}</div>

                                <div className="flex items-center justify-between md:justify-center p-2 rounded-lg bg-red-50 md:bg-transparent text-gray-600">
                                    <span className="md:hidden text-sm font-medium text-red-400">Regular:</span>
                                    <div className="flex items-center gap-2">
                                        <X size={16} className="text-red-400 md:hidden" />
                                        <span>{row.regular}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between md:justify-center p-2 rounded-lg bg-teal-50 md:bg-transparent text-gray-800 font-medium border border-teal-100 md:border-0">
                                    <span className="md:hidden text-sm font-medium text-teal-600">Classmate:</span>
                                    <div className="flex items-center gap-2">
                                        <Check size={18} className="text-brand-teal" />
                                        <span>{row.classmate}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Why Classmate Works (Enhanced Premium Horizontal) */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Why <span className="text-brand-teal">Classmate</span> Works <br /><span className="text-gray-400 text-2xl md:text-3xl font-medium block mt-2">— Even When Others Don’t</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {[
                            { title: "Regular Progress Tracking", desc: "Continuous monitoring so no student falls behind." },
                            { title: "No Learning Gaps Ignored", desc: "Every weakness is identified and addressed early." },
                            { title: "Student-Friendly Learning Pace", desc: "Understanding first, speed later." },
                            { title: "Mentor + Faculty as One Team", desc: "Teaching and mentoring work together as one system." },
                            { title: "Long-Term Academic Growth", desc: "Building habits, confidence, and consistency over shortcuts." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, boxShadow: "0 10px 30px -5px rgba(0,0,0,0.05)" }}
                                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center h-full transition-all duration-300"
                            >
                                {/* Circle Indicator */}
                                <div className="w-12 h-12 rounded-full bg-[#f0fdfa] border border-brand-teal text-brand-teal flex items-center justify-center font-bold mb-6 shadow-sm font-mono text-sm relative group">
                                    <span className="relative z-10">0{i + 1}</span>
                                </div>

                                <h3 className="text-lg font-medium text-gray-900 mb-3 leading-snug">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Closing CTA (New) */}
                {/* Premium Minimal CTA */}
                <div className="container pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="max-w-[900px] mx-auto bg-white rounded-[2rem] p-10 md:p-16 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                            Ready to Support Your Child <br className="hidden md:block" />
                            <span className="text-brand-teal">Beyond Textbooks?</span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Book a free demo class and experience how Classmate combines personal mentoring, expert teaching, and scientific learning for real academic growth.
                        </p>

                        <div className="flex flex-col items-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(250, 204, 21, 0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                className="group bg-yellow-400 text-black py-4 px-10 rounded-full text-lg font-bold shadow-md inline-flex items-center gap-3 transition-all"
                            >
                                Book a Free Demo Class
                                <motion.span
                                    className="inline-block"
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    whileHover={{ x: 5 }}
                                >
                                    <ArrowRight size={20} strokeWidth={2.5} />
                                </motion.span>
                            </motion.button>

                            <p className="text-sm text-gray-400 font-medium">
                                No payment required · No commitment · 1:1 Demo Class
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default About;
