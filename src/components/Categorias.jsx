import banner1 from "../assets/banners/banner-1.jpg";
import banner2 from "../assets/banners/banner-2.jpg";
import banner3 from "../assets/banners/banner-3.jpg";
import banner4 from "../assets/banners/banner-4.jpg";

import logo1 from "../assets/logos/logo-4.jpg";
import logo2 from "../assets/logos/logo-3.jpg";
import logo3 from "../assets/logos/logo-2.jpg";
import logo4 from "../assets/logos/logo-1.jpg";

import p1a from "../assets/products/1/p-1.jpg";
import p1b from "../assets/products/1/p-2.jpg";
import p1c from "../assets/products/1/p-3.jpg";

import p2a from "../assets/products/2/p-1.jpg";
import p2b from "../assets/products/2/p-2.jpg";
import p2c from "../assets/products/2/p-3.jpg";

import p3a from "../assets/products/3/p-1.jpg";
import p3b from "../assets/products/3/p-2.jpg";
import p3c from "../assets/products/3/p-3.jpg";

import p4a from "../assets/products/4/p-1.jpg";
import p4b from "../assets/products/4/p-2.jpg";
import p4c from "../assets/products/4/p-3.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Categorias = () => {
  return (
    <div className="mb-16 container max-w-7xl px-4 mx-auto">
      <h3 className="text-2xl mb-6">Categorías populares</h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=""
      >
        <SwiperSlide className="mt-0">
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(170px,_1fr))]">
            <div className="bg-white border py-8 flex justify-center items-center text-5xl">
              <i className="ri-car-line"></i>
            </div>
            <div className="bg-white border py-8 flex justify-center items-center text-5xl">
              <i className="ri-camera-line"></i>
            </div>
            <div className="bg-white border py-8 flex justify-center items-center text-5xl">
              <i className="ri-gamepad-line"></i>
            </div>
            <div className="bg-white border py-8 flex justify-center items-center text-5xl">
              <i className="ri-home-office-line"></i>
            </div>
            <div className="bg-white border py-8 flex justify-center items-center text-5xl">
              <i className="ri-building-3-line"></i>
            </div>
            <div className="bg-white border py-8 flex justify-center items-center text-5xl">
              <i className="ri-t-shirt-2-line"></i>
            </div>
            <div className="bg-white border py-8 flex justify-center items-center text-5xl">
              <i className="ri-attachment-line"></i>
            </div>
            <div className="bg-white border py-8 flex justify-center items-center text-5xl">
              <i className="ri-smartphone-line"></i>
            </div>
            <div className="bg-white border py-8 flex justify-center items-center text-5xl">
              <i className="ri-tv-2-line"></i>
            </div>
            <div className="bg-white border py-8 flex justify-center items-center text-5xl">
              <i className="ri-mic-line"></i>
            </div>
            <div className="bg-white border py-8 flex justify-center items-center text-5xl">
              <i className="ri-steering-line"></i>
            </div>
            <div className="bg-white border py-8 flex justify-center items-center text-5xl">
              <i className="ri-football-line"></i>
            </div>
            <div className="bg-white border py-8 flex justify-center items-center text-5xl">
              <i className="ri-bear-smile-line"></i>
            </div>
            <div className="bg-white border py-8 flex justify-center items-center text-5xl">
              <i className="ri-t-shirt-air-line"></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <i class="ri-gamepad-line"></i>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categorias;
