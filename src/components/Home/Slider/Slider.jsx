import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.scss";
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="../assets/Slider.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../assets/Slider.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../assets/Slider.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../assets/Slider.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../assets/Slider.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../assets/Slider.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../assets/Slider.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../assets/Slider.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="../assets/Slider.png" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
