import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { useBooking } from '../context/BookingContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { openBookingModal } = useBooking();

  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveTab(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Success Stories', href: '#success-stories' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-[1000] py-4 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)]' : 'bg-transparent'
        }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#home" className="flex items-center pl-4 md:pl-6">
          <img
            src={logo}
            alt="Classmate Logo"
            className={`w-auto object-contain transition-all duration-300 ${scrolled
              ? 'h-[36px] sm:h-[40px] md:h-[46px]'
              : 'h-[40px] sm:h-[44px] md:h-[52px]'
              }`}
          />
        </a>

        <div className="flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium relative py-1 transition-colors ${activeTab === link.href.substring(1) ? 'text-brand-teal' : 'text-brand-body hover:text-brand-teal'
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveTab(link.href.substring(1))}
            >
              <span className="relative z-10">{link.name}</span>
              {(hoveredIndex === index || activeTab === link.href.substring(1)) && (
                <motion.span
                  layoutId="hover-underline"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="absolute bottom-0 left-0 h-[2px] bg-brand-teal rounded-sm"
                />
              )}
            </a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#008080', color: '#ffffff' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={openBookingModal}
          className="bg-brand-accent text-brand-heading py-3 px-6 rounded-full text-sm font-semibold shadow-[0_4px_14px_0_rgba(248,186,43,0.39)] cursor-pointer animate-pulse-slow hover:animate-none"
        >
          Book a Free Demo
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
