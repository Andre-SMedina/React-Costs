import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contato</Link>
      <Link to={"/company"}>Compania</Link>
      <Link to={"/newproject"}>Novo Projeto</Link>
    </div>
  );
}

export default Navbar;
