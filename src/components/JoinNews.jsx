import React from 'react';
import Custombtn from './common/Custombtn';
import CustomContent from './common/CustomContent';

const JoinNews = () => {
    return (
        <section id="newsletter">
            <div className="bg-[url('./assets/images/png/news.png')] bg-no-repeat bg-cover bg-center transform translate-y-[20%] lg:translate-y-[50%] p-4 container max-w-[1140px] mx-auto">
                <div className="max-w-[620px] flex flex-col justify-center items-center mx-auto">
                    <h2 className="font-normal text-[38px] md:text-[48px] leading-[110%] text-center capitalize text-black pt-[20px] md:pt-[54px]">
                        Join Our <span className="font-bold">Newsletter</span>
                    </h2>

                    <CustomContent
                        content="Stay up to date with the latest deals, energy-saving tips, and exclusive offers! Sign up for our newsletter and never miss out on great savings opportunities again."
                        className="pt-4 text-black opacity-90 pb-[38px] text-center"
                    />

                    <label className="relative flex items-center w-full max-w-[476px] px-4 sm:px-0 mb-[20px] md:mb-[54px]">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-[22px] py-[24px] rounded-[0px_100px_100px_20px] border border-gray-300 text-gray-700 text-base leading-[150%] focus:outline-none focus:ring-2 focus:ring-[#007EA7] transition"
                        />
                        <Custombtn
                            btn="Submit"
                            className="absolute top-1/2 -translate-y-1/2 right-[12px] sm:right-[10px] text-white font-semibold bg-[#007EA7] px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#006D8F] hover:text-white hover:border hover:border-[#007EA7]"
                        />
                    </label>
                </div>
            </div>
        </section>
    );
};

export default JoinNews;
