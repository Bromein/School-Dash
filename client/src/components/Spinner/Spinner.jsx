import React from "react";
import { AnimatedSpinner, SpinWrap } from "./Spinner.styles";

const Spinner = ({ ...props }) => {
  return <AnimatedSpinner {...props} />;
};
export default Spinner;
