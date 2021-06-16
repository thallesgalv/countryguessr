import styled from "styled-components";

export const ContainerPoints = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  > li {
    font: 600 2.25rem/2.5rem "Nunito";
    text-decoration: underline;
    > span {
      text-decoration: none;
    }
  }
`;
