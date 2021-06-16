import React from "react";
import { ContainerInput } from "./styles";

const Input = () => {
  return (
    <>
      <ContainerInput>
        <input type='text' placeholder="Guess the country!" />
        <button>Guess</button>

      </ContainerInput>

    </>
  );
};

export default Input;
