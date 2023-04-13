import React from 'react'

export const Formulario = () => {
  return (
    <div className='md:w-1/2'>
      <h3 className="font-bold text-3xl text-center"> Control de Parqueo </h3>
      <p className="text-lg text-center mt-4">
        Control Vehicular
      </p>
      <form className="bg-white p-10 rounded-lg shadow-lg ml-10 mr-5 mt-2">
        <label>
          Número de Placa
        </label>
        <input 
          placeholder='EJ: 5719HHP'
          className="border-2 w-full mt-2 p-1 rounded-md"
        />
      </form>
    </div>
  )
}
