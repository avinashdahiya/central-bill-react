import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { silderData } from '../utils/helper';
import left from "../assets/images/png/left arrow.png"
import CustomContent from './common/CustomContent';
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonls = () => {
  return (
    <section id="testimonials">
      <div className='container max-w-[1240px] mx-auto flex flex-col justify-center items-center relative p-4'>
        <h2 className='text-black font-normal text-5xl leading-[110%]'>
          Our <span className='font-bold'>Testimonials</span>
        </h2>
        <CustomContent 
          content="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum"
          className="max-w-[490px] text-black opacity-90 pt-4 pb-[64px] text-center"
        />
        
        <div className="relative w-full max-w-[1240px] mx-auto">
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 z-10">
            <img src={left} alt="prev" />
          </div>
          <div className="swiper-button-next-custom absolute -right-4 xl:-right-12 top-1/2 -translate-y-1/2 z-10 rotate-180">
            <img src={left} alt="next" />
          </div>

          {/* Swiper Setup */}
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
              delay: 2000, // faster autoplay (from 3000 to 2000ms)
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: { slidesPerView: 3, spaceBetween: 24 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              320: { slidesPerView: 1, spaceBetween: 12 },
            }}
            className="w-full max-w-[1140px] mx-auto"
          >
            {silderData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-gray-300 p-5 rounded-md max-w-[364px] mx-auto shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-[#00A8E8]">
                  <div className="flex gap-4 items-center">
                    <img src={item.img} alt="user" />
                    <div>
                      <p className="text-black text-2xl leading-[150%] font-normal">{item.name}</p>
                      <p className="text-black text-base leading-[150%] font-normal opacity-50">{item.post}</p>
                    </div>
                  </div>
                  <img src={item.group} alt="rating" className="mt-6" />
                  <p className="text-black text-base leading-[150%] font-normal opacity-90 mt-4 text-left">
                    {item.content}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonls;
