import styled from "styled-components";

export const BreadCrumb = styled.div`
  grid-column: 1 / -1;
  font-size: 1.2rem;
  align-self: center;
  width: 10rem;
  padding: 0.1rem;
  text-transform: uppercase;
  border-radius: 4px;
  background-color: ${props => props.theme.cardColor};
  color: ${props => props.theme.accentGreen};
  text-align: center;
  border: 1px solid ${props => props.theme.accentGreen};
`;
