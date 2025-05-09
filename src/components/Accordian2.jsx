import { useState } from "react";
import React from 'react';
import { FaqData } from "../utils/helper";
import minus from '../assets/images/svg/minus.svg';
import plus from '../assets/images/svg/plus.svg';

const Accordian2 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs">
            <div className="container max-w-[916px] mx-auto p-4 pt-[40px] md:pt-[90px] lg:pt-[162px]">
                <h2 className="text-4xl md:text-5xl font-normal text-center mb-4 leading-[110%] capitalize">
                    Frequently Asked <span className="font-bold">Questions</span>
                </h2>
                <p className="text-center text-black opacity-90 mb-6 text-base leading-[150%] max-w-[556px] mx-auto">
                    Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum
                </p>
                <div className="space-y-4 mt-[52px]">
                    {FaqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`rounded shadow-lg transition-all duration-500 ease-in-out ${isOpen ? "bg-[#003459] text-white" : "bg-white text-black hover:bg-[#003459] hover:text-white"} `}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left p-[24px] flex justify-between items-center transition-all duration-300"
                                >
                                    <span className="text-xl md:text-2xl leading-[110%] font-normal transition-colors duration-300">
                                        {item.question}
                                    </span>
                                    <img
                                        src={isOpen ? minus : plus}
                                        alt={isOpen ? "Collapse" : "Expand"}
                                        className={`transition-transform duration-300 transform ${isOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {isOpen && (
                                    <div className="px-4 pb-4 text-base leading-[150%] font-normal max-w-[722px] ml-3 transition-opacity duration-300">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Accordian2;
