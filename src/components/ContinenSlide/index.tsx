import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./styles.module.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";


export const ContinentSlide = () => {


  return (
    <>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide} ><img src='./images/northAmerica.jpg'></img></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src='./images/southAmerica.jpg'></img></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src='./images/asia.jpg'></img></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src='./images/africa.jpg'></img></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src='./images/europe.jpg'></img></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><img src='./images/oceania.jpg'></img></SwiperSlide>
      </Swiper>
    </>
  );
}
