import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { slides } from '../utils/helper'


const Slider = () => {
    return (
        <section className="bg-white">
            <div className="container max-w-[1140px] mx-auto p-4">
                <h2 className="font-normal text-[30px] md:text-[38px] leading-[110%] text-[#003459] lg:max-w-[548px] mt-[45px] text-center lg:text-left ">
                    More Than
                    <span className="text-[#00A8E8] font-bold"> 80,000+</span> Companies trust Bill Central
                </h2>


                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper mt-[30px] md:mt-[65px] mb-[30px] lg:mb-[162px] mx-auto"
                    breakpoints={{
                        1024: { slidesPerView: 6, spaceBetween: 30 },
                        768: { slidesPerView: 5, spaceBetween: 20 },
                        640: { slidesPerView: 4, spaceBetween: 10 },
                        320: { slidesPerView: 3, spaceBetween: 10 },
                    }}
                >
                    {slides.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img src={src} alt={`Slide ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Slider;



