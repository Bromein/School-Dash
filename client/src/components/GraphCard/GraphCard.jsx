import React from "react";
import { StyledGraphCard } from "../Card/Card.styles";

const GraphCard = ({ ...props }) => {
  return (
    <StyledGraphCard {...props}>
      {props.children}
      <footer>{props.graphFor}</footer>
    </StyledGraphCard>
  );
};
export default GraphCard;
