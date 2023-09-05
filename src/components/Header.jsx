import { useRef } from "react";

const Header = () => {
  const menu = useRef(null)
  const showMenu = ()=> {
    menu.current.classList.toggle("translate-x-full")
  }


  return (
    <header className="bg-[hsl(55,100%,66%)]">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center gap-8 mb-3">
          <div className="flex gap-8 items-center flex-grow">
            <a href="/" className="relative text-xl flex items-center">
              <i className="ri-shake-hands-fill ri-3x text-white"></i>
              <i className="ri-shake-hands-line ri-3x absolute top-1/2 left-0 -translate-y-1/2"></i>
              <h2 className=" text-lg leading-5 font-semibold">
                Merca <br /> Libre
              </h2>
            </a>

            <form
              className="bg-white flex-grow max-w-[600px] hidden md:flex"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="outline-none flex-grow px-4"
                type="text"
                placeholder="Buscar productos, marcas y más..."
              />
              <button className="bg-white py-2 px-4 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-2/3 before:w-[1px] before:bg-black before:hidden md:before:block ">
                <i class="ri-search-line "></i>
              </button>
            </form>
          </div>

          <div className="flex gap-8 items-center">
            <ul className="gap-4 hidden lg:flex">
              <li className="cursor-pointer">Crea tu cuenta</li>
              <li className="cursor-pointer">Ingresa</li>
              <li className="cursor-pointer">Mis compras</li>
            </ul>

            <div className="flex gap-2">
              <i className="ri-shopping-cart-line text-xl cursor-pointer"></i>
              <i onClick={showMenu} className="ri-align-justify text-xl md:hidden"></i>
            </div>
          </div>
        </div>

        <form
          className="bg-white flex rounded-sm overflow-hidden md:hidden"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="outline-none flex-grow px-4"
            type="text"
            placeholder="Buscar productos, marcas y más..."
          />
          <button className="bg-white py-2 px-4 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-2/3 before:w-[1px] before:bg-black md:before:hidden  ">
            <i class="ri-search-line "></i>
          </button>
        </form>

        <div className="hidden md:flex items-center justify-between text-neutral-500 text-sm">
          <div className="flex items-center gap-20">
            <div className="flex gap-1">
              <i class="ri-map-pin-line text-2xl -mt-[4px]"></i>
              <div className=" leading-[10px] text-xs">
                Ingresa tu <br />
                <span className="text-black text-sm">ubicación </span>
              </div>
            </div>

            <ul className="flex items-center gap-4">
              <li className="flex items-center cursor-pointer">
                <span>
                  Categorias
                </span>
                <i class="ri-arrow-down-s-line mt-1 hidden md:block"></i>
              </li>
              <li className="cursor-pointer">Ofertas</li>
              <li className="cursor-pointer">Historial</li>
              <li className="flex flex-col items-center cursor-pointer">
                <span className="md:block hidden bg-blue-500 rounded-full text-white px-1 text-xs leading-3 -mt-3">nuevo</span>
                <span>Supermercado</span>
              </li>
              <li className="cursor-pointer">Moda</li>
              <li className="cursor-pointer">Vender</li>
              <li className="cursor-pointer">Ayuda</li>
            </ul>
          </div>
          {/* <div className="flex items-center gap-6">
            <ul className="flex items-center gap-6">
              <li>Crear tu cuenta</li>
              <li>Ingresa</li>
              <li>mis compras</li>
            </ul>

            <i class="ri-shopping-cart-line text-xl"></i>
          </div> */}
        </div>
        
        <div ref={menu} className="fixed right-0 top-0 w-3/4 translate-x-full z-10 transition-all duration-500">
          <ul className="bg-slate-100 z-10 px-6">
            <li onClick={showMenu} className="border-b py-2 cursor-pointer">Categorias</li>
            <li onClick={showMenu} className="border-b py-2 cursor-pointer">Ofertas</li>
            <li onClick={showMenu} className="border-b py-2 cursor-pointer">Historial</li>
            <li onClick={showMenu} className="border-b py-2 cursor-pointer">Supermercado</li>
            <li onClick={showMenu} className="border-b py-2 cursor-pointer">Moda</li>
            <li onClick={showMenu} className="border-b py-2 cursor-pointer">Vender</li>
            <li onClick={showMenu} className="border-b py-2 cursor-pointer">Ayuda</li>
          </ul>
          <i onClick={showMenu} className="ri-close-fill z-10 absolute text-3xl top-1 right-4 "></i>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
