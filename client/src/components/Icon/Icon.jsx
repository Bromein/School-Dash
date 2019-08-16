import React from "react";

import Icons from "../../assets/icons/sprite.svg";

const Icon = props => (
  <svg className={`icon icon-${props.name}`}>
    <use href={`${Icons}#${props.name}`} />
  </svg>
);

export default Icon;
