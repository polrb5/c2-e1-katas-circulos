import { useState } from "react";

export const Circulo = () => {
  const [estado, setEstado] = useState(true);
  const cambiarEstado = () => {
    setEstado(!estado);
  };
  return (
    <li
      className="circle"
      onClick={cambiarEstado}
      style={{ backgroundColor: estado ? "gray" : "orange" }}
    ></li>
  );
};
