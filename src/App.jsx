import { useState } from "react"
import 'remixicon/fonts/remixicon.css'
import MainPage from "./MainPage"
function App() {
  const paises = [
    {
      name: "Argentina",
      className: "bg-white p-2 flex justify-between items-center border-b border-dotted hover:bg-slate-200 text-blue-700 cursor-pointer transition-all duration-[400ms] lg:p-0 lg:px-2 lg:border-none lg:rounded-md lg:bg-opacity-40 lg:hover:bg-white lg:hover:bg-opacity-80",
      country: "🇦🇷",
    },
    {
      name: "Bolivia",
      className: "bg-white p-2 flex justify-between items-center border-b border-dotted hover:bg-slate-200 text-blue-700 cursor-pointer transition-all duration-[400ms] lg:p-0 lg:px-2 lg:border-none lg:rounded-md lg:bg-opacity-40 lg:hover:bg-white lg:hover:bg-opacity-80",
      country: "🇧🇴",
    },
    {
      name: "Chile",
      className: "bg-white p-2 flex justify-between items-center border-b border-dotted hover:bg-slate-200 text-blue-700 cursor-pointer transition-all duration-[400ms] lg:p-0 lg:px-2 lg:border-none lg:rounded-md lg:bg-opacity-40 lg:hover:bg-white lg:hover:bg-opacity-80",
      country: "🇨🇱",
    },
    {
      name: "Colombia",
      className: "bg-white p-2 flex justify-between items-center border-b border-dotted hover:bg-slate-200 text-blue-700 cursor-pointer transition-all duration-[400ms] lg:p-0 lg:px-2 lg:border-none lg:rounded-md lg:bg-opacity-40 lg:hover:bg-white lg:hover:bg-opacity-80",
      country: "🇨🇴",
    },
    {
      name: "Costa Rica",
      className: "bg-white p-2 flex justify-between items-center border-b border-dotted hover:bg-slate-200 text-blue-700 cursor-pointer transition-all duration-[400ms] lg:p-0 lg:px-2 lg:border-none lg:rounded-md lg:bg-opacity-40 lg:hover:bg-white lg:hover:bg-opacity-80",
      country: "🇨🇷",
    },
    {
      name: "Dominicana",
      className: "bg-white p-2 flex justify-between items-center border-b border-dotted hover:bg-slate-200 text-blue-700 cursor-pointer transition-all duration-[400ms] lg:p-0 lg:px-2 lg:border-none lg:rounded-md lg:bg-opacity-40 lg:hover:bg-white lg:hover:bg-opacity-80",
      country: "🇩🇴",
    },
    {
      name: "Ecuador",
      className: "bg-white p-2 flex justify-between items-center border-b border-dotted hover:bg-slate-200 text-blue-700 cursor-pointer transition-all duration-[400ms] lg:p-0 lg:px-2 lg:border-none lg:rounded-md lg:bg-opacity-40 lg:hover:bg-white lg:hover:bg-opacity-80",
      country: "🇪🇨",
    },
    {
      name: "Guatemala",
      className: "bg-white p-2 flex justify-between items-center border-b border-dotted hover:bg-slate-200 text-blue-700 cursor-pointer transition-all duration-[400ms] lg:p-0 lg:px-2 lg:border-none lg:rounded-md lg:bg-opacity-40 lg:hover:bg-white lg:hover:bg-opacity-80",
      country: "🇬🇹",
    },
    {
      name: "Honduras",
      className: "bg-white p-2 flex justify-between items-center border-b border-dotted hover:bg-slate-200 text-blue-700 cursor-pointer transition-all duration-[400ms] lg:p-0 lg:px-2 lg:border-none lg:rounded-md lg:bg-opacity-40 lg:hover:bg-white lg:hover:bg-opacity-80",
      country: "🇭🇳",
    },
    {
      name: "México",
      className: "bg-white p-2 flex justify-between items-center border-b border-dotted hover:bg-slate-200 text-blue-700 cursor-pointer transition-all duration-[400ms] lg:p-0 lg:px-2 lg:border-none lg:rounded-md lg:bg-opacity-40 lg:hover:bg-white lg:hover:bg-opacity-80",
      country: "🇲🇽",
    },
    {
      name: "Nicaragua",
      className: "bg-white p-2 flex justify-between items-center border-b border-dotted hover:bg-slate-200 text-blue-700 cursor-pointer transition-all duration-[400ms] lg:p-0 lg:px-2 lg:border-none lg:rounded-md lg:bg-opacity-40 lg:hover:bg-white lg:hover:bg-opacity-80",
      country: "🇳🇮",
    },
    {
      name: "Panamá",
      className: "bg-white p-2 flex justify-between items-center border-b border-dotted hover:bg-slate-200 text-blue-700 cursor-pointer transition-all duration-[400ms] lg:p-0 lg:px-2 lg:border-none lg:rounded-md lg:bg-opacity-40 lg:hover:bg-white lg:hover:bg-opacity-80",
      country: "🇵🇦",
    },
    {
      name: "Perú",
      className: "bg-white p-2 flex justify-between items-center border-b border-dotted hover:bg-slate-200 text-blue-700 cursor-pointer transition-all duration-[400ms] lg:p-0 lg:px-2 lg:border-none lg:rounded-md lg:bg-opacity-40 lg:hover:bg-white lg:hover:bg-opacity-80",
      country: "🇵🇪",
    },
    {
      name: "El Salvador",
      className: "bg-white p-2 flex justify-between items-center border-b border-dotted hover:bg-slate-200 text-blue-700 cursor-pointer transition-all duration-[400ms] lg:p-0 lg:px-2 lg:border-none lg:rounded-md lg:bg-opacity-40 lg:hover:bg-white lg:hover:bg-opacity-80",
      country: "🇸🇻",
    },
    {
      name: "Uruguay",
      className: "bg-white p-2 flex justify-between items-center border-b border-dotted hover:bg-slate-200 text-blue-700 cursor-pointer transition-all duration-[400ms] lg:p-0 lg:px-2 lg:border-none lg:rounded-md lg:bg-opacity-40 lg:hover:bg-white lg:hover:bg-opacity-80",
      country: "🇺🇾",
    },
    {
      name: "Venezuela",
      className: "bg-white p-2 flex justify-between items-center border-b border-dotted hover:bg-slate-200 text-blue-700 cursor-pointer transition-all duration-[400ms] lg:p-0 lg:px-2 lg:border-none lg:rounded-md lg:bg-opacity-40 lg:hover:bg-white lg:hover:bg-opacity-80",
      country: "🇻🇪",
    },
  ]

  const [pais, setPais] = useState("")

  console.log(pais)
  return !pais ? (
    <div className=" bg-[hsl(55,100%,54%)] min-h-screen flex flex-col font ">
      <div className="flex flex-col gap-4 py-8 lg:flex-row lg:justify-center lg:items-center lg:h-screen lg:gap-16">
        <div className="flex flex-col items-center">
          <div className="relative text-xl lg:text-5xl">
            <i className="ri-shake-hands-fill ri-3x text-white"></i>
            <i className="ri-shake-hands-line ri-3x absolute top-0 left-0 right-0 bottom-0"></i>
          </div>
          <h1 className="text-center text-4xl font-bold lg:text-[66px] lg:leading-[60px]">Merca <br /> Libre</h1>
        </div>

        <div className="w-full px-4 lg:w-auto">
          <ul className="border rounded-md flex flex-col lg:gap-1 lg:border-none lg:items-start">
            {paises.map(pais=> {
              const {country, className, name} = pais
              return (
                <li key={country} className={className} onClick={()=> setPais(`${name}`)}>
                  <div >
                    <span className=" me-4">{country}</span>
                    <span>{name}</span>
                  </div>

                  <i className="ri-arrow-right-s-line lg:hidden"></i>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  ): <MainPage country={pais} />
}

export default App
