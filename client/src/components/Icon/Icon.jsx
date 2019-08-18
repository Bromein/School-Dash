import React from "react";

import Icons from "../../assets/icons/sprite.svg";
import { IconWrap } from "./Icon.styles";

const Icon = props => (
  <IconWrap>
    <svg className={`icon icon-${props.name}`}>
      <use href={`${Icons}#${props.name}`} />
    </svg>
  </IconWrap>
);

export default Icon;
