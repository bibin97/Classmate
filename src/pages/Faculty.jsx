import React from 'react';
import { motion } from 'framer-motion';
import {
    BadgeCheck, GraduationCap, Award, Book,
    Search, Users, Star, Brain, Heart, TrendingUp, Handshake, ArrowRight
} from 'lucide-react';

const Faculty = () => {

    // 1. Qualified Faculty Data (Upgraded)
    const credentials = [
        {
            title: "NET Qualified Faculty",
            subtitle: "University-level conceptual expertise",
            icon: <BadgeCheck />
        },
        {
            title: "SET Qualified Faculty",
            subtitle: "State-approved teaching excellence",
            icon: <GraduationCap />
        },
        {
            title: "TET Qualified Faculty",
            subtitle: "Child-centric classroom methodology",
            icon: <Award />
        },
        {
            title: "Subject Experts",
            subtitle: "5+ years syllabus-focused experience",
            icon: <Book />
        }
    ];

    // 2. Selection Process Data (New)
    const selectionSteps = [
        {
            title: "Qualification Screening",
            desc: "Only NET / SET / TET / Experienced teachers",
            icon: <Search size={28} />
        },
        {
            title: "Teaching Demo Evaluation",
            desc: "Explanation clarity + child engagement",
            icon: <Users size={28} />
        },
        {
            title: "Faculty Training Program",
            desc: "Psychology, discipline & motivation",
            icon: <Brain size={28} />
        },
        {
            title: "Continuous Review",
            desc: "Student feedback + parent reviews",
            icon: <Star size={28} />
        }
    ];

    // 3. More Than Teachers Data (New)
    const teacherRoles = [
        {
            title: "Concept Builders",
            desc: "Clear basics, no rote learning",
            icon: <Brain size={32} />,
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            title: "Child-Friendly Guides",
            desc: "Emotionally supportive & patient",
            icon: <Heart size={32} />,
            color: "text-red-500",
            bg: "bg-red-50"
        },
        {
            title: "Progress-Focused",
            desc: "Weekly tracking & plans",
            icon: <TrendingUp size={32} />,
            color: "text-green-500",
            bg: "bg-green-50"
        }
    ];

    return (
        <>
            {/* 1. Highly Qualified Faculty Section */}
            <section id="faculty" className="section-padding bg-brand-primary">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Highly <span className="text-brand-teal">Qualified Faculty</span></h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
                            We don't just hire tutors. We hire mentors who are experts in their fields.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {credentials.map((cred, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10, borderColor: '#008080', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' }}
                                transition={{ duration: 0.2 }}
                                className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center justify-center cursor-default group"
                            >
                                <div className="text-brand-teal mb-6 transform scale-150 group-hover:scale-125 transition-transform duration-300">
                                    {cred.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-brand-heading group-hover:text-brand-teal transition-colors">{cred.title}</h3>
                                <p className="text-sm text-gray-500 font-medium">{cred.subtitle}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. How We Select Our Faculty Section (New) */}
            <section className="section-padding bg-brand-primary relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="text-center mb-12">
                        {/* Decorative Line */}
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-1 bg-yellow-400 rounded-full"></div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Select <span className="text-brand-teal">Our Faculty</span></h2>
                        <p className="text-gray-600 text-lg">Our strict 4-step process ensures only the best guide your child.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {selectionSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-l-brand-teal flex flex-col h-full hover:shadow-md transition-shadow"
                            >
                                <div className="bg-teal-50 w-14 h-14 rounded-full flex items-center justify-center text-brand-teal mb-4">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. More Than Teachers (Mentor Mindset) Section (New) */}
            <section className="section-padding bg-brand-primary">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-10">More Than Teachers. <span className="text-brand-teal border-b-4 border-yellow-400">Real Mentors.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teacherRoles.map((role, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white p-6 rounded-[2rem] text-center border border-gray-100"
                            >
                                <div className={`${role.bg} ${role.color} w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6`}>
                                    {role.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{role.title}</h3>
                                <p className="text-gray-600">{role.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Parent Assurance Strip (Redesigned - White Theme) */}
            <section className="py-12 bg-brand-primary border-t-2 border-brand-teal/10 relative">
                {/* Teal Divider Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[2px] bg-brand-teal"></div>

                <div className="container">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Main Trust Text */}
                        <div className="text-center lg:text-left max-w-2xl">
                            <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-2 leading-relaxed">
                                Every faculty member is personally monitored by our academic team <br className="hidden md:block" />
                                to ensure <span className="text-brand-teal font-bold">consistent teaching quality</span> and student comfort.
                            </h3>
                        </div>

                        {/* Soft Cards for Icons */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { title: "VERIFIED", sub: "Background Verified", icon: <BadgeCheck size={24} /> },
                                { title: "REVIEWED", sub: "Monthly Evaluation", icon: <Brain size={24} /> },
                                { title: "SUPPORTIVE", sub: "Student Friendly", icon: <Handshake size={24} /> }
                            ].map((item, i) => (
                                <div key={i} className="bg-white px-6 py-4 rounded-xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-gray-50 flex items-center gap-4 hover:border-brand-teal/30 transition-all">
                                    <div className="text-brand-teal bg-teal-50 p-2 rounded-lg">
                                        {item.icon}
                                    </div>
                                    <div className="text-left">
                                        <span className="block text-xs font-bold text-gray-900 tracking-wider mb-0.5">{item.title}</span>
                                        <span className="block text-xs text-gray-500 font-medium">{item.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Strong CTA (New) */}
            <section className="py-12 container text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Let Us Match Your Child With the <span className="text-brand-teal">Right Mentor</span></h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="bg-yellow-400 text-black py-4 px-10 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
                        >
                            Book a Free Demo <ArrowRight size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#008080", color: "#ffffff" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white text-brand-teal border-2 border-brand-teal py-4 px-10 rounded-full text-lg font-bold transition-all inline-flex items-center justify-center gap-2"
                        >
                            Talk to Academic Advisor
                        </motion.button>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Faculty;
