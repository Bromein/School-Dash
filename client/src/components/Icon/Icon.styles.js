import styled from "styled-components";

export const IconWrap = styled.div`
  display: flex;
  justify-self: center;
  grid-column: 1 / -1;
  /* width: 100%; */
  .icon {
    height: 4rem;
    width: 4rem;
    fill: ${props => props.theme.accentOrange};
    transition: fill 0.2s ease;
    &:hover {
      fill: ${props => props.theme.accentRed};
      animation: shake 0.5s linear infinite;
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(-20deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(20deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
