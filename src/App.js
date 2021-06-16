import React from "react";
import Test from "./components/Test";
import { GlobalProvider } from "./contexts/GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <Test />
    </GlobalProvider>
  );
};

export default App;
