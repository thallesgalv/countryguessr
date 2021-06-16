import React, {useContext} from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Test = () => {
  const {loading, countryPicked} = useContext(GlobalContext)

  return (
    <>
      <h1>Country Guessr</h1>
      <p>{loading && "Carregando"}</p>
      <p>{countryPicked && countryPicked.name}</p>
    </>
  );
};

export default Test;
