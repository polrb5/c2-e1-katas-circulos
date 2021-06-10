import { useState } from "react";
import { Circulo } from "./Components/Circulo";

function App() {
  const [estado, setEstado] = useState(true);
  const circulos = [1, 2, 3, 4, 5];
  const cambiarEstado = () => {
    setEstado(!estado);
  };
  return (
    <>
      <ul>
        {circulos.map((circulo) => (
          <Circulo
            cambiarEstado={cambiarEstado}
            key={circulo}
            estado={estado}
          />
        ))}
      </ul>
    </>
  );
}
export default App;
