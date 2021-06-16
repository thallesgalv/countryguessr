import React from "react";

import MainContainer from "./components/MainContainer";
import { GlobalProvider } from "./contexts/GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <MainContainer />
    </GlobalProvider>
  );
};

export default App;
