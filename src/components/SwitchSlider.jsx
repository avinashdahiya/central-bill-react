import React from 'react';
import { cardLIST } from '../utils/helper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import CustomContent from './common/CustomContent';
const SwitchSlider = () => {
    return (
        <section id="how-it-works">
        <div className='max-lg:pb-[44px] pb-[30px]'>
                <div className="2xl:container pt-[40px] md:pt-[90px] lg:pt-[162px] mx-auto">
                <div className='flex flex-col  justify-center text-center items-center'>
                <h2 className=' text-[38px] md:text-[48px] text-[#1E1E1E] leading-[110%]  text-transform:capitalize font-normal' > Simple Steps To < span className='font-bold' > Switch</span > </h2 >
                    <CustomContent content="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum" className="text-[00171F] opacity-90 mt-4 max-w-[610px] px-4"/>
                </div>
                    <Swiper 
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        630: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    }}
                >
                    {cardLIST.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative group overflow-hidden h-[500px] sm:h-full  w-full mx-auto mt-10'>
                                <img className='w-full  ' src={item.img} alt={item.alt} />
                                <div className='absolute top-0 left-0 w-full h-full group-hover:opacity-0 transition-all duration-700 ease-in-out  bg-[#EAF9FFF0]  '>
                                    <div className='relative w-full h-full flex justify-center items-center '>
                                        <p className=' text-[32px]   font-normal max-md:text-[20px] text-[#00171F] group-hover:opacity-100 leading-[110%]  transition-all duration-700 ease-in-out  -rotate-90  whitespace-nowrap '>
                                            {item.imgHeading}
                                        </p>
                                    </div>
                                </div>
                                <div className=' group-hover:bg-[#003459] absolute  mx-auto group-hover:top-[68%] group-hover:opacity-100 opacity-0 transition-all duration-700 ease-out w-full p-11 max-md:p-3'>
                                    <h4 className='text-[32px] font-normal pb-3 text-white max-md:text-2xl max-md:pb-1.5  leading-[110%]'>{item.title}</h4>
                                    <p className='text-white text-base font-normal leading-[160%] opacity-90 max-w-[286px]'>{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            </div>
        </section>
    );
};

export default SwitchSlider;







