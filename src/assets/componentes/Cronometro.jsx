import { useState, useRef } from "react";

export default function Cronometro() {
  const [valor, setValor] = useState(0);
  const intervalo = useRef(null);

  function iniciar() {
    if(intervalo.current != null) return;
    intervalo.current = setInterval(() => {
      setValor((valoranterior) => valoranterior + 1);
    }, 1000); 
  }

  function detener() {
    clearInterval(intervalo.current);
    intervalo.current = null;
  }

  function reiniciar() {
    clearInterval(intervalo.current);
    intervalo.current = null;
    setValor(0);
  }

  return (
    <>
      <h1>Cronometro</h1>
      <h2>{valor}</h2>
      <button onClick={iniciar}> Iniciar </button>
      <button onClick={detener}> Detener </button>
      <button onClick={reiniciar}> Reiniciar </button>
    </>
  );
} 
