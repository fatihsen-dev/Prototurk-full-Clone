import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import NewEducationItem from "./NewEducationItem";

function NewEducation() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        420: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1536: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }}
      modules={[Pagination]}
      className='mySwiper w-full mt-5  !pb-10 mb-7'
    >
      <SwiperSlide>
        <NewEducationItem
          userName='SadıkTuran'
          title={`Javascript'de Boş Array Oluşturmak`}
        />
      </SwiperSlide>
      <SwiperSlide>
        <NewEducationItem
          time='15 dakika önce'
          LangBg='#e54d27'
          langColor='#fff'
          langText='HTML'
        />
      </SwiperSlide>
      <SwiperSlide>
        <NewEducationItem
          userName='TayfunErbilen'
          time='23 dakika önce'
          LangBg='#29a4d9'
          langColor='#fff'
          langText='CSS'
        />
      </SwiperSlide>
      <SwiperSlide>
        <NewEducationItem />
      </SwiperSlide>
    </Swiper>
  );
}

export default NewEducation;
