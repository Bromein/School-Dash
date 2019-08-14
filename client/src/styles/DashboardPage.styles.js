import styled from "styled-components";

export const StyledDashPage = styled.div`
  padding: 0 2rem;
  grid-column: ${props => (props.sidebar ? "2 / -1" : "1 / -1")};
  display: grid;
  grid-template-rows: 3rem;
  grid-auto-rows: repeat(2, minmax(25rem, auto));
  grid-template-columns: repeat(auto-fit, minmax(20rem, auto));
  overflow-y: scroll;

  @media (max-width: 800px) {
    grid-column: 1 / -1;
  }
`;
