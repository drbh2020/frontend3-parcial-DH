//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ name, color }) {
  return (
    <div>
      <h2>Hola {name}, tu color favorito es:</h2>
      <div>{color}</div>
    </div>
  );
}

export default Card;
