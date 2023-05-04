import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import style from "./Mobile_Slider.module.scss";

// import required modules
import { Pagination } from "swiper";

export default function Mobile_Slider() {
  return (
    <>
      <Swiper
        style={{ marginTop: "50px", zIndex: 14  }}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        modules={[Pagination]}
        className={style.mySwiper1}
      >
        <SwiperSlide className={style.swiper_slide }><li>
          <img style={{width:50}} src="../assets/free.svg" alt="" />
          <p style={{fontSize:12}}>Бесплатная
            сборка</p>
        </li></SwiperSlide>
        <SwiperSlide className={style.swiper_slide }> <li>
          <img style={{width:50}} src="../assets/bolib.svg" alt="" />
          <p style={{fontSize:12}}>Рассрочка 4 мес./0%
            без переплат</p>
        </li></SwiperSlide>
        <SwiperSlide className={style.swiper_slide }><li>
          <img style={{width:50}} src="../assets/dastavka.svg" alt="" />
          <p style={{fontSize:12}}>Бесплатная
            доставка</p>
        </li></SwiperSlide>
        <SwiperSlide className={style.swiper_slide }><li>
          <img style={{width:50}} src="../assets/garant.svg" alt="" />
          <p style={{fontSize:12}}>Официальная
            гарантия</p>
        </li></SwiperSlide>
        <SwiperSlide className={style.swiper_slide }><li>
          <img style={{width:50}} src="../assets/best_money.svg" alt="" />
          <p style={{fontSize:12}}>Лучшая цена
          </p>
        </li></SwiperSlide>
        <SwiperSlide className={style.swiper_slide }><li>
          <img style={{width:50}} src="../assets/year.png" alt="" />
          <p style={{fontSize:12}}>11 лет
            на рынке</p>
        </li></SwiperSlide>
        <SwiperSlide className={style.swiper_slide }><li>
          <img style={{width:50}} src="../assets/consult.svg" alt="" />
          <p style={{fontSize:12}}>Профессиональная
            консультация</p>
        </li></SwiperSlide>
      </Swiper>




      <Swiper
        style={{ marginTop: "50px", zIndex: 14 }}
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
        modules={[Pagination]}
        className={style.mySwiper3}
      >
        <SwiperSlide className={style.swiper_slide }><li>
          <img style={{width:50}} src="../assets/free.svg" alt="" />
          <p style={{fontSize:12}}>Бесплатная
            сборка</p>
        </li></SwiperSlide>
        <SwiperSlide className={style.swiper_slide }> <li>
          <img style={{width:50}} src="../assets/bolib.svg" alt="" />
          <p style={{fontSize:12}}>Рассрочка 4 мес./0%
            без переплат</p>
        </li></SwiperSlide>
        <SwiperSlide className={style.swiper_slide }><li>
          <img style={{width:50}} src="../assets/dastavka.svg" alt="" />
          <p style={{fontSize:12}}>Бесплатная
            доставка</p>
        </li></SwiperSlide>
        <SwiperSlide className={style.swiper_slide }><li>
          <img style={{width:50}} src="../assets/garant.svg" alt="" />
          <p style={{fontSize:12}}>Официальная
            гарантия</p>
        </li></SwiperSlide>
        <SwiperSlide className={style.swiper_slide }><li>
          <img style={{width:50}} src="../assets/best_money.svg" alt="" />
          <p style={{fontSize:12}}>Лучшая цена
          </p>
        </li></SwiperSlide>
        <SwiperSlide className={style.swiper_slide }><li>
          <img style={{width:50}} src="../assets/year.png" alt="" />
          <p style={{fontSize:12}}>11 лет
            на рынке</p>
        </li></SwiperSlide>
        <SwiperSlide className={style.swiper_slide }><li>
          <img style={{width:50}} src="../assets/consult.svg" alt="" />
          <p style={{fontSize:12}}>Профессиональная
            консультация</p>
        </li></SwiperSlide>
      </Swiper>
    </>
  );
}
