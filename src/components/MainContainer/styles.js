import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  > h1 {
    font: 600 6rem/1 "Nunito";
    margin: 0 auto;
  }
`;

export const ContainerTips = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`