import React from 'react';
import bannerimg1 from '../assets/img1.avif';
import bannerimg2 from '../assets/img2.jpeg';
import bannerimg3 from '../assets/img3.jpg';
import bannerimg4 from '../assets/img4.jpg';
import bannerimg5 from '../assets/img5.jpg';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
  return (
    <div className="mt-10 mx-auto w-full px-4 lg:px-8 py-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="rounded-2xl overflow-hidden"
      >
        <SwiperSlide>
          <img
            src={bannerimg1}
            alt="bannerimg1"
            className="w-full h-96 md:h-[500px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bannerimg2}
            alt="bannerimg2"
            className="w-full h-96 md:h-[500px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bannerimg3}
            alt="bannerimg3"
            className="w-full h-96 md:h-[500px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bannerimg4}
            alt="bannerimg4"
            className="w-full h-96 md:h-[500px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bannerimg5}
            alt="bannerimg5"
            className="w-full h-96 md:h-[500px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
