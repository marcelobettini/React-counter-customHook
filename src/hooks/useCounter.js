import { useState } from "react";
// initialValue me permitiría determinar si mi contador suma y resta de a 1,5, mil
export const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  //esta función retorna un objeto con:
  return {
    increment,
    decrement,
    counter,
  };
  //no expongo setCounter sino la implementación, de forma controlada
};

// Ahora tenemos la lógica encapsulada en esta función (useCounter) y
//vamos a limpiar nuestro Counter.js para que no tenga funciones ni información
//del estado
