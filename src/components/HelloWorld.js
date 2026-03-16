function HelloWorld(props) {
  const name = props.name || "<desconhecido>";
  return (
    <div>
      <h1>Olá como vai, {name}!</h1>
    </div>
  );
}

export default HelloWorld;