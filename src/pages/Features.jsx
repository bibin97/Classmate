import React from 'react';
import { motion } from 'framer-motion';
import {
    Video, Target, Search, Smile, TrendingUp, Check,
    Eye, Ear, PenTool, Activity, Layers, Zap, MessageSquare,
    Layout, ArrowRight, BookOpen, Star, UserCheck, Phone
} from 'lucide-react';
import demoVideo from '../assets/demo.mp4';

const Features = () => {
    // Grouped included items
    const includedGroups = [
        {
            title: "Learning",
            icon: <BookOpen size={24} />,
            items: ["Chapter-wise 1:1 tuition", "Activity-based learning", "Homework writing support"]
        },
        {
            title: "Assessment",
            icon: <Target size={24} />,
            items: ["Micro tests & assessments", "Progress tracking", "Performance reports"]
        },
        {
            title: "Care & Support",
            icon: <UserCheck size={24} />,
            items: ["Mentor monitoring", "Parent feedback calls", "Follow-ups & guidance"]
        }
    ];

    // Data for GapIdentification (renamed Steps)
    const steps = [
        { icon: <Layout size={32} />, title: "Diagnostic Assessment", desc: "We start by understanding where the student stands." },
        { icon: <Search size={32} />, title: "Gap Mapping", desc: "Identifying learning gaps from previous years." },
        { icon: <Target size={32} />, title: "Root-level Correction", desc: "Fixing foundations before moving ahead." },
        { icon: <TrendingUp size={32} />, title: "Confidence Building", desc: "Small wins lead to big academic success." }
    ];

    // Outcome Data
    const outcomes = [
        { icon: <TrendingUp size={28} />, title: "Improved Marks", desc: "Visible improvement within weeks." },
        { icon: <Smile size={28} />, title: "Stress-free Learning", desc: "Learning becomes enjoyable." },
        { icon: <Zap size={28} />, title: "Better Retention", desc: "Concepts stay in memory longer." },
        { icon: <MessageSquare size={28} />, title: "Active Participation", desc: "Child asks doubts confidently." }
    ];

    return (
        <>
            {/* OneToOneTuition Section (Hero Feature) */}
            <section className="section-padding bg-brand-primary overflow-hidden">
                <div className="container">
                    {/* Centered Heading Block */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h1 className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-4">OUR FEATURES</h1>
                        <h2 className="text-4xl md:text-5xl mb-6 font-bold">One-to-One <span className="text-brand-teal">Online Tuition</span></h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Experience the power of individual attention. Our 1-to-1 classes ensure your child gets the focus they deserve, moving away from crowd learning.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Left Illustration Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className="relative rounded-[2rem] border border-teal-100 shadow-xl overflow-hidden group"
                        >
                            {/* Video Background */}
                            <video
                                src={demoVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay elements for 'Live' feel */}
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-red-500 flex items-center gap-2 shadow-sm z-20">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Live Class
                            </div>

                            {/* Decorative floating badges */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 border border-white/50 z-20"
                            >
                                <div className="bg-brand-teal/10 p-1.5 rounded-full text-brand-teal">
                                    <PenTool size={16} />
                                </div>
                                <span className="text-sm font-bold text-gray-700">Whiteboard Support</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-1/2 right-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 border border-white/50 z-20"
                            >
                                <div className="bg-brand-accent/20 p-1.5 rounded-full text-brand-heading">
                                    <MessageSquare size={16} />
                                </div>
                                <span className="text-sm font-bold text-gray-700">Instant Doubts</span>
                            </motion.div>
                        </motion.div>

                        {/* Right Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { title: "100% Focus", desc: "Undivided attention on your child" },
                                    { title: "Concept Clarity", desc: "Understanding, not rote learning" },
                                    { title: "Visible Growth", desc: "Improvement you can track" },
                                    { title: "Two-way Interaction", desc: "Your child speaks & learns" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -3, backgroundColor: "#f0fdfa" }} // light teal hover
                                        className="bg-white p-4 rounded-xl border border-gray-100 transition-all cursor-default"
                                    >
                                        <h4 className="font-bold text-brand-heading text-base mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* GapIdentification Section - Process Flow */}
            <section className="section-padding bg-brand-primary relative">
                <div className="container text-center">
                    <h2 className="text-4xl md:text-5xl mb-4 font-bold">How We Fix <span className="text-brand-teal">Learning Gaps</span></h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">We don't just teach chapters. We identify and fix the root causes of academic struggle.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[28%] left-[10%] right-[10%] h-[2px] bg-gray-200 -z-0"></div>

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 relative z-10 group hover:border-brand-teal transition-colors"
                            >
                                <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gray-400 group-hover:text-brand-teal group-hover:scale-110 transition-all duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.desc}</p>

                                <div className="text-xs font-semibold text-brand-teal bg-teal-50 py-1 px-3 rounded-full inline-block">
                                    Step 0{index + 1}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology Section */}
            <section id="methodology" className="section-padding bg-brand-primary">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Personalized <span className="text-brand-teal">Learning Methodology</span></h2>
                        <p className="text-xl text-gray-600">Every child learns differently. We adapt, not force.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* VARK Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">VARK Learning Model</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: <Eye />, text: "Visual Learning", color: "text-blue-500", bg: "bg-blue-50" },
                                    { icon: <Ear />, text: "Auditory Learning", color: "text-purple-500", bg: "bg-purple-50" },
                                    { icon: <PenTool />, text: "Reading/Writing", color: "text-orange-500", bg: "bg-orange-50" },
                                    { icon: <Activity />, text: "Kinesthetic (Doing)", color: "text-green-500", bg: "bg-green-50" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                        className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all"
                                    >
                                        <div className={`${item.bg} ${item.color} p-3 rounded-xl`}>{item.icon}</div>
                                        <span className="font-bold text-lg text-gray-700">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Bloom's Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Bloom’s Taxonomy</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: <Layers />, text: "Understand before memorising", desc: "Building strong foundations" },
                                    { icon: <Zap />, text: "Apply concepts in exams", desc: "Problem solving skills" },
                                    { icon: <MessageSquare />, text: "Explain answers confidently", desc: "Mastery through teaching" },
                                    { icon: <Target />, text: "Analyze & Evaluate", desc: "Critical thinking & logic" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                        className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all"
                                    >
                                        <div className="bg-teal-50 text-brand-teal p-3 rounded-xl mt-1">{item.icon}</div>
                                        <div>
                                            <span className="font-bold text-lg text-gray-800 block mb-1">{item.text}</span>
                                            <span className="text-gray-500">{item.desc}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* WhatsIncluded Section - Grouped */}
            <section className="section-padding bg-brand-primary">
                <div className="container">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">What’s Included in <span className="text-brand-teal">Classmate?</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {includedGroups.map((group, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="bg-brand-accent/20 w-14 h-14 rounded-full flex items-center justify-center text-brand-heading mb-6">
                                    {group.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-6 border-b border-gray-100 pb-4">{group.title}</h3>
                                <ul className="space-y-4">
                                    {group.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                                            <Check size={18} className="text-brand-teal" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Parents Will Notice (NEW SECTION) */}
            <section className="section-padding bg-brand-primary">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Parents <span className="text-brand-teal">Will Notice</span></h2>
                        <p className="text-gray-600 text-lg">Real outcomes you can see in your child.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {outcomes.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-2xl text-center border border-gray-100 hover:border-brand-teal transition-all"
                            >
                                <div className="text-brand-teal mb-4 flex justify-center">{item.icon}</div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STRONG CTA SECTION (END) */}
            <section className="py-12">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2.5rem] p-10 text-center border border-gray-100 shadow-lg relative overflow-hidden"
                    >
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-heading">
                                Ready to see how your child learns best?
                            </h2>
                            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                                Book a free 1-to-1 demo class today and experience the Classmate difference.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-brand-accent text-brand-heading py-4 px-10 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
                            >
                                Book a Free Demo <ArrowRight size={20} />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Features;
