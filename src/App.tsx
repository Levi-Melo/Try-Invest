import Modal from "./components/Modal";
import Nav from "./components/Nav";
import styles from "./styles/app.module.scss";
import "./styles/global.scss";
import { useMenu } from "./context/contex";

function App() {
  const { isAdding } = useMenu();

  return (
    <div className={styles.wrapper}>
      <Nav />
      {isAdding ? <Modal /> : ""}
    </div>
  );
}

export default App;
