import React from "react";
import b1 from "../assets/b-1.jpg";
import b2 from "../assets/b-2.jpg";
import b3 from "../assets/b-3.jpg";
import logo1 from "../assets/logos/logo-1.jpg";
import logo2 from "../assets/logos/logo-2.jpg";
import logo3 from "../assets/logos/logo-3.jpg";

const Beneficios = () => {
  return (
    <div className='container max-w-7xl px-4 mx-auto mb-20'>
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-2xl font-medium">Beneficios de Merca Puntos</h2>
        <span className="text-md text-sky-600 cursor-pointer">
          Ver todos los beneficios
        </span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative">
          <img src={b1} alt="imagen" />
          <div className="absolute bottom-0 left-0 right-0 px-4 text-white bg-black bg-opacity-40 min-h-[92px] flex items-center">
            <div className="flex items-center py-2 gap-4">
              <img
                className="max-w-[50px] h-[50px] object-cover rounded-lg"
                src={logo1}
                alt="log1"
              />
              <div>
                <h2 className="font-semibold text-xl">Hasta 30% OFF</h2>
                <span>Video+ y Streaming+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src={b2} alt="imagen" />
          <div className="absolute bottom-0 left-0 right-0 px-4 text-white bg-black bg-opacity-40 min-h-[92px] flex items-center">
            <div className="flex items-center py-2 gap-4">
              <img
                className="max-w-[50px] h-[50px] object-cover rounded-lg"
                src={logo2}
                alt="log1"
              />
              <div>
                <span className="text-xs">7 DÍAS GRATIS</span>
                <h2 className="font-semibold text-xl">Hasta 30% OFF</h2>
                <span>OBH Max</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src={b3} alt="imagen" />
          <div className="absolute bottom-0 left-0 right-0 px-4 text-white bg-black bg-opacity-40 min-h-[92px] flex items-center">
            <div className="flex items-center py-2 gap-4">
              <img
                className="max-w-[50px] h-[50px] object-cover rounded-lg"
                src={logo3}
                alt="log1"
              />
              <div>
                <h2 className="font-semibold text-xl">Hasta 30% OFF</h2>
                <span>Streaming+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
