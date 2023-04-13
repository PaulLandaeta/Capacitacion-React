import React from "react";

export const Card = (props) => {
  const { name, plate, registerDate } = props.pepito;
  return (
    <div className="bg-white rounded-lg p-5 mt-2 mr-10 ml-5 mb-5">
      <p className="font-bold uppercase text-gray-600">
        {" "}
        Conductor: <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold uppercase text-gray-600">
        {" "}
        Placa: <span className="font-normal">{plate}</span>
      </p>
      <p className="font-bold uppercase text-gray-600">
        {" "}
        Fecha: <span className="font-normal normal-case">{registerDate}</span>
      </p>
    </div>
  );
};
