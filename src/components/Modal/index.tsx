import styles from "./styles.module.scss";
// import { useMenu } from "../../context/contex";

export default function Modal() {
  //   const { addButton } = useMenu();

  return (
    <div id="myModal" className={styles.modalStyle}>
      <label>id</label>
      <input type="text"></input>
      <label>Nome</label>
      <input type="text"></input>
      <label>Descrição</label>
      <input type="text"></input>
      <button type="button">Confirmar</button>

      {/* <button type="button" onClick={() => addButton()}>
        Confirmar
      </button> */}
    </div>
  );
}
