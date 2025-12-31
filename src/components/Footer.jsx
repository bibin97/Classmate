import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';
import { useBooking } from '../context/BookingContext';

const Footer = () => {
    const { openBookingModal } = useBooking();

    return (
        <footer className="bg-brand-primary pt-10 pb-10 border-t border-gray-100 relative">
            <div className="container">

                {/* 1. Footer CTA Strip (Top of Footer) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-gray-100 text-center mb-16 relative overflow-hidden max-w-5xl mx-auto"
                >
                    {/* Decorative top line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal to-yellow-400"></div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-heading">
                        Not sure where to start? <br className="hidden md:block" />
                        <span className="text-brand-teal">Let’s find the best plan for you.</span>
                    </h2>
                    <p className="text-gray-500 mb-8 max-w-xl mx-auto font-medium">
                        Schedule a free demo session to see how our personal mentorship transforms low grades into top results.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: '#008080', color: '#ffffff' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={openBookingModal}
                            className="bg-yellow-400 text-black py-3.5 px-8 rounded-full text-base font-bold shadow-lg border-2 border-yellow-400 min-w-[220px]"
                        >
                            Book a Free Demo
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: '#facc15', color: '#000000', borderColor: '#facc15' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={openBookingModal}
                            className="bg-white border-2 border-brand-teal text-brand-teal py-3.5 px-8 rounded-full text-base font-bold shadow-sm min-w-[220px]"
                        >
                            Talk to Academic Advisor
                        </motion.button>
                    </div>
                </motion.div>


                {/* 2. Main Footer Content (Middle) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 border-b border-gray-200 pb-12">

                    {/* Column 1: Brand Info */}
                    <div className="flex flex-col items-start gap-5">
                        <img src={logo} alt="Classmate Logo" className="h-12 w-auto" />
                        <p className="text-gray-500 text-sm leading-relaxed pr-4">
                            Classmate by Mash Magic is a premier 1:1 online tuition platform committed to personalized academic growth and student mentorship.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: <Instagram size={18} />, href: "#" },
                                { icon: <Facebook size={18} />, href: "#" },
                                { icon: <Linkedin size={18} />, href: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="bg-white p-2.5 rounded-full shadow-sm text-gray-400 hover:text-brand-teal hover:shadow-md transition-all border border-gray-100"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Programs */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-brand-heading">Our Programs</h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-medium">
                            <li className="hover:text-brand-teal cursor-pointer transition-colors flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Classmate (1:1 Tuition)
                            </li>
                            <li className="hover:text-brand-teal cursor-pointer transition-colors flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Bright Bridge (Foundation)
                            </li>
                            <li className="hover:text-brand-teal cursor-pointer transition-colors flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Final Touch (Exam Prep)
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-brand-heading">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-medium">
                            {['Home', 'About', 'Features', 'Faculty', 'Success Stories'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-teal transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact & Policy */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6 text-brand-heading">Contact Us</h4>
                        <ul className="space-y-5 text-sm text-gray-500">
                            <li className="flex items-start gap-3 group cursor-pointer">
                                <div className="text-brand-teal mt-0.5 group-hover:scale-110 transition-transform"><Phone size={18} /></div>
                                <span className="group-hover:text-brand-teal transition-colors">+91 98765 43210</span>
                            </li>
                            <li className="flex items-start gap-3 group cursor-pointer">
                                <div className="text-brand-teal mt-0.5 group-hover:scale-110 transition-transform"><Mail size={18} /></div>
                                <span className="group-hover:text-brand-teal transition-colors">hello@classmate.com</span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="text-brand-teal mt-0.5"><MapPin size={18} /></div>
                                <span className="leading-relaxed">Mash Magic Learning,<br />Cyber Park, Kochi, Kerala</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 3. Footer Bottom Bar */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
                    <p>&copy; {new Date().getFullYear()} Classmate by Mash Magic. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-brand-teal transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-teal transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-brand-teal transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
