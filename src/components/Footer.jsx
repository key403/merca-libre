import React from 'react'

const Footer = () => {
  return (
    <div className='container max-w-7xl px-4 mx-auto pb-8 relative'>
      
      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4'>
        <ul className='flex flex-col gap-4 text-sm'>
          <h3 className=''>Acerca de</h3>
          <div className='flex flex-col text-slate-400'>
            <a href='#'>Merca Libre</a>
            <a href='#'>Investor relations</a>
            <a href='#'>Tendencias</a>
            <a href='#'>Sustentabilidad</a>
          </div>
        </ul>   
        
        <ul className='flex flex-col gap-4 text-sm'>
          <h3 className=''>Otros sitios</h3>
          <div className='flex flex-col text-slate-400'>
            <a href='#'>Developers</a>
            <a href='#'>Merca Pago</a>
            <a href='#'>Merca Shops</a>
            <a href='#'>Envíos</a>
            <a href='#'>Merca Ads</a>
          </div>
        </ul>

        <ul className='flex flex-col gap-4 text-sm'>
          <h3 className=''>Ayuda</h3>
          <div className='flex flex-col text-slate-400'>
            <a href='#'>Comprar</a>
            <a href='#'>Vender</a>
            <a href='#'>Resolución de problemas</a>
            <a href='#'>Centro de seguridad</a>
          </div>
        </ul>

        <ul className='flex flex-col gap-4 text-sm'>
          <h3 className=''>Redes sociales</h3>
          <div className='flex flex-col text-slate-400'>
            <a href='#'>Twitter</a>
            <a href='#'>Facebook</a>
            <a href='#'>Youtube</a>
          </div>
        </ul>

        <ul className='flex flex-col gap-4 text-sm'>
          <h3 className=''>Mi cuenta</h3>
          <div className='flex flex-col text-slate-400'>
            <a href='#'>Ingresa</a>
            <a href='#'>Vender</a>
          </div>
        </ul>

        <ul className='flex flex-col gap-4 text-sm'>
          <h3 className=''>Mercado Puntos</h3>
          <div className='flex flex-col text-slate-400'>
            <a href='#'>Nivel 6</a>
            <a href='#'>Video+</a>
            <a href='#'>Streaming+</a>
            <a href='#'>OBH MAX</a>
          </div>
        </ul>
        
      </div>
    </div>
  )
}

export default Footer