import React, {useContext} from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container, ContainerTips } from "./styles";
import Input from "../Input";
import Points from "../Points";
import Footer from "../Footer";
import Tip from "../Tip";

const MainContainer = () => {
  const { loading, countryPicked } = useContext(GlobalContext);

  return (
    <>
      <Container>
        <Points />
        <h1>Countryguessr🤔🌎</h1>
        <Input />
        <p>{loading && "Carregando"}</p>
        <p>{countryPicked && countryPicked.name}</p>
        <ContainerTips>
          <Tip />
          <Tip />
          <Tip />
        </ContainerTips>
        <Footer />
      </Container>
    </>
  );
};

export default MainContainer;
