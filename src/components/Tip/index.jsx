import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { StyledTip } from "./styles";

const Tip = () => {
  const { countryPicked } = useContext(GlobalContext);

  return (
    <StyledTip>
      <span>Tip 1 of 3: 50 pts</span>
      <img src={countryPicked && countryPicked.flag} alt='' />
      <p>Flag</p>
    </StyledTip>
  );
};

export default Tip;
