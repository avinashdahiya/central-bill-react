import React, { useState, useEffect } from 'react';
import Custombtn from './common/Custombtn';
import logo from '../assets/images/svg/bl.svg';
import { navLinks } from '../utils/helper';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (href) => {
        setActiveLink(href);
        setIsOpen(false); // Close menu after clicking a link (mobile)
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <header className="text-white px-4 py-6 relative z-50">
            <div className="container max-w-[1140px] mx-auto flex items-center justify-between">
                <img src={logo} alt="Logo" className="h-8" />
                
                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center space-x-6 text-sm">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => setActiveLink(link.href)}
                            className={`hover:underline font-normal text-base leading-[100%] opacity-90 ${activeLink === link.href ? 'underline font-semibold' : ''}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop Button */}
                <div className="hidden lg:flex items-center space-x-4">
                    <Custombtn
                        btnClass="bg-white !text-[#00171F]"
                        btnText="Get Started"
                        blacksvg={
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 14.3691L14 1.36914M14 1.36914V13.8491M14 1.36914H1.52" stroke="#00171F" strokeWidth="1.93338" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                    />
                </div>

                {/* Hamburger */}
                <div onClick={toggleMenu} className="lg:hidden cursor-pointer z-50 flex flex-col gap-1">
                    <span className={`bg-white block w-6 h-1 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-1 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-1 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="lg:hidden flex flex-col space-y-4 px-6 text-sm bg-white backdrop-blur-md pb-6 justify-center items-center fixed inset-0 z-40">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => handleLinkClick(link.href)}
                            className={`block text-lg font-medium text-[#00171F] hover:underline ${activeLink === link.href ? 'underline font-bold' : ''}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Custombtn
                        btnClass="bg-[#00171F] text-white"
                        btnText="Get Started"
                        blacksvg={
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 14.3691L14 1.36914M14 1.36914V13.8491M14 1.36914H1.52" stroke="white" strokeWidth="1.93338" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                    />
                </nav>
            )}
        </header>
    );
};

export default Navbar;
