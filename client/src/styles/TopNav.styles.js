import styled from "styled-components";

export const StyledTopNav = styled.nav`
  grid-column: 2 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;

  .pancake {
    height: 3rem;
    width: 3rem;
    fill: #333;
    border: 2px solid #333;
    border-radius: 4px;
  }

  div svg {
    width: 2rem;
    height: 2rem;
    fill: gray;
    margin: 0 1.5rem;
  }

  @media (max-width: 800px) {
    grid-column: 1;
  }
`;
