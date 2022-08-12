import { useState } from "react";

function Form() {
  // André, é o valor padrão atribuido para name. setName é usado para atribuir um valor para name
  const [name, setName] = useState("André");
  const [password, setPassword] = useState();

  function cadastrarUsuario(e) {
    // evita recarregar a página depois do submit
    e.preventDefault();
    console.log(`O usuário: ${name} foi cadastrado com a senha: ${password}`);
    console.log("Cadastrou o usuário!");
  }

  return (
    <div>
      <h1>Meu Cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite a sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
