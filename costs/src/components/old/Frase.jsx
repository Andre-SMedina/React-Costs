import styles from "./Frase.module.css";

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <h1>Testando CSS</h1>
      <p className={styles.fraseContent}>Este é um componentte com uma frase</p>
    </div>
  );
}

export default Frase;
