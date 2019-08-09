import styled from "styled-components";

export const StyledBudgetPage = styled.div`
  grid-column: 2 / -1;
  display: grid;
  grid-template-columns: repeat(4, minmax(20rem, auto));
  grid-gap: 2rem;

  @media (max-width: 800px) {
    grid-column: 1 / -1;
  }
`;
