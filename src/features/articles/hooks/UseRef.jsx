import { useRef } from 'react';

export const UseRef=() =>{
  const inputRef = useRef();

  const manejarClick = () => {
    inputRef.current.focus(); // Pone el cursor en el input
    inputRef.current.style.backgroundColor = "yellow";
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={manejarClick}>Enfocar Input</button>
    </>
  );
} 