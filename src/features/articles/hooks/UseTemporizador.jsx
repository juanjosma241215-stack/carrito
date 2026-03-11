import { useEffect, useState } from 'react';

export const UseTemporizador=  () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);

    return () => clearInterval(intervalo); // Limpieza al desmontar
  }, []); // [] significa: ejecútate solo una vez al cargar

  return <h1>Tiempo: {segundos}s</h1>;
}