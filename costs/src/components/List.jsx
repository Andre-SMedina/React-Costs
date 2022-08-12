import Item from "./Item";

function List() {
  return (
    <>
      <h1>Testando fragment</h1>
      <h2>Minha Lista</h2>
      <ul>
        <Item marca="Ferrari" />
        <Item marca="Fiat" />
      </ul>
    </>
  );
}

export default List;
