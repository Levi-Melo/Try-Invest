import styles from "./styles.module.scss";
import circleAdd from "../../assets/add.svg";
import { useMenu } from "../../context/contex";

export default function Menu() {
  const { addButton } = useMenu();

  return (
    <div className={styles.navMenu}>
      <button type="button" onClick={() => addButton()}>
        <img className={styles.addButton} src={circleAdd} alt="adicionar" />
      </button>
    </div>
  );
}
