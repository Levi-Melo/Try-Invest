import styled from "styled-components";
// import { darken, transparentize } from "polished";

export const Container = styled.form`
  width: 1rem;
  height: 100vh;

  padding: 3rem 2rem;

  background: var(--section);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;
    border: none;
  }

  .addButton {
    width: 2rem;
  }
`;
