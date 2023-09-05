import Beneficios from "./components/Beneficios";
import Categorias from "./components/Categorias";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Ofertas from "./components/Ofertas";
import Tiendas from "./components/Tiendas";

import banner1 from "./assets/banners/banner-1.jpg";
import banner2 from "./assets/banners/banner-2.jpg";
import banner3 from "./assets/banners/banner-3.jpg";
import banner4 from "./assets/banners/banner-4.jpg";

import logo1 from "./assets/logos/logo-4.jpg";
import logo2 from "./assets/logos/logo-3.jpg";
import logo3 from "./assets/logos/logo-2.jpg";
import logo4 from "./assets/logos/logo-1.jpg";

import p1a from "./assets/products/1/p-1.jpg";
import p1b from "./assets/products/1/p-2.jpg";
import p1c from "./assets/products/1/p-3.jpg";

import p2a from "./assets/products/2/p-1.jpg";
import p2b from "./assets/products/2/p-2.jpg";
import p2c from "./assets/products/2/p-3.jpg";

import p3a from "./assets/products/3/p-1.jpg";
import p3b from "./assets/products/3/p-2.jpg";
import p3c from "./assets/products/3/p-3.jpg";

import p4a from "./assets/products/4/p-1.jpg";
import p4b from "./assets/products/4/p-2.jpg";
import p4c from "./assets/products/4/p-3.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const MainPage = ({ country }) => {
  return (
    <div className="bg-slate-200 overflow-x-hidden font">
      <Header />
      <div className=" mb-10">
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="h-[400px]"
        >
          <SwiperSlide className="relative">
            <img className="w-full h-full object-cover" src={banner4} alt="" />
            <div className="absolute left-6 sm:left-16 top-1/2 -translate-y-full">
              <h3 className="text-2xl font-semibold mb-8">
                PAGA CÓMODO Y SEGURO
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white px-2 rounded-full flex items-center justify-center text-xl">
                  <span className="text-3xl font-semibold">30%</span>
                  OFF
                </div>

                <div className=" bg-blue-800 px-6 py-2  text-white flex flex-col items-center rounded-full">
                  <span className="font-semibold leading-4">
                    ENVÍOS <br />
                    GRATIS
                  </span>

                  <span className="text-xs flex items-center gap-1">
                    <i class="ri-truck-line text-sm"></i>
                    DESDE 19.990$
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img className="w-full h-full object-cover" src={banner2} alt="" />
            <div className="absolute left-6 sm:left-16 top-1/2 -translate-y-full">
              <h3 className="text-2xl mb-8 text-white">
                ESPECIAL
                <span className="font-semibold"> RELOJES</span>
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white px-2 rounded-full flex items-center justify-center text-xl">
                  <span className="text-3xl font-semibold">30%</span>
                  OFF
                </div>

                <div className=" bg-blue-800 px-6 py-2  text-white flex flex-col items-center rounded-full">
                  <span className="font-semibold leading-4">
                    ENVÍOS <br />
                    GRATIS
                  </span>

                  <span className="text-xs flex items-center gap-1">
                    <i class="ri-truck-line text-sm"></i>
                    DESDE 19.990$
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img className="w-full h-full object-cover" src={banner3} alt="" />
            <div className="absolute left-6 sm:left-16 top-1/2 -translate-y-full">
              <h3 className="text-2xl mb-8 text-white">
                ESPECIAL
                <span className="font-semibold"> SMARTPHONES</span>
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white px-2 rounded-full flex items-center justify-center text-xl">
                  <span className="text-3xl font-semibold">30%</span>
                  OFF
                </div>

                <div className=" bg-blue-800 px-6 py-2  text-white flex flex-col items-center rounded-full">
                  <span className="font-semibold leading-4">
                    ENVÍOS <br />
                    GRATIS
                  </span>
                  
                  <span className="text-xs flex items-center gap-1">
                    <i class="ri-truck-line text-sm"></i>
                    DESDE 19.990$
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img className="w-full h-full object-cover" src={banner1} alt="" />
            <div className="absolute left-6 sm:left-16 top-1/2 -translate-y-full">
              <h3 className="text-2xl mb-8">
                WINTER
                <span className="font-semibold"> SALE</span>
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white px-2 rounded-full flex items-center justify-center text-xl">
                  <span className="text-3xl font-semibold">30%</span>
                  OFF
                </div>

                <div className=" bg-blue-800 px-6 py-2  text-white flex flex-col items-center rounded-full">
                  <span className="font-semibold leading-4">
                    ENVÍOS <br />
                    GRATIS
                  </span>

                  <span className="text-xs flex items-center gap-1">
                    <i class="ri-truck-line text-sm"></i>
                    DESDE 19.990$
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container max-w-7xl  px-4 mx-auto mb-20">
        <div className="flex flex-col items-center bg-white sm:items-[unset] sm:flex-row">
          <div className="px-6 py-4 self-center lg:self-stretch">
            <h4>Paga cómodo y seguro</h4>
            <span className="text-sm text-slate-500">con Merca Pago</span>
          </div>

          <div className="flex-grow border-x-2 flex justify-between px-6 py-4">
            <div className="hidden md:flex gap-4 items-center">
              <div className="border-2 rounded-full px-2 py-1">
                <i class="ri-bank-card-fill text-sky-600"></i>
              </div>

              <div>
                <h4>Hasta 12 cuotas sin interés</h4>
                <span className="text-sky-600 text-sm cursor-pointer">Ver más</span>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="border-2 rounded-full px-2 py-1">
                <i class="ri-bank-card-2-fill text-sky-600"></i>
              </div>

              <div>
                <h4>Tarjeta de débito</h4>
                <span className="text-sky-600 text-sm cursor-pointer">Ver más</span>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 self-center lg:self-stretch">
            <h4>Más medios de pago</h4>
            <span className="text-sm text-sky-600 cursor-pointer">Ver Todos</span>
          </div>
        </div>
      </div>

      <Ofertas />

      <Beneficios />

      <Tiendas />

      <div className="bg-white">
        <div className="container max-w-7xl  px-4 mx-auto mb-10">
          
          <div className="grid lg:grid-cols-3 gap-y-24 py-12 sm:grid-cols-2 lg:gap-0">
            <div className="flex flex-col gap-6 px-8 border-r text-center">
              <div className="text-5xl">
                <i class="ri-bank-card-line ri-xl"></i>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl">Elige cómo pagar</h3>
                <p>Con Merca Pago, paga con tus tarjetas de débito y crédito o hazlo con efectivo en puntos de pago. Paga siempre desde Merca Libre para que podamos asegurar tu dinero.</p>
                <span className="text-blue-500 cursor-pointer">Cómo pagar con Merca Pago</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 px-8 border-r text-center">
              <div className="text-5xl">
                <i class="ri-truck-line ri-xl"></i>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl">Envío gratis desde $ 19.990</h3>
                <p>Con solo estar registrado en Merca Libre, tienes envíos gratis en millones de productos seleccionados.</p>
                <span className="text-blue-500 cursor-pointer">Conoce más sobre este beneficio</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 px-8 border-r text-center">
              <div className="text-5xl">
                <i class="ri-shield-check-line ri-xl"></i>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl">Compra protegida</h3>
                <p>Completa tus compras en Mercado Libre para que estén siempre protegidas. Si el producto no es lo que esperabas o no llega, te devolvemos tu dinero.</p>
                <span className="text-blue-500 cursor-pointer">Cómo te protegemos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
