import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div>
      <ul className={styles.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Empresa">Empresa</Link>
        </li>
        <li>
          <Link to="/Contato">Contato</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
