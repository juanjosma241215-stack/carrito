import { useState } from 'react';

export const UseContador = ()  =>{
  const [cuenta, setCuenta] = useState(0);

  return (
    <button onClick={() => setCuenta(cuenta + 1)}>
      Me clickeaste {cuenta} veces
    </button>
  );
}