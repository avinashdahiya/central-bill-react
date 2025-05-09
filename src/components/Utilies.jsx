import React from 'react';
import { features } from '../utils/helper';
import thumps from '../assets/images/svg/thumps.svg';
import arror from '../assets/images/png/arror.png';
import CustomContent from './common/CustomContent';

const Utilies = () => {
    return (
        <section id="why-use">
            <header className="container max-w-[1140px] p-4 mx-auto flex-col flex justify-center items-center pt-[40px] md:pt-[90px] lg:pt-[162px]">
                <h2 className="text-[38px] md:text-[48px] leading-[110%] font-normal capitalize text-black text-center">
                    Why Choose Us for <span className="font-bold">Utilities</span>
                </h2>

                <CustomContent
                    content="This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!"
                    className="max-w-[620px] text-black opacity-90 text-center pt-4"
                />

                <div className="lg:grid lg:grid-cols-3 bg-white mt-[58px] md:gap-6 mb-[40px] lg:mb-[162px] gap-0">
                    {/* LEFT BLOCK */}
                    <div className="bg-[#003459] text-white p-3 md:p-6 flex flex-col justify-center lg:items-start space-y-4 rounded-[4px] w-full h-[400px] lg:h-[596px] lg:max-w-[424px] mx-auto items-center text-center lg:text-left transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg">
                        <img src={thumps} className="w-[100px] md:w-[180px] lg:w-[232px] transition-transform duration-500 hover:rotate-6" alt="Thumbs up" />
                        <h2 className="text-[24px] font-semibold leading-[110%] pt-1 lg:pt-[30px]">Tailored Recommendations</h2>
                        <p className="text-base opacity-90 leading-[150%] font-normal md:pt-[10px] lg:max-w-[344px]">
                            Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available.
                        </p>
                        <button className="lg:mt-[22px] bg-white text-[#003459] px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#f3f3f3] hover:scale-105">
                            <img src={arror} alt="arrow icon" />
                        </button>
                    </div>

                    {/* RIGHT GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-2 mt-5 lg:mt-0">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 rounded-lg p-4 md:p-6"
                            >
                                <div className="mb-4 transition-transform duration-300 hover:scale-110">
                                    <img src={feature.img} alt={`Feature ${index}`} />
                                </div>
                                <h3 className="font-semibold text-[20px] md:text-[24px] leading-[110%] text-[#010101] pt-[12px] transition-colors duration-300 hover:text-[#003459]">
                                    {feature.title}
                                </h3>
                                <p className="text-base leading-[150%] font-normal pt-[12px] text-[#00171F] opacity-90">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Utilies;
