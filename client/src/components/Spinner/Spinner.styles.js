import styled from "styled-components";

export const AnimatedSpinner = styled.div`
  /* border: 0.2rem solid ${props => props.theme.gray}; */
  border-top: 0.1rem solid ${props => props.theme.accentRed};
  border-radius: 50%;

  width: ${props => (props.big ? "20rem" : "3rem")};
  height: ${props => (props.big ? "20rem" : "3rem")};
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
