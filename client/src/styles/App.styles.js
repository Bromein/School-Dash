import styled from "styled-components";

export const GridWrap = styled.div`
  display: grid;
  grid-gap: 0 1rem;
  grid-template-columns: minmax(20rem, 1fr) 7fr;
  grid-template-rows: 10rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
