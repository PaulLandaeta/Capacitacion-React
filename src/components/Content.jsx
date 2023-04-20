import React, { useState } from "react";
import { Formulario } from "./Formulario";
import { Auto } from "./ListaDeAutos";
export const Content = () => {
  const [listaAutos, setListaAutos] = useState([]);

  return (
    <div className="mt-10 md:flex">
      <Formulario 
        listaAutos={listaAutos} 
        setListaAutos={setListaAutos} 
      />
      <Auto listaAutos={listaAutos} />
    </div>
  );
};
