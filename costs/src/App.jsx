import "./App.css";
import Frase from "./components/Frase";
import List from "./components/List";
import Pessoa from "./components/Pessoa";

function App() {
  return (
    <div className="App">
      <h1>Olá React</h1>
      <Frase />
      <Pessoa
        nome="Pedro"
        idade="30"
        profissao="Programador"
        foto="https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/250px-094gengar_tr5k.png?w=250&ssl=1"
      />
      <List />
    </div>
  );
}

export default App;
