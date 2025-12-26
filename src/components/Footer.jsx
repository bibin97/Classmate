import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#111] text-[#888] py-8 text-center text-sm">
            <div className="container flex flex-col items-center gap-4">
                <img src={logo} alt="Classmate Logo" className="h-10 w-auto opacity-80" />
                <p>&copy; {new Date().getFullYear()} Classmate by Mash Magic. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
