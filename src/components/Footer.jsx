import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react';
import logo from '../assets/logo.png';
import { useBooking } from '../context/BookingContext';

const Footer = () => {
    const { openBookingModal } = useBooking();

    return (
        <footer className="bg-[#F8F9FA] pt-16 pb-8 border-t border-gray-200 relative">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* 1. Footer CTA Strip (Top of Footer) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center mb-12 relative overflow-hidden max-w-5xl mx-auto"
                >
                    {/* Decorative top line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#008080] to-yellow-400"></div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                        Not sure where to start? <br className="hidden md:block" />
                        <span className="text-[#008080]">Let’s find the best plan for you.</span>
                    </h2>
                    <p className="text-gray-500 mb-8 max-w-xl mx-auto font-medium">
                        Schedule a free demo session to see how our personal mentorship transforms low grades into top results.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={openBookingModal}
                            className="bg-yellow-400 text-black py-3.5 px-8 rounded-full text-base font-bold shadow-md hover:shadow-lg transition-all min-w-[200px]"
                        >
                            Book a Free Demo
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={openBookingModal}
                            className="bg-white border-2 border-[#008080] text-[#008080] py-3.5 px-8 rounded-full text-base font-bold shadow-sm hover:bg-[#008080] hover:text-white transition-all min-w-[200px]"
                        >
                            Talk to Academic Advisor
                        </motion.button>
                    </div>
                </motion.div>


                {/* 2. Main Footer Content (Middle) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 items-start">

                    {/* Column 1: Brand Info */}
                    <div className="flex flex-col items-start gap-6">
                        <img src={logo} alt="Classmate Logo" className="h-10 w-auto" />
                        <p className="text-gray-500 text-sm leading-relaxed">
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
                                    className="bg-white p-2.5 rounded-full shadow-sm text-gray-500 hover:text-[#008080] hover:shadow-md transition-all border border-gray-200"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Programs */}
                    <div className="flex flex-col items-start gap-6">
                        <h4 className="font-bold text-lg text-black">Our Programs</h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-medium w-full">
                            <li className="hover:text-[#008080] cursor-pointer transition-colors flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#008080]"></span> Classmate (1:1 Tuition)
                            </li>
                            <li className="hover:text-[#008080] cursor-pointer transition-colors flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#008080]"></span> Bright Bridge (Foundation)
                            </li>
                            <li className="hover:text-[#008080] cursor-pointer transition-colors flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#008080]"></span> Final Touch (Exam Prep)
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className="flex flex-col items-start gap-6">
                        <h4 className="font-bold text-lg text-black">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-500 font-medium w-full">
                            {['Home', 'About', 'Features', 'Faculty', 'Success Stories'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-[#008080] transition-colors block">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact & Policy */}
                    <div className="flex flex-col items-start gap-6">
                        <h4 className="font-bold text-lg text-black">Contact Us</h4>
                        <ul className="space-y-5 text-sm text-gray-500 w-full">
                            <li className="flex items-start gap-3 group">
                                <div className="text-[#008080] mt-0.5 shrink-0"><MapPin size={18} /></div>
                                <span className="leading-relaxed">
                                    <strong className="block text-black mb-1">MASH MAGIC</strong>
                                    10/1744, 1st Floor, Suite #1012,<br />
                                    Sowbhagya Building, Athani,<br />
                                    Kakkanad, Kusumagiri P.O,<br />
                                    Kochi – 682030
                                </span>
                            </li>
                            <li className="flex items-start gap-3 group cursor-pointer">
                                <div className="text-[#008080] mt-0.5 shrink-0 group-hover:scale-110 transition-transform"><Phone size={18} /></div>
                                <span className="group-hover:text-[#008080] transition-colors">7012-128756</span>
                            </li>
                            <li className="flex items-start gap-3 group cursor-pointer">
                                <div className="text-[#008080] mt-0.5 shrink-0 group-hover:scale-110 transition-transform"><Mail size={18} /></div>
                                <span className="group-hover:text-[#008080] transition-colors break-all">hellomashmagic@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3 group cursor-pointer">
                                <div className="text-[#008080] mt-0.5 shrink-0 group-hover:scale-110 transition-transform"><Globe size={18} /></div>
                                <a href="https://www.mashmagicedu.com" target="_blank" rel="noopener noreferrer" className="group-hover:text-[#008080] transition-colors">www.mashmagicedu.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 3. Footer Bottom Bar */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
                    <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Classmate by Mash Magic. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-[#008080] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#008080] transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-[#008080] transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
