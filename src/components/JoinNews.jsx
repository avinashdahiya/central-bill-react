import React from 'react';
import Custombtn from './common/Custombtn';
import CustomContent from './common/CustomContent';
import CustomHeading from './common/CustomHeading';
import CustomInput from './common/CustomInput';

const JoinNews = () => {
    return (
        <div>
            <div className="bg-[url(./assets/images/png/news.png)] bg-cover bg-center translate-y-[20%] transform lg:translate-y-[50%] p-4 container max-w-[1140px] mx-auto">
                <div className="max-w-[620px] flex flex-col justify-center items-center mx-auto">
                    <CustomHeading
                        headClass="text-center pt-8"
                        headtext="Join Our"
                        headSpan2="Newsletter"
                    />
                    <CustomContent
                        content="Stay up to date with the latest deals, energy-saving tips, and exclusive offers! Sign up for our newsletter and never miss out on great savings opportunities again."
                        className="pt-4 text-[#00171F] opacity-90 pb-[38px] text-center"
                    />
                </div>

                <div className="flex items-center relative max-w-[476px] mx-auto mb-[30px] md:mb-[50px]">
                    <CustomInput
                        type="email"
                        placeholder="Enter your email"
                        inputClass="pr-[160px]"
                    />
                    <Custombtn
                        btnClass="absolute z-10 right-[10px] bg-[#007EA7] text-white hover:bg-[#005f7a] transition-all duration-300"
                        btnText="Submit"
                        whitesvg={
                            <svg
                                width="15"
                                height="16"
                                viewBox="0 0 15 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 14.3691L14 1.36914M14 1.36914V13.8491M14 1.36914H1.52"
                                    stroke="white"
                                    strokeWidth="1.93338"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default JoinNews;
