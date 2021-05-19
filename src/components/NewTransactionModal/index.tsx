import { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";

import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    setId("");
    setCategory("");
    setName("");

    onRequestClose();
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} className="closeButton" alt="fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Nova transação</h2>
        <input
          placeholder="id"
          type="text"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <input
          placeholder="Nome:"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="Descrição"
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
