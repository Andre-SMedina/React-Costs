import Item from "./Item";

function List() {
  return (
    <>
      <h1>Testando fragment</h1>
      <h2>Minha Lista</h2>
      <ul>
        {/* Números devem ser passados entre colchetes */}
        <Item marca="Ferrari" ano_lancamento={1985} />
        <Item marca="Fiat" ano_lancamento={1964} />
      </ul>
    </>
  );
}

export default List;
