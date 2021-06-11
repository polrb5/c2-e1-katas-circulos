import { Circulo } from "./Components/Circulo";

function App() {
  const circulos = [1, 2, 3, 4, 5];
  return (
    <>
      <ul>
        {circulos.map((circulo) => (
          <Circulo key={circulo} />
        ))}
      </ul>
    </>
  );
}
export default App;
