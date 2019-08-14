import React from "react";
import { StyledGraphCard } from "../styles/Card.styles";

const GraphCard = ({ ...props }) => {
  return (
    <StyledGraphCard {...props}>
      {props.children}
      <footer>{props.graphFor}</footer>
    </StyledGraphCard>
  );
};
export default GraphCard;
