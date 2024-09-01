"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";
import img from '@/img/mm.jpg'
export default function Swager() {
  return (
    <div className="mt-24">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="w-full max-w-4xl"
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              src={img}
              alt="Slide 1"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="relative">
            <Image
              src={img}
              alt="Slide 2"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <Image
              src={img}
              alt="Slide 3"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
