import React, { useState } from 'react';
import { items } from '../utils/helper';
import up from '../assets/images/svg/arrow.svg';
import down from '../assets/images/svg/arrow2.svg';
import accordianImg from '../assets/images/png/accodian-img.png';

const Accordian = () => {
    const [open, setOpen] = useState(null);
    const toggle = (i) => setOpen(open === i ? null : i);

    return (
        <section id="services">
            <div className="container max-w-[1161px] mx-auto pt-[40px] lg:pt-[162px] p-4">
                <div className="flex lg:flex-row gap-[73px] flex-col-reverse">
                    <div className="flex-1">
                        <h2 className="text-[38px] md:text-[48px] font-normal leading-[110%] lg:max-w-[456px] capitalize text-[#00171F] mb-[45px]">
                            Comprehensive Utility <span className="font-bold">Comparisons</span>
                        </h2>

                        {items.map((item, i) => {
                            const isOpen = open === i;
                            return (
                                <div
                                    key={i}
                                    className={`border rounded mb-[30px] p-[14px] cursor-pointer transition-all duration-300 ease-in-out bg-white w-full lg:max-w-[578px] 
                                    ${isOpen ? 'shadow-lg border-[#003459]' : 'hover:shadow-md border-gray-200'}`}
                                    onClick={() => toggle(i)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300 
                                                ${isOpen ? 'bg-[#003459]' : 'bg-[#EAF9FF] hover:bg-[#003459]'}`}>
                                                <img src={item.icon} alt="" className="w-6 h-6" />
                                            </div>
                                            <h3 className={`text-[20px] sm:text-[24px] font-normal leading-[110%] max-w-[442px] transition-colors duration-300 
                                                ${isOpen ? 'text-[#003459]' : 'text-[#00171F] opacity-90'}`}>
                                                {item.title}
                                            </h3>
                                        </div>
                                        <img
                                            src={isOpen ? up : down}
                                            alt="Toggle Icon"
                                            className={`transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`}
                                        />
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out 
                                            ${isOpen ? 'max-h-[200px] mt-2 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="md:mt-2 text-base text-[#00171F] opacity-90 leading-[160%] font-normal ml-19">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex-1">
                        <img
                            src={accordianImg}
                            alt="Discussion"
                            className="w-full mt-[39px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordian;
