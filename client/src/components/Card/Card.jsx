import React from "react";
import { StyledCard, CardTitle, CardContent, CardFooter } from "./Card.styles";

const Card = ({ ...props }) => {
  return (
    <StyledCard {...props}>
      <CardTitle {...props}>{props.header}</CardTitle>
      <CardContent {...props}>{props.children}</CardContent>
      <CardFooter>{props.footer}</CardFooter>
    </StyledCard>
  );
};
export default Card;
