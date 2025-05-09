import React from 'react';
import { footerLinks } from '../utils/helper';
import iniIcon from '../assets/images/svg/in.svg';
import faceIcon from '../assets/images/svg/face.svg';
import cemraIcon from '../assets/images/svg/cemra.svg';
import xIcon from '../assets/images/svg/x.svg';
import billIcon from '../assets/images/png/bill.png';
import CustomContent from './common/CustomContent';

const Footer = () => {
    return (
        <footer className="bg-[url(./assets/images/png/Footer.png)] bg-cover bg-center text-white">
            <div className="container max-w-[1140px] mx-auto px-4 pt-[100px] md:pt-[180px] lg:pt-[234px]">
                <section className="flex flex-col md:flex-row justify-between gap-12">
                    {/* Logo and About */}
                    <div className="md:w-1/2">
                        <img src={billIcon} alt="Bill Central" className="w-[160px] md:w-[200px]" />
                        <CustomContent
                            content="Ut auctor nisi mauris eu tincidunt facilisi. Diam amet sollicitudin pretium maecenas ornare lacus arcu adipiscing."
                            className="md:max-w-[297px] mt-6 text-sm opacity-90 text-white"
                        />
                        {/* Social Links */}
                        <div className="mt-8">
                            <h4 className="text-xl font-bold mb-3">Follow Us</h4>
                            <div className="flex space-x-5">
                                {[iniIcon, faceIcon, cemraIcon, xIcon].map((icon, i) => (
                                    <a key={i} href="#" className="transition-transform duration-300 transform hover:scale-110 hover:brightness-125">
                                        <img src={icon} alt={`Social-${i}`} className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Links Section */}
                    <nav className="md:w-1/2 flex justify-between sm:gap-16 gap-8">
                        <div>
                            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-3">
                                {footerLinks.quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-base font-normal text-white opacity-90 hover:underline hover:opacity-100 transition-all duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-4">Services</h4>
                            <ul className="space-y-3">
                                {footerLinks.services.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-base font-normal text-white opacity-90 hover:underline hover:opacity-100 transition-all duration-200"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </section>

                {/* Divider */}
                <div className="mt-12 border-t border-white border-opacity-20"></div>

                {/* Copyright */}
                <p className="text-center py-6 text-sm opacity-80">
                    © 2024 <span className="font-semibold">BILL CENTRAL</span>, Inc. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
