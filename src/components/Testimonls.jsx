import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { silderData } from '../utils/helper';
import CustomContent from './common/CustomContent';
import CustomHeading from './common/CustomHeading';

import 'swiper/css';
import 'swiper/css/navigation';

const Testimonls = () => {
  return (
    <section id="testimonials">
      <div className='container max-w-[1240px] mx-auto flex flex-col justify-center items-center relative p-4'>
        <CustomHeading headClass="pb-4 text-center" headtext="Our" headSpan2="Testimonials" />
        <CustomContent 
          content="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum"
          className="max-w-[490px] text-black opacity-90 text-center"
        />

        <div className="container max-w-[1284px] mx-auto px-5">
          <div className='pt-[62px] max-md:pt-8 relative'>
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1, centeredSlides: false },
                640: { slidesPerView: 2, centeredSlides: false },
                1020: { slidesPerView: 3, centeredSlides: false },
              }}
            >
              {silderData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white border border-gray-200 p-5 rounded-md max-w-[364px] mx-auto shadow-xl
                                  transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
                    <div className="flex gap-4 items-center">
                      <img src={item.img} alt="user" className="w-14 h-14 object-cover rounded-full" />
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

            {/* Navigation Buttons */}
            <button className="custom-prev bg-white shadow-lg rounded-full w-10 h-10 flex items-center max-xl:hidden border-black border justify-center 
                                absolute top-1/2 left-[-65px] transform translate-y-[32%] z-10 hover:bg-black hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button className="custom-next bg-white shadow-lg rounded-full w-10 h-10 flex items-center max-xl:hidden justify-center border-black border 
                                absolute top-1/2 right-[-65px] transform translate-y-[32%] z-10 hover:bg-black hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonls;
