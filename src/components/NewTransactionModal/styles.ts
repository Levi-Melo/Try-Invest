import styled from "styled-components";
// import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 3.5rem;
    border: none;
    border-bottom: 1px solid var(--yellow);
    background: transparent;

    color: white;
    font-weight: 400;
    font-size: 1rem;

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 60%;
    height: 3rem;
    background: var(--yellow);
    color: var(--section);
    border-radius: 3.5rem;
    border: 0;
    font-size: 1rem;
    margin: 0 auto;
    margin-top: 1.5rem;
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
    img {
      margin-right: 0.5rem;
      height: 70%;
    }
    span {
      margin-left: 1rem;
    }
  }
`;
