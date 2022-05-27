import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'
import { Box, Flex, Text } from '@chakra-ui/react'

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
        <SwiperSlide className={styles.swiperSlide}><Link href='/continent'><Flex flexDirection='column' w='full' h='full' backgroundImage='./images/northAmerica.jpg' backgroundPosition='bottom' alignItems='center' justifyContent='center' cursor='pointer'><Text color='white' fontSize='4xl' fontWeight='bold'>North America</Text><Text color='white' fontSize='xl' fontWeight='bold'>The oldest continent</Text></Flex></Link></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><Link href='/continent'><Flex flexDirection='column' w='full' h='full' backgroundImage='./images/southAmerica.jpg' backgroundPosition='bottom' alignItems='center' justifyContent='center' cursor='pointer'><Text color='white' fontSize='4xl' fontWeight='bold'>South America</Text><Text color='white' fontSize='xl' fontWeight='bold'>The oldest continent</Text></Flex></Link></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><Link href='/continent'><Flex flexDirection='column' w='full' h='full' backgroundImage='./images/asia.jpg' backgroundPosition='bottom' alignItems='center' justifyContent='center' cursor='pointer'><Text color='white' fontSize='4xl' fontWeight='bold'>Asia</Text><Text color='white' fontSize='xl' fontWeight='bold'>The oldest continent</Text></Flex></Link></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><Link href='/continent'><Flex flexDirection='column' w='full' h='full' backgroundImage='./images/africa.jpg' backgroundPosition='center' alignItems='center' justifyContent='center' cursor='pointer'><Text color='white' fontSize='4xl' fontWeight='bold'>Africa</Text><Text color='white' fontSize='xl' fontWeight='bold'>The oldest continent</Text></Flex></Link></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><Link href='/continent'><Flex flexDirection='column' w='full' h='full' backgroundImage='./images/europe.jpg' backgroundPosition='center' alignItems='center' justifyContent='center' cursor='pointer'><Text color='white' fontSize='4xl' fontWeight='bold'>Europe</Text><Text color='white' fontSize='xl' fontWeight='bold'>The oldest continent</Text></Flex></Link></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><Link href='/continent'><Flex flexDirection='column' w='full' h='full' backgroundImage='./images/oceania.jpg' backgroundPosition='center' alignItems='center' justifyContent='center' cursor='pointer'><Text color='white' fontSize='4xl' fontWeight='bold'>Oceania</Text><Text color='white' fontSize='xl' fontWeight='bold'>The oldest continent</Text></Flex></Link></SwiperSlide>

      </Swiper>
    </>
  );
}
