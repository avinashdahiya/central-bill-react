import React, { useState, useEffect } from 'react';
import Custombtn from './common/Custombtn';
import logo from '../assets/images/png/logo.png';
import { Up_Arrow } from '../utils/icon';
import { navLinks } from '../utils/helper';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <>
            {/* Navbar */}
            <header className="w-full bg-[#003459F5] text-white px-4 py-5 z-[60] shadow-md">
                <div className="container max-w-[1140px] mx-auto flex items-center justify-between">
                    {/* Single Logo */}
                    <img src={logo} alt="Logo" className="h-8" />

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6 text-sm">
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} className="hover:underline font-normal text-base opacity-90 hover:opacity-100 transition">
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Button */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Custombtn
                            btn={<>Get Started <Up_Arrow /></>}
                            className="bg-white text-black font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:bg-[#003459] hover:text-white hover:scale-105"
                        />
                    </div>

                    {/* Hamburger Button */}
                    <div
                        onClick={toggleMenu}
                        role="button"
                        aria-label="Toggle menu"
                        tabIndex={0}
                        className="lg:hidden cursor-pointer z-[60] flex flex-col gap-1"
                    >
                        <span className={`bg-white block w-6 h-1 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`bg-white block w-6 h-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`bg-white block w-6 h-1 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </div>
            </header>

            {/* Mobile Menu (white background, sliding from left) */}
            <div className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white/90 backdrop-blur-md text-black flex flex-col items-center justify-center gap-6 text-lg z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {navLinks.map((link, index) => (
                    <a key={index} href={link.href} className="hover:underline transition-all duration-200">
                        {link.name}
                    </a>
                ))}

                <Custombtn
                    btn={<>Get Started <Up_Arrow /></>}
                    className="bg-[#003459F5] text-white font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:bg-black hover:text-white hover:scale-105"
                />
            </div>
        </>
    );
};

export default Navbar;
