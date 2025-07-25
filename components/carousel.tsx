"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiperStyle.css";
import Image from "next/image";
import { fontBagoss, fontSohne } from "@/public/fonts";
import { cn } from "@/lib/utils";
import { useSwiper } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";


const Carousel = ({swiperRef}) => {
  

  return (


 
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, A11y]}
        className={`${cn("antialiased", fontBagoss.variable)} mySwiper`}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        speed={1000}
      >
        <SwiperSlide>
        
            <span className="font-bagoss text-white text-[22px] leadings-[125%] mb-[24px] leading-[125%] text-center">
              Professionals around the world<br/> shared how they feel abo
              <span className="font-bagoss text-gray-500 mb-[24px] leading-[125%] text-center">
                ut <br/> technology and I’ve listened. Now <br/> it’s your turn.
              </span>
            </span>
         
        </SwiperSlide>
        <SwiperSlide>
      
            <span className="font-bagoss text-white text-[22px] leadings-[125%] mb-[24px] leading-[125%] text-center">
              I’ll ask you a handful of meaningful<br/> questions
              <span className="font-bagoss text-gray-500 mb-[24px] leading-[125%] text-center">
                and compare your<br/> responses with people in your<br/> industry. 
              </span>
            </span>
       
        </SwiperSlide>
        <SwiperSlide>
         
            <span className="font-bagoss text-white text-[22px] leadings-[125%] mb-[24px] leading-[125%] text-center">
              You’ll get insights into current<br/> industry sentiments an
              <span className="font-bagoss text-gray-500 mb-[24px] leading-9 text-center">
                d a reality<br/> check about technology in a few<br/> minutes. Deal?
                Great! 
              </span>
            </span>
       
        </SwiperSlide>
       
      </Swiper>
  );
};

export default Carousel;
