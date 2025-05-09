import React from 'react';
import Navbar from './Navbar';
import girl from '../assets/images/png/girl.png';
import dots from '../assets/images/svg/dots.svg';
import Custombtn from './common/Custombtn';
import { White_Arrow } from '../utils/icon';
import CustomContent from './common/CustomContent';

const Header = () => {
    return (
        <section className='relative bg-[url(./assets/images/png/blue-img.png)] bg-cover bg-center md:rounded-bl-[100px] lg:rounded-bl-[200px]'>
            <Navbar />
            <div className='container max-w-[1140px] mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                    {/* Left Content */}
                    <div className='flex flex-col mt-6 sm:mt-10 lg:mt-20'>
                        <h1 className='text-[32px] sm:text-[42px] lg:text-[60px] font-normal text-white leading-[110%]'>
                            Easily Compare <span className='font-bold'>Energy, Gas, And Internet</span> Plans
                        </h1>
                        <CustomContent
                            content="Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place."
                            className="text-white mt-4 opacity-90"
                        />
                        <label className="relative flex items-center mt-5 max-w-full sm:max-w-[480px]">
                            <input
                                type="text"
                                id="text"
                                placeholder="Start typing your address"
                                className="w-full px-6 py-5 rounded-[0px_100px_100px_20px] border-0 text-gray-500 text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#00A8E8]"
                            />
                            <Custombtn
                                btn="Compare"
                                className="absolute top-1/2 -translate-y-1/2 right-2 text-white font-bold bg-[#00A8E8] hover:bg-[#006D8F] border-2 border-[#00A8E8] transition-all duration-300 transform hover:scale-105 px-6 py-2 rounded-full"
                            />
                        </label>
                    </div>

                    {/* Right Image */}
                    <div className='relative z-20 mt-8 md:mt-0'>
                        <img src={girl} alt="Header" className='w-full max-w-full h-auto' />
                    </div>
                </div>

                {/* Dots Background */}
                <img
                    src={dots}
                    alt="Decoration Dots"
                    className='absolute right-6 xl:right-[120px] top-[50%] transform -translate-y-1/2 hidden xl:block z-0'
                />
            </div>
        </section>
    );
};

export default Header;
