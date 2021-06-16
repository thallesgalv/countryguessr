import styled from "styled-components";

export const ContainerInput = styled.section`
  border: 3px solid #fff;
  border-radius: 1rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  > button {
    height: 100%;
    background-color: #fff;
    font: 200 2.25rem/2.5rem "Nunito";
    color: #8a2160;
    border: none;
    border-radius: 0 1rem 1rem 0;
    outline: none;
    padding: 0.25rem;
    transform: translateX(3px);
    cursor: pointer;
  }

  > input {
    height: 100%;
    color: #fff;
    border: 0;
    background-color: transparent;
    border: transparent;
    font: 200 3rem/1 "Nunito";
    font-style: italic;
    padding-left: 2rem;

    &:focus {
      outline: none;
    }

    &::selection {
      background-color: #16c60c;
    }

    &::placeholder {
      color: #fff;
      font: 200 3rem/1 "Nunito";
      font-style: italic;
    }
  }
`;
