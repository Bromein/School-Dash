import styled from "styled-components";

export const DashBoard = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: minmax(20rem, 1fr) 7fr;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
