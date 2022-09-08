import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import LangSwiperItem from "./LangSwiperItem";

function LangSwiper() {
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
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1536: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      modules={[Pagination]}
      className='mySwiper w-full mt-5 !pb-10 mb-7'
    >
      <SwiperSlide>
        <LangSwiperItem
          text='HTML'
          color='#e54d27'
          bg='#fdede9'
          fileCount='52'
          videoCount='1'
          icon='fab fa-html5'
          location='html'
        />
      </SwiperSlide>
      <SwiperSlide>
        <LangSwiperItem
          text='CSS'
          color='#29a4d9'
          bg='#eaf6fc'
          fileCount='78'
          videoCount='7'
          icon='fa-brands fa-css3-alt'
          location='css'
        />
      </SwiperSlide>
      <SwiperSlide>
        <LangSwiperItem
          text='Javascript'
          color='#f7df1e'
          bg='#fffce9'
          textColor='#000'
          fileCount='16'
          videoCount='8'
          svg='javascript'
          location='javascript'
        />
      </SwiperSlide>
      <SwiperSlide>
        <LangSwiperItem
          text='PHP'
          color='#7478ae'
          bg='#f1f2f7'
          fileCount='61'
          videoCount='1'
          svg='php'
          location='php'
        />
      </SwiperSlide>
      <SwiperSlide>
        <LangSwiperItem
          text='MySQL'
          color='#4479a1'
          bg='#ecf2f6'
          fileCount='2'
          svg='mysql'
          location='mysql'
        />
      </SwiperSlide>
      <SwiperSlide>
        <LangSwiperItem
          text='Laravel'
          color='#ff2d20'
          bg='#ffeae9'
          fileCount='27'
          svg='laravel'
          location='laravel'
        />
      </SwiperSlide>
      <SwiperSlide>
        <LangSwiperItem
          text='Python'
          color='#3372a5'
          bg='#ebf1f6'
          fileCount='10'
          videoCount='9'
          svg='python'
          location='python'
        />
      </SwiperSlide>
      <SwiperSlide>
        <LangSwiperItem
          text='Git'
          color='#f74e28'
          bg='#ffedea'
          fileCount='2'
          icon='fa-brands fa-git-alt'
          location='git'
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default LangSwiper;
