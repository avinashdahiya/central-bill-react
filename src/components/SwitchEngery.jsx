import React from 'react';
import light from '../assets/images/png/light.png';
import Custombtn from './common/Custombtn';
import { White_Arrow } from '../utils/icon';
import CustomContent from './common/CustomContent';

const SwitchEnergy = () => {
    return (
        <section className='bg-white' id="about">
            <div className='container max-w-[1140px] mx-auto flex flex-col items-center justify-center p-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[75px]'>
                    <div>
                        <img src={light} className='mx-auto' alt="Energy Light" />
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-[38px] md:text-[48px] text-[#1E1E1E] leading-[110%] lg:max-w-[409px] capitalize font-bold'>
                            Switching Energy <span className='font-normal'>Made Simple</span>
                        </h2>
                        <CustomContent
                            content="Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills."
                            className="text-[#00171F] opacity-90 mt-4 lg:max-w-[558px]"
                        />
                        <p className='text-[24px] leading-[110%] font-normal text-[#003459] mt-[38px] capitalize'>
                            Benefits of Comparing Energy Plans
                        </p>
                        <ul className='list-disc mt-4 ml-7'>
                            <li className='font-normal text-base leading-[150%] text-[#00171F]'>Save money by finding cheaper deals.</li>
                            <li className='font-normal text-base leading-[150%] text-[#00171F] mt-2'>Get better customer service.</li>
                            <li className='font-normal text-base leading-[150%] text-[#00171F] mt-2'>Explore greener, more sustainable energy options.</li>
                        </ul>
                       <Custombtn btnClass="max-w-[210px] mt-[42px]" btnText="Compare With Us" whitesvg={<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 14.3691L14 1.36914M14 1.36914V13.8491M14 1.36914H1.52" stroke="white" stroke-width="1.93338" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SwitchEnergy;

