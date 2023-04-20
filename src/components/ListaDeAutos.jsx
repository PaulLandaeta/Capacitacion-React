import React from "react";
import { Card } from "./Card";
export const Auto = (props) => {
 
  const { listaAutos } = props;
  console.log('props', listaAutos);
  const drivers = [
    {
      name: "Paul Landaeta",
      plate: "5719HHP",
      registerDate: "13/04/2023 7:45 am",
    },
    {
      name: "Hugo Apaza",
      plate: "666GGG",
      registerDate: "12/04/2023 10:45 am",
    },
  ];
  return (
    <div className="md:w-1/2 overflow-y-scroll">
      <h3 className="font-bold text-3xl text-center"> Lista de Autos </h3>
      <p className="text-lg text-center mt-4">Autos Registrado</p>
      {listaAutos.map((driver) => (
        <Card pepito={driver} key={driver.plate} />
      ))}
    </div>
  );
};
