import React, { useState } from "react";

export const Formulario = (props) => {
  const { listaAutos, setListaAutos } = props;
  const [placa, setPlaca ] = useState('');
  const [name, setName] = useState('');
  const [registerDate, setRegisterDate ] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();  
    
    // verificar que haya llenado todo el formulario
    if([name, placa, registerDate].includes('')) {
      setError(true);
      return;
    }
    setError(false);

    console.log(placa);
    setListaAutos([...listaAutos, {
      name,
      registerDate,
      plate: placa
    } ]);
  };

  return (
    <div className="md:w-1/2">
      <h3 className="font-bold text-3xl text-center"> Control de Parqueo </h3>
      <p className="text-lg text-center mt-4">Control Vehicular</p>
      <form
        className="bg-white p-10 rounded-lg shadow-lg ml-10 mr-5 mt-2"
        onSubmit={handleSubmit}
      >
        {error && <p className="bg-red-500 text-white text-center p-3 mb-5">Todos los campos son Obligatorios</p>}
        <label>Número de Placa</label>
        <input
          placeholder="EJ: 5719HHP"
          className="border-2 w-full mt-2 p-1 rounded-md mb-2"
          value={placa}
          onChange={(e) => setPlaca(e.target.value) }
        />
        <label>Nombre del Conductor</label>
        <input
          placeholder="EJ: Paul Landaeta"
          className="border-2 w-full mt-2 p-1 rounded-md mb-2"
          value={name}
          onChange={(e) => setName(e.target.value) }
        />
        <label>Fecha Ingreso</label>
        <input
          type="date"
          placeholder="EJ: 13-04-2023"
          className="border-2 w-full mt-2 p-1 rounded-md"
          value={registerDate}
          onChange={(e) => setRegisterDate(e.target.value) }
        />

        <input
          type="submit"
          className="bg-indigo-500
          cursor-pointer 
          uppercase 
          p-3 
          text-white 
          rounded-lg mt-5 hover:bg-indigo-700"
          value="PARQUEAR"
        />
      </form>
    </div>
  );
};
