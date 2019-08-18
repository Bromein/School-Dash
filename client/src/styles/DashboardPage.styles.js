import styled from "styled-components";

export const StyledDashPage = styled.div`
  padding: 0 2rem;
  grid-column: ${props => (props.sidebar ? "2 / -1" : "1 / -1")};
  display: grid;
  grid-template-rows: 3rem 1fr;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  overflow-y: scroll;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(15%, 25%));
  }
  @media (max-width: 800px) {
    grid-column: 1 / -1;
  }
`;
