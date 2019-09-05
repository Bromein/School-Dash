import styled from "styled-components";

export const StyledBudgetForm = styled.div`
  grid-column: 1 / -1;
  justify-self: center;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
  }

  input {
    margin: 1rem;
    height: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    color: ${props => props.theme.accentRed};
    &:focus {
      height: 3rem;
      font-size: 2rem;
    }
  }

  button {
    align-self: center;
    padding: 1rem;
    border-radius: 4px;
    border: none;
    outline: none;
    background: ${props => props.theme.lightGray};
    color: #fff;

    &:hover {
      background: ${props => props.theme.accentRed};
    }
  }
`;
