import React, { useEffect} from 'react'
import Navbar from './Navbar'
import girl from '../assets/images/png/girl.png'
import dots from '../assets/images/svg/dots.svg'
import Custombtn from './common/Custombtn'
import AOS from 'aos';
import 'aos/dist/aos.css'
import CustomContent from './common/CustomContent'
import CustomInput from './common/CustomInput'

const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, 
            once: true,     
        });
    }, [])
    return (
        <section className='bg-[url(./assets/images/png/blue-img.png)] bg-cover bg-center lg:h-[810px] md:rounded-bl-[100px] lg:rounded-bl-[200px] h-none p-4'>
            <Navbar />
            <div className='conatiner max-w-[1140px] mx-auto flex flex-col items-center justify-center  '>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col  mt-[40px]  lg:mt-[122px]  mx-auto '>
                        <h1 className='text-[35px] sm:text-[50px] lg:text-[60px] font-normal text-white leading-[110%] md:max-w-[506px]'>Easily Compare <span className='font-bold'>Energy, Gas, And Internet</span> Plans</h1>
                        <CustomContent content="Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place." className="text-white mt-4 opacity-90"/>
                        <div className="flex items-center relative max-w-[476px] mt-[30px] md:mt-[42px]">
                            <CustomInput type="text" placeholder="Start typing your address" inputClass="pr-[160px]" />
                            <Custombtn btnClass="absolute z-2 right-[10px]" btnText="Compare" whitesvg={<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 14.3691L14 1.36914M14 1.36914V13.8491M14 1.36914H1.52" stroke="white" stroke-width="1.93338" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            } />
                        </div>

                    </div>
                    <div data-aos="zoom-in-up" className='relative z-20'>
                        <img src={girl} alt="Header Image" className='w-full  relative z-3 mt-[30px] lg:mt-[109px]  max-w-[558px] mx-auto pointer-events-none  ' /></div>
                    <img src={dots} alt="Header Image" className=' absolute right-[120px] mt-[53px] hidden xl:block z-0 ' />


                </div>
            </div>

        </section>
    )
}

export default Header;