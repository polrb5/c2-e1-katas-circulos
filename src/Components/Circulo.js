export const Circulo = (props) => {
  const { cambiarEstado, estado } = props;
  return (
    <li
      className="circle"
      onClick={cambiarEstado}
      style={{ backgroundColor: estado ? "orange" : "gray" }}
    ></li>
  );
};
