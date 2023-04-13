import React from "react";
import { Formulario } from "./Formulario";
import { Auto } from "./ListaDeAutos";
export const Content = () => {
  return (
    <div className="mt-10 md:flex">
      <Formulario />
      <Auto />
    </div>
  );
};
