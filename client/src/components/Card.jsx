import React from "react";
import {
  StyledCard,
  CardTitle,
  CardContent,
  CardFooter,
} from "../styles/Card.styles";

const Card = ({ ...props }) => {
  return (
    <StyledCard {...props}>
      <CardTitle>{props.header}</CardTitle>
      <CardContent>{props.children}</CardContent>
      <CardFooter>{props.footer}</CardFooter>
    </StyledCard>
  );
};
export default Card;
