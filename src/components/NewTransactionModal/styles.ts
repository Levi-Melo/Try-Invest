import styled from "styled-components";
// import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border: none;
    border-bottom: 1px solid var(--green);
    background: transparent;

    color: white;
    font-weight: 400;
    font-size: 1rem;

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 3.5rem;
    background: transparent;
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
    img {
      height: 100%;
    }
  }
`;
