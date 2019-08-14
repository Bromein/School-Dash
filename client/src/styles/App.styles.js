import styled from "styled-components";

export const GridWrap = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: minmax(20rem, 1fr) repeat(7, 1fr);
  grid-template-rows: 10vh;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
