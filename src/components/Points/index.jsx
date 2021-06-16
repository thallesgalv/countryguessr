import React, { useState } from "react";
import { ContainerPoints } from "./styles";

const Points = () => {
  const [points, setPoints] = useState(0);
  const [record, setRecord] = useState(100);

  return (
    <ContainerPoints>
      <li>Points: <span>{points}</span></li>
      <li>Record: <span>{record}</span></li>
    </ContainerPoints>
  );
};

export default Points;
