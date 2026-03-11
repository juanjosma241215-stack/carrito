import { useCallback, useState } from 'react';

export const UseCallback =() => {
  const [conteo, setConteo] = useState(0);

  // La función se mantiene igual entre renders
  const incrementar = useCallback(() => {
    setConteo((c) => c + 1);
  }, []);

  return <button onClick={incrementar}>Sumar {conteo}</button>;
}