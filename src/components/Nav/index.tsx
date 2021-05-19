import { Container } from "./styles";
import circleAdd from "../../assets/add.svg";
interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export default function Nav(props: HeaderProps) {
  return (
    <Container>
      <button type="button" onClick={props.onOpenNewTransactionModal}>
        <img className="addButton" src={circleAdd} alt="adicionar" />
      </button>
    </Container>
  );
}
