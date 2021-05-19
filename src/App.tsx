import { NewTransactionModal } from "./components/NewTransactionModal";
import Nav from "./components/Nav";
import "./styles/global.ts";
import { useState } from "react";
import React from "react";
import { GlobalStyle } from "./styles/global";

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <div>
      <Nav onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </div>
  );
}

export default App;
