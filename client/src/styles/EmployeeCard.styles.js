import styled from "styled-components";

export const StyledEmployeeCard = styled.div`
  display: flex;
  border-radius: 4px;
  /* padding: 3rem; */
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  background-color: ${props => props.theme.cardColor};
  text-transform: capitalize;
  position: relative;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  & > * {
    padding: 1rem;
  }
  svg {
    height: 2rem;
    width: 2rem;
    fill: ${props => props.theme.lightGray};
  }

  &:nth-child(even) {
    background-color: ${props => props.theme.lightGray};
  }

  h1 {
    padding: 1rem;
    font-size: 2rem;
    color: ${props => props.theme.accentRed};
  }

  h2 {
    font-size: 1.75rem;
    color: ${props => props.theme.accentGreen};
    background-color: ${props => props.theme.lightGray};
    border-radius: 4px;
    text-align: center;
  }

  h3 {
    font-size: 1.5rem;
    color: ${props => props.theme.accentBlue};
  }

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const ActionBar = styled.div`
  background-color: ${props => props.theme.lightestGray};
  border-radius: 4px 4px 0 0;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  .edit {
    transition: all 0.2s ease-in;

    &:hover {
      fill: ${props => props.theme.accentOrange};
    }
  }

  .delete {
    transition: all 0.2s ease-in;

    &:hover {
      fill: ${props => props.theme.accentRed};
    }
  }
`;
