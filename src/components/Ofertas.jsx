// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

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

import o1 from "../assets/products/ofertas/o-1.jpg";
import o2 from "../assets/products/ofertas/o-2.jpg";
import o3 from "../assets/products/ofertas/o-3.jpg";
import o4 from "../assets/products/ofertas/o-4.jpg";
import o5 from "../assets/products/ofertas/o-5.jpg";

import banner2 from "../assets/banners/banner-2.jpg";
import banner3 from "../assets/banners/banner-3.jpg";
import banner4 from "../assets/banners/banner-4.jpg";

const Ofertas = () => {
  const fav = (e) => {
    const icon = e.target.classList.contains("ri-heart-line")
    const target = e.target

    if (icon) {
      target.classList.replace("ri-heart-line", "ri-heart-fill")
    } else {
      target.classList.replace("ri-heart-fill", "ri-heart-line")
    }
  }


  return (
    <div className='container max-w-7xl px-4 mx-auto mb-20'>
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-2xl font-medium">Ofertas</h2>
        <span className="text-md text-sky-600 cursor-pointer">
          Ver todas
        </span>
      </div>
      
      <div>
        <Swiper
          spaceBetween={30}
          breakpoints={{
            500: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={p1a} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                  <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$19.992</span>
                  <span className=' text-[#00a650] text-base self-end'> 20% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>12x $ 1.666 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={p2a} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$77.990</span>
                  <span className=' text-[#00a650] text-base self-end'> 44% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>6x $ 12.998 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>  
          </SwiperSlide>
          
          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={p3a} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                  <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$22.850</span>
                  <span className=' text-[#00a650] text-base self-end'> 8% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>6x $ 3.808 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={p4a} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$55.990</span>
                  <span className=' text-[#00a650] text-base self-end'> 44% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>6x $ 9.331 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={p1b} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$24.217</span>
                  <span className=' text-[#00a650] text-base self-end'> 8% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>12x $ 2.018 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={p2b} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$144.990</span>
                  <span className=' text-[#00a650] text-base self-end'> 44% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>6x $ 24.165 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={p3b} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$162.990</span>
                  <span className=' text-[#00a650] text-base self-end'> 29% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>6x $ 27.165 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={p4b} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$32.990</span>
                  <span className=' text-[#00a650] text-base self-end'> 5% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>6x $ 5.498 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={p1c} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$17.990</span>
                  <span className=' text-[#00a650] text-base self-end'> 55% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>6x $ 2.998 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={p2c} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$279.990</span>
                  <span className=' text-[#00a650] text-base self-end'> 44% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>6x $ 46.665 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={p3c} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$29.990</span>
                  <span className=' text-[#00a650] text-base self-end'> 45% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>6x $ 4.998 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={p4c} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$293.080</span>
                  <span className=' text-[#00a650] text-base self-end'> 21% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>12x $ 24.423 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={o1} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$116.990</span>
                  <span className=' text-[#00a650] text-base self-end'> 38% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>6x $ 19.498 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={o2} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$114.990</span>
                  <span className=' text-[#00a650] text-base self-end'> 23% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>12x $ 9.582 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={o3} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$39.990</span>
                  <span className=' text-[#00a650] text-base self-end'> 52% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>6x $ 6.665 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={o4} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$23.990</span>
                  <span className=' text-[#00a650] text-base self-end'> 36% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>6x $ 3.998 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={o5} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$46.990</span>
                  <span className=' text-[#00a650] text-base self-end'> 41% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>6x $ 7.831 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={banner2} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$296.990</span>
                  <span className=' text-[#00a650] text-base self-end'> 25% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>6x $ 49.498</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={banner4} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$239.990</span>
                  <span className=' text-[#00a650] text-base self-end'> 17% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>12x $ 19.990 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='p-4 hover:shadow-2xl trasnsition-shadow duration-300 bg-white group cursor-pointer'>
              <div className='mb-2 relative'>
                <img className='w-full h-[220px] object-cover' src={banner3} alt="" />
                <div className='absolute top-0 right-0 text-sky-600 text-2xl opacity-0 group-hover:opacity-100'>
                <i onClick={fav} className={`ri-heart-line bg-white px-1 pt-1 pb-[2px] bg-opacity-90 rounded-full`}></i>
                </div>
              </div>

              <div className='border-t flex flex-col gap-1 pt-2'>
                <div className='text-3xl flex gap-2'>
                  <span>$123.990</span>
                  <span className=' text-[#00a650] text-base self-end'> 26% OFF</span>
                </div>

                <div className='text-[#00a650] flex flex-col'>
                  <span>6x $ 20.665 sin interés</span>
                  <span className='font-semibold'>Envío gratis</span>
                </div>

                <p className=' line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rerum?</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Ofertas

