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


const Tiendas = () => {
  return (
    <div className="container max-w-7xl px-4 mx-auto mb-36">
      
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-2xl font-medium">Las mejores tiendas te esperan</h2>
        <span className="text-md text-sky-600 cursor-pointer">
          Ver tiendas
        </span>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="bg-white hover:shadow-xl transition-shadow duration-[350ms] rounded-md overflow-hidden border border-gray-300 cursor-pointer">
          <div className="h-[95px]">
            <img className="w-full h-full object-cover" src={banner1} alt="" />
          </div>

          <div className="flex flex-col items-center -mt-10 gap-4">
            <img
              className="max-w-[80px] h-[80px] object-cover rounded-lg"
              src={logo1}
              alt=""
            />
            <h3 className="text-lg font-medium">Watch</h3>
            <div className="w-4/5 grid grid-cols-3 gap-2">
              <img className="h-[70px] w-full object-cover" src={p1a} alt="" />
              <img className="h-[70px] w-full object-cover" src={p1b} alt="" />
              <img className="h-[70px] w-full object-cover" src={p1c} alt="" />
            </div>
            <span className="text-sm mb-6 text-slate-400 cursor-pointer">Ver tienda</span>
          </div>
        </div>

        <div className="bg-white hover:shadow-xl transition-shadow duration-[350ms] rounded-md overflow-hidden border border-gray-300 cursor-pointer">
          <div className="h-[95px]">
            <img className="w-full h-full object-cover" src={banner2} alt="" />
          </div>

          <div className="flex flex-col items-center -mt-10 gap-4">
            <img
              className="max-w-[80px] h-[80px] object-cover rounded-lg"
              src={logo2}
              alt=""
            />
            <h3 className="text-lg font-medium">Shoe</h3>
            <div className="w-4/5 grid grid-cols-3 gap-2">
              <img className="h-[70px] w-full object-cover" src={p2a} alt="" />
              <img className="h-[70px] w-full object-cover" src={p2b} alt="" />
              <img className="h-[70px] w-full object-cover" src={p2c} alt="" />
            </div>
            <span className="text-sm mb-6 text-slate-400 cursor-pointer">Ver tienda</span>
          </div>
        </div>

        <div className="bg-white hover:shadow-xl transition-shadow duration-[350ms] rounded-md overflow-hidden border border-gray-300 cursor-pointer">
          <div className="h-[95px]">
            <img className="w-full h-full object-cover" src={banner3} alt="" />
          </div>

          <div className="flex flex-col items-center -mt-10 gap-4">
            <img
              className="max-w-[80px] h-[80px] object-cover rounded-lg"
              src={logo3}
              alt=""
            />
            <h3 className="text-lg font-medium">adiddaz</h3>
            <div className="w-4/5 grid grid-cols-3 gap-2">
              <img className="h-[70px] w-full object-cover" src={p3a} alt="" />
              <img className="h-[70px] w-full object-cover" src={p3b} alt="" />
              <img className="h-[70px] w-full object-cover" src={p3c} alt="" />
            </div>
            <span className="text-sm mb-6 text-slate-400 cursor-pointer">Ver tienda</span>
          </div>
        </div>

        <div className="bg-white hover:shadow-xl transition-shadow duration-[350ms] rounded-md overflow-hidden border border-gray-300 cursor-pointer">
          <div className="h-[95px]">
            <img className="w-full h-full object-cover" src={banner4} alt="" />
          </div>

          <div className="flex flex-col items-center -mt-10 gap-4">
            <img
              className="max-w-[80px] h-[80px] object-cover rounded-lg"
              src={logo4}
              alt=""
            />
            <h3 className="text-lg font-medium">PhoneX</h3>
            <div className="w-4/5 grid grid-cols-3 gap-2">
              <img className="h-[70px] w-full object-cover" src={p4a} alt="" />
              <img className="h-[70px] w-full object-cover" src={p4b} alt="" />
              <img className="h-[70px] w-full object-cover" src={p4c} alt="" />
            </div>
            <span className="text-sm mb-6 text-slate-400 cursor-pointer">Ver tienda</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiendas;
