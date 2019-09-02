import styled from "styled-components";

export const StyledBudgetPage = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  justify-content: center;
`;

export const CurrentBudget = styled.div`
  justify-self: center;
  grid-column: 1 / -1;
  font-size: 4rem;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  margin: 1rem;
  background-color: ${props => props.theme.cardColor};
  position: relative;

  h1 {
    position: absolute;
    top: 0;
    width: 100%;
    text-align: center;
    align-self: center;
    background: ${props => props.theme.gray};
  }
`;
