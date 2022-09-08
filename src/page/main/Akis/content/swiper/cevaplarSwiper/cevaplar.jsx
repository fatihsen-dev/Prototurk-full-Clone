import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import CevaplarItem from "./cavaplarItem";

function Cevaplar() {
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
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1536: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      modules={[Pagination]}
      className='mySwiper w-full mt-5  !pb-10 mb-7'
    >
      <SwiperSlide>
        <CevaplarItem />
      </SwiperSlide>
      <SwiperSlide>
        <CevaplarItem />
      </SwiperSlide>
      <SwiperSlide>
        <CevaplarItem />
      </SwiperSlide>
      <SwiperSlide>
        <CevaplarItem />
      </SwiperSlide>
      <SwiperSlide>
        <CevaplarItem />
      </SwiperSlide>
      <SwiperSlide>
        <CevaplarItem />
      </SwiperSlide>
    </Swiper>
  );
}

export default Cevaplar;
