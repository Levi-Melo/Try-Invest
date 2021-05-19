import styles from "./styles.module.scss";
import circleAdd from "../../assets/add.svg";
interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export default function Nav(props: HeaderProps) {
  return (
    <div className={styles.navMenu}>
      <button type="button" onClick={props.onOpenNewTransactionModal}>
        <img className={styles.addButton} src={circleAdd} alt="adicionar" />
      </button>
    </div>
  );
}
