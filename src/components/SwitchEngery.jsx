import React from 'react';
import light from '../assets/images/png/light.png';
import Custombtn from './common/Custombtn';
import { White_Arrow } from '../utils/icon';
import CustomContent from './common/CustomContent';

const SwitchEnergy = () => {
    return (
        <section className='bg-white' id="about">
            <div className='container max-w-[1140px] mx-auto flex flex-col items-center justify-center p-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[60px] lg:gap-[75px]'>
                    <div className='flex justify-center'>
                        <img src={light} className='mx-auto w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px]' alt="Energy Light" />
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-[28px] sm:text-[38px] md:text-[48px] text-[#1E1E1E] leading-[110%] font-bold capitalize'>
                            Switching Energy <span className='font-normal'>Made Simple</span>
                        </h2>
                        <CustomContent
                            content="Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills."
                            className="text-[#00171F] opacity-90 mt-4 lg:max-w-[558px]"
                        />
                        <p className='text-[20px] sm:text-[24px] leading-[110%] font-normal text-[#003459] mt-[30px] capitalize'>
                            Benefits of Comparing Energy Plans
                        </p>
                        <ul className='list-disc mt-4 ml-7'>
                            <li className='font-normal text-base leading-[150%] text-[#00171F]'>Save money by finding cheaper deals.</li>
                            <li className='font-normal text-base leading-[150%] text-[#00171F] mt-2'>Get better customer service.</li>
                            <li className='font-normal text-base leading-[150%] text-[#00171F] mt-2'>Explore greener, more sustainable energy options.</li>
                        </ul>
                        <Custombtn 
                            btnClass="max-w-[210px] mt-[42px] self-center md:self-start" 
                            btnText="Compare With Us" 
                            whitesvg={
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 14.3691L14 1.36914M14 1.36914V13.8491M14 1.36914H1.52" stroke="white" strokeWidth="1.93338" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            } 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SwitchEnergy;
